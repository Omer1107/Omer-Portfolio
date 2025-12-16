import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/appComponents/Header";
import SocialSidebar from "./components/appComponents/SocialSidebar";
import HomePage from "./pages/Home";
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
          <Route path="/" element={<HomePage />} />
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
