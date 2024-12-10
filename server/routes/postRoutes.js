const express = require('express')
const postModel = require('../models/posts')
const {ObjectId} = require('mongodb')
const commentModel = require('../models/comments')
const challengeModel = require('../models/challenge.js')
const data = require('../utilities/data')
const upload = require('../multer.js')


route = express.Router();

route.get('/seed',async(req,res)=>{
    postModel.collection.drop() // delete the collection document and inialise it with prototype data.js
    commentModel.collection.drop() // same here for comments
    data.posts.forEach(async(post) => {
      const comment =  new commentModel({user_id:post.user_id,post_id:post.id, content:[{source_id:0,comment:"I am your Admin, Welcome"}] })
      await comment.save()
      const newPost =  new postModel(post)
      newPost.comments.push(comment.content[0])
      await newPost.save()
    })
    const posts = await postModel.find({}).limit(20)
    if(!posts) return res.json({error:"posts list is empty"})
    res.json(posts).status(200) 
})

route.get('/challenges/seed',async(req,res)=>{
    challengeModel.collection.drop() // delete the collection document and inialise it with prototype data.js
    data.challenges.forEach(async(challenge) => {
    
      const newChallenge=  new challengeModel(challenge)
      await newChallenge.save()
    })
    const challenges = await challengeModel.find({}).limit(20)
    if(!challenges) return res.json({error:"challenge list is empty"})
    res.json(challenges).status(200) 
})

route.post('/upload',upload.single('video'),async(req,res)=>{
    console.log('I am here')
    if(!req.file){
        return res.status(400).send('no file to upload')
    }
    const challenge = {
        origin_id:req.body.origin_id,
        video_url:"/static/videos/" + req.file.originalname,
        desc: req.body.description,
        category : "eating context",
        like_count:0,
        participants:[{user_id:req.body.user_id ,
             video_url:"/static/videos/" + req.file.originalname,
             likes:0,
             votes:0
            }]    
    }
    const newChallenge = await challengeModel(challenge)
    await newChallenge.save()
    res.json( newChallenge)
})


route.route('/')
    .get(async(req,res)=> { // get all posts for all Posts
        const posts = await postModel.find({}).limit(20)
        if(!posts) return res.json({error:"posts list is empty"})
        res.json(posts).status(200)
    })
    .post(validatePostData,async(req,res)=>{ 
        const comment =  new commentModel(// for each post , I create a welcome message from the admin 
               {
                user_id:req.body.user_id,
                post_id:req.body.id, 
                content:[{source_id:0,comment:"I am your Admin, Welcome"}] 
              })
        await comment.save()
        const post = req.body
        post["comments"] = [comment.content[0]] // i created and initialised template comment for the new post
        const newPost = new postModel(post)
        if(! newPost) return res.json({error:"can't create the Post"})
        await newPost.save() 
        res.json(newPost)  
    })
async function validatePostData(req,res,next) {
    if(!req.body.id || !req.body.user_id)
       return res.status(404).json({error:"invalid data"}) // we don't want to save post without required fields id and user_id
    const post = await postModel.findOne({id:req.body.id})
       if(post) return res.status(404).json({error:"ID exist or invalid"}) // id is unique for each post

    next()
}  

// access post by their _id , delete and update 
route.route('/post/:id')
     .get(validateMongoObjectId,async(req,res)=>{
       const _id = req.params.id;
       const post = await postModel.findById(_id)
       if(!post) return res.json({error:"posts does't exist"}).status(404)
       res.json(post).status(200)
     })
     .delete(validateMongoObjectId,async(req,res)=>{
        const _id = req.params.id;
        const post = await postModel.findByIdAndDelete(_id)
        if(!post) return res.json({error:"posts does't exist"}).status(404)
        res.json(post).status(200)
      })
     .patch(validateMongoObjectId,async(req,res)=>{ // we update the entire post ,  user_id ,desc , imageurl ...
        if(req.body.id) return res.status(404).json({error:"can't update post ID forbidden"})
        if(!req.body.user_id) return res.status(404).json({error:"invalid data"}) 
        const _id = req.params.id;
        const post = await postModel.findByIdAndUpdate(
              _id,
               req.body,
               { new: true } 
               )
        if(!post) return res.json({error:"posts does't exist"}).status(404)
        res.json(post).status(200)
     })

//access and manages all posts of user X , user_id as a params

route.route('/user/:id')
     .get(async(req,res)=>{
       const query = {user_id:req.params.id};
       const posts = await postModel.find(query)
       if(posts.length == 0) return res.json({error:"user does't have posts yet"}).status(404)
       res.json(posts).status(200)
     })
     .delete(async(req,res)=>{
        const query = {user_id:req.params.id};
        const posts = await postModel.deleteMany(query,{ new: true } )
        if(posts.length == 0 ) return res.json({error:"user does't have posts yet"}).status(404)
        res.json(posts).status(200)
      })
     

// get , delete and update a user post by user_id as paramas and post id as a query

route.route('/user/post/:id')
     .get(async(req,res)=>{
        const query = {user_id:req.params.id,id:req.query.id}
        const post = await postModel.findOne(query)
        if(!post) return res.json({error:"can't find the post"}).status(404) 
        res.status(200).json(post)
     })
     .delete(async(req,res)=>{
        const query = {user_id:req.params.id,id:req.query.id}
        const post = await postModel.deleteOne(
            query,
            { new: true } 
            )
        if(!post) return res.json({error:"can't find the post"}).status(404) 
        res.status(200).json(post)
     })
     .patch(async(req,res)=>{
        if(req.body.id || req.body.user_id) return res.json({error:"can't modify Ids, forbidden"}).status(404)
        const query = {user_id:req.params.id,id:req.query.id}
        const post = await postModel.updateOne(
            query,
            req.body,
            { new: true } 
            )
        if(!post) return res.json({error:"can't find the post"}).status(404) 
        res.status(200).json(post)
     })


 // add comment to post from user X  , paramas refer to user the owner of the post
 //req.body will contain the user who comments source_id and a content of the comment
route.patch('/comments/add/:id',async(req,res)=>{
    const query = { user_id:Number(req.params.id) ,post_id:Number(req.query.post_id)}
    if(!req.body.source_id || !req.body.content) 
        return res.status(404).json({error:"Invalid request , make sure you send source_id and content"})
    const comment = req.body; //must have source id (the user who commented with comment content)
    const post = await postModel.findOne({user_id:req.params.id,id:req.query.post_id})
    if (!post) return res.status(404).send('Post not found');
    const newComment = await commentModel.findOneAndUpdate(
        query,  
        {
            $push: { content : comment }
         },
         { new:true } 
        )   
    post.comments.push(comment) 
    await post.save();
    res.json(post).status(201) 
})   

// get all comments of a post 
route.get('/comments/all/:id',validateMongoObjectId,async(req,res)=> {
   const _id = req.params.id ; 
   const post = await postModel.findById(_id)
   if (!post) return res.status(404).send('Post not found');
   res.json(post.comments) 
})
//delete all comments of post
route.delete('/comments/delete/:id',validateMongoObjectId,async(req,res)=> {
    const _id = req.params.id ; 
    const post = await postModel.findByIdAndUpdate(
        _id,
        { $set: { comments: [] } },
      { new: true }
        )
    if (!post) return res.status(404).send('Post not found');
    res.json(post) 
 })


// middleware to validate mongo objectId _id
function validateMongoObjectId(req,res,next) {
    if (!ObjectId.isValid(req.params.id)) return res.status(404).json({Error:"error in request ID"});
    next()
}    


module.exports = route; 