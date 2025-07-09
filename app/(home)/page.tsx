import ContactSection from "./_components/ContactSection";
import HeroSection from "./_components/HeroSection";

export default function Home() {
  return (
    <>
      <div className="flex flex-col ">
        <HeroSection />
        <ContactSection />
      </div>
    </>
  );
}
