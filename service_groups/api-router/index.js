const router=require("express").Router()
const publicRoute=require("./public.route")
const privateRoute=require("./private.route")
const defaultRoute=require("./default.route")


router.use("/Public",publicRoute)
router.use("/Private",privateRoute)
router.use("/",defaultRoute)



module.exports=router