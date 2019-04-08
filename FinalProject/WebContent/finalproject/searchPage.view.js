sap.ui.jsview("finalproject.searchPage", {

	/** Specifies the Controller belonging to this View. 
	* In the case that it is not implemented, or that "null" is returned, this View does not have a Controller.
	* @memberOf finalproject.searchPage
	*/ 
	getControllerName : function() {
		return "finalproject.searchPage";
	},

	/** Is initially called once after the Controller has been instantiated. It is the place where the UI is constructed. 
	* Since the Controller is given to this method, its event handlers can be attached right away. 
	* @memberOf finalproject.searchPage
	*/ 
	createContent : function(oController) {
		// create the header of application with the button for come back to home of page
		var oSubHeader = new sap.m.Bar({
			contentLeft : [ new sap.m.Button({
				icon : "sap-icon://nav-back",
				press : function(oEvt) {
					app.back();
				}
			}) ],
			contentMiddle : [ new sap.m.Label({
				text : "{i18n>app_subhead_1}"
			}) ]

		});
		// create the field for searching the product name in the list
		var oSearchField = new sap.m.SearchField({
			id: "id_prod_search",
			placeholder: "Please, input the product name.",
			liveChange: [oController.liveSearch, oController]
			
		});
		// create the graphical element 
		var oList = new sap.m.List({
			itemPress: [oController.goToDetails, oController]
		});
		// the binding mechanism for relation the data model with graphical element - list
		oList.bindItems({
			path:"list>/value",
			template: new sap.m.StandardListItem({
				title: "{list>Name}",
				description: "{list>Description}",
				type: sap.m.ListType.Navigation
			})
		});	
		// create the page for showing all graphical element
		var oPage = new sap.m.Page({
			title: "{i18n>app_head}",
			showSubHeader: true,
			subHeader: oSubHeader,
			content: [oSearchField, oList]
		});
		return oPage;
	}

});