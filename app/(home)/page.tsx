import ContactSection from "./_components/ContactSection";
import HeroSection from "./_components/HeroSection";
import TechStack from "./_components/TechStack";

export default function Home() {
  return (
    <>
      <div className="flex flex-col ">
        <HeroSection />
        <ContactSection />
        <div className=" w-100 border-2">
          <TechStack />
        </div>
      </div>
    </>
  );
}
