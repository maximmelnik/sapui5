sap.ui.jsview("finalproject.homePage", {

	/** Specifies the Controller belonging to this View. 
	* In the case that it is not implemented, or that "null" is returned, this View does not have a Controller.
	* @memberOf finalproject.homePage
	*/ 
	getControllerName : function() {
		return "finalproject.homePage";
	},

	/** Is initially called once after the Controller has been instantiated. It is the place where the UI is constructed. 
	* Since the Controller is given to this method, its event handlers can be attached right away. 
	* @memberOf finalproject.homePage
	*/ 
	createContent : function(oController) {
 		
		//1. Create the tile for Search Product by name
		var tileSearch = new sap.m.StandardTile({
			"type" : "Monitor",
			icon: "sap-icon://product",
			title: "{i18n>tile_search}",
			press: [oController.goToSearchProduct, oController]
		});
		
		//2. Create the tile for Top5 Product by rating
		var tileRating = new sap.m.StandardTile({
			type: "Monitor",
			icon: "sap-icon://opportunity", 
			title: "{i18n>tile_rating}",
			press: [oController.goToRating, oController]
		});
		
		//3. Create the tile container for above tiles
		var tiles = new sap.m.TileContainer({
			tiles:[tileSearch, tileRating]
		})
		
		//4. Create the page for showing tiles
		var oPage = new sap.m.Page({
			title: "{i18n>app_head}",
			enableScrolling: false,
			content: [tiles]
		});		
		return oPage;
	}

});