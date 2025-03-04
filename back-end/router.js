import { Router } from "express";
import* as rh from "./requestHandler.js"

const router=Router()
router.route("/addmenu").post(rh.addMenu)
router.route("/getmenu/:category").get(rh.getMenu)
router.route("/getcate").get(rh.getCate)
router.route("/addcate").post(rh.addcate)
export default router;