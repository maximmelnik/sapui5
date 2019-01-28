sap.ui.jsview("tablesdemo1.tableSimple", {

	/** Specifies the Controller belonging to this View. 
	* In the case that it is not implemented, or that "null" is returned, this View does not have a Controller.
	* @memberOf tablesdemo1.tableSimple
	*/ 
	getControllerName : function() {
		return "tablesdemo1.tableSimple";
	},

	/** Is initially called once after the Controller has been instantiated. It is the place where the UI is constructed. 
	* Since the Controller is given to this method, its event handlers can be attached right away. 
	* @memberOf tablesdemo1.tableSimple
	*/ 
	createContent : function(oController) {
		
	    var oCol1 = new sap.ui.table.Column({
	    	label: new sap.m.Label({text:"Name"}),
	        template: new sap.m.Text({
	        	text:"{Name}"
	        })
	    });
	    
	    var oCol2 = new sap.ui.table.Column({
	    	label: new sap.m.Label({text:"Place"}),
	        template: new sap.m.Text({
	        	text:"{Place}"
	        })
	    });
	    
	    var oCol3 = new sap.ui.table.Column({
	    	label: new sap.m.Label({text:"Id"}),
	        template: new sap.m.Text({
	        	text:"{id}"
	        })
	    });
	    
	    var oTable = new sap.ui.table.Table({
	    	columns:[oCol1, oCol2, oCol3],
	        cellClick:[oController.goToNextPage, oController]
	    }); 
	    
	    oTable.bindRows("/names");	
	    
		var oPage = new sap.m.Page({
			title: "Simple Animal List",
			content: [
				oTable
			]
		});
		
		return oPage;
	}

});