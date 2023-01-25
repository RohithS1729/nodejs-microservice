// const route=require('express').Router()
// const homeOrLogin=require("../controllers/homeOrLoginController")
// const getProfileInfo=require("../controllers/getProfileInfo")
// const getHome=require("../controllers/getHome")

const postLikeData=require("../controllers/postLikeData")

const getPosts=require("../controllers/getPosts")
const postPosts=require("../controllers/postPosts")
const putPosts=require('../controllers/putPosts')
const modifyPutPosts=require("../controllers/modifyPutPosts")
const getLikesCount=require("../controllers/getLikesCount")
const deleteLikeCount=require("../controllers/deleteLikesCount")
const postVote=require("../controllers/postVote")
const getVote=require("../controllers/getVote")
const postModifyVote=require('../controllers/postModifyVote')


// const storage =require('../lib/mutler');
// console.log('here')
// route.post('/posts',storage.single('file'),postPosts)
route.post('/posts',postPosts)
route.delete('/posts/likes',deleteLikeCount)
route.post('/posts/likes',postLikeData);
route.get('/posts/likes',getLikesCount)
route.put('/posts/modify',modifyPutPosts)
route.put('/posts',putPosts)
route.post('/polls/vote',postVote)
route.post('/polls/vote/modify',postModifyVote)
route.get('/polls/vote',getVote)

route.get('/posts',getPosts)
// route.post('/',homeOrLogin)

// route.get('/',getHome)
route.get('/',getProfileInfo)

module.exports=route