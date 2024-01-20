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

  function create(s){//here parameter is an object, as we need to extract the content from the input by using res.body, which returns an object
    s.skillId = skills.length;
    s.status = "Beginner";
    s.skillName =s.skill;
    
    skills.push(s);

  }

  function deleteOne(id){
    id = parseInt(id);
    const index = skills.findIndex((skill)=>skill.skillId === id);
    skills.splice(index, 1);

  }

  module.exports={
    getAll,
    getOne,
    create,
    deleteOne,
  }