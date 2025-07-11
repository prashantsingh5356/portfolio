import Link from "next/link";

import {
  RiNextjsFill,
  RiTailwindCssFill,
  RiVercelFill,
  RiGithubFill,
} from "react-icons/ri";
import { SiShadcnui, SiTypescript } from "react-icons/si";

const AboutSiteSection = () => {
  return (
    <div className="mt-20  min-h-30">
      <h1 className=" tracking-tight font-bold text-4xl ">About this site</h1>
      <p className="text-lg my-7 font-semibold">
        {" "}
        Curious about this site? It features:
      </p>
      <div className="mt-10">
        <h1 className="tracking-tight font-bold text-2xl">Tech stack</h1>
        <p className="my-7 font-semibold">
          This site is crafted with Next.js, Tailwind CSS, ShadCN and Aceternity
          UI, with Vercel handling the hosting. Check out the code on{" "}
          <Link
            className=" border-amber-300 border-b-2"
            href="https://github.com/prashantsingh5356/portfolio"
            target="_blank"
          >
            Github
          </Link>
        </p>
        <div className="w-full h-50 grid  grid-cols-3 grid-rows-2 mt-10 ">
          <div className="w-[inherit] h-25  ">
            <RiNextjsFill className="w-[inherit] h-20" />
          </div>
          <div className="w-[inherit] h-25  ">
            <RiTailwindCssFill className="w-[inherit] h-20" />
          </div>
          <div className="w-[inherit] h-25  ">
            <SiShadcnui className="w-[inherit] h-15 mt-2" />
          </div>
          <div className="w-[inherit] h-25  ">
            <RiVercelFill
              className="w-[inherit] h-20
            "
            />
          </div>
          <div className="w-[inherit] h-25  ">
            <RiGithubFill className="w-[inherit] h-20" />
          </div>
          <div className="w-[inherit] h-25  ">
            <SiTypescript className="w-[inherit] h-15 mt-2" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutSiteSection;
