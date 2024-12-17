import { Router } from "express"
import * as rh from "./requestHandle.js"
import Auth from "./middleware/Auth.js"

const router=Router()
router.route("/signup").post(rh.signUp)
router.route("/signin").post(rh.SignIn)
router.route("/delete/:_id").delete(rh.deleteUser)
export default router;