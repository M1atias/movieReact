const express = require('express');
const app = express();
const mongoose = require('mongoose');


mongoose.connect('mongodb+srv://matias:reactmovie2020@react-dmovie.sivun.gcp.mongodb.net/<dbname>?retryWrites=true&w=majority',
    {useNewUrlParser:true}).then(()=> console.log('DB conenected'))
                           .catch(err=>console.error(err));



app.get('/',(req,res)=>{
    res.sned("Hello I first deployment in Heroku")
})

const port = process.env.PORT || 5000

app.listen(port,()=>{
    console.log(`Serve Running at ${port}`)
});


