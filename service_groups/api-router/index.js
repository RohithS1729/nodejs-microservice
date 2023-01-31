const router=require("express").Router()
const publicRoute=require("./public.route")
const privateRoute=require("./private.route")
const createGroupRoute=require("./createGroup.route")


router.use("/Public",publicRoute)
router.use("/Private",privateRoute)
router.use("/create",createGroupRoute)


module.exports=router