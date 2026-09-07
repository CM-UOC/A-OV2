/* Hash routing for a single continuous experience.
   #/                 the journey
   #/s/<scene>        jump to a scene
   #/p/<panel>        open a reading panel
   #/p/entry/<id>     open one entry */
(function (AD) {
  'use strict';

  AD.router = {
    parse: function () {
      var h = (location.hash || '').replace(/^#\/?/, '');
      if (!h) return { kind: 'journey' };
      var parts = h.split('/');
      if (parts[0] === 's' && parts[1]) return { kind: 'scene', id: parts[1] };
      if (parts[0] === 'p' && parts[1] === 'entry' && parts[2]) return { kind: 'panel', key: 'event:' + parts[2] };
      if (parts[0] === 'p' && parts[1]) return { kind: 'panel', key: parts[1] };
      return { kind: 'journey' };
    },
    apply: function () {
      var r = AD.router.parse();
      if (r.kind === 'panel') AD.panel.open(r.key, null, true);
      else {
        if (AD.panel.isOpen()) AD.panel.close(true);
        if (r.kind === 'scene') AD.journey.gotoScene(r.id);
      }
    }
  };
})(window.AD);
