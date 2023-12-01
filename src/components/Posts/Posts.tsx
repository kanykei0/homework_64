import React from "react";
import { PostsList } from "../../type";
import PostItem from "./PostItem";

interface Props {
  posts: PostsList;
}

const Posts: React.FC<Props> = ({ posts }) => {
  return (
    <div>
      {Object.keys(posts).map((key) => (
        <PostItem
          key={key}
          postId={posts[key].postId}
          title={posts[key].title}
          description={posts[key].description}
        />
      ))}
    </div>
  );
};

export default Posts;
