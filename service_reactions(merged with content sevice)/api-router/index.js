const router=require("express").Router()

const postsLikeRoute=require("./postsLike.route")
const pollsVoteRoute=require("./pollsVote.route")

router.use('/posts/like',postsLikeRoute)
// router.use('/posts/comment')
router.use('/polls/vote',pollsVoteRoute)
// router.use('/polls/comment')

module.exports=router