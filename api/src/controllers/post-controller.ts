import { postServices } from "../services/post";
import type { Request, Response } from "express";

class postController {
  getPosts = async (req: Request, res: Response) => {
    const posts = await postServices.getPosts();
    res.send(posts);
  };

  getPost = async (req: Request, res: Response) => {
    const id = req.params.id;
    const post = await postServices.getPost(id);
    res.send(post);
  };
}

export const PostController = new postController();
