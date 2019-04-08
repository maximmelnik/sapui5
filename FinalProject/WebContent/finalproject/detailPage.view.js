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
		
		var column1 = new sap.m.Column({
			header: new sap.m.Label({
				text: "{i18n>tab_column_1}"
			}),
			
		});
		var column2 = new sap.m.Column({
			header: new sap.m.Label({
				text: "{i18n>tab_column_2}"
			})
		});
		var column3 = new sap.m.Column({
			header: new sap.m.Label({
				text: "{i18n>tab_column_3}"
			})
		});
		var column4 = new sap.m.Column({
			header: new sap.m.Label({
				text: "{i18n>tab_column_4}"
			})
		});
		
		var oTable = new sap.m.Table({
			columns: [column1, column2, column3, column4]
		});
		
		oTable.bindItems({
			path: "table>/value",
			template: new sap.m.ColumnListItem({
				cells: [
					new sap.m.Text({
						text: "{table>Name}"
					}),
					new sap.m.Text({
						text: "{table>Description}"
					}),
					new sap.m.RatingIndicator({
						value: "{table>Rating}",
						editable: false
					}),
					new sap.m.Text({
						text: "{table>Price}"
					}),
				]
			})
		});
		
		var oPage = new sap.m.Page({
			title: "{i18n>app_head}",
			showSubHeader: true,
			subHeader: oSubHeader,
			content: [oTable]
		});
 		return oPage;
	}

});