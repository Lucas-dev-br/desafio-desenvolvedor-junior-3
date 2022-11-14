import express from "express"
import {updatePost, addPost, deletePost, getPost, getPosts} from "../controllers/post"

const router = express.Router()

router.get("/", getPosts)
router.get("/:id", getPost)
router.post("/", addPost)
router.delete("/:id", deletePost)
router.update("/:id", updatePost)

export default router