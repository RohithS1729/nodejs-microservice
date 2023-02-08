const router=require("express").Router()

const login=require('./login.route')
const signUp=require('./signUp.route')
const {userProfile}=require("../controllers/users.controller")





router.use('/signUp',signUp)

/**
 * @swagger
 * /login:
 *   post:
 *     description: Get all books
 *     parameters:
 *      - name: username
 *        description: username
 *        
 *        required: true
 *        type: string

 */
router.use('/login',login)
router.use('/profile',userProfile)

module.exports=router