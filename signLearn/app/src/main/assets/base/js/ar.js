var World = {
    loaded: false,

    init: function initFn() {
        this.createOverlays();
    },

    createOverlays: function createOverlaysFn() {

	// creamos un objeto de la clase HtmlDrawable
	htmlDrawable1 = new AR.HtmlDrawable({
	   html:"<div style='font-size:14px;color:#FFF;background: #068;border: 2px solid #059;border-radius: 5px;padding: 5px; width: 326px;'><p>aso peatonessssssssss</p></div>"
	}, 1,{offsetX : 0,offsetY: -0.5,opacity : 0.8,scale : 1});

	


        // inicializamos el Tracker con el Target collection (nuestra caratula del libro Deitel)
        this.tracker = new AR.Tracker("assets/tracker.wtc", {
            onLoaded: this.worldLoaded
        });

	// indicamos el nombre del Target en el Tracker, basicamente al momento de que el Target sea rastreado por el Tracker el objeto htmlDrawable sera renderizado en la pantalla del dispositivo
        var señal1 = new AR.Trackable2DObject(this.tracker, "paso_peatones", {
            drawables: {
                cam: htmlDrawable1
            }
        });

	


       
    }
};
World.init();
