import React from "react";
import Card from "react-bootstrap/Card";
import { PostMutation } from "../../type";
import { Link } from "react-router-dom";

const PostItem: React.FC<PostMutation> = ({ postId, title }) => {
  const timestamp = parseInt(postId, 10);
  const date = new Date(timestamp).toLocaleString();

  return (
    <Card className="mt-3">
      <Card.Body>
        <Card.Text>{date}</Card.Text>
        <Card.Title>{title}</Card.Title>
        <Link to={"/post/" + postId}>View more &gt;</Link>
      </Card.Body>
    </Card>
  );
};

export default PostItem;
