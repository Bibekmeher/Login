const express = require("express");
const router = express.Router();
const authcontroller = require("../controllers/auth-controller");
const signupSchema = require("../Validators/auth-validators");
const validate = require("../middlewares/validate-middleware");

// router.get("/" ,(req,res)=>{
//     res.status(200).send({message:"Welcome to the API through router"});
// });

router.route("/").get(authcontroller.home);
router.route("/register").post(validate(signupSchema),authcontroller.register);
router.route("/login").post(authcontroller.login);

module.exports = router;
