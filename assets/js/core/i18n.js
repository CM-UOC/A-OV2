/* Runtime de idioma. Detecta, recuerda, formatea referencias y comillas
   según la convención nativa de cada lengua. */
(function (AD) {
  'use strict';
  var KEY = 'appointed-time:lang';
  var listeners = [];

  function detect() {
    try {
      var saved = localStorage.getItem(KEY);
      if (saved && AD.data.localeStyle[saved]) return saved;
    } catch (e) { /* modo privado */ }
    var nav = (navigator.languages && navigator.languages[0]) || navigator.language || 'en';
    var two = nav.slice(0, 2).toLowerCase();
    return AD.data.localeStyle[two] ? two : 'en';
  }

  var current = detect();

  /* Traduce una referencia inglesa ("Genesis 1:1–5", "1 Enoch 6:1–6") a la
     convención del idioma activo: nombre del libro y separador propio. */
  function ref(s, lang) {
    lang = lang || current;
    if (lang === 'en') return s;
    var names = AD.data.bookNames, style = AD.data.localeStyle[lang];
    var keys = Object.keys(names).sort(function (a, b) { return b.length - a.length; });
    var out = s;
    for (var i = 0; i < keys.length; i++) {
      var k = keys[i];
      if (out.indexOf(k) === 0 || out.indexOf('· ' + k) >= 0 || out.indexOf(' ' + k) === 0) {
        var loc = names[k][lang];
        if (loc) { out = out.replace(k, loc); break; }
      }
    }
    if (style.vs !== ':') {
      /* separador capítulo,versículo — sólo el que sigue a un dígito */
      out = out.replace(/(\d):(\d)/g, '$1' + style.vs + '$2');
    }
    return out;
  }

  function quote(s, lang) {
    lang = lang || current;
    var st = AD.data.localeStyle[lang] || AD.data.localeStyle.en;
    return st.open + st.thin + s + st.thin + st.close;
  }

  /* Elige el campo del idioma activo de un objeto {es,en,de,fr};
     si falta, cae al inglés y lo señala. */
  function pick(obj, lang) {
    if (!obj) return { text: '', fallback: false };
    lang = lang || current;
    if (typeof obj === 'string') return { text: obj, fallback: lang !== 'en' };
    if (obj[lang]) return { text: obj[lang], fallback: false };
    return { text: obj.en || obj.es || '', fallback: true };
  }

  AD.i18n = {
    get: function () { return current; },
    style: function () { return AD.data.localeStyle[current]; },
    localeName: function (id) {
      var l = AD.data.locales.filter(function (x) { return x.id === (id || current); })[0];
      return l ? l.name : id;
    },
    set: function (lang) {
      if (!AD.data.localeStyle[lang] || lang === current) return;
      current = lang;
      try { localStorage.setItem(KEY, lang); } catch (e) { /* modo privado */ }
      document.documentElement.setAttribute('lang', lang);
      listeners.forEach(function (fn) { fn(lang); });
    },
    onChange: function (fn) { listeners.push(fn); },
    /* cadena de interfaz */
    t: function (key, lang) {
      var e = AD.data.ui[key];
      if (!e) return key;
      return e[lang || current] || e.en || key;
    },
    ref: ref,
    quote: quote,
    pick: pick,
    /* devuelve el texto y si viene de reserva, para poder avisar al lector */
    field: function (obj) { return pick(obj, current); },
    text: function (obj) { return pick(obj, current).text; }
  };

  document.documentElement.setAttribute('lang', current);
})(window.AD);
