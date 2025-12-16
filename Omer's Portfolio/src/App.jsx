import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/appComponents/Header";
import SocialSidebar from "./components/appComponents/SocialSidebar";
import Home from "./components/Home/home";
import EducationPage from "./pages/Education";
import Footer from "./components/appComponents/Footer";
import ExperiencePage from "./pages/Experience";
import ContactPage from "./pages/ContactPage";
import ProjectPage from "./pages/ProjectPage";
import { Toaster } from "./components/ui/toaster";
import BackToTop from "./components/appComponents/BackToTop";

function App() {
  return (
    <Router>
      <SocialSidebar />
      <Header />
      <Toaster />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projects" element={<ProjectPage />} />
          <Route path="/education" element={<EducationPage />} />
          <Route path="/experience" element={<ExperiencePage />} />
          <Route path="/contact" element={<ContactPage />} />
        </Routes>
      </main>
      <Footer />
      <BackToTop />
    </Router>
  );
}

export default App;
