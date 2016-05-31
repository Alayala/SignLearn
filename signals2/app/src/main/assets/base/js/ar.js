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
<<<<<<< HEAD
        //################################PASO DE PEATONES##########################################
		// crear overlay
		var peatones_1 = new AR.ImageResource("assets/peatones_opc1F.jpg");
		var overlay_1 = new AR.ImageDrawable(peatones_1, 0.2, {
			offsetX: -0.40,
			offsetY: 0,
			onClick : function(){
				alert("INCORRECTO, la respuesta correcta es la opcion 3");

			}

		});

		var peatones_2 = new AR.ImageResource("assets/peatones_opc2F.jpg");
		var overlay_2 = new AR.ImageDrawable(peatones_2, 0.2, {
			offsetX: 0,
			offsetY: -0.40,
			onClick : function(){
				alert("INCORRECTO, la respuesta correcta es la opcion 3");

			}

		});

		var peatones_3 = new AR.ImageResource("assets/peatones_opc3V.jpg");
		var overlay_3 = new AR.ImageDrawable(peatones_3, 0.2, {
			offsetX: +0.40,
			offsetY: 0,
			onClick : function(){
				alert("¡RESPUESTA CORRECTA!");

			}

		});
		//################################ STOP ##########################################
        // crear overlay
        var stop_1 = new AR.ImageResource("assets/stop_opc1V.jpg");
        var overlay_4 = new AR.ImageDrawable(stop_1, 0.2, {
            offsetX: -0.40,
            offsetY: 0,
            onClick : function(){
                alert("¡RESPUESTA CORRECTA!");

            }

        });

        var stop_2 = new AR.ImageResource("assets/stop_opc2F.jpg");
        var overlay_5 = new AR.ImageDrawable(stop_2, 0.2, {
            offsetX: 0,
            offsetY: -0.40,
            onClick : function(){
                alert("INCORRECTO, la respuesta correcta es la opcion 1");
            }

        });

        var stop_3 = new AR.ImageResource("assets/stop_opc3F.jpg");
        var overlay_6 = new AR.ImageDrawable(stop_3, 0.2, {
            offsetX: +0.40,
            offsetY: 0,
            onClick : function(){
                alert("INCORRECTO, la respuesta correcta es la opcion 1");

            }

        });

        //################################ STOP ##########################################
        // crear overlay
        var rotonda_1 = new AR.ImageResource("assets/rotonda_opc1F.jpg");
        var overlay_7 = new AR.ImageDrawable(rotonda_1, 0.2, {
            offsetX: -0.40,
            offsetY: 0,
            onClick : function(){
                alert("INCORRECTO, la respuesta correcta es la opcion 2");

            }

        });

        var rotonda_2 = new AR.ImageResource("assets/rotonda_opc2V.jpg");
        var overlay_8 = new AR.ImageDrawable(rotonda_2, 0.2, {
            offsetX: 0,
            offsetY: -0.40,
            onClick : function(){
                alert("¡RESPUESTA CORRECTA!");
            }

        });

        var rotonda_3 = new AR.ImageResource("assets/rotonda_opc3F.jpg");
        var overlay_9 = new AR.ImageDrawable(rotonda_3, 0.2, {
            offsetX: +0.40,
            offsetY: 0,
            onClick : function(){
                alert("INCORRECTO, la respuesta correcta es la opcion 2");

            }

        });


        //############################### TRACKABLES ###############################################

		var paso_peatones = new AR.Trackable2DObject(this.tracker, "paso_peatones", {
			drawables: {
				cam: [overlay_1,overlay_2,overlay_3]
			}
		});

		var stop = new AR.Trackable2DObject(this.tracker, "stop", {
            drawables: {
                cam: [overlay_4,overlay_5,overlay_6]
            }
        });

        var rotonda = new AR.Trackable2DObject(this.tracker, "rotonda", {
            drawables: {
                cam: [overlay_7,overlay_8,overlay_9]
            }
        });
=======

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
>>>>>>> 6b70bc777c6bfc1fd761363da08b27de1e1a558c
	}
};

// principal
World.init();