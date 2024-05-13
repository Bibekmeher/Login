const express= require("express");
const router= express.Router();
const contanctForm=require("../controllers/contanct-controller")

router.route("/contanct").post(contanctForm);

module.exports=router;