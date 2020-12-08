// Component: Creation and placement of Christmas balls
// Input elements: event
// Ej: christmas_balls="event: click">

AFRAME.registerComponent('christmas_balls', {
  // Is an object that defines and describes the property
  schema: {
     default: '',
     parse: AFRAME.utils.styleParser.parse 
  },
  init: function () {
    const data = this.data;
    const el = this.el;

    el.addEventListener(data.event, evt => {
        // Create a entity.
        var newballEl = document.createElement('a-sphere');
        newballEl.setAttribute('position', evt.detail.intersection.point);
        newballEl.setAttribute('radius', '0.1');
        newballEl.setAttribute('color', '#DD0000');
        // Append to scene.
        el.sceneEl.appendChild(newballEl);
      });
    }
});
