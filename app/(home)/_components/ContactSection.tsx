"use client";

import Link from "next/link";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { BsTwitterX, BsInstagram } from "react-icons/bs";

function ContactSection() {
  return (
    <div className="animate-contact-fade-in  w-full flex items-center min-h-[10vh] mt-5 ">
      <div className="flex ">
        <div>
          <Link href="https://github.com/prashantsingh5356" target="_blank">
            <FaGithub className="h-8 w-8" />
          </Link>
        </div>
        <div className="pl-10">
          <Link href="https://x.com/Prashant5356" target="_blank">
            <BsTwitterX className="h-8 w-8" />
          </Link>
        </div>
        <div className="pl-10">
          <Link
            href="https://www.linkedin.com/in/prashant-kumar-singh-74885a178/"
            target="_blank"
          >
            <FaLinkedin className="h-8 w-8" />
          </Link>
        </div>
        <div className="pl-10">
          <Link
            href="https://www.instagram.com/15_prashantsingh/"
            target="_blank"
          >
            <BsInstagram className="h-8 w-8" />
          </Link>
        </div>
      </div>
    </div>
  );
}

export default ContactSection;
