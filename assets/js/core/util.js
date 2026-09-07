/* Core namespace + DOM helpers. Classic script so the site runs from file://. */
(function (w) {
  'use strict';
  var AD = w.AD = w.AD || {};
  AD.data = AD.data || {};
  AD.views = AD.views || {};
  AD.components = AD.components || {};

  function el(tag, props, children) {
    var node = document.createElement(tag);
    props = props || {};
    Object.keys(props).forEach(function (k) {
      var v = props[k];
      if (v === null || v === undefined || v === false) return;
      if (k === 'class') node.className = v;
      else if (k === 'text') node.textContent = v;
      else if (k === 'html') node.innerHTML = v;
      else if (k === 'style') node.setAttribute('style', v);
      else if (k.indexOf('on') === 0 && typeof v === 'function') node.addEventListener(k.slice(2).toLowerCase(), v);
      else if (v === true) node.setAttribute(k, '');
      else node.setAttribute(k, v);
    });
    append(node, children);
    return node;
  }

  function append(node, children) {
    if (children === null || children === undefined || children === false) return;
    if (Array.isArray(children)) { children.forEach(function (c) { append(node, c); }); return; }
    node.appendChild(typeof children === 'object' ? children : document.createTextNode(String(children)));
  }

  function svgEl(tag, props, children) {
    var node = document.createElementNS('http://www.w3.org/2000/svg', tag);
    props = props || {};
    Object.keys(props).forEach(function (k) {
      var v = props[k];
      if (v === null || v === undefined || v === false) return;
      if (k.indexOf('on') === 0 && typeof v === 'function') node.addEventListener(k.slice(2).toLowerCase(), v);
      else if (k === 'text') node.textContent = v;
      else node.setAttribute(k, v);
    });
    if (children) (Array.isArray(children) ? children : [children]).forEach(function (c) {
      if (c) node.appendChild(typeof c === 'object' ? c : document.createTextNode(String(c)));
    });
    return node;
  }

  function clear(node) { while (node.firstChild) node.removeChild(node.firstChild); return node; }

  function slug(s) {
    return String(s).toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '');
  }

  /* naive diacritic-insensitive fold for search */
  function fold(s) {
    return String(s).toLowerCase()
      .replace(/[áàâä]/g, 'a').replace(/[éèêë]/g, 'e').replace(/[íìîï]/g, 'i')
      .replace(/[óòôö]/g, 'o').replace(/[úùûü]/g, 'u').replace(/[ç]/g, 'c')
      .replace(/[’‘]/g, "'").replace(/[–—]/g, '-');
  }

  function debounce(fn, ms) {
    var t; return function () {
      var args = arguments, self = this;
      clearTimeout(t); t = setTimeout(function () { fn.apply(self, args); }, ms);
    };
  }

  function reducedMotion() {
    return w.matchMedia && w.matchMedia('(prefers-reduced-motion: reduce)').matches;
  }

  function pluralize(n, one, many) { return n === 1 ? one : (many || one + 's'); }

  AD.util = {
    el: el, svg: svgEl, clear: clear, slug: slug, fold: fold,
    debounce: debounce, reducedMotion: reducedMotion, pluralize: pluralize
  };
})(window);
