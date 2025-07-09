import Link from "next/link";

import TechStack from "./TechStack";
import { FiArrowUpRight } from "react-icons/fi";

const TechStackSection = () => {
  return (
    <div>
      <div className="mt-5">
        <span className="font-bold text-2xl  ">Tech Stack</span>

        <span className="flex ">
          <span className="text-zinc-500 dark:text-zinc-400 font-semibold">
            Take a look at my project build using these technologies{" "}
            <Link href="/project" className="bg-amber-300 dark:text-black p-1">
              here
            </Link>
          </span>
          <span className="animate-ping ml-2 max-[580px]:hidden">
            <Link href={"/project"}>
              <FiArrowUpRight className="h-2 w-2 bg-amber-400 dark:text-black" />
            </Link>
          </span>
        </span>
      </div>
      <div className="mt-8 w-full">
        <TechStack />
      </div>
    </div>
  );
};

export default TechStackSection;
