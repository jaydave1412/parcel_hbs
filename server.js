const express = require('express');
const app = express();
const exphbs = require('express-handlebars');
//const bundler = require('parcel-bundler');
app.engine('handlebars',exphbs());
app.set('view engine','handlebars');

app.get('/',(req,res)=>{
    res.render('index',{layout : false});
})

let port  = process.env.PORT || 3000
app.listen(port,()=>{
    console.log("listening at 3000")
})


