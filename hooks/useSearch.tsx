import { useState, useEffect, useCallback } from "react";
import { format, search } from "../lib/search";

type PostProps = {
  date: string;
  slug: string;
  tags: string[];
  title: string;
};

interface SearchProps {
  posts: PostProps[];
}

const useSearch = ({ posts }: SearchProps) => {
  const [result, setResult] = useState([]);
  const [query, setQuery] = useState("");

  const handleChange = useCallback((e) => {
    const query = format(e.target.value);
    setQuery(query);

    if (query.length) {
      const response = posts.filter((post) => search(post.title, query));
      setResult(response);
    } else {
      setResult(posts);
    }
  }, []);

  useEffect(() => {
    if (posts) {
      setResult(posts);
    }
  }, [posts, setResult]);

  return {
    query,
    result,
    handleChange,
  };
};

export default useSearch;
