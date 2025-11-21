import { Router } from "express"
import getFirstGen from "../controllers/pokemon.controller.js"

const router = Router()

router.get("/", getFirstGen)

export default router