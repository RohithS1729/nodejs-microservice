const route=require('express').Router()
const loginController=require("../controllers/loginController")

route.post('/',loginController)







// const getHome=require("../controllers/getHome")
// const getPosts=require("../controllers/getPosts")
// const postPosts=require("../controllers/postPosts")
// const putPosts=require('../controllers/putPosts')
// const modifyPutPosts=require("../controllers/modifyPutPosts")
// const postLikeData=require("../controllers/postLikeData")
// const getLikesCount=require("../controllers/getLikesCount")
// const deleteLikeCount=require("../controllers/deleteLikesCount")
// const postVote=require("../controllers/postVote")
// const getVote=require("../controllers/getVote")
// const postModifyVote=require('../controllers/postModifyVote')
// const getProfileInfo=require("../controllers/getProfileInfo")


// route.post('/posts',postPosts)
// route.delete('/posts/likes',deleteLikeCount)
// route.post('/posts/likes',postLikeData);
// route.get('/posts/likes',getLikesCount)
// route.put('/posts/modify',modifyPutPosts)
// route.put('/posts',putPosts)
// route.post('/polls/vote',postVote)
// route.post('/polls/vote/modify',postModifyVote)
// route.get('/polls/vote',getVote)

// route.get('/posts',getPosts)



// route.get('/',getHome)
// route.get('/',getProfileInfo)

module.exports=route