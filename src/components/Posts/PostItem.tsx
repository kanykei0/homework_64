import React from "react";
import Card from "react-bootstrap/Card";
import { Post } from "../../type";

const PostItem: React.FC<Post> = ({ title, description }) => {
  return (
    <Card>
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Text>{description}</Card.Text>
      </Card.Body>
    </Card>
  );
};

export default PostItem;
