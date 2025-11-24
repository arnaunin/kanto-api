import { Router } from "express"
import { getFirstGen, createFirstGen } from "../controllers/pokemon.controller.js"

const router = Router()

router.get("/", getFirstGen)
router.post('/bulk', createFirstGen)

export default router