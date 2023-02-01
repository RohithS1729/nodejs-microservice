const route=require('express').Router()

const {getPosts}=require("../controllers/content.controller")
const {postPosts}=require("../controllers/content.controller")
const {deletePosts}=require("../controllers/content.controller")


const {getPostReactions}=require("../controllers/content.controller")
const {postPostReactions}=require("../controllers/content.controller")
const {deletePostReaction}=require("../controllers/content.controller")

const {getPostComments}=require("../controllers/content.controller")
const {postPostComments}=require("../controllers/content.controller")
const {deletePostComment}=require("../controllers/content.controller")

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