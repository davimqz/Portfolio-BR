import { Routes, Route } from "react-router-dom";
import ProjectsSection from "./assets/components/ProjectsSection";
import Footer from "./assets/components/Footer";
import EmailSection from "./assets/components/EmailSection";
import HeroSection from "./assets/components/HeroSection";

function App() {
  return (
    <div className="container mt-24 mx-auto px-12 py-4">
      <Routes>
        <Route
          path="/"
          element={
            <>
              <HeroSection />
              <ProjectsSection />
              <Footer />
              <EmailSection />
            </>
          }
        />

      </Routes>
    </div>
  );
}

export default App;
