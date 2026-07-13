import { BrowserRouter, Routes, Route } from "react-router-dom";

// Layout Components
import AnnouncementBar from "./components/AnnouncementBar";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import ScrollToTop from "./components/ScrollToTop";

// Pages
import Home from "./pages/Home";
import About from "./pages/About";
import Courses from "./pages/Courses";
import CourseDetail from "./pages/CourseDetail";
import Admissions from "./pages/Admissions";
import Faculty from "./pages/Faculty";
import Placements from "./pages/Placements";
import Gallery from "./pages/Gallery";
import Blog from "./pages/Blog";
import Contact from "./pages/Contact";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import RefundPolicy from "./pages/RefundPolicy";
import TermsConditions from "./pages/TermsConditions";
import NotFound from "./pages/NotFound";


function App() {

  return (

    <BrowserRouter>

      <ScrollToTop />

      <AnnouncementBar />

      <Navbar />


      <main>

        <Routes>

          {/* Main Pages */}

          <Route 
            path="/" 
            element={<Home />} 
          />

          <Route 
            path="/about" 
            element={<About />} 
          />

          <Route 
            path="/courses" 
            element={<Courses />} 
          />

          <Route 
            path="/courses/:id" 
            element={<CourseDetail />} 
          />

          <Route 
            path="/admissions" 
            element={<Admissions />} 
          />

          <Route 
            path="/faculty" 
            element={<Faculty />} 
          />

          <Route 
            path="/placements" 
            element={<Placements />} 
          />

          <Route 
            path="/gallery" 
            element={<Gallery />} 
          />

          <Route 
            path="/blog" 
            element={<Blog />} 
          />

          <Route 
            path="/contact" 
            element={<Contact />} 
          />


          {/* Legal Pages */}

          <Route 
            path="/privacy-policy" 
            element={<PrivacyPolicy />} 
          />

          <Route 
            path="/refund-policy" 
            element={<RefundPolicy />} 
          />

          <Route 
            path="/terms-conditions" 
            element={<TermsConditions />} 
          />


          {/* 404 */}

          <Route 
            path="*" 
            element={<NotFound />} 
          />


        </Routes>

      </main>


      <Footer />


    </BrowserRouter>

  );

}


export default App;