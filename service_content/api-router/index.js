const router=require("express").Router()
const postsRoute=require("./posts.route")
const pollsRoute=require("./polls.route")



router.use('/posts',postsRoute)
router.use('/polls',pollsRoute)

module.exports=router