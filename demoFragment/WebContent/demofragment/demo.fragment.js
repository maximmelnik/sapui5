sap.ui.jsfragment("demofragment.demo", {

	createContent : function(oController) {
		var oItemTemplate = new sap.m.StandardListItem({
			title : "{list>Name}"
		});
		var oSelDialog = new sap.m.SelectDialog({
			title : "Animals",
			liveChange : [ oController.liveChange, oController]
		});

		oSelDialog.bindAggregation("items", "list>/names", oItemTemplate);
		return oSelDialog;
	}

})