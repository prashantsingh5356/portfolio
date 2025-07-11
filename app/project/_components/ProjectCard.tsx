import { Button } from "@/components/ui/button";
import Link from "next/link";
import { FaGithub, FaArrowRight } from "react-icons/fa";

type projectStackType = string[];

interface projectDataType {
  project_video: string;
  project_name: string;
  started: string;
  ended: string;
  project_description: string;
  project_stack: projectStackType;
  project_source_link: string;
  project_live_link: string;
}

type projectCardData = {
  data: projectDataType;
};

const VideoCard = ({ videoSrc }: { videoSrc: string }) => {
  return (
    <div className="w-full min-h-[25vh] border rounded-lg overflow-hidden ">
      <div className="min-h-[25vh] bg-zinc-200 dark:bg-black/5 group">
        <div className=" h-5 dark:bg-black/5 ">
          <div className="flex gap-1 justify-start pt-1  px-3">
            <div className="h-3 w-3 border rounded-full bg-zinc-500 group-hover:bg-red-500"></div>
            <div className="h-3 w-3 border rounded-full bg-zinc-500 group-hover:bg-yellow-500"></div>
            <div className="h-3 w-3 border rounded-full bg-zinc-500 group-hover:bg-green-500"></div>
            <div></div>
          </div>
        </div>
        <div className="w-full max-h-[21vh]  flex justify-center items-center">
          <div className="w-[95%] max-h-[21vh] overflow-hidden rounded-lg bg-white">
            <video
              className="w-full h-[22vh] object-cover"
              src={videoSrc}
              autoPlay
              loop
              muted
              preload="none"
            ></video>
          </div>
        </div>
      </div>
    </div>
  );
};

const TechStackCard = ({ techStack }: { techStack: string }) => {
  return (
    <div className=" text-sm flex justify-center items-center p-2 min-w-[4rem] h-[1.2rem] max-w-[8rem] rounded-lg overflow-hidden bg-zinc-200 dark:bg-zinc-900 dark:text-white">
      {techStack}
    </div>
  );
};

const VideoDescription = ({ videoDesc }: { videoDesc: projectDataType }) => {
  return (
    <div className="w-full min min-h-[25vh]   p-1">
      <h3 className="text-2xl font-semibold mb-2">
        {videoDesc.project_description}
      </h3>
      <p className="text-xs text-gray-800 dark:text-white font-semibold mb-1">
        {videoDesc.started} - {videoDesc.ended}
      </p>
      <p className="text-xs  font-semibold mb-2">
        {videoDesc.project_description}
      </p>
      <div className="w-full max-h-[11vh] min-h-[6vh] overflow-hidden flex flex-wrap gap-2 mb-2 mt-5">
        {videoDesc.project_stack.map((stack, i) => {
          return i < 7 && <TechStackCard techStack={stack} key={i} />;
        })}
      </div>
      <div className="w-full flex justify-between">
        <div>
          <Link href={videoDesc.project_source_link} target="_blank">
            <Button>
              {" "}
              <FaGithub />
              Source Code
            </Button>
          </Link>
        </div>
        <div>
          <Link href={videoDesc.project_live_link} target="_blank">
            <Button>
              {" "}
              Live Demo
              <FaArrowRight />
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

const ProjectCard = ({ data }: projectCardData) => {
  return (
    <div className="w-full min-h-[25vh] flex-col  sm:flex sm:justify-between sm:flex-row ">
      <div className="w-full min-h-[25vh] sm:w-[55%] ">
        <VideoCard videoSrc={data.project_video} />
      </div>
      <div className="w-full min-h-[25vh] sm:w-[43%]  mt-5 sm:mt-0">
        <VideoDescription videoDesc={data} />
      </div>
    </div>
  );
};

export default ProjectCard;
