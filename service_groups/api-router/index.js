const router=require("express").Router()
const publicRoute=require("./public.route")
const privateRoute=require("./private.route")


router.use("/Public",publicRoute)
router.use("/Private",privateRoute)


module.exports=router