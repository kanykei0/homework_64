import Posts from "../../components/Posts/Posts";
import { Spinner } from "react-bootstrap";
import { PostMutation } from "../../type";
import React from "react";

interface Props {
  loading: boolean;
  posts: PostMutation[];
}

const Home: React.FC<Props> = ({ loading, posts }) => {
  return (
    <>
      <div>{loading ? <Spinner /> : <Posts posts={posts} />}</div>
    </>
  );
};

export default Home;
