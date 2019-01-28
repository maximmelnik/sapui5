sap.ui.controller("eventsdemo2.first", {

/**
* Called when a controller is instantiated and its View controls (if available) are already created.
* Can be used to modify the View before it is displayed, to bind event handlers and do other one-time initialization.
* @memberOf eventsdemo2.first
*/
	onInit: function() {
		
		var page = sap.ui.view({id:"idfirst2", viewName:"eventsdemo2.second", type:sap.ui.core.mvc.ViewType.JS});
		app.addPage(page);
		
		var oData = {
				names: [{
					name: "dinosaur",
					place: "mountain"
				}, {
					name: "elephant",
					place: "forest"
				}, {
					name: "monkey",
					place: "tree"				
				}]
			};
			
			// create a oModel with this oData
			var oModel = sap.ui.model.json.JSONModel(oData);
			sap.ui.getCore().setModel(oModel,"list");	
	},
	
	selectEventHad: function(oEvt) {
		
		debugger;
		
		var sValue = oEvt.getParameters().listItem.getProperty("title");
		
		// create json data for transporting the selected value
		var oData = {
			"data": sValue
		}
		
		sap.ui.getCore().setModel(new sap.ui.model.json.JSONModel(oData),"label");
		app.to("idfirst2");
	}
		
/**
* Similar to onAfterRendering, but this hook is invoked before the controller's View is re-rendered
* (NOT before the first rendering! onInit() is used for that one!).
* @memberOf eventsdemo2.first
*/
//	onBeforeRendering: function() {
//
//	},

/**
* Called when the View has been rendered (so its HTML is part of the document). Post-rendering manipulations of the HTML could be done here.
* This hook is the same one that SAPUI5 controls get after being rendered.
* @memberOf eventsdemo2.first
*/
//	onAfterRendering: function() {
//
//	},

/**
* Called when the Controller is destroyed. Use this one to free resources and finalize activities.
* @memberOf eventsdemo2.first
*/
//	onExit: function() {
//
//	}

});