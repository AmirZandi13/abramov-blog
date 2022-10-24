import Image from "next/image";
import { FC } from "react";

import ProfilePic from "../assets/images/profile-pic.jpeg";

export const Profile: FC = () => {
  return (
    <div className="flex flex-row items-center">
      <div className="w-14 h-14 rounded-full overflow-hidden mr-3">
        <Image src={ProfilePic} />
      </div>
      <div className="flex flex-col">
        <div className="flex flex-row items-center">
          <p>Personal blog by </p>
          <a
            href="https://mobile.twitter.com/dan_abramov"
            target="_blank"
            rel="noopener noreferrer"
            className="ml-1 underline hover:no-underline"
          >
            Dan Abramov
          </a>
        </div>
        <p>I explain with words and code.</p>
      </div>
    </div>
  );
};