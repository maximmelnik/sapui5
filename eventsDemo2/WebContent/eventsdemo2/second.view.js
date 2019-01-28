sap.ui.jsview("eventsdemo2.second", {

	/** Specifies the Controller belonging to this View. 
	* In the case that it is not implemented, or that "null" is returned, this View does not have a Controller.
	* @memberOf eventsdemo2.second
	*/ 
	getControllerName : function() {
		return "eventsdemo2.second";
	},

	/** Is initially called once after the Controller has been instantiated. It is the place where the UI is constructed. 
	* Since the Controller is given to this method, its event handlers can be attached right away. 
	* @memberOf eventsdemo2.second
	*/ 
	createContent : function(oController) {
		
		var oLabel = new sap.m.Label({
			text:"{label>/data}"
		});
		
		var oPage = new sap.m.Page({
			title: "Second page",
			showNavButton:true,
			navButtonPress:function(){
				app.to("idfirst1");
			},
			content: [ 
				oLabel
			]
		});
		
		return oPage;
	}

});