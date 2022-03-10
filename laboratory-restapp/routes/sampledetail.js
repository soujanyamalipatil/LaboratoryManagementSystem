const express=require('express')
const router=express.Router();
const auth=require('../middleware/auth')
const sampleController=require('../controller/sampledetail');
router.get('/samples',auth.authorizeUserAdmin,sampleController.getAllsamples);
router.post('/add-sample',auth.authoriseAdmin,sampleController.addSample);

module.exports=router;