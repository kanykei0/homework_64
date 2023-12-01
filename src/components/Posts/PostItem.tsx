import React from "react";
import Card from "react-bootstrap/Card";
import { PostMutation } from "../../type";
import { Link } from "react-router-dom";

const PostItem: React.FC<PostMutation> = ({ postId, title, description }) => {
  return (
    <Card className="mt-3">
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Text>{description}</Card.Text>
        <Link to={"/post/" + postId}>View more &gt;</Link>
      </Card.Body>
    </Card>
  );
};

export default PostItem;
