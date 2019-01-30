sap.ui.jsview("eventdemo_advanced.demo", {

	/** Specifies the Controller belonging to this View. 
	* In the case that it is not implemented, or that "null" is returned, this View does not have a Controller.
	* @memberOf eventdemo_advanced.demo
	*/ 
	getControllerName : function() {
		return "eventdemo_advanced.demo";
	},

	/** Is initially called once after the Controller has been instantiated. It is the place where the UI is constructed. 
	* Since the Controller is given to this method, its event handlers can be attached right away. 
	* @memberOf eventdemo_advanced.demo
	*/ 
	createContent : function(oController) {
		
		var oBtn1 = new sap.m.Button({
			text:"Cool Button"
		}).addEventDelegate({
			onAfterRendering:function(oBtn) {
				$(oBtn.srcControl.getDomRef()).draggable({
					cancel:false
				})
			}
		});
		
		var oPage = new sap.m.Page({
			title: "Event Demo Advanced",
			content: [
				oBtn1
			]
		});
		return oPage;
	}
});