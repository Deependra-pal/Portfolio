import { Routes, Route } from "react-router-dom";
import PageShell from "./components/layout/PageShell";
import Home from "./pages/Home";
import About from "./pages/About";
import Services from "./pages/Services";
import WebDevelopment from "./pages/WebDevelopment";
import AppDevelopment from "./pages/AppDevelopment";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";

const App = () => {
  return (
    <Routes>
      <Route element={<PageShell />}>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/web-development" element={<WebDevelopment />} />
        <Route path="/app-development" element={<AppDevelopment />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
};

export default App;
