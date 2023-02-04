const route=require('express').Router()

// posts crud
const {getPosts}=require("../controllers/content.controller")
const {postPosts}=require("../controllers/content.controller")
const {deletePosts}=require("../controllers/content.controller")

// like
const {getPostReactions,postPostReactions,deletePostReaction}=require("../controllers/reactions.controller")
// const {}=require("../controllers/reactions.controller")
// const {}=require("../controllers/content.controller")

// comments
const {getPostComments,postPostComments,deletePostComment}=require("../controllers/reactions.controller")
// const {}=require("../controllers/content.controller")
// const {}=require("../controllers/content.controller")

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