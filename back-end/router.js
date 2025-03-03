import { Router } from "express";
import* as rh from "./requestHandler.js"

const router=Router()
router.route("/addmenu").post(rh.addMenu)
export default router;