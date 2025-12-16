import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/appComponents/Header';
import Home from './components/home/home';  
import Education from './pages/Education'; 
import Footer from './components/appComponents/Footer';
import Experience from './pages/Experience';   
import ContactPage from './pages/ContactPage';  
import ProjectPage from './pages/ProjectPage';  


function App() {
  return (
    <Router>
      <Header />
      <main>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/projects' element={<ProjectPage />} />
          <Route path='/education' element={<Education />} />
          <Route path='/experience' element={<Experience />} />
          <Route path='/contact' element={<ContactPage />} />
        </Routes>
      </main>
      <Footer />
    </Router>
  )
}

export default App