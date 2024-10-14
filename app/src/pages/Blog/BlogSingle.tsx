import { useParams, useNavigate } from "react-router-dom";
import { useBlog } from "../../hooks/useBlog";

const BlogSingle = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  if (!id) navigate("/404");

  const { blog } = useBlog(id || 0);

  if (!blog) navigate("/404");

  return (
    <section className="blog-single">
      <div className="card" key={blog?.id}>
        <img alt="work1" className="card__picture" src={blog?.thumbnail} />
        <div className="card__text-box">
          <p className="card__title">{blog?.title}</p>
          <span className="card__subtitle">{blog?.description}</span>
          <div className="card__tags">
            {blog?.categories?.map((tag: string) => {
              return (
                <span className="card__tag" key={tag}>
                  {tag}
                </span>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default BlogSingle;
