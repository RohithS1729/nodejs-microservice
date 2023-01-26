const router=require("express").Router()
const postsRoute=require("./posts.route")
const pollsRoute=require("./polls.route")
// router.use('/groups',groups)
// router.use('/profile',profile)
// router.use('/signUp',signUp)
// router.use('/',homeOrLogin)


router.use('/posts',postsRoute)
router.use('/polls',pollsRoute)

module.exports=router