sap.ui.jsview("masterdetaildemo.detail", {

	/** Specifies the Controller belonging to this View. 
	* In the case that it is not implemented, or that "null" is returned, this View does not have a Controller.
	* @memberOf masterdetaildemo.detail
	*/ 
	getControllerName : function() {
		return "masterdetaildemo.detail";
	},

	/** Is initially called once after the Controller has been instantiated. It is the place where the UI is constructed. 
	* Since the Controller is given to this method, its event handlers can be attached right away. 
	* @memberOf masterdetaildemo.detail
	*/ 
	createContent : function(oController) {
		
	    var oColumns = [
	    	new sap.m.Column({
	    		header : new sap.m.Label({
	    			text: "id"
	    		})
	    	}),
	    	new sap.m.Column({
	    		header : new sap.m.Label({
	    			text: "Name"
	    		})
	    	}),
	    	new sap.m.Column({
	    		header : new sap.m.Label({
	    			text: "Place"
	    		})
	    	}),
	    ];
	    
	    var oTemplate = new sap.m.ColumnListItem({
	    	cells: [
	    		new sap.m.Text({
	    			text: "{table>id}"
	    		}),
	    		new sap.m.Text({
	    			text: "{table>Name}"
	    		}),
	    		new sap.m.Text({
	    			text: "{table>Place}"
	    		}),
	    	]
	    });
		
	    var oTable = new sap.m.Table({
	    	id: "table",
	    	columns: oColumns
	    });
	    
	    oTable.bindItems({
	    	path:"table>/",
	    	template: oTemplate
	    });
		
		var oPage = new sap.m.Page({
			title: "Detail page",
			content: [
				oTable   
			]
		});
		
		return oPage;
	}

});