import ProjectCard from "./ProjectCard";
import TextHoverEffectSection from "./TextHoverEffectSection";

const ProjectSection = () => {
  return (
    <div className="w-full min-h-[50vh] ">
      <div>
        <h2 className="  text-2xl my-8 ">Top Projects</h2>
      </div>
      <div className="flex flex-col gap-10">
        <ProjectCard />
        <ProjectCard />
        <ProjectCard />
        <ProjectCard />
        <ProjectCard />
      </div>
      <div className="w-full min-h-[10vh]  mt-10">
        <TextHoverEffectSection />
      </div>
    </div>
  );
};

export default ProjectSection;
