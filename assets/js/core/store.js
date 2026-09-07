/* Application state: filters, search, theme, expanded cards, comparison tray. */
(function (AD) {
  'use strict';
  var U = AD.util;

  var LS_THEME = 'appointed-time:theme';

  var listeners = [];
  var state = {
    view: 'introduction',
    query: '',
    filters: { book: [], testament: [], theme: [], framework: [], certainty: [], source: [] },
    open: {},
    compare: ['preterism', 'futurism', 'amillennialism'],
    focusEvent: null,
    stageOnly: null,
    mapNode: null
  };

  function emit() { listeners.forEach(function (fn) { fn(state); }); }

  var store = {
    state: state,
    subscribe: function (fn) { listeners.push(fn); },
    set: function (patch) { Object.keys(patch).forEach(function (k) { state[k] = patch[k]; }); emit(); },
    setQuiet: function (patch) { Object.keys(patch).forEach(function (k) { state[k] = patch[k]; }); },

    toggleFilter: function (group, value) {
      var arr = state.filters[group];
      var i = arr.indexOf(value);
      if (i >= 0) arr.splice(i, 1); else arr.push(value);
      emit();
    },
    clearFilters: function () {
      Object.keys(state.filters).forEach(function (k) { state.filters[k] = []; });
      state.query = '';
      emit();
    },
    activeFilterCount: function () {
      var n = 0;
      Object.keys(state.filters).forEach(function (k) { n += state.filters[k].length; });
      return n + (state.query ? 1 : 0);
    },

    toggleCompare: function (id) {
      var i = state.compare.indexOf(id);
      if (i >= 0) state.compare.splice(i, 1);
      else if (state.compare.length < 3) state.compare.push(id);
      else { state.compare.shift(); state.compare.push(id); }
      emit();
    },

    /* --- derived ---------------------------------------------------- */
    matchesEvent: function (e) {
      var f = state.filters;
      if (f.source.length && f.source.indexOf(e.source) < 0) return false;
      if (f.certainty.length && f.certainty.indexOf(e.certainty) < 0) return false;
      if (f.theme.length && !f.theme.some(function (t) { return (e.themes || []).indexOf(t) >= 0; })) return false;
      if (f.framework.length && !f.framework.some(function (fr) {
        return (e.interpretations || []).some(function (i) { return i.framework === fr; });
      })) return false;
      if (f.book.length && !f.book.some(function (b) {
        return (e.refs || []).some(function (r) { return r.book === b; });
      })) return false;
      if (f.testament.length && !f.testament.some(function (t) {
        return (e.refs || []).some(function (r) { return AD.data.testamentOf(r.book) === t; });
      })) return false;
      if (state.query) {
        var q = U.fold(state.query);
        if (U.fold(store.eventText(e)).indexOf(q) < 0) return false;
      }
      return true;
    },

    eventText: function (e) {
      if (!e._text) {
        var parts = [e.title, e.summary, e.context, (e.symbols || []).join(' ')];
        (e.refs || []).forEach(function (r) { parts.push(r.ref, r.book, r.note || ''); });
        (e.interpretations || []).forEach(function (i) { parts.push(i.text, i.framework); });
        (e.enoch || []).forEach(function (n) { parts.push(n.ref, n.text); });
        if (e.quote) parts.push(e.quote.text, e.quote.ref);
        e._text = parts.join(' · ');
      }
      return e._text;
    },

    filteredEvents: function () { return AD.data.events.filter(store.matchesEvent); },

    /* counts for a given filter option, holding the other groups fixed */
    optionCount: function (group, value) {
      var saved = state.filters[group];
      state.filters[group] = [value];
      var n = AD.data.events.filter(store.matchesEvent).length;
      state.filters[group] = saved;
      return n;
    },

    /* --- theme ------------------------------------------------------- */
    theme: (function () {
      try { return localStorage.getItem(LS_THEME) || 'system'; } catch (err) { return 'system'; }
    })(),
    applyTheme: function (mode) {
      store.theme = mode;
      var root = document.documentElement;
      if (mode === 'system') root.removeAttribute('data-theme');
      else root.setAttribute('data-theme', mode);
      try { localStorage.setItem(LS_THEME, mode); } catch (err) { /* private mode */ }
      emit();
    },
    cycleTheme: function () {
      var order = ['system', 'light', 'dark'];
      store.applyTheme(order[(order.indexOf(store.theme) + 1) % 3]);
    },
    isDark: function () {
      if (store.theme === 'dark') return true;
      if (store.theme === 'light') return false;
      return window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
    }
  };

  AD.store = store;
})(window.AD);
