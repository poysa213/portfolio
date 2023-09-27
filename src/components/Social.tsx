import Link from "next/link";
import React from "react";
import { getSocialMedia } from "@lib/dataFetch";
import { ContactItem } from "@types";

export const Social = () => {
  const socialsMedia: ContactItem[] = getSocialMedia();
  return (
    <div className="flex items-center justify-center">
      {socialsMedia.map((item, index) => (
        <Link href={item.url} key={index}>
          <div className="m-2 md:text-2xl text-2xl">
            <item.Icon />
          </div>
        </Link>
      ))}
    </div>
  );
};
