let skills = [];

let addSkillBtn = $("button#skill-add-button");
let skillList = $("#skill-list")
let skillInput = $("#skill-input")

addSkillBtn.click(function () {
    let newSkill = $('<li/>').html(skillInput.val());;
    skillList.append(newSkill);
});
