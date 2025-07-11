import AboutMePic from "./AboutMePic";

const AboutMeSection = () => {
  interface aboutMePic {
    id: number;
    src: string;
    title: string;
    rotate: rotate;
  }

  enum rotate {
    RIGHT,
    LEFT,
  }

  type aboutMePicDataType = aboutMePic[];

  const aboutMePicData: aboutMePicDataType = [
    {
      id: 1,
      src: "/prashant_image.jpeg",
      title: "Exploring",
      rotate: rotate.LEFT,
    },
    {
      id: 2,
      src: "/prashant_image.jpeg",
      title: "Lost",
      rotate: rotate.RIGHT,
    },
    {
      id: 3,
      src: "/prashant_image.jpeg",
      title: "Found ",
      rotate: rotate.LEFT,
    },
  ];

  return (
    <div className="w-full min-h-[20vh] ">
      <div className=" justify-center md:justify-between flex flex-wrap md:gap-0 ">
        {aboutMePicData.map((pic: aboutMePic) => {
          return <AboutMePic key={pic.title + Math.random()} picdata={pic} />;
        })}
      </div>
      <div className="mt-20 flex flex-col gap-5 font-semibold">
        <p>
          Hey there! I am Prashant Kumar Singh, a Full-Stack developer from
          India who thrives on crafting intuitive and dynamic UIs and Backend.
        </p>
        <p>
          I began my tech journey at the end of 2018, and since then, I have
          developed a strong expertise in building responsive and secure web
          applications that offer a seamless user experience.I find full-stack
          development incredibly fascinating.
        </p>
        <p>
          I enjoy building robust applications and exploring new technologies to
          enhance my skills.
        </p>
        <p>
          Currently, I am diving into Devops, and Aitificial intelligence
          expanding my skills in these innovative areas.
        </p>
        <p>
          I am leaning about launching an SaaS product and soon will launch one.
          I love solving customer and bussiness problems with the help of Tech.
        </p>
      </div>
    </div>
  );
};

export default AboutMeSection;
