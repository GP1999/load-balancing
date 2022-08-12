const  express =require('express');

const app=express()

app.get('/test',(req,res,next)=>{

     const params=req.query;
  
     console.log(`received request ${params['req-no']||'unknown'}`)
    return res.send("HI there")
})

const PORT=process.env.PORT||3001
app.listen(PORT,()=>{
    console.log(`server running on ${PORT}`)
})