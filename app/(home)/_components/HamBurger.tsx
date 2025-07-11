import { GiHamburgerMenu } from "react-icons/gi";

import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import Link from "next/link";

const HamBurger = () => {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" size="icon">
          <GiHamburgerMenu />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="z-1000">
        <Link href="/">
          <DropdownMenuItem> Home</DropdownMenuItem>
        </Link>
        <Link href="/work">
          <DropdownMenuItem> Work</DropdownMenuItem>
        </Link>
        <Link href="/project">
          <DropdownMenuItem> Project</DropdownMenuItem>
        </Link>
        <Link href="/about">
          <DropdownMenuItem> About</DropdownMenuItem>
        </Link>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default HamBurger;
