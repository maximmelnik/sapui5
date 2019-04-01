sap.ui.controller("finalproject.homePage", {

/**
* Called when a controller is instantiated and its View controls (if available) are already created.
* Can be used to modify the View before it is displayed, to bind event handlers and do other one-time initialization.
* @memberOf finalproject.homePage
*/
	onInit: function() {	
		
		// 1. Define the path to the file with properties
		var i18nPath = "i18n/i18n.properties";
		// 2. Define the model for the file how to Resource Model
		var i18nModel = sap.ui.model.resource.ResourceModel({
			bundleUrl: i18nPath
		});
		// 3. Set the resource model by sap.ui.getCore().setModel()
        sap.ui.getCore().setModel(i18nModel,"i18n");
        
	},

/**
* Similar to onAfterRendering, but this hook is invoked before the controller's View is re-rendered
* (NOT before the first rendering! onInit() is used for that one!).
* @memberOf finalproject.homePage
*/
//	onBeforeRendering: function() {
//
//	},

/**
* Called when the View has been rendered (so its HTML is part of the document). Post-rendering manipulations of the HTML could be done here.
* This hook is the same one that SAPUI5 controls get after being rendered.
* @memberOf finalproject.homePage
*/
//	onAfterRendering: function() {
//
//	},

/**
* Called when the Controller is destroyed. Use this one to free resources and finalize activities.
* @memberOf finalproject.homePage
*/
//	onExit: function() {
//
//	}

	goToSearchProduct: function(oEvt) {
		app.to("idsearchPage");
	},
	
	goToRating: function(oEvt) {
		app.to("idtopPage");
	}
	
});