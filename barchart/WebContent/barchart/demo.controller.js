sap.ui.controller("barchart.demo", {

	/**
	 * Called when a controller is instantiated and its View controls (if
	 * available) are already created. Can be used to modify the View before it
	 * is displayed, to bind event handlers and do other one-time
	 * initialization.
	 * 
	 * @memberOf barchart.demo
	 */
	onInit : function() {
		// create some dummy JSON oData
		var oData = {
			"names" : [ {
				Popularity : 1,
				Name : "Dinosaur",
				Place : "Mountain"
			}, {
				Popularity : 2,
				Name : "Elephant",
				Place : "Forest"
			}, {
				Popularity : 3,
				Name : "Whale",
				Place : "Sea"
			}, {
				Popularity : 4,
				Name : "Duck",
				Place : "Water"
			}, {
				Popularity : 5,
				Name : "Monkey",
				Place : "Tree"
			} ]
		};
		var oModel = new sap.ui.model.json.JSONModel(oData);
		sap.ui.getCore().setModel(oModel, "bar");
	},

/**
 * Similar to onAfterRendering, but this hook is invoked before the controller's
 * View is re-rendered (NOT before the first rendering! onInit() is used for
 * that one!).
 * 
 * @memberOf barchart.demo
 */
// onBeforeRendering: function() {
//
// },
/**
 * Called when the View has been rendered (so its HTML is part of the document).
 * Post-rendering manipulations of the HTML could be done here. This hook is the
 * same one that SAPUI5 controls get after being rendered.
 * 
 * @memberOf barchart.demo
 */
// onAfterRendering: function() {
//
// },
/**
 * Called when the Controller is destroyed. Use this one to free resources and
 * finalize activities.
 * 
 * @memberOf barchart.demo
 */
// onExit: function() {
//
// }
});