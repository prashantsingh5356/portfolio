import Link from "next/link";

import { Button } from "@/components/ui/button";
import { MdOutlineArrowForwardIos } from "react-icons/md";

const HeadingWorkSection = () => {
  return (
    <div className="flex flex-col gap-5 sm:flex sm:flex-row sm:justify-between w-full  mt-25 mb-10 sm:mb-20">
      <div className="h-full ">
        <h1 className="font-extrabold  tracking-tight text-4xl">My Work</h1>
      </div>
      <div className="h-10 cursor-pointer ">
        <Link
          href="https://drive.google.com/file/d/1i4sb2IguE8jeWEzV9-uSC89vwb13oRKN/view?usp=sharing"
          target="_blank"
        >
          <Button
            variant="outline"
            size="lg"
            className=" bg-black hover:bg-zinc-800 hover:translate-x-1 hover:-translate-y-1"
          >
            <span className="text-white font-bold">View Resume</span>{" "}
            <MdOutlineArrowForwardIos className="text-white " />
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default HeadingWorkSection;
