import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { Post } from "../../type";
import axiosApi from "../../axiosApi";
import { useNavigate } from "react-router-dom";

const PostForm: React.FC = () => {
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const [post, setPost] = useState<Post>({
    title: "",
    description: "",
  });

  const changePost = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPost((prevState) => ({
      ...prevState,
      [event.target.name]: event.target.value,
    }));
  };

  const onFormSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    try {
      await axiosApi.post("posts.json", post);
      navigate("/");
      console.log(post);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="col-6 mx-auto mt-5">
      <h3 className="pt-4">Add new post</h3>
      <Form onSubmit={onFormSubmit}>
        <Form.Group className="mb-3 mt-4">
          <Form.Label>Title</Form.Label>
          <Form.Control
            name="title"
            type="text"
            placeholder="..."
            onChange={changePost}
          />
        </Form.Group>
        <Form.Group className="mb-3 mt-4">
          <Form.Label>Description</Form.Label>
          <Form.Control
            name="description"
            type="text"
            placeholder="..."
            onChange={changePost}
          />
        </Form.Group>
        <Button variant="primary" type="submit" className="mt-4">
          Submit
        </Button>
      </Form>
    </div>
  );
};

export default PostForm;
