import express from "express";
import { PostController } from "../controllers";

export const router = express.Router();

router.get("/posts", PostController.getPosts);
router.get("/posts/:id", PostController.getPost);
