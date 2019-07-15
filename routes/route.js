var express = require('express');
var mongoose = require('mongoose');

const router=express.Router();
const bookDetails= require('../models/books.js');


router.get('/getBookDetails',(req,res,next)=>
{
    bookDetails.find(function(err,book){
if(err){
   console.log("Retrieving bookdetails is unsuccessful");
}
    else{
        res.json(book);
        console.log("Retrieving bookdetails is successful");
    }
    })
});


router.post('/books',(req,res,next)=>{
    
    bookDetails.create(req.body,function(err,result)
    {
        if(err)
        {
            res.json(err);
        }
        else
        {
            res.json(result);
        }
    })

});


router.get('/getBookDetails/:isbn',(req,res,next)=>
{
    console.log(req.params.isbn);
    bookDetails.findOne({isbn:req.params.isbn},function(err,book){
if(err){
   console.log("Retrieved the book with the given Id is unsuccessful");
}
    else{
        res.json(book);
        console.log("Retrieved the book with the given Id is successful");
    }
    });
});

router.delete('/:isbn',(req,res,next)=>
{
    console.log(req.params.isbn);
    bookDetails.deleteOne({isbn:req.params.isbn},function(err,book){
if(err){
    res.json(err);
   console.log("Deleted the book with the given Id is unsuccessful");
}
    else{
        res.json(book);
        console.log("Deleted the book with the given Id is successful");
    }
    });
});

router.put('/:isbn',(req,res,next)=>
{
    console.log(req.params.isbn);
    bookDetails.findOneAndUpdate({isbn:req.params.isbn},req.body,function(err,book){
if(err){
    res.json(err);
   console.log("Updated the book with the given Id is unsuccessful");
}
    else{
        res.json(book);
        console.log("Updated the book with the given Id is successful");
    }
    });
});

module.exports=router;