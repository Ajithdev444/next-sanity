import Link from "next/link";
import React from "react";
import { NextPage } from "next";

interface Props {
  heading: string;
}

const HeaderComponent: NextPage<Props> = (props) => {
  const { heading } = props;
  return (
    <div>
      <div className="bg-hero h-96 flex justify-center items-center">
        <h1 className="sm:text-5xl font-bold text-white tracking-wider">
          {heading}
        </h1>
      </div>

      <div className="min-w-full bg-[#F3F3F3] p-5 text-center">
        <Link href="/" className="bg-[#F3F3F3] p-5">
          HOME
        </Link>
      </div>
    </div>
  );
};

export default HeaderComponent;