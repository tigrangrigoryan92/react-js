import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import About from "./pages/About";
import Posts from "./pages/Posts";
import Navbar from "./components/UI/navbar/Navbar";
import Errors from "./pages/Errors";

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/about"  element={<About />} />
          <Route path="/posts"  element={<Posts />} />
          <Route path='*'  element={<Errors />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};
export default App;
