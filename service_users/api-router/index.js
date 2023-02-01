const router=require("express").Router()

const login=require('./login.route')
const signUp=require('./signUp.route')
const {userProfile}=require("../controllers/users.controller")


router.use('/signUp',signUp)
router.use('/login',login)
router.use('/profile',userProfile)

module.exports=router