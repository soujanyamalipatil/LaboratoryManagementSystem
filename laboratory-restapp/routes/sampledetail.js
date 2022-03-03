const express=require('express')
const router=express.Router();
const sampleController=require('../controller/sampledetail');
router.get('/samples',sampleController.getAllsamples);
router.post('/add-sample',sampleController.addSample);

module.exports=router;