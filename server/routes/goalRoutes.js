const router = require('express').Router();
const goalController = require('../controllers/goalController');

router.post("/", goalController.create);
router.post("/update/:_id", goalController.addData);
router.get("/list/:_id", goalController.listGoals);


module.exports = router;
