import { Router } from "express"
import * as rh from "./reuestHandler.js"
const router=Router()

router.route("/addtodo").post(rh.addTodo)
router.route("/displaytodo").get(rh.displayTodo)
router.route("/deletetodo/:_id").delete(rh.deleteTodo)
export default router