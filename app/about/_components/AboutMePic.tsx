import Image from "next/image";

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

interface aboutMePicPropType {
  picdata: aboutMePic;
}

const AboutMePic = ({ picdata }: aboutMePicPropType) => {
  return (
    <div
      className={`min-w-40 w-45 min-h-60 shadow-md bg-white dark:shadow-emerald-900 rounded-xs overflow-hidden ${
        picdata.id >= 2 ? "hidden min-[455px]:block" : ""
      } ${picdata.rotate == rotate.LEFT ? "-rotate-5" : "rotate-5"}`}
    >
      <div className=" w-full h-50 flex items-center justify-center rounded-lg ">
        <div className="w-40 h-40  ">
          <Image
            src={picdata.src}
            width="160"
            height="160"
            alt="Picture of prashant"
          />
        </div>
      </div>
      <div className="w-full h-10 flex justify-center items-start font-semibold text-black">
        <h4>{picdata.title}</h4>
      </div>
    </div>
  );
};

export default AboutMePic;
