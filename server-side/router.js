import { Router } from "express";
import * as rh from "./requestHandler.js"


const router=Router()
router.route("/addemp").post(rh.addEmp)
router.route("/displayemps").get(rh.displayEmps)
router.route("/displayemp/:_id").get(rh.displayEmp)
router.route("/updateemp/:_id").put(rh.updateEpm)
router.route("/deleteemp/:_id").delete(rh.deleteEmp)



export default router