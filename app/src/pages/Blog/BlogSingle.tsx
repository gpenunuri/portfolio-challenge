import { useParams } from "react-router-dom";

const BlogSingle = () => {
  const { id } = useParams();

  return (
    <main>
      <h1>Blog single - {id}</h1>
    </main>
  );
};

export default BlogSingle;
