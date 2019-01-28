sap.ui.jsview("eventsdemo2.first", {

	/** Specifies the Controller belonging to this View. 
	* In the case that it is not implemented, or that "null" is returned, this View does not have a Controller.
	* @memberOf eventsdemo2.first
	*/ 
	getControllerName : function() {
		return "eventsdemo2.first";
	},

	/** Is initially called once after the Controller has been instantiated. It is the place where the UI is constructed. 
	* Since the Controller is given to this method, its event handlers can be attached right away. 
	* @memberOf eventsdemo2.first
	*/ 
	createContent : function(oController) {
		
		var oList = new sap.m.List({
			headerText:"Animals",
			itemPress:[oController.selectEventHad, oController]
		});
		
		oList.bindItems({
				path: "list>/names",
				template: new sap.m.StandardListItem({
				title: "{list>name}",
				description: "{list>place}",
				type: sap.m.ListType.Navigation
			})
		});
		
		var oPage =  new sap.m.Page({
			title: "First page",
			content: [
				oList
			]
		});
		return oPage;
	}

});