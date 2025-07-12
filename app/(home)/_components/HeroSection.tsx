import Link from "next/link";
import Image from "next/image";
import { FiArrowUpRight } from "react-icons/fi";

const HeroSection = () => {
  return (
    <>
      <div className="animate-fade-in delay-50 flex justify-between w-full min-h-[10vh] mt-25">
        <div className="h-full ">
          <h1 className="animate-hero-name-fade-in font-bold sm:text-3xl text-2xl">
            Prashant Kumar Singh
          </h1>
          <h3 className="animate-hero-title-fade-in mt-1  font-semibold text-zinc-500">
            Full Stack Engineer
          </h3>
        </div>
        <div className="animate-fade-in delay-100 h-inherit bg-amber-400 dark:bg-amber-300 rounded-full max-h-[100px] min-w-[7.5rem] ">
          <Image
            src="/hero_image.png"
            width="100"
            height="100"
            alt="Picture of prashant"
          />
        </div>
      </div>
      <div className="animate-fade-in w-full dark:text-zinc-400 text-zinc-500 ">
        <p className=" text-[1rem] pt-8 text-left font-semibold ">
          Hi, I&apos;m Prashant Kumar Singh, a Full-Stack developer from India.
          I love crafting intuitive and dynamic UIs with React.js and Next.js.
        </p>
        <p className="font-semibold  text-[1rem] pt-5 text-left">
          I am a technology enthusiast driven by the curiosity to build
          meaningful and efficient digital solutions.
        </p>
        <p className="font-semibold  text-[1rem] pt-5 text-left">
          I specialize in building responsive and user-friendly websites,
          creating smooth and secure experiences.
        </p>
        <p className="font-semibold  text-[1rem] pt-5 text-left">
          I enjoy browsing the web and crafting components.These days, I&apos;m
          diving deeper into the worlds of DevOps and AI, expanding my toolkit
          for building faster, smarter, and more resilient systems.
        </p>
        <p className="font-semibold  text-[1rem] pt-5 text-left">
          It&apos;s a continuous journey, and I&apos;m excited about where
          it&apos;s headed.
        </p>
        <p className="font-semibold  text-[1rem] pt-5 text-left">
          Take a look at my work experience{" "}
          <Link href="/work" className="bg-amber-300  dark:text-black p-1">
            here
          </Link>
          <span className="animate-ping ml-1 max-[420px]:hidden ">
            <Link href={"/work"}>
              <FiArrowUpRight className="mt-[-20px] h-3 w-3 bg-amber-400 dark:text-black inline" />
            </Link>
          </span>
        </p>
      </div>
    </>
  );
};

export default HeroSection;
