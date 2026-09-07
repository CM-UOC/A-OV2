(function (AD) {
  'use strict';
  var el = AD.util.el, C = AD.components, D = AD.data;

  AD.views.mirror = function () {
    var pairs = D.mirror.map(function (m) {
      return el('article', { class: 'mirror-pair' }, [
        side('a', 'In the beginning', m.a),
        el('div', { class: 'mirror-hinge' }, [el('span', { text: 'answered by' })]),
        side('b', 'In the end', m.b),
        el('div', { class: 'mirror-motif' }, [
          el('span', { text: 'Motif · ' + m.motif })
        ])
      ]);
    });

    return el('div', {}, [
      C.pageHead({
        eyebrow: 'Beginning & End',
        title: 'Genesis answered',
        lede: 'The Bible’s last two chapters are written as a deliberate response to its first three — the same images, released from the curse. Scholars call the pattern Urzeit gleicht Endzeit: primeval time resembles end time.'
      }),
      C.callout('How to read this page', [
        'The left panel is Genesis and the primeval history. The right panel is the new creation. The pairing is drawn from shared vocabulary and imagery in the texts themselves; where a connection is an interpretation rather than a verbal parallel, the wording says so.',
        'This correspondence is not decoration. It determines what these texts think the end is **for**: not escape from creation, but its restoration.'
      ]),
      el('div', { style: 'margin-top: var(--sp-6)' }, pairs)
    ]);
  };

  function side(which, label, o) {
    return el('div', { class: 'mirror-side mirror-side--' + which }, [
      el('p', { class: 'mirror-side__label', text: label }),
      el('h3', { text: o.title }),
      el('p', { text: o.text }),
      C.refList(o.refs.map(function (r) { return { ref: r, book: r.split(/\s\d/)[0] }; }))
    ]);
  }
})(window.AD);
