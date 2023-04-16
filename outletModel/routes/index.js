const router = require("express").Router();

const controller  = require('../controllers/index')

router.post('/createOutlet',controller.createOutlet)
router.post('/deleteOutlet',controller.deleteOutlet)
router.post('/getOutlet',controller.getOutlet)
router.post('/getAllOutlets',controller.getAllOutlets)
router.patch('/updateOutlet',controller.updateOutlet)
// router.Outlet('/getcomments',controller.getComment)

module.exports = router;