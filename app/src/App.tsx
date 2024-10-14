import { Routes, Route, BrowserRouter as Router } from "react-router-dom";
import About from "./pages/About";
import Blog from "./pages/Blog";
import BlogSingle from "./pages/Blog/BlogSingle";
import Contact from "./pages/Contact";
import Home from "./pages/Home";
import NotFound from "./pages/404";
import "./styles/main.scss";
import Navbar from "./components/Navbar";

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="blog/:id" element={<BlogSingle />} />
          <Route path="blog" element={<Blog />} />
          <Route path="contact" element={<Contact />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
