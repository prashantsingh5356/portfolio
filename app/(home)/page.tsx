import ContactSection from "./_components/ContactSection";
import HeroSection from "./_components/HeroSection";
import TechStackSection from "./_components/TechStackSection";

export default function Home() {
  return (
    <>
      <div className="flex flex-col ">
        <HeroSection />
        <ContactSection />
        <TechStackSection />
      </div>
    </>
  );
}
