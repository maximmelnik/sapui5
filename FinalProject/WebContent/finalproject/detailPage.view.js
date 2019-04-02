sap.ui.jsview("finalproject.detailPage", {

	/** Specifies the Controller belonging to this View. 
	* In the case that it is not implemented, or that "null" is returned, this View does not have a Controller.
	* @memberOf finalproject.detailPage
	*/ 
	getControllerName : function() {
		return "finalproject.detailPage";
	},

	/** Is initially called once after the Controller has been instantiated. It is the place where the UI is constructed. 
	* Since the Controller is given to this method, its event handlers can be attached right away. 
	* @memberOf finalproject.detailPage
	*/ 
	createContent : function(oController) {
 		
		var oSubHeader = new sap.m.Bar({
			contentLeft: new sap.m.Button({
				icon: "sap-icon://nav-back",
				press: function(oEvt) {
					app.back();
				}					
			}),
			contentMiddle: new sap.m.Label({
				text: "{i18n>app_subhead_3}"
			})	
		});
		
		var oList = new sap.m.List();
		
		var oPage = new sap.m.Page({
			title: "{i18n>app_head}",
			showSubHeader: true,
			subHeader: oSubHeader,
			content: [oList]
		});
 		return oPage;
	}

});