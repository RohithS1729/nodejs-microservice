const route=require("express").Router()

const postLikeData=require("../controllers/postLikeData")
const modifyPutPosts=require("../controllers/modifyPutPosts")
const getLikesCount=require("../controllers/getLikesCount")
const deleteLikeCount=require("../controllers/deleteLikesCount")



route.get('/',getLikesCount)
route.post('/',postLikeData);
route.put('/modify',modifyPutPosts)
route.delete('/',deleteLikeCount)



module.exports=route