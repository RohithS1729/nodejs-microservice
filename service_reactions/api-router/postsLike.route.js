const route=require("express").Router()

const postLikeData=require("../controllers/postLikeData")
const modifyPutPosts=require("../controllers/modifyPutPosts")
const getLikesCount=require("../controllers/getLikesCount")
const deleteLikeCount=require("../controllers/deleteLikesCount")



route.get('/posts/likes',getLikesCount)
route.post('/posts/likes',postLikeData);
route.put('/posts/modify',modifyPutPosts)
route.delete('/posts/likes',deleteLikeCount)



module.exports=route