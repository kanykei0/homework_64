import { Route, Routes } from "react-router-dom";
import "./App.css";
import Toolbar from "./components/Toolbar/Toolbar";
import Home from "./containers/Home/Home";
import PostForm from "./components/PostForm/PostForm";
import PostInfo from "./components/PostInfo/PostInfo";
import axiosApi from "./axiosApi";
import PostEdit from "./components/PostEdit/PostEdit";
import About from "./containers/About/About";
import Contacts from "./containers/Contacts/Contacts";

function App() {
  const request = async () => {
    try {
      const response = await axiosApi.get("posts.json");
      return response.data;
    } catch (error) {
      throw error;
    }
  };

  return (
    <>
      <header>
        <Toolbar />
      </header>
      <main className="container">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/posts" element={<Home />} />
          <Route path="/new-post" element={<PostForm />} />
          <Route
            path="/post/:postId"
            element={<PostInfo request={request} />}
          />
          <Route
            path="/post/:postId/edit"
            element={<PostEdit request={request} />}
          />
          <Route path="/about" element={<About />} />
          <Route path="/contacts" element={<Contacts />} />
        </Routes>
      </main>
    </>
  );
}

export default App;
