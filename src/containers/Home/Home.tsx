import { Spinner } from "react-bootstrap";
import { PostsList } from "../../type";
import { useEffect, useState } from "react";
import axiosApi from "../../axiosApi";
import Posts from "../../components/Posts/Posts";

const Home = () => {
  const [loading, setLoading] = useState(false);
  const [posts, setPosts] = useState<PostsList>({});

  useEffect(() => {
    const request = async () => {
      try {
        setLoading(true);
        const response = await axiosApi.get("posts.json");
        setPosts(response.data);
      } finally {
        setLoading(false);
      }
    };
    void request();
  }, []);

  return (
    <>
      <div>{loading ? <Spinner /> : <Posts posts={posts} />}</div>
    </>
  );
};

export default Home;
