import { Link, useNavigate, useParams } from "react-router-dom";
import { PostsList } from "../../type";
import React from "react";
import axiosApi from "../../axiosApi";

interface Props {
  posts: PostsList;
}

const PostInfo: React.FC<Props> = ({ posts }) => {
  const params = useParams();
  const navigate = useNavigate();

  const index = Object.values(posts).findIndex(
    (post) => post.postId.toString() === params.postId
  );
  let info;

  if (index !== -1) {
    info = [Object.values(posts)[index]][0];
  }

  const onDelete = async () => {
    await axiosApi.delete("posts/" + [Object.keys(posts)[index]][0] + ".json");
    navigate("/");
  };

  return (
    <div className="mt-5">
      <h3>{info?.title}</h3>
      <p>{info?.description}</p>
      <Link to={"/post/" + params.postId + "/edit"}>Edit Article</Link>
      <button onClick={onDelete} className="btn btn-danger">
        delete
      </button>
    </div>
  );
};
export default PostInfo;
