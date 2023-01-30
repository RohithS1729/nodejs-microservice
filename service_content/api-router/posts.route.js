const route=require('express').Router()

const getPosts=require("../controllers/getPosts")
const postPosts=require("../controllers/postPosts")
const deletePosts=require("../controllers/deletePosts")


const getPostReactions=require("../controllers/getPostReactions")
const postPostReactions=require("../controllers/postPostReactions")
const deletePostReaction=require("../controllers/deletePostReaction")

const getPostComments=require("../controllers/getPostComments")
const postPostComments=require("../controllers/postPostComments")
const deletePostComment=require("../controllers/deletePostComment")

// posts crud
route.get('/',getPosts)
route.post('/',postPosts)
route.delete('/',deletePosts)

// reactions
// post
route.get('/like',getPostReactions)
route.post('/like',postPostReactions)
route.delete('/like',deletePostReaction)

route.get('/comment',getPostComments)
route.post('/comment',postPostComments)
route.delete('/comment',deletePostComment)

// poll




module.exports=route