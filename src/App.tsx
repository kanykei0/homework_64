import { Route, Routes } from "react-router-dom";
import "./App.css";
import Toolbar from "./components/Toolbar/Toolbar";
import Home from "./containers/Home/Home";
import PostForm from "./components/PostForm/PostForm";
import PostInfo from "./components/PostInfo/PostInfo";
import { PostsList } from "./type";
import { useEffect, useState } from "react";
import axiosApi from "./axiosApi";

function App() {
  const [posts, setPosts] = useState<PostsList>({});

  useEffect(() => {
    const request = async () => {
      try {
        const response = await axiosApi.get("posts.json");
        setPosts(response.data);
      } finally {
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
          <Route path="/" element={<Home />} />
          <Route path="/new-post" element={<PostForm />} />
          <Route path="/post/:postId" element={<PostInfo posts={posts} />} />
        </Routes>
      </main>
    </>
  );
}

export default App;
