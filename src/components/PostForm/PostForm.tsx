import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { Post } from "../../type";
import axiosApi from "../../axiosApi";
import { useNavigate } from "react-router-dom";
import { Spinner } from "react-bootstrap";

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
    setLoading(true);

    const date = new Date().getTime();
    const newPost = {
      postId: date,
      ...post,
    };

    try {
      await axiosApi.post("posts.json", newPost);
      navigate("/");
    } finally {
      setLoading(false);
    }
  };

  let form = (
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
  );

  if (loading) {
    form = <Spinner />;
  }

  return (
    <div className="col-6 mx-auto mt-5">
      <h3 className="pt-4">Add new post</h3>
      {form}
    </div>
  );
};

export default PostForm;
