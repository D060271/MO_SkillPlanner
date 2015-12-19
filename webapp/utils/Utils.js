sap.ui.define([], function() {
	"use strict";
	return {
		getEffectiveSkill: function(model, skillId) {
			//Parent skills exist
			var oSkill = this.getSkillById(model, skillId);
			if (oSkill.parent && oSkill.parent.length > 0) {

				var level = 100;
				//Iterate parents
				for (var index in oSkill.parent) {
					var parentEffectiveSkill = this.getEffectiveSkill(model, oSkill.parent[index]);
					if (level > parentEffectiveSkill) {
						// Current level is bigger than parent effective
						level = parentEffectiveSkill;
					}
				}
				if (oSkill.trained > level) {
					return level;
				}
			}
			//No parent skills exist
			return oSkill.trained + 10;
		},
		getSkillById: function(model, skillId) {
			//Parent skills exist
			var skills = model.getData().skills;
			return jQuery.grep(skills, function(oSkill) {
				return oSkill.id === skillId;
			})[0];
		}
	};
});