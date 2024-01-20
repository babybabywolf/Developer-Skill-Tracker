var express = require('express');
var router = express.Router();
var skillsController = require ("../controllers/skills")


/* GET users listing. */
router.get('/', skillsController.index);

router.get('/new', skillsController.newSkill);

router.get('/:id', skillsController.getOne);
router.post('/', skillsController.addOne);
router.delete("/:id", skillsController.deleteSkill);




module.exports = router;
