//Import modules

var express = require('express');
var mongoose = require('mongoose');
var cors = require('cors');
var bodyparser = require('body-parser');
var path = require('path');
var http = require('http');

//Express intialization 
const app = express();
const route = require('./routes/route');

//connection to mongodb
mongoose.connect('mongodb://localhost:27017/booklist');
mongoose.connection.on('connected',()=>
{
console.log("connected to mongodb ");
})

mongoose.connection.on('error',(err)=>
{
    if(err)
    {
        console.log("error in database connection:"+err);

    }

});



const port = 7000;

//adding middleware
app.use(cors());
app.use(bodyparser.json());

//static files
app.use(express.static(path.join(__dirname,'public')));


app.use('/api', route);

//testing server
app.get('/',(req,res)=>{
    res.send('Welcome to Express Js');
});

app.listen(port,()=>{
console.log("server started at port:"+port);
});

