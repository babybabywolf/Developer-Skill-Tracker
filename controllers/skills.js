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

function newSkill(req, res){
    res.render("skills/new", {heading: "New Skill"})
}

function addOne (req, res){
    Skill.create(req.body);
    res.redirect ("/skills")
}

module.exports ={
    index,
    getOne,
    addOne,
    newSkill,

}

