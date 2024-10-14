import axios from "axios";

const fetcher = async (url: string) => {
  const { data } = await axios.get(url, {
    headers: {
      Accept: "application/json, text/plain, */*",
      "Content-Type": "application/json; charset=utf-8",
    },
  });
  return data;
};

export default fetcher;
