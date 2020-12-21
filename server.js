const express = require('express');
const app = express();
const exphbs = require('express-handlebars');
//const bundler = require('parcel-bundler');
app.engine('handlebars',exphbs());
app.set('view engine','handlebars');

app.get('/',(req,res)=>{
    res.render('index',{layout : false});
})


app.listen(3000,()=>{
    console.log("listening at 3000")
})


