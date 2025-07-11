"use client";

import * as React from "react";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";

import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

import Link from "next/link";

function ModeToggle() {
  const { setTheme } = useTheme();

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" size="icon">
          <Sun className=" h-[1.2rem] w-[1.2rem] scale-100 rotate-0 transition-all dark:scale-0 dark:-rotate-90" />
          <Moon className="absolute h-[1.2rem] w-[1.2rem] scale-0 rotate-90 transition-all dark:scale-100 dark:rotate-0" />
          <span className="sr-only">Toggle theme</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        <DropdownMenuItem onClick={() => setTheme("light")}>
          Light
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => setTheme("dark")}>
          Dark
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => setTheme("system")}>
          System
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}

const Navbar = () => {
  return (
    <div className="w-full h-22  fixed top-0 flex justify-center z-1000">
      <div className="max-md:w-full  flex flex-col justify-center">
        <div className=" dark:text-zinc-400 text-zinc-600 rounded-xl px-8 w-[100%] lg:min-w-[58rem] md:max-w-[60rem] md:min-w-[50rem] backdrop-filter backdrop-blur-lg dark:bg-black/30 bg-white/30   flex  justify-between items-center min-h-[4rem]">
          <div className="font-extrabold text-black dark:text-white">
            <Link href="/">PS</Link>
          </div>
          <ul className="font-medium flex justify-around w-[50%] items-center h-10  font-sans  ">
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
              <ModeToggle />
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
