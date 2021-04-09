let skills = [];

let addSkillBtn = $("button#skill-add-button");
let skillList = $("#skill-list")
let skillInput = $("#skill-input")

addSkillBtn.click(function () {
    let newSkillDeleteBtn = $('<button class="delete-btn">X</button>');
    let newSkill = $('<li/>');
    newSkill.append(newSkillDeleteBtn);
    newSkill.append(skillInput.val().toString());
    skillList.append(newSkill);
    newSkillDeleteBtn.click(evt => $(evt.target).parent().remove());
});
