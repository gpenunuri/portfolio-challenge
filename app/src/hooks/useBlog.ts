import useSWR from "swr";
import fetcher from "../services/fetcher";

const API_URL = `${import.meta.env.VITE_API_URL}/posts`;

export function useBlog(id: string | number) {
  const { data, error, isLoading } = useSWR(`${API_URL}/${id}`, fetcher);

  return {
    blog: data,
    isLoading,
    isError: error,
  };
}

export function useBlogs() {
  const { data, error, isLoading } = useSWR(API_URL, fetcher);
  console.log({ data });
  return {
    blogs: data,
    isLoading,
    isError: error,
  };
}
