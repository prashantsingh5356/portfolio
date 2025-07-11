import ProjectCard from "./ProjectCard";
import TextHoverEffectSection from "./TextHoverEffectSection";

const ProjectSection = () => {
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

  type projectDataListType = projectDataType[];

  const projectList: projectDataListType = [
    {
      project_name: "Portfolio",
      project_video: "/portfolio.mp4",
      started: "July 2025",
      ended: "July 2025",
      project_description: "Developer portfolio",
      project_stack: ["NextJS", "Tailwind", "ShadCn", "Aceternity"], // Max 6 important stack
      project_source_link: "https://github.com/prashantsingh5356/portfolio",
      project_live_link: "https://www.devprashant.tech",
    },
  ];

  return (
    <div className="w-full min-h-[50vh]">
      <div>
        <h2 className="  text-2xl my-8 ">Top Projects</h2>
      </div>
      <div className="flex flex-col gap-10   min-h-[50vh]">
        {projectList.map((proj, i) => {
          return <ProjectCard key={i} data={proj} />;
        })}
        <div>
          <h1 className=" py-10 mt-[20] bg-gradient-to-r from-gray-200 via-gray-400 to-gray-600 bg-clip-text text-center text-4xl font-extrabold text-transparent opacity-30 md:text-6xl">
            Shipping More Soon
          </h1>
        </div>
      </div>
      <div className="w-full min-h-[10vh]  mt-10">
        <TextHoverEffectSection />
      </div>
    </div>
  );
};

export default ProjectSection;
