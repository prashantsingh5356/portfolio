import * as React from "react";
import Link from "next/link";
import ThemeButton from "./ThemeButton";

import { Zen_Tokyo_Zoo } from "next/font/google";

const zenFont = Zen_Tokyo_Zoo({
  weight: "400",
  subsets: ["latin"],
});

const Navbar = () => {
  return (
    <div className="w-full h-22  fixed top-0 flex justify-center z-500">
      <div className="max-md:w-full  flex flex-col justify-center">
        <div className=" dark:text-zinc-400 text-zinc-600 rounded-xl px-8 w-[100%] lg:min-w-[58rem] md:max-w-[60rem] md:min-w-[50rem] backdrop-filter backdrop-blur-lg dark:bg-black/30 bg-white/30   flex  justify-between items-center min-h-[4rem]">
          <div className="font-extrabold text-black dark:text-white text-2xl">
            <Link href="/" className={zenFont.className}>
              PS
            </Link>
          </div>
          <ul className="font-medium flex justify-around w-[50%] items-center h-10 text-sm ">
            <li className=" dark:hover:text-white hover:text-black ">
              <Link href="/">Home</Link>
            </li>
            <li className=" dark:hover:text-white hover:text-black">
              <Link href="/project">Project</Link>
            </li>
            <li className=" dark:hover:text-white hover:text-black">
              <Link href="/work">Work</Link>
            </li>
            <li className=" dark:hover:text-white hover:text-black">
              <Link href="/about">About</Link>
            </li>
            <li>
              <ThemeButton />
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
