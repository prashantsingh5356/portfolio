import HeadingWorkSection from "./_components/HeadingWorkSection";
import TextHoverEffectWorkSection from "./_components/TextHoverEffectWorkSection";
import WorkExperienceCard from "./_components/WorkExperienceCard";

interface myWorkExperienceListType {
  company: string;
  company_link: string;
  role: string;
  starting_month: string;
  ending_month: string;
  short_description: string;
  details: {
    value: string;
  }[];
  learnings: string;
}

type DetailsWork = myWorkExperienceListType[];
const ProjectPage = () => {
  const myWorkExperienceList: DetailsWork = [
    {
      company: "Nimblework",
      company_link: "#",
      role: "Full Stack Developer",
      starting_month: "June '23",
      ending_month: "May '24",
      short_description:
        "At Nimblework, an CRM saas platform, I contributed as a Full Stack Developer",
      details: [
        {
          value:
            "Upgraded Nimble source code, React components, and micro frontends with JSP and React JS, focusing on UI enhancement and compatibility.",
        },
        {
          value:
            "Updated Material UI library, resulting in improved UI and adjusted existing features for compatibility.",
        },
        {
          value:
            "Enhanced TinyMCE library to introduce rich text editing features and incorporate media/file upload capabilities.",
        },
        {
          value:
            "Ensured Nimble source code adhered to HTML 4.01 standards, optimizing performance and implementing a web service for DTD-based document validation. Improved code quality by using SonarQube for better code modularity.",
        },
      ],
      learnings:
        "This project deepened my expertise in Java, SQL, Web standards, and React, aligning with industry standards.",
    },
    {
      company: "Invento Robotics (Mitra AI)",
      company_link: "#",
      role: "Software Engineer Intern",
      starting_month: "June '22",
      ending_month: "Dec '22",
      short_description:
        "At Invento Robotics, an Robotics company catering to elderly people in old age homes, I contributed as a Front End Developer",
      details: [
        {
          value:
            "Designed and developed a feature-rich Fleet Management System UI for Mitra robots using React JS, enabling remote care for seniors worldwide.",
        },
        {
          value:
            "Implemented real-time communication, reducing assistance time by half, and enabled real-time remote robot control via Joystick, enhancing controllability.",
        },
        {
          value:
            "Developed a real-time notification system for efficient fleet management, resulting in a increase in operational efficiency.",
        },
        {
          value:
            "Created a Performance Dashboard displaying vital robot statistics, including uptime, downtime, battery status, and interaction time, and introduced a feature tracking daily robot activity, boosting interaction time.",
        },
      ],
      learnings:
        "This project deepened my expertise in React.js, Material UI, MongoDB, Web Sockets, and Next.js, aligning with industry standards.",
    },
  ];

  return (
    <div className="min-h-[100vh]  ">
      <HeadingWorkSection />
      <WorkExperienceCard workDetails={myWorkExperienceList} />
      <TextHoverEffectWorkSection />
    </div>
  );
};

export default ProjectPage;
