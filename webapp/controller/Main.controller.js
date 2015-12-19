sap.ui.define([
	"sap/ui/core/mvc/Controller",
	"mo/skillplanner/model/formatter"
], function(Controller, formatter) {
	"use strict";
	return Controller.extend("mo.skillplanner.controller.Main", {
		formatter: formatter,
		onInit: function() {
			var oModel = new sap.ui.model.json.JSONModel();
			oModel.setData({
				skills: [{
					id: 1,
					group: "Combat",
					name: "Meele Combat",
					trained: 50
				}, {
					id: 2,
					name: "Axes",
					group: "Combat",
					trained: 100,
					parent: [1]
				}, {
					id: 3,
					name: "Swords",
					group: "Combat",
					trained: 80,
					parent: [1]
				}, {
					id: 4,
					name: "Maces",
					group: "Combat",
					trained: 40,
					parent: [1]
				}, {
					id: 5,
					name: "Athletics",
					group: "Agility",
					trained: 40,
					parent: [1]
				}]
			});
			oModel.setDefaultBindingMode(sap.ui.model.BindingMode.TwoWay);
			this.getView().setModel(oModel, "skills");
		},
		onAddButtonPress: function(evnt) {
			var oContext = evnt.getSource().getBindingContext("skills");
			var oObject = oContext.getObject();
			if (oObject.trained < 100) {
				oObject.trained++;
				oContext.getModel().refresh();
			}
		},
		onLessButtonPress: function(evnt) {
			var oContext = evnt.getSource().getBindingContext("skills");
			var oObject = oContext.getObject();
			if (oObject.trained > 0) {
				oObject.trained--;
				oContext.getModel().refresh();
			}
		}
	});

});