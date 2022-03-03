const jwt=require('jsonwebtoken')
//either user or admin
const authorizeUserAdmin=async(req,res,next)=>{
    console.log(req.headers['authorization']);
    if(req.headers['authorization']){
        const token=req.headers['authorization'].split(' ')[1]
        const payload=await jwt.verify(token,SECRET_KEY)
        if(payload.role==='user'||payload.role==='admin'){
            next();
        }else{
            res.status(401).json({
                error:true,
                message:'not authorised',
                data:null
            })
        }
    }
}
//only admin
const authoriseAdmin=async(req,res,next)=>{
    console.log(req.headers['authorization']);
    if(req.headers['authorization']){
        const token=req.headers['authorization'].split(' ')[1]
        const payload=await jwt.verify(token,SECRET_KEY)
        if(payload==='admin'){
            next();
        }else{
            res.status(401).json({
                error:true,
                message:'not authorised',
                data:null
            })
        }
    }

}
module.exports={
    authorizeUserAdmin,
    authoriseAdmin

}