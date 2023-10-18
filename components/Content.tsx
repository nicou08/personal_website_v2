import Link from "next/link";
import Image from "next/image";

import MainContent from "@/components/MainContent";
import Header from "./Header";
import TechComp from "./TechComp";

import nextIcon from "@/public/tech/next-js.svg";

const Content = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="bg-gradient-to-t to-black from-slate-800 h-screen">
      <div className="w-full h-full overflow-y-scroll">
        <Header />
        {children}
      </div>
    </div>
  );
};

export default Content;
