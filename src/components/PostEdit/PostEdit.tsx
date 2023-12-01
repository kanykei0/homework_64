import React, { useState, useEffect } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { Post, PostsList } from "../../type";
import axiosApi from "../../axiosApi";
import { useNavigate, useParams } from "react-router-dom";
import { Spinner } from "react-bootstrap";

interface Props {
  posts: PostsList;
}

const PostEdit: React.FC<Props> = ({ posts }) => {
  const params = useParams();
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const [info, setInfo] = useState<Post | undefined>(undefined);

  useEffect(() => {
    const index = Object.values(posts).findIndex(
      (post) => post.postId.toString() === params.postId
    );

    if (index !== -1) {
      setInfo(Object.values(posts)[index]);
    }
  }, [params.postId, posts]);

  const [post, setPost] = useState<Post>({
    title: info?.title || "",
    description: info?.description || "",
  });

  useEffect(() => {
    setPost({
      title: info?.title || "",
      description: info?.description || "",
    });
  }, [info]);

  const changePost = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPost((prevState) => ({
      ...prevState,
      [event.target.name]: event.target.value,
    }));
  };

  const onFormSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    setLoading(true);

    const index = Object.values(posts).findIndex(
      (post) => post.postId.toString() === params.postId
    );
    let postIndex;

    if (index !== -1) {
      postIndex = [Object.keys(posts)[index]][0];
    }

    try {
      await axiosApi.put("posts/" + postIndex + ".json", post);
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
          value={post.title}
        />
      </Form.Group>
      <Form.Group className="mb-3 mt-4">
        <Form.Label>Description</Form.Label>
        <Form.Control
          name="description"
          type="text"
          placeholder="..."
          onChange={changePost}
          value={post.description}
        />
      </Form.Group>
      <Button variant="primary" type="submit" className="mt-4">
        Edit
      </Button>
    </Form>
  );

  if (loading) {
    form = <Spinner />;
  }

  return (
    <div className="col-6 mx-auto mt-5">
      <h3 className="pt-4">Edit post</h3>
      {form}
    </div>
  );
};

export default PostEdit;
