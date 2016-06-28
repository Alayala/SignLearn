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
        //################################PASO DE PEATONES##########################################


		var contador_img=0;


		var peatones_1 = new AR.ImageResource("assets/peatones_opc1F.jpg");
        var overlay_1 = new AR.ImageDrawable(peatones_1, 0.2, {
            offsetX: -0.35,
            offsetY: 0,
            onClick : function(){
                contador_img=1;
            }

        });

		var peatones_2 = new AR.ImageResource("assets/peatones_opc2F.jpg");

		var overlay_2 = new AR.ImageDrawable(peatones_2, 0.2, {
			offsetX: 0,
			offsetY: -0.35,
			onClick : function(){
			    contador_img=2;
			}

		});


		var peatones_3 = new AR.ImageResource("assets/peatones_opc3V.jpg");
        var aux = new AR.ImageResource("assets/ar_m.jpg");

		var overlay_3 = new AR.ImageDrawable(peatones_3, 0.2, {
			offsetX: -0.35,
			offsetY: 0,
			onClick : function(){
			   contador_img=3;
			}
		});






		//################################ STOP ##########################################
        // crear overlay
        var stop_1 = new AR.ImageResource("assets/stop_opc1V.jpg");
        var overlay_4 = new AR.ImageDrawable(stop_1, 0.2, {
            offsetX: -0.35,
            offsetY: 0,
            onClick : function(){
                alert("¡RESPUESTA CORRECTA!");

            }

        });

        var stop_2 = new AR.ImageResource("assets/stop_opc2F.jpg");
        var overlay_5 = new AR.ImageDrawable(stop_2, 0.2, {
            offsetX: 0,
            offsetY: -0.35,
            onClick : function(){
                alert("INCORRECTO, la respuesta correcta es la opcion 1");
            }

        });

        var stop_3 = new AR.ImageResource("assets/stop_opc3F.jpg");
        var overlay_6 = new AR.ImageDrawable(stop_3, 0.2, {
            offsetX: +0.35,
            offsetY: 0,
            onClick : function(){
                alert("INCORRECTO, la respuesta correcta es la opcion 1");

            }

        });

        //################################ STOP ##########################################
        // crear overlay
        var rotonda_1 = new AR.ImageResource("assets/rotonda_opc1F.jpg");
        var overlay_7 = new AR.ImageDrawable(rotonda_1, 0.2, {
            offsetX: -0.35,
            offsetY: 0,
            onClick : function(){
                alert("INCORRECTO, la respuesta correcta es la opcion 2");

            }

        });

        var rotonda_2 = new AR.ImageResource("assets/rotonda_opc2V.jpg");
        var overlay_8 = new AR.ImageDrawable(rotonda_2, 0.2, {
            offsetX: 0,
            offsetY: -0.35,
            onClick : function(){
                alert("¡RESPUESTA CORRECTA!");
            }

        });

        var rotonda_3 = new AR.ImageResource("assets/rotonda_opc3F.jpg");
        var overlay_9 = new AR.ImageDrawable(rotonda_3, 0.2, {
            offsetX: +0.35,
            offsetY: 0,
            onClick : function(){
                alert("INCORRECTO, la respuesta correcta es la opcion 2");

            }

        });

        //PRUEBASSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSs

        var contador=0;
        //verde puro:#24E711
        //azul luminoso:#3B83BD
        //rojo brillante:#FE0000
        //http://www.wikitude.com/developer/developer-forum/-/message_boards/message/690051?p_p_auth=Br6dzsxQ
        //Api diosa: http://www.cs.vu.nl/~eliens/ar/sdk/ARchitectTools/Library%20Reference/ARObject.html
         var htmlUno = new AR.HtmlDrawable({
                			html:"<html><head><meta name='viewport' content='target-densitydpi=device-dpi, width = 320, user-scalable = 0'>"+
                			"</head>"+"<body style='font-size:30px'><div><strong>1 - Primera Opcion</strong></div></body></html>"
                   }, 0.7, {
                			viewportWidth: 520,
                			viewportHeight: 150,
                			backgroundColor: "#3B83BD",
                			offsetX: -0.25,
                			offsetY: 0,
                			horizontalAnchor: AR.CONST.HORIZONTAL_ANCHOR.RIGHT,
                			verticalAnchor: AR.CONST.VERTICAL_ANCHOR.TOP,
                			updateRate: AR.HtmlDrawable.UPDATE_RATE.LOW,
                			allowDocumentLocationChanges: true,
                			onClick : function(){
                			               // alert("cliiiiiic");
                			                this.backgroundColor= "#FE0000";
                                           // this.html ="<html><head><meta name='viewport' content='target-densitydpi=device-dpi, width = 320, user-scalable = 0'>"+
                                           //                      			"</head>"+"<body><div>My second div</div></body></html>"
                                            contador+=1;
                                        }

                		});






        //############################### TRACKABLES ###############################################

		var paso_peatones = new AR.Trackable2DObject(this.tracker, "paso_peatones", {
			drawables: {
				cam: [htmlUno]
			},
			onClick : function(){
			   // this.drawables.removeCamDrawable(0);
                                  alert(contador);
                },
             onExitFieldOfVision : function(){
             	this.drawables.removeCamDrawable(0);
                var htmlUno = new AR.HtmlDrawable({
                                			html:"<html><head><meta name='viewport' content='target-densitydpi=device-dpi, width = 320, user-scalable = 0'>"+
                                			"</head>"+"<body style='font-size:30px'><div><strong>1 - Primera Opcion</strong></div></body></html>"
                                   }, 0.35, {
                                			viewportWidth: 520,
                                			viewportHeight: 150,
                                			backgroundColor: "#3B83BD",
                                			offsetX: -0.3,
                                			offsetY: 0,
                                			horizontalAnchor: AR.CONST.HORIZONTAL_ANCHOR.RIGHT,
                                			verticalAnchor: AR.CONST.VERTICAL_ANCHOR.TOP,
                                			updateRate: AR.HtmlDrawable.UPDATE_RATE.LOW,
                                			allowDocumentLocationChanges: true,
                                			onDocumentLocationChanged: function onDocumentLocationChangedFn(uri) {
                                				AR.context.openInBrowser(uri);
                                			},
                                			onClick : function(){
                                			               // alert("cliiiiiic");
                                			                this.backgroundColor= "#FE0000";
                                                            contador+=1;
                                                        }

                                		});
                this.drawables.addCamDrawable(htmlUno,0);
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

	}
};

// principal
World.init();