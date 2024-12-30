import { Router } from "express"
import * as rh from "./requestHandle.js"
import Auth from "./middleware/Auth.js"

const router=Router()
router.route("/signup").post(rh.signUp)
router.route("/signin").post(rh.signIn)
router.route("/mail").post(rh.mail)



//profile
router.route("/disp").get(Auth,rh.dispUser)
router.route("/delete").delete(rh.deleteUser)
router.route("/edituser").put(rh.editUser)
//adress
router.route("/addaddr").post(Auth,rh.addAddress)
router.route("/dispaddr").get(Auth,rh.displayAddress)
router.route("/uptaddr").put(Auth,rh.updateAddress)
router.route("/deladdr").delete(Auth,rh.deleteAddress)
export default router;