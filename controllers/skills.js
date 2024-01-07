const Skill = require("../models/skill");

function index (req, res){
    res.render("skills/index", {
        skills: Skill.getAll(),
        heading: "Developer Skills",
    })
}

function getOne (req, res){
    res.render("skills/skill", {
        skill: Skill.getOne(req.params.id),
        heading: "Skills Details"

    })
}

module.exports ={
    index,
    getOne,
}

