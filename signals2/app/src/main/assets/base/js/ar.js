var World = {
	loaded: false,

	init: function initFn() {
		this.createOverlays();
	},

	createOverlays: function createOverlaysFn() {

		// inicializamos el Tracker con el Target collection
		this.tracker = new AR.Tracker("assets/tracker.wtc", {
			onLoaded: this.worldLoaded
		});

		// creamos un overlay
		var imagen_ar = new AR.ImageResource("assets/ar_m.jpg");
		var overlay = new AR.ImageDrawable(imagen_ar, 0.2, {
			offsetX: -0.15,
			offsetY: 0
		});

 // indicamos el nombre del Target en el Tracker
		var paso_peatones = new AR.Trackable2DObject(this.tracker, "paso_peatones", {
			drawables: {
				cam: overlay
			}
		});
	}
};

// principal
World.init();