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

function ModeToggle() {
  const { setTheme } = useTheme();

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" size="icon">
          <Sun className="h-[1.2rem] w-[1.2rem] scale-100 rotate-0 transition-all dark:scale-0 dark:-rotate-90" />
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
    <div className="w-full h-22  fixed top-0 flex justify-center">
      <div className="max-md:w-full  flex flex-col justify-center">
        <div className=" dark:text-gray-400 text-gray-600 rounded-xl px-8 w-[100%] lg:min-w-[58rem] md:max-w-[60rem] md:min-w-[50rem] backdrop-filter backdrop-blur-lg dark:bg-black/30 bg-white/30   flex  justify-between items-center min-h-[4rem]">
          <div className="cursor-pointer font-extrabold text-black dark:text-white">
            PS
          </div>
          <ul className="font-medium flex justify-around w-[50%] items-center h-9 cursor-pointer font-sans  ">
            <li className=" dark:hover:text-white hover:text-black">Home</li>
            <li className=" dark:hover:text-white hover:text-black">Project</li>
            <li className=" dark:hover:text-white hover:text-black">Work</li>
            <li className=" dark:hover:text-white hover:text-black">About</li>
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
