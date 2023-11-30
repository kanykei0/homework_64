import { Route, Routes } from "react-router-dom";
import "./App.css";
import Toolbar from "./components/Toolbar/Toolbar";
import Home from "./containers/Home/Home";
import PostForm from "./components/PostForm/PostForm";

function App() {
  return (
    <>
      <header>
        <Toolbar />
      </header>
      <main className="container">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/article-form" element={<PostForm />} />
        </Routes>
      </main>
    </>
  );
}

export default App;
