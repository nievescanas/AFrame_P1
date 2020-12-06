
// Registering component in pine_tree.js
// AFRAME.registerComponent (name, definition)
AFRAME.registerComponent('christmas_balls', {
  schema: {   // Is an object that defines and describes the property
     default: '',
     parse: AFRAME.utils.styleParser.parse // Reconocer elementos de data
  },

  init: function () {
    const data = this.data;
    const el = this.el;
    console.log("hola");
    el.addEventListener(data.event, evt => {
        // Create a entity.
        var newballEl = document.createElement('a-sphere');
        console.log("hola");
        newballEl.setAttribute('position', evt.detail.intersection.point);
        newballEl.setAttribute('radius', '0.1');
        newballEl.setAttribute('color', '#DD0000');
        // Append to scene.
        el.sceneEl.appendChild(newballEl);
      });
    }
});
