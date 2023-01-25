const router=require("express").Router()
const groups=require('./gropus.route')

router.use('/',groups)


module.exports=router