const skills = [
    { skillId: 0, skillName: "Html/css", status: "Intermediate"},
    { skillId: 1, skillName: "JavaScript", status: "Beginner"},
    { skillId: 2, skillName: "Express", status: "Beginner"},
    { skillId: 3, skillName: "React", status: "Beginner"},  
  ];

  function getAll(){
    return skills;
  }

  function getOne(id){
    id= parseInt(id);
    return skills.find((skill)=>skill.skillId===id);
    
  }

  module.exports={
    getAll,
    getOne,
  }