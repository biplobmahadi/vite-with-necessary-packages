import { Navigate, Route, Routes } from "react-router-dom";
import About from "../../components/About";
import Contact from "../../components/Contact";
import Home from "../../components/Home";
import Login from "../../components/Login";
import NotFound from "../../components/NotFound";

export default function PublicRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/home" />} />
      <Route path="/home" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/login" element={<Login />} />
      <Route path="*/*" element={<NotFound />} />
    </Routes>
  );
}
