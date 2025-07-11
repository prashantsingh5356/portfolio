import Image from "next/image";

import { Caveat } from "next/font/google";

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

const cav = Caveat({
  weight: "700",
  subsets: ["latin"],
});

const AboutMePic = ({ picdata }: aboutMePicPropType) => {
  return (
    <div
      className={`min-w-40 w-45 min-h-60 shadow-md bg-white dark:shadow-emerald-900 rounded-xs overflow-hidden ${
        picdata.id >= 2 ? "hidden min-[455px]:block" : ""
      } ${picdata.rotate == rotate.LEFT ? "-rotate-5" : "rotate-5"}`}
    >
      <div className=" w-full h-50 flex items-center justify-center rounded-lg   ">
        <div className="w-40 h-40 grayscale-100 hover:grayscale-0  transition-all duration-300 delay-150">
          <Image
            src={picdata.src}
            width="160"
            height="160"
            alt="Picture of prashant"
          />
        </div>
      </div>
      <div className="w-full h-10 flex justify-center text-xl items-start font-bold text-black">
        <h4 className={cav.className}>{picdata.title}</h4>
      </div>
    </div>
  );
};

export default AboutMePic;
