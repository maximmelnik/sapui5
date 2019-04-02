sap.ui.jsview("finalproject.topPage", {

	/** Specifies the Controller belonging to this View. 
	* In the case that it is not implemented, or that "null" is returned, this View does not have a Controller.
	* @memberOf finalproject.topPage
	*/ 
	getControllerName : function() {
		return "finalproject.topPage";
	},

	/** Is initially called once after the Controller has been instantiated. It is the place where the UI is constructed. 
	* Since the Controller is given to this method, its event handlers can be attached right away. 
	* @memberOf finalproject.topPage
	*/ 
	createContent : function(oController) {
		var oSubHeader = new sap.m.Bar({
			contentLeft : [ new sap.m.Button({
				icon : "sap-icon://nav-back",
				press : function(oEvt) {
					app.back();
				}
			}) ],
			contentMiddle : [ new sap.m.Label({
				text : "{i18n>app_subhead_2}"
			}) ]

		});
		
		var oVizFram = new sap.viz.ui5.controls.VizFrame();
		
		var oDataset = new sap.viz.ui5.data.FlattenedDataset({
			dimensions : [ {
				name : "Name",
				value : "{bar>Description}"
			} ],
			measures : [ {
				name : "Rating",
				value : "{bar>Rating}"
			} ],
			data : {
				path : "bar>/value"
			}
		});
				
		var oFeedValueAxis = new sap.viz.ui5.controls.common.feeds.FeedItem({
			'uid': "valueAxis",
			'type': "Measure",
			'values' : ["Rating"]
		});	
		
		var oFeedCataAxis = new sap.viz.ui5.controls.common.feeds.FeedItem({
			'uid': "categoryAxis",
			'type': "Dimension",
			'values' : ["Name"]
		});
		
		oVizFram.addFeed(oFeedValueAxis);
		oVizFram.addFeed(oFeedCataAxis);
		oVizFram.setDataset(oDataset);
		oVizFram.setLegendVisible(false);
		oVizFram.setVizType('stacked_column');
				
		var oPage = new sap.m.Page({
			title: "{i18n>app_head}",
			showSubHeader: true,
			subHeader: oSubHeader,
			content: [oVizFram]
		});
		return oPage;
	}

});