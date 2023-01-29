const router=require("express").Router()

const login=require('./login.route')
const signUp=require('./signUp.route')
const getUserProfile=require("../services/getUserProfile")


router.use('/signUp',signUp)
router.use('/login',login)
router.use('/profile',getUserProfile)

module.exports=router