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







        //################################ rotonda  ##########################################
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


        //#############################################MARCADOR#######################################
        var contador=0;

        var htmlPuntuacion = new AR.HtmlDrawable({
                                             html:"<html><head><meta name='viewport' content='target-densitydpi=device-dpi, width = 320, user-scalable = 0'>"+
                                             "</head>"+"<body style='font-size:300px'><div><strong style='color: #F1C40F;'>"+contador+"</strong></div></body></html>"
                                    }, 0.15, {
                                             viewportWidth: 150,
                                             viewportHeight: 150,

                                             offsetX: +0.15,
                                             offsetY: 0,
                                             horizontalAnchor: AR.CONST.HORIZONTAL_ANCHOR.RIGHT,
                                             verticalAnchor: AR.CONST.VERTICAL_ANCHOR.TOP,

                                         });

                //verde puro:#24E711
                //azul luminoso:#3B83BD
                //rojo brillante:#FE0000
                //amarillo : #f1c40f
                //http://www.wikitude.com/developer/developer-forum/-/message_boards/message/690051?p_p_auth=Br6dzsxQ
                //Api diosa: http://www.cs.vu.nl/~eliens/ar/sdk/ARchitectTools/Library%20Reference/ARObject.html
        //################################PASO DE PEATONES##########################################

        var p_1=false;
        var p_2=false;
        var p_3=false;


         var htmlUno = new AR.HtmlDrawable({
                			html:"<html><head><meta name='viewport' content='target-densitydpi=device-dpi, width = 320, user-scalable = 0'>"+
                			"</head>"+"<body style='font-size:30px'><div><strong>1 - Advertencias Acústicas Prohibidas. </strong></div></body></html>"
                   }, 0.55, {
                			viewportWidth: 520,
                			viewportHeight: 150,
                			backgroundColor: "#3B83BD",
                			offsetX: -0.2,
                			offsetY: 0,
                			horizontalAnchor: AR.CONST.HORIZONTAL_ANCHOR.RIGHT,
                			verticalAnchor: AR.CONST.VERTICAL_ANCHOR.TOP,
                			updateRate: AR.HtmlDrawable.UPDATE_RATE.LOW,
                			allowDocumentLocationChanges: true,
                			onClick : function(){

                			                if (p_1 ==false) {
                			                    this.backgroundColor= "#FE0000";
                                                contador-=1;
                                                p_1=true;
                                            }


                                        }

                		});
         var htmlDos = new AR.HtmlDrawable({
                         			html:"<html><head><meta name='viewport' content='target-densitydpi=device-dpi, width = 320, user-scalable = 0'>"+
                         			"</head>"+"<body style='font-size:30px'><div><strong>2 - Carril Reservado Para Autobuses. </strong></div></body></html>"
                            }, 0.55, {
                         			viewportWidth: 520,
                         			viewportHeight: 150,
                         			backgroundColor: "#3B83BD",
                         			offsetX: +0.8,
                         			offsetY: 0,
                         			horizontalAnchor: AR.CONST.HORIZONTAL_ANCHOR.RIGHT,
                         			verticalAnchor: AR.CONST.VERTICAL_ANCHOR.TOP,
                         			updateRate: AR.HtmlDrawable.UPDATE_RATE.LOW,
                         			allowDocumentLocationChanges: true,
                         			onClick : function(){

                         			              if (p_2 == false) {
                                                    this.backgroundColor= "#FE0000";
                                                    contador-=1;
                                                    p_2=true;
                                                  }
                                    }

                         		});

         var htmlTres = new AR.HtmlDrawable({
                                 			html:"<html><head><meta name='viewport' content='target-densitydpi=device-dpi, width = 320, user-scalable = 0'>"+
                                 			"</head>"+"<body style='font-size:30px'><div><strong>3 - Situación de un paso para peatónes</strong></div></body></html>"
                                    }, 0.55, {
                                 			viewportWidth: 520,
                                 			viewportHeight: 150,
                                 			backgroundColor: "#3B83BD",
                                 			offsetX: +0.35,
                                 			offsetY: -0.25,
                                 			horizontalAnchor: AR.CONST.HORIZONTAL_ANCHOR.RIGHT,
                                 			verticalAnchor: AR.CONST.VERTICAL_ANCHOR.TOP,
                                 			updateRate: AR.HtmlDrawable.UPDATE_RATE.LOW,
                                 			allowDocumentLocationChanges: true,
                                 			onClick : function(){
                                 			         if(p_3 == false){
                                                        this.backgroundColor= "#24E711";
                                                        contador+=1;
                                                        p_3=true;
                                                     }
                                           }

                                 		});




        //################################ STOP#####################################################

         var s_1=false;
         var s_2=false;
         var s_3=false;


         var htmlCuatro = new AR.HtmlDrawable({
                            html:"<html><head><meta name='viewport' content='target-densitydpi=device-dpi, width = 320, user-scalable = 0'>"+
                            "</head>"+"<body style='font-size:30px'><div><strong>1 - Detención Obligatoria. </strong></div></body></html>"
                   }, 0.55, {
                            viewportWidth: 520,
                            viewportHeight: 150,
                            backgroundColor: "#3B83BD",
                            offsetX: -0.2,
                            offsetY: 0,
                            horizontalAnchor: AR.CONST.HORIZONTAL_ANCHOR.RIGHT,
                            verticalAnchor: AR.CONST.VERTICAL_ANCHOR.TOP,
                            updateRate: AR.HtmlDrawable.UPDATE_RATE.LOW,
                            allowDocumentLocationChanges: true,
                            onClick : function(){

                                           if(s_1 == false){
                                              this.backgroundColor= "#24E711";
                                              contador+=1;
                                              s_1=true;
                                           }


                                        }

                        });
                 var htmlCinco = new AR.HtmlDrawable({
                                 			html:"<html><head><meta name='viewport' content='target-densitydpi=device-dpi, width = 320, user-scalable = 0'>"+
                                 			"</head>"+"<body style='font-size:30px'><div><strong>2 - Alumbrado De Corto Alcance. </strong></div></body></html>"
                                    }, 0.55, {
                                 			viewportWidth: 520,
                                 			viewportHeight: 150,
                                 			backgroundColor: "#3B83BD",
                                 			offsetX: +0.8,
                                 			offsetY: 0,
                                 			horizontalAnchor: AR.CONST.HORIZONTAL_ANCHOR.RIGHT,
                                 			verticalAnchor: AR.CONST.VERTICAL_ANCHOR.TOP,
                                 			updateRate: AR.HtmlDrawable.UPDATE_RATE.LOW,
                                 			allowDocumentLocationChanges: true,
                                 			onClick : function(){

                                 			              if (s_2 == false) {
                                                            this.backgroundColor= "#FE0000";
                                                            contador-=1;
                                                            s_2=true;
                                                          }
                                            }

                                 		});

                 var htmlSeis = new AR.HtmlDrawable({
                                         			html:"<html><head><meta name='viewport' content='target-densitydpi=device-dpi, width = 320, user-scalable = 0'>"+
                                         			"</head>"+"<body style='font-size:30px'><div><strong>3 - Fin De Prohibiciones. </strong></div></body></html>"
                                            }, 0.55, {
                                         			viewportWidth: 520,
                                         			viewportHeight: 150,
                                         			backgroundColor: "#3B83BD",
                                         			offsetX: +0.35,
                                         			offsetY: -0.25,
                                         			horizontalAnchor: AR.CONST.HORIZONTAL_ANCHOR.RIGHT,
                                         			verticalAnchor: AR.CONST.VERTICAL_ANCHOR.TOP,
                                         			updateRate: AR.HtmlDrawable.UPDATE_RATE.LOW,
                                         			allowDocumentLocationChanges: true,
                                         			onClick : function(){
                                         			         if (s_3 == false) {
                                                                this.backgroundColor= "#FE0000";
                                                                contador-=1;
                                                                s_3=true;
                                                             }
                                                   }

                                         		});



        //############################### TRACKABLE - PASO DE PEATONES ###############################################

		var paso_peatones = new AR.Trackable2DObject(this.tracker, "paso_peatones", {
			drawables: {
				cam: [htmlUno,htmlDos,htmlTres,htmlPuntuacion]
			},
			onClick : function(){
   	             this.drawables.removeCamDrawable(3);
			     var htmlPuntuacion = new AR.HtmlDrawable({
                                                          			html:"<html><head><meta name='viewport' content='target-densitydpi=device-dpi, width = 320, user-scalable = 0'>"+
                                                          			"</head>"+"<body style='font-size:300px'><div><strong style='color: #F1C40F;'>"+contador+"</strong></div></body></html>"
                                                             }, 0.15, {
                                                          			viewportWidth: 150,
                                                          			viewportHeight: 150,

                                                          			offsetX: +0.15,
                                                          			offsetY: 0,
                                                          			horizontalAnchor: AR.CONST.HORIZONTAL_ANCHOR.RIGHT,
                                                          			verticalAnchor: AR.CONST.VERTICAL_ANCHOR.TOP,
                                                          			//updateRate: AR.HtmlDrawable.UPDATE_RATE.LOW,
                                                          			//allowDocumentLocationChanges: true,


                                                          		});
                  this.drawables.addCamDrawable(htmlPuntuacion,3);

                },
                 onEnterFieldOfVision : function(){
                                              this.drawables.removeCamDrawable(3);
                                              var htmlPuntuacion = new AR.HtmlDrawable({
                                                                                 html:"<html><head><meta name='viewport' content='target-densitydpi=device-dpi, width = 320, user-scalable = 0'>"+
                                                                                 "</head>"+"<body style='font-size:300px'><div><strong style='color: #F1C40F;'>"+contador+"</strong></div></body></html>"
                                                                        }, 0.15, {
                                                                                 viewportWidth: 150,
                                                                                 viewportHeight: 150,

                                                                                 offsetX: +0.15,
                                                                                 offsetY: 0,
                                                                                 horizontalAnchor: AR.CONST.HORIZONTAL_ANCHOR.RIGHT,
                                                                                 verticalAnchor: AR.CONST.VERTICAL_ANCHOR.TOP,

                                                                             });
                                              this.drawables.addCamDrawable(htmlPuntuacion,3);

                                           },
             onExitFieldOfVision : function(){
             	this.drawables.removeCamDrawable(0);
	            this.drawables.removeCamDrawable(1);
	            this.drawables.removeCamDrawable(2);
                p_1=false;
                p_2=false;
                p_3=false
                var htmlUno = new AR.HtmlDrawable({
                                			html:"<html><head><meta name='viewport' content='target-densitydpi=device-dpi, width = 320, user-scalable = 0'>"+
                                			"</head>"+"<body style='font-size:30px'><div><strong>1 - Advertencias Acústicas Prohibidas. </strong></div></body></html>"
                                   }, 0.55, {
                                			viewportWidth: 520,
                                			viewportHeight: 150,
                                			backgroundColor: "#3B83BD",
                                			offsetX: -0.2,
                                			offsetY: 0,
                                			horizontalAnchor: AR.CONST.HORIZONTAL_ANCHOR.RIGHT,
                                			verticalAnchor: AR.CONST.VERTICAL_ANCHOR.TOP,
                                			updateRate: AR.HtmlDrawable.UPDATE_RATE.LOW,
                                			allowDocumentLocationChanges: true,
                                			onDocumentLocationChanged: function onDocumentLocationChangedFn(uri) {
                                				AR.context.openInBrowser(uri);
                                			},
                                			onClick : function(){
                                			               if (p_1 == false) {
                                                                this.backgroundColor= "#FE0000";
                                                                contador-=1;
                                                                p_1=true;
                                                           }
                                                        }

                                		});
                var htmlDos = new AR.HtmlDrawable({
                                         			html:"<html><head><meta name='viewport' content='target-densitydpi=device-dpi, width = 320, user-scalable = 0'>"+
                                         			"</head>"+"<body style='font-size:30px'><div><strong>2 - Carril Reservado Para Autobuses. </strong></div></body></html>"
                                            }, 0.55, {
                                         			viewportWidth: 520,
                                         			viewportHeight: 150,
                                         			backgroundColor: "#3B83BD",
                                         			offsetX: +0.8,
                                         			offsetY: 0,
                                         			horizontalAnchor: AR.CONST.HORIZONTAL_ANCHOR.RIGHT,
                                         			verticalAnchor: AR.CONST.VERTICAL_ANCHOR.TOP,
                                         			updateRate: AR.HtmlDrawable.UPDATE_RATE.LOW,
                                         			allowDocumentLocationChanges: true,
                                         			onClick : function(){
                                         			                if (p_2 ==false) {
                                                                        this.backgroundColor= "#FE0000";
                                                                        contador-=1;
                                                                        p_2=true;
                                                                    }
                                                                 }

                                         		});
                var htmlTres = new AR.HtmlDrawable({
                                                			html:"<html><head><meta name='viewport' content='target-densitydpi=device-dpi, width = 320, user-scalable = 0'>"+
                                                			"</head>"+"<body style='font-size:30px'><div><strong>3 - Situación De Un Paso Para Peatones. </strong></div></body></html>"
                                                   }, 0.55, {
                                                			viewportWidth: 520,
                                                			viewportHeight: 150,
                                                			backgroundColor: "#3B83BD",
                                                			offsetX: +0.35,
                                                            offsetY: -0.25,
                                                			horizontalAnchor: AR.CONST.HORIZONTAL_ANCHOR.RIGHT,
                                                			verticalAnchor: AR.CONST.VERTICAL_ANCHOR.TOP,
                                                			updateRate: AR.HtmlDrawable.UPDATE_RATE.LOW,
                                                			allowDocumentLocationChanges: true,
                                                			onClick : function(){
                                                			            if(p_3==false){
                                                			                this.backgroundColor= "#24E711";
                                                                            contador+=1;
                                                                            p_3=true;
                                                                        }
                                                            }

                                                		});


                this.drawables.addCamDrawable(htmlUno,0);
                this.drawables.addCamDrawable(htmlDos,1);
                this.drawables.addCamDrawable(htmlTres,2);
             }
		});
        //############################### TRACKABLE - STOP ###############################################

		var stop = new AR.Trackable2DObject(this.tracker, "stop", {
            drawables: {
                cam: [htmlCuatro,htmlCinco,htmlSeis,htmlPuntuacion]
            },
            onClick : function(){
                 	         this.drawables.removeCamDrawable(3);
                             var htmlPuntuacion = new AR.HtmlDrawable({
                                                                html:"<html><head><meta name='viewport' content='target-densitydpi=device-dpi, width = 320, user-scalable = 0'>"+
                                                                "</head>"+"<body style='font-size:300px'><div><strong style='color: #F1C40F;'>"+contador+"</strong></div></body></html>"
                                                       }, 0.15, {
                                                                viewportWidth: 150,
                                                                viewportHeight: 150,

                                                                offsetX: +0.15,
                                                                offsetY: 0,
                                                                horizontalAnchor: AR.CONST.HORIZONTAL_ANCHOR.RIGHT,
                                                                verticalAnchor: AR.CONST.VERTICAL_ANCHOR.TOP,

                                                            });
                                this.drawables.addCamDrawable(htmlPuntuacion,3);

                              },
                           onEnterFieldOfVision : function(){
                              this.drawables.removeCamDrawable(3);
                              var htmlPuntuacion = new AR.HtmlDrawable({
                                                                 html:"<html><head><meta name='viewport' content='target-densitydpi=device-dpi, width = 320, user-scalable = 0'>"+
                                                                 "</head>"+"<body style='font-size:300px'><div><strong style='color: #F1C40F;'>"+contador+"</strong></div></body></html>"
                                                        }, 0.15, {
                                                                 viewportWidth: 150,
                                                                 viewportHeight: 150,

                                                                 offsetX: +0.15,
                                                                 offsetY: 0,
                                                                 horizontalAnchor: AR.CONST.HORIZONTAL_ANCHOR.RIGHT,
                                                                 verticalAnchor: AR.CONST.VERTICAL_ANCHOR.TOP,

                                                             });
                                 this.drawables.addCamDrawable(htmlPuntuacion,3);

                           },
                           onExitFieldOfVision : function(){
                           	this.drawables.removeCamDrawable(0);
              	            this.drawables.removeCamDrawable(1);
              	            this.drawables.removeCamDrawable(2);
                              s_1=false;
                              s_2=false;
                              s_3=false
                              var htmlCuatro = new AR.HtmlDrawable({
                                              			html:"<html><head><meta name='viewport' content='target-densitydpi=device-dpi, width = 320, user-scalable = 0'>"+
                                              			"</head>"+"<body style='font-size:30px'><div><strong>1 - Detención Obligatoria. </strong></div></body></html>"
                                                 }, 0.55, {
                                              			viewportWidth: 520,
                                              			viewportHeight: 150,
                                              			backgroundColor: "#3B83BD",
                                              			offsetX: -0.2,
                                              			offsetY: 0,
                                              			horizontalAnchor: AR.CONST.HORIZONTAL_ANCHOR.RIGHT,
                                              			verticalAnchor: AR.CONST.VERTICAL_ANCHOR.TOP,
                                              			updateRate: AR.HtmlDrawable.UPDATE_RATE.LOW,
                                              			allowDocumentLocationChanges: true,
                                              			onDocumentLocationChanged: function onDocumentLocationChangedFn(uri) {
                                              				AR.context.openInBrowser(uri);
                                              			},
                                              			onClick : function(){
                                              			         if(s_1 == false){
                                                                      this.backgroundColor= "#24E711";
                                                                      contador+=1;
                                                                      s_1=true;
                                                                   }

                                                                 }

                                              		});
                              var htmlCinco = new AR.HtmlDrawable({
                                                       			html:"<html><head><meta name='viewport' content='target-densitydpi=device-dpi, width = 320, user-scalable = 0'>"+
                                                       			"</head>"+"<body style='font-size:30px'><div><strong>2 - Alumbrado De Corto Alcance. </strong></div></body></html>"
                                                          }, 0.55, {
                                                       			viewportWidth: 520,
                                                       			viewportHeight: 150,
                                                       			backgroundColor: "#3B83BD",
                                                       			offsetX: +0.8,
                                                       			offsetY: 0,
                                                       			horizontalAnchor: AR.CONST.HORIZONTAL_ANCHOR.RIGHT,
                                                       			verticalAnchor: AR.CONST.VERTICAL_ANCHOR.TOP,
                                                       			updateRate: AR.HtmlDrawable.UPDATE_RATE.LOW,
                                                       			allowDocumentLocationChanges: true,
                                                       			onClick : function(){
                                                       			               if (s_2 == false) {
                                                                                  this.backgroundColor= "#FE0000";
                                                                                  contador-=1;
                                                                                  s_2=true;
                                                                                }
                                                                               }

                                                       		});
                              var htmlSeis = new AR.HtmlDrawable({
                                                              			html:"<html><head><meta name='viewport' content='target-densitydpi=device-dpi, width = 320, user-scalable = 0'>"+
                                                              			"</head>"+"<body style='font-size:30px'><div><strong>3 - Fin De Prohibiciones. </strong></div></body></html>"
                                                                 }, 0.55, {
                                                              			viewportWidth: 520,
                                                              			viewportHeight: 150,
                                                              			backgroundColor: "#3B83BD",
                                                              			offsetX: +0.35,
                                                                          offsetY: -0.25,
                                                              			horizontalAnchor: AR.CONST.HORIZONTAL_ANCHOR.RIGHT,
                                                              			verticalAnchor: AR.CONST.VERTICAL_ANCHOR.TOP,
                                                              			updateRate: AR.HtmlDrawable.UPDATE_RATE.LOW,
                                                              			allowDocumentLocationChanges: true,
                                                              			onClick : function(){
                                                              			            if (s_3 == false) {
                                                                                        this.backgroundColor= "#FE0000";
                                                                                        contador-=1;
                                                                                        s_3=true;
                                                                                     }
                                                                        }

                                                              		});


                              this.drawables.addCamDrawable(htmlCuatro,0);
                              this.drawables.addCamDrawable(htmlCinco,1);
                              this.drawables.addCamDrawable(htmlSeis,2);
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