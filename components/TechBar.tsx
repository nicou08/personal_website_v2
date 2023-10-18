import TechComp from "./TechComp";

import nextIcon from "@/public/tech/next-js.svg";
import reactIcon from "@/public/tech/react.svg";
import tsIcon from "@/public/tech/typescript-3.svg";
import jsIcon from "@/public/tech/javascript-plain.svg";
import htmlIcon from "@/public/tech/html5.svg";
import cssIcon from "@/public/tech/file-type-css.svg";
import nodeJSIcon from "@/public/tech/nodejs.svg";
import tailwindIcon from "@/public/tech/tailwind-css.svg";
import pythonIcon from "@/public/tech/python.svg";
import mongoDBIcon from "@/public/tech/mongodb-1.svg";

const TechBar = () => {
  return (
    <>
      <div className="rounded-[25px] h-56 absolute top-2 left-24 right-4 bg-stone-900 ">
        <div className="font-monaSansBold text-3xl absolute top-10 left-10 inline:block bg-gradient-to-r from-cyan-500 to-emerald-500 bg-clip-text text-transparent">
          TECH STACK
        </div>
        <div className="absolute top-24 left-10 right-10 bottom-10">
          <div className="grid grid-cols-10 gap-4 h-full">
            <TechComp tech={nextIcon} techAlt="NextJS Icon" />
            <TechComp tech={reactIcon} techAlt="React Icon" />
            <TechComp tech={tsIcon} techAlt="Typescript Icon" />
            <TechComp tech={jsIcon} techAlt="Javascript Icon" />
            <TechComp tech={htmlIcon} techAlt="HTML5 Icon" />
            <TechComp tech={cssIcon} techAlt="CSS Icon" />
            <TechComp tech={tailwindIcon} techAlt="TailwindCSS Icon" />
            <TechComp tech={pythonIcon} techAlt="Python3 Icon" />
            <TechComp tech={nodeJSIcon} techAlt="NodeJS Icon" />
            <TechComp tech={mongoDBIcon} techAlt="MongoDB Icon" />
          </div>
        </div>
      </div>
    </>
  );
};

export default TechBar;
