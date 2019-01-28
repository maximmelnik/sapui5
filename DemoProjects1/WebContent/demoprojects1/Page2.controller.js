sap.ui.define([
		"jquery.sap.global",
		"sap/m/MessageToast",
		"sap/ui/core/format/DateFormat",
		"sap/ui/core/mvc/Controller",
		"sap/ui/model/json/JSONModel"
	], function(jQuery, MessageToast, DateFormat, Controller, JSONModel) {
		"use strict";

		return Controller.extend("demoprojects1.Page2", {

			onInit: function() {
				// set mock model
				//var sPath = sap.ui.require.toUrl("/Model") + "/feed.json";
				var sPath = "demoprojects1/Model/feed.json";
				var oModel = new JSONModel(sPath);
				this.getView().setModel(oModel);
			},

			onPost: function(oEvent) {
				var oFormat = DateFormat.getDateTimeInstance({ style: "medium" });
				var oDate = new Date();
				var sDate = oFormat.format(oDate);
				// create new entry
				var sValue = oEvent.getParameter("value");
				var oEntry = {
					Author: "User 10",
					Date: "" + sDate,
					Text: sValue
				};

				// update model
				var oModel = this.getView().getModel();
				var aEntries = oModel.getData().EntryCollection;
				aEntries.unshift(oEntry);
				oModel.setData({
					EntryCollection: aEntries
				});
			},

			onSenderPress: function(oEvent) {
				MessageToast.show("Clicked on Link: " + oEvent.getSource().getSender());
			},

			onIconPress: function(oEvent) {
				MessageToast.show("Clicked on Image: " + oEvent.getSource().getSender());
			}
		});
});