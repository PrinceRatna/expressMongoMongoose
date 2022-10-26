const express=require('express');
const mongoose=require('mongoose');
const router=express.Router();
const todoSchema= require('./schemas/schemas')
const Todo = new mongoose.model('Todo',todoSchema);
const ObjectId=require('mongodb').ObjectId;

// const todosCollection= require('../index')
 //---------- GET ALL THE TODOS-------------

 router.get('/',async(req,res)=>{
    try{
       const result =await Todo.find({status:'inactive'}).select({
        _id:0,
        __v:0,
        date:0,
        //output result a _id,__v,date bade baki sob dekhte parbo.
       }).limit(4)
       //limit er maddhome first 4 ta data pabo.
       console.log('success', result)
       res.json({message: "Todos were got successfully!", result })   
    }
    catch (err) {
        console.log('error', err)
        res.status(500).json({error:'There was a Server Side Error!'})
     }
   
 })

  //---------- GET A  TODO BY ID-------------

 router.get('/:id',async(req,res)=>{
    try{
        const result =await Todo.find({_id : req.params.id})
        console.log('success', result)
        res.json({message: "Todos were got successfully!", result })   
     }
     catch (err) {
         console.log('error', err)
         res.status(500).json({error:'There was a Server Side Error!'})
      }

 })

 //---------- POST  A TODO-------------

 router.post('/',async(req,res)=>{

    const newTodo=new Todo(req.body);
    await newTodo.save((err)=>{
        if(err){
            res.status(500).json({
                error:"there is a server side error"
            });

        }else{
            res.status(200).json({
                message:'Todo was inserted successfully'
            })
        }
    });   
    // res.send(req.body);

    //:::::::::::::::: res.send er jonno error khaichilam. karon ta niche dilam:::::::::

    // Make sure the following functions are called only once per request:
    // res.json()
    // res.send()
    // res.redirect()
    // res.render()
    // (and a few more that are rarely used, check the accepted answer)
    
    // The route callback will not return when these res functions are called
   
 })

 //---------- POST MULTIPLE TODOS-------------

 router.post('/all',async(req,res)=>{
    await Todo.insertMany(req.body,(err)=>{
        if(err){
            res.status(500).json({
                error:"there is a server side error"
            });

        }else{
            res.status(200).json({
                message:'Todos were inserted successfully'
            });
        }
    })
 })

 //----------UPDATE A  TODO

 router.put('/:id',async(req,res)=>{
   try {
    const id=req.params.id;
    const result = await Todo.updateOne(
        {_id : req.params.id},
        {
            $set : {
                status : "active"
            }
        },
        );
        console.log('success', result)
        res.json({message: "Todo Was Update successfully!", result })

    }
 catch (err) {
   console.log('error', err)
   res.status(500).json({error:'There was a Server Side Error!'})
}
})
 //----------DELETE A  TODO
 router.delete('/:id',async(req,res)=>{
    try{
        await Todo.deleteOne({_id : req.params.id})
        console.log('todo was deleted successfully')
        res.json({message: "Todo  was deleted successfully!" })   
     }
     catch (err) {
         console.log('error', err)
         res.status(500).json({error:'There was a Server Side Error!'})
      }

 })
 module.exports=router;