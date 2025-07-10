import { Button } from "@/components/ui/button";
import { FaGithub, FaArrowRight } from "react-icons/fa";

const VideoCard = () => {
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
        <div className="w-full min-h-[22vh]  flex justify-center items-center">
          <div className="w-[95%] min-h-[22vh] overflow-hidden rounded-lg bg-white">
            <video
              className="w-full h-[22vh] object-cover"
              //src="https://pasp3hha2jfsaiwz.public.blob.vercel-storage.com/echo-chat-AB1zhCP8soPOmnJJP7Fho36VpJgaFg.mp4"
              src="https://pasp3hha2jfsaiwz.public.blob.vercel-storage.com/space-uecizlixlpcAH1cmch9kYp12JQ0ryA.mp4"
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

const TechStackCard = () => {
  return (
    <div className=" text-sm flex justify-center items-center p-2 min-w-[4rem] h-[1.2rem] max-w-[8rem] rounded-lg overflow-hidden bg-zinc-200 dark:bg-zinc-900 dark:text-white">
      Node JS
    </div>
  );
};

const VideoDescription = () => {
  return (
    <div className="w-full min min-h-[25vh]   p-1">
      <h3 className="text-2xl font-semibold mb-2">Echo Chat</h3>
      <p className="text-xs text-gray-800 dark:text-white font-semibold mb-1">
        Nov 2024 - Dec 2024
      </p>
      <p className="text-xs  font-semibold mb-2">Real time chat room</p>
      <div className="w-full max-h-[11vh] min-h-[6vh] overflow-hidden flex flex-wrap gap-2 mb-2">
        <TechStackCard />
        <TechStackCard />
        <TechStackCard />
        <TechStackCard />
        <TechStackCard />
      </div>
      <div className="w-full flex justify-between">
        <div>
          <Button>
            {" "}
            <FaGithub />
            Source Code
          </Button>
        </div>
        <div>
          <Button>
            Live Demo
            <FaArrowRight />
          </Button>
        </div>
      </div>
    </div>
  );
};

const ProjectCard = () => {
  return (
    <div className="w-full min-h-[25vh] flex-col  sm:flex sm:justify-between sm:flex-row ">
      <div className="w-full min-h-[25vh] sm:w-[55%] ">
        <VideoCard />
      </div>
      <div className="w-full min-h-[25vh] sm:w-[43%]  mt-5 sm:mt-0">
        <VideoDescription />
      </div>
    </div>
  );
};

export default ProjectCard;
