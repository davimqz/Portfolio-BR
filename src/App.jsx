import HeroSection from "./assets/components/HeroSection";
import Footer from "./assets/components/Footer";
import ProjectsSection from "./assets/components/ProjectsSection";
import EmailSection from "./assets/components/EmailSection";
import NavBar from "./assets/components/NavBar";
export default function Home() {
  return (
    <main className="flex min-h-screen flex-col bg-[#121212]">
      <NavBar></NavBar>
      <div className="container mt-24 mx-auto px-12 py-4">
        <HeroSection />
        <ProjectsSection />
        <EmailSection></EmailSection>
      </div>
      <Footer />
    </main>
  );
}
