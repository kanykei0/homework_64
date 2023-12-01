import { useEffect, useState } from "react";
import axiosApi from "../../axiosApi";
import { PostMutation } from "../../type";
import Posts from "../../components/Posts/Posts";

const Home = () => {
  const [posts, setPosts] = useState<PostMutation[]>([]);

  useEffect(() => {
    const request = async () => {
      try {
        const response = await axiosApi.get("posts.json");
        setPosts(response.data);
      } finally {
        console.log(posts);
      }
    };

    void request();
  }, []);

  return (
    <>
      <div>
        <Posts posts={posts} />
      </div>
    </>
  );
};

export default Home;
