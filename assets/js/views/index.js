/* Compact index of every entry — the text-first way through the same material. */
(function (AD) {
  'use strict';
  var el = AD.util.el, C = AD.components, D = AD.data, store = AD.store;

  AD.views.index = function (params) {
    if (params && params.stage) {
      store.state.filters.book = []; store.state.filters.testament = [];
      store.state.filters.theme = []; store.state.filters.framework = [];
      store.state.filters.certainty = []; store.state.filters.source = [];
      store.state.query = '';
      store.state.stageOnly = params.stage;
    }

    var list = el('div', {});
    var bar = C.filterBar(function () { paint(); });

    var stageNote = null;
    if (store.state.stageOnly) {
      var st = D.stageById[store.state.stageOnly];
      stageNote = el('p', { class: 'callout', style: 'margin-bottom: var(--sp-4)' }, [
        'Showing stage ' + st.num + ' — ' + st.name + '. ',
        el('button', {
          class: 'tag-btn', type: 'button',
          onclick: function () { store.state.stageOnly = null; stageNote.remove(); paint(); }
        }, 'Show every stage')
      ]);
    }

    function paint() {
      AD.util.clear(list);
      var events = store.filteredEvents().filter(function (e) {
        return !store.state.stageOnly || e.stage === store.state.stageOnly;
      }).sort(function (a, b) {
        var d = D.stageById[a.stage].index - D.stageById[b.stage].index;
        return d !== 0 ? d : a.order - b.order;
      });

      if (!events.length) {
        list.appendChild(el('div', { class: 'empty' }, [
          el('h3', { text: 'Nothing matches these filters' }),
          el('p', {}, [
            el('button', {
              class: 'icon-btn', type: 'button',
              onclick: function () { store.clearFilters(); store.state.stageOnly = null; bar.sync(); paint(); }
            }, 'Reset')
          ])
        ]));
        return;
      }

      D.stages.forEach(function (stage) {
        var inStage = events.filter(function (e) { return e.stage === stage.id; });
        if (!inStage.length) return;
        list.appendChild(el('section', { style: 'margin-bottom: var(--sp-6)' }, [
          el('p', { class: 'fgroup__label', text: 'Stage ' + stage.num + ' · ' + stage.name }),
          el('div', { class: 'idx-list' }, inStage.map(function (e, i) {
            return el('button', {
              class: 'idx-row', type: 'button',
              style: '--row-color: var(--st-' + stage.id + ')',
              onclick: function () { AD.panel.open('event:' + e.id); }
            }, [
              el('span', { class: 'idx-row__n', text: stage.num + '.' + (i + 1) }),
              el('span', {}, [
                el('span', { class: 'idx-row__t', text: e.title }),
                el('span', { class: 'idx-row__s', text: e.summary })
              ]),
              el('span', { class: 'idx-row__r', text: e.refs[0] ? e.refs[0].ref : '' })
            ]);
          }))
        ]));
      });
    }

    paint();

    return el('div', {}, [
      C.pageHead({
        eyebrow: 'Index',
        title: 'All ' + D.events.length + ' entries',
        lede: 'The same material as the journey, in text form — filterable by book, testament, theme, interpretive tradition, chronological certainty, and source.'
      }),
      stageNote, bar, list
    ]);
  };
})(window.AD);
