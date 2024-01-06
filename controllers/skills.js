const Skill = require("../models/skill");

function index (req, res){
    res.render("skills/index", {
        skills: Skill.getAll(),
    })
}

function getOne (req, res){
    res.render("skills/skill", {
        skill: Skill.getOne(req.params.id),

    })
}

module.exports ={
    index,
    getOne,
}

