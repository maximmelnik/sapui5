sap.ui.jsview("twopagesimpleapp.first", {

	/** Specifies the Controller belonging to this View. 
	* In the case that it is not implemented, or that "null" is returned, this View does not have a Controller.
	* @memberOf twopagesimpleapp.first
	*/ 
	getControllerName : function() {
		console.log("getControllerName");
		return "twopagesimpleapp.first";
	},

	/** Is initially called once after the Controller has been instantiated. It is the place where the UI is constructed. 
	* Since the Controller is given to this method, its event handlers can be attached right away. 
	* @memberOf twopagesimpleapp.first
	*/ 
	createContent : function(oController) {
		console.log("createContent");
		var oSimpleInput = new sap.m.Input("idInput", {			
			placeholder: "Enter your name"			
		});
		
		var oSimpleButton = new sap.m.Button("idButton", {
			text: "Submit",
			press: [oController.goToSecondPage, oController]
		});
		
		var oPage = new sap.m.Page({
			title: "Simple App",
			content: [
				oSimpleInput,
				oSimpleButton		
			]
		});
		console.log("createContent End");
		return oPage;
	}

});