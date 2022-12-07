const express=require('express');

const app=express();
const PORT=process.env.PORT || 4545;
app.use(express.static(__dirname+'/public'));

app.listen(PORT, ()=>{
    console.log(`Server started on ${PORT}`)
})