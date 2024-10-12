import type { IPost } from "../models";
import { postsData as postsMockData } from "../mocks/";

export class postService {
  async getPosts() {
    try {
      const posts: IPost[] = postsMockData;
      console.log(posts);
      return posts;
    } catch (error) {
      console.log(error);
    }
  }

  async getPost(id: string) {
    try {
      const post: IPost | undefined = postsMockData.find((el) => el.id === id);
      return post;
    } catch (error) {
      console.log(error);
    }
  }
}

export const postServices = new postService();
