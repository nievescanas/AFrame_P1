// Component: Modification of the object position by event
// Input elements: id(obj), event, move (vec3(x,y,z))
// Ej: move_object="id:rock_1; event: click; move: 1 0 0 ">

AFRAME.registerComponent('move_object', {
  // Is an object that defines and describes the property
  schema: {
     move: {type: 'vec3', default: {x:0, y:0, z:0}},  // Motion vector
     id: {type: 'string'},                            // Object name
     parse: AFRAME.utils.styleParser.parse
  },
  init: function () {
    const data = this.data;
    const el = this.el;
    const new_position = new THREE.Vector3();

    el.addEventListener(data.event, evt => {
        // Calculation of the new position
        new_position.x = el.getAttribute('position').x + data.move.x
        new_position.y = el.getAttribute('position').y + data.move.y
        new_position.z = el.getAttribute('position').z + data.move.z

        // Modification of object position
        document.querySelector("#" + data.id).setAttribute('position', new_position);

        // Position control by terminal
        console.log(el.getAttribute('position'));
      });
    }
});
