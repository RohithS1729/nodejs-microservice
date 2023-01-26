const route=require('express').Router()

const getPosts=require("../controllers/getPosts")
const postPosts=require("../controllers/postPosts")
const deletePosts=require("../controllers/deletePosts")

route.get('/',getPosts)
route.post('/',postPosts)
route.delete('/',deletePosts)


module.exports=route