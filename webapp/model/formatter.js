sap.ui.define(["mo/skillplanner/utils/Utils"], function(utils) {
		"use strict";
		return {
			effectiveSkill: function(oContext) {
				return utils.getEffectiveSkill(this.getView().getModel("skills"), oContext.id);
			},
			remainingSkillpoints: function(oContext) {
				var fRemainingSkillpoints = 1100;
				for (var index in oContext) {
					fRemainingSkillpoints -= oContext[index].trained;
				}
				return fRemainingSkillpoints;
			}
		};
	});