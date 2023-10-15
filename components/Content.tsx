import Link from "next/link";
import Image from "next/image";

import MainContent from "@/components/MainContent";
import Header from "./Header";

const Content = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="bg-gradient-to-t to-black from-slate-800 h-screen">
      <div className="w-full h-full overflow-y-scroll">
        <Header />
        <div
          className="
          lg:container 
          lg:mx-auto 
          max-w-full 
          lg:max-w-6xl 
          h-auto
          
          -mt-32"
        >
          <div className="text-white">
            {/************************************************************/}

            {/**************  HOME PAGE  **************/}

            {/************************************************************/}
            <div className="h-64 md:h-99 "></div>
            <div className="pl-10 md:pl-20 pr-10 md:pr-20 font-monoSans pb-72">
              <div className="inline-block text-2xl mb-3 bg-gradient-to-r from-cyan-500 to-emerald-500 bg-clip-text text-transparent">
                Hello my name is
              </div>
              <div className="text-4xl md:text-7xl font-monaSansBold ">
                Gregarious Pachon Guasca
              </div>
              <div className="text-xl mt-5 text-stone-300">
                I'm a software developer.
              </div>
            </div>

            {/*  RING  */}
            <div className="hidden md:flex justify-center">
              <div className="w-5 h-5 border-4 border-stone-600 rounded-full"></div>
            </div>
            {/*  FIRST VERTICAL LINE  */}
            <div className="hidden md:flex justify-center">
              <div className="h-96 w-[3px] bg-stone-600 "></div>
            </div>
            {/* TURN RIGHT SEGMENT */}
            <div className="hidden md:flex justify-center -mt-2">
              <div className="w-[47px] "></div>
              <div className="curve"></div>
            </div>
            {/* FIRST HORIZONTAL LINE */}
            <div className="hidden md:flex justify-center -mt-[3px]">
              <div className="w-60 lg:w-96"></div>
              <div className="h-[3px] w-48 lg:w-80 bg-stone-600"></div>
            </div>
            {/*  TURN DOWN SEGMENT  */}
            <div className="hidden md:flex justify-end mr-16 -mt-[3px]">
              <div className="curve2"></div>
            </div>

            <div className="w-full h-[788px] bg-blue-200 relative">
              {/************************************************************/}

              {/**************  ABOUT PAGE  **************/}

              {/************************************************************/}
              <div className=" h-[772px] absolute top-2 left-2 right-2 md:right-24 bg-red-200">
                {/*  PHOTO  */}

                <Image
                  src="/self_image_2.jpg"
                  width={352}
                  height={352}
                  alt="Self Image"
                  className="selfImage absolute z-10 left-10 top-10 rounded-lg transform hover:translate-x-2 hover:-translate-y-2 transition-transform duration-300"
                />

                <div
                  className="
                    h-88 
                    w-88 
                    bg-gradient-to-t 
                    from-cyan-500 
                    to-emerald-500 
                    rounded-lg 
                    absolute 
                    top-14 
                    left-6
                    z-0"
                ></div>

                {/*  DESCRIPTION  */}
                <div></div>
              </div>

              {/*  SECOND VERTICAL LINE  */}
              <div className="hidden md:flex justify-end mr-16 -mt-2">
                <div className="h-96 w-[3px] bg-stone-600 "></div>
              </div>

              {/*  RING  */}
              <div className="hidden md:flex justify-end mr-14">
                <div className="w-5 h-5 border-4 border-stone-600 rounded-full"></div>
              </div>

              {/*  THIRD VERTICAL LINE  */}
              <div className="hidden md:flex justify-end mr-16 ">
                <div className="h-96 w-[3px] bg-stone-600 "></div>
              </div>
            </div>

            <div className="text-9xl">
              a<br />b<br />a<br />a<br />i<br />j<br />a<br />a<br />a<br />a
              <br />a<br />a<br />a<br />a<br />a<br />a<br />a<br />a<br />a
              <br />a<br />a<br />a<br />a<br />a<br />a<br />a<br />a<br />m
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Content;
