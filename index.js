const express=require('express')
const app=express()

const mongoose = require('mongoose');

mongoose.connect('mongodb+srv://eswar:eswarreddy@cluster0.nvkcuqs.mongodb.net/test', {useNewUrlParser: true, useUnifiedTopology: true}, (err)=>{
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

const Dummylogin = mongoose.model('dummylogins', dlSchema);

app.get('/showdb',(req,res)=>{
    Dummylogin.find({},(err,suc)=>{
        res.send(suc);
    })
})
app.listen(process.env.PORT || 8000)
