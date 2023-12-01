import { Route, Routes } from "react-router-dom";
import "./App.css";
import Toolbar from "./components/Toolbar/Toolbar";
import Home from "./containers/Home/Home";
import PostForm from "./components/PostForm/PostForm";
import PostInfo from "./components/PostInfo/PostInfo";
import { PostMutation } from "./type";
import { useEffect, useState } from "react";
import axiosApi from "./axiosApi";

function App() {
  const [loading, setLoading] = useState(false);
  const [posts, setPosts] = useState<PostMutation[]>([]);

  useEffect(() => {
    const request = async () => {
      try {
        setLoading(true);
        const response = await axiosApi.get("posts.json");
        setPosts(response.data);
      } finally {
        setLoading(false);
        console.log("ok");
      }
    };
    void request();
  }, []);

  return (
    <>
      <header>
        <Toolbar />
      </header>
      <main className="container">
        <Routes>
          <Route path="/" element={<Home loading={loading} posts={posts} />} />
          <Route path="/new-post" element={<PostForm />} />
          <Route path="/post/:postId" element={<PostInfo posts={posts} />} />
        </Routes>
      </main>
    </>
  );
}

export default App;
