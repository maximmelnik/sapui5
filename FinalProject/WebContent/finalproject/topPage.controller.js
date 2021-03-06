sap.ui.controller("finalproject.topPage", {

/**
* Called when a controller is instantiated and its View controls (if available) are already created.
* Can be used to modify the View before it is displayed, to bind event handlers and do other one-time initialization.
* @memberOf finalproject.topPage
*/
	onInit: function() {
		var sUrl = "https://services.odata.org/V3/OData/OData.svc/Products?$format=json&$top=5&$select=Name,Rating";
		var modelChart = new sap.ui.model.json.JSONModel(sUrl);
		sap.ui.getCore().setModel(modelChart, "bar");
	}

/**
* Similar to onAfterRendering, but this hook is invoked before the controller's View is re-rendered
* (NOT before the first rendering! onInit() is used for that one!).
* @memberOf finalproject.topPage
*/
//	onBeforeRendering: function() {
//
//	},

/**
* Called when the View has been rendered (so its HTML is part of the document). Post-rendering manipulations of the HTML could be done here.
* This hook is the same one that SAPUI5 controls get after being rendered.
* @memberOf finalproject.topPage
*/
//	onAfterRendering: function() {
//
//	},

/**
* Called when the Controller is destroyed. Use this one to free resources and finalize activities.
* @memberOf finalproject.topPage
*/
//	onExit: function() {
//
//	}

});