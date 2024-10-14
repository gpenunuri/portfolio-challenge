import { useNavigate } from "react-router-dom";
import { useBlogs } from "../../hooks/useBlog";
import cutText from "../../utils/cutText";

export interface IPost {
  categories: string[];
  createdAt: string;
  description: string;
  id: string | number;
  published: boolean;
  thumbnail: string;
  title: string;
}

const Blog = () => {
  const { blogs, isLoading, isError } = useBlogs();
  const navigate = useNavigate();

  const activeBlogs = blogs?.filter((blog: IPost) => blog.published);

  return (
    <section className="blog">
      <div className="blog__text-box">
        <h1 className="blog__title">German's digital advertising blog</h1>
        <h5 className="blog__subtitle">
          Lead generation insights, tips, and best practices from industry
          insiders.
        </h5>
      </div>
      <div className="blog__posts">
        {activeBlogs?.map((post: IPost) => {
          return (
            // biome-ignore lint/a11y/useKeyWithClickEvents: <explanation>
            <div
              className="card"
              key={post.id}
              onClick={() => navigate(`/blog/${post.id}`)}
            >
              <img alt="work1" className="card__picture" src={post.thumbnail} />
              <div className="card__text-box">
                <p className="card__title">{post.title}</p>
                <span className="card__subtitle">
                  {cutText(post.description, 120)}
                </span>
                <div className="card__tags">
                  {post.categories.map((tag: string) => {
                    return (
                      <span className="card__tag" key={tag}>
                        {tag}
                      </span>
                    );
                  })}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Blog;
