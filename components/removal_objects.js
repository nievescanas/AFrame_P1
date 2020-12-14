// Component: Removal of objects
// Input elements: id(obj)
// Ej: removal_object="event: click; id:box"

AFRAME.registerComponent('removal_object', {
  // Is an object that defines and describes the property
  schema: {
     id: {type: 'string'},                  // Object name
     parse: AFRAME.utils.styleParser.parse
  },
  init: function () {
    const data = this.data;
    const el = this.el;

    el.addEventListener(data.event, evt => {
      var obj = document.getElementById(data.id);
      if (!obj){
    		alert("The selected item does not exist");
    	} else {
    		padre = obj.parentNode; // Get the parent node of the element
    		padre.removeChild(obj);
    	}
    });
  }
});
