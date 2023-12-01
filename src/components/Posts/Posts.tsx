import React from "react";
import { PostMutation } from "../../type";
import PostItem from "./PostItem";

interface Props {
  posts: PostMutation[];
}

const Posts: React.FC<Props> = ({ posts }) => {
  return (
    <div>
      {Object.values(posts).map((post) => (
        <PostItem
          key={post.postId}
          title={post.title}
          description={post.description}
        />
      ))}
    </div>
  );
};

export default Posts;
