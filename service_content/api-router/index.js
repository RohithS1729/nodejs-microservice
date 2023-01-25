const router=require("express").Router()
const homeOrLogin=require('./homeOrLogin.route')
const profile=require('./profile.route')
const signUp=require('./signUp.route')
const groups=require('./gropus.route')

// router.use('/groups',groups)
// router.use('/profile',profile)
// router.use('/signUp',signUp)
router.use('/',homeOrLogin)

module.exports=router