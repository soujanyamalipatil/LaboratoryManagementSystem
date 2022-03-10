const port=4000
const app=require('./app')
const logger=require('./config/logger')
app.listen(port,()=>{
    // console.log()
    logger.log('info',`the server listenning ${port}`)
})

