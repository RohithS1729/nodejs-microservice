const router=require("express").Router()

const login=require('./login.route')
const signUp=require('./signUp.route')


router.use('/signUp',signUp)
router.use('/login',login)

module.exports=router