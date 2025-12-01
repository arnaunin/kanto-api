import { Router } from "express"
import { getImages } from "../controllers/images.controller.js"

const router = Router()

router.get("/", getImages)

export default router