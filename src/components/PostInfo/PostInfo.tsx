import { Link, useNavigate, useParams } from "react-router-dom";
import { PostMutation, PostsList } from "../../type";
import React, { useEffect, useState } from "react";
import axiosApi from "../../axiosApi";

interface Props {
  request: () => Promise<PostsList>;
}

const PostInfo: React.FC<Props> = ({ request }) => {
  const params = useParams();
  const navigate = useNavigate();
  const [info, setInfo] = useState<PostMutation | undefined>(undefined);
  const [postKey, setPostKey] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const posts = await request();
        const index = Object.values(posts).findIndex(
          (post) => post.postId === params.postId
        );
        if (index !== -1) {
          setInfo([Object.values(posts)[index]][0]);
          setPostKey([Object.keys(posts)[index]][0]);
        }
      } catch (error) {
        throw error;
      }
    };

    void fetchData();
  }, [request]);

  const onDelete = async () => {
    await axiosApi.delete("posts/" + postKey + ".json");
    navigate("/");
  };

  const timestamp = parseInt(info?.postId || "", 10);
  const date = new Date(timestamp).toLocaleString();

  return (
    <div className="mt-5 shadow py-5 px-4">
      <h3>{info?.title}</h3>
      <p>{info?.description}</p>
      <p className="text-secondary">{date}</p>
      <Link
        className="btn btn-success me-4"
        to={"/post/" + params.postId + "/edit"}
      >
        Edit post
      </Link>
      <button onClick={onDelete} className="btn btn-danger">
        Delete
      </button>
    </div>
  );
};
export default PostInfo;
