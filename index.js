const express=require('express')
const app=express()

const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/apisample', {useNewUrlParser: true, useUnifiedTopology: true}, (err)=>{
    if(err)
        console.log('Error connecting to database', err);
    else
        console.log('Connected to database');
});


const dlSchema = new mongoose.Schema({
    id:{
        type: String,
        required :true
    },
    p:{
        type: String,
        required :true
    }
});

const Dummylogin = mongoose.model('Dummylogins', dlSchema);

app.get('/showdb',(req,res)=>{
    Dummylogin.find({},(err,suc)=>{
        res.send(suc);
    })
})
app.listen(process.env.PORT || 8000)
