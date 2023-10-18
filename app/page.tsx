import Image from "next/image";

import TechBar from "@/components/TechBar";

import nextIcon from "@/public/tech/next-js.svg";

export default function Home() {
  return (
    <>
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

          {/************************************************************/}

          {/**************  ABOUT PAGE  **************/}

          {/************************************************************/}
          <div className="w-full h-[1050px] sm:h-[800px] md:h-[1000px] lg:h-[788px] relative ">
            <div className=" absolute top-2 left-2 right-2 bottom-2 md:right-24 md:shadow-xl md:rounded-[25px] md:border border-stone-700 bg-stone-900">
              {/*  PHOTO SMALL AND MEDIUM DISPLAY  */}
              <div className="flex justify-center lg:hidden">
                <div className="z-10 relative">
                  <div className="block md:hidden ">
                    <Image
                      src="/self_image_2.jpg"
                      width={200}
                      height={200}
                      alt="Self Image"
                      className="selfImageSmall absolute top-4 rounded-lg transform hover:translate-x-2 hover:-translate-y-2 transition-transform duration-300"
                    />
                  </div>
                  <div className="hidden md:block">
                    <Image
                      src="/self_image_2.jpg"
                      width={352}
                      height={352}
                      alt="Self Image"
                      className="selfImage absolute top-4 rounded-lg transform hover:translate-x-2 hover:-translate-y-2 transition-transform duration-300"
                    />
                  </div>

                  <div
                    className="
                        h-50
                        w-50
                        md:h-88 
                        md:w-88 
                        bg-gradient-to-t 
                        from-cyan-500 
                        to-emerald-500 
                        rounded-lg 
                        mt-6
                        -ml-2
                        md:mt-8
                        md:-ml-4
                        z-0"
                  ></div>
                </div>
              </div>

              {/*  PHOTO LG: DISPLAY  */}
              <div className="hidden lg:block">
                <Image
                  src="/self_image_2.jpg"
                  width={352}
                  height={352}
                  alt="Self Image"
                  className="selfImage z-10 lg:absolute lg:left-10 lg:top-52 rounded-lg transform hover:translate-x-2 hover:-translate-y-2 transition-transform duration-300"
                />

                <div
                  className="
                    h-88 
                    w-88 
                    bg-gradient-to-t 
                    from-cyan-500 
                    to-emerald-500 
                    rounded-lg 
                    lg:absolute 
                    lg:top-56 
                    lg:left-6 
                    z-0"
                ></div>
              </div>

              {/*  DESCRIPTION  */}
              <div className="absolute h-[800px] sm:h-[550px]  left-3 right-3 top-68 md:top-96 lg:top-0 lg:h-full lg:left-965 lg:right-6 lg:bottom-0 ">
                <div className="font-monaSansBold text-3xl absolute top-14 md:top-10 lg:top-32 inline:block bg-gradient-to-r from-cyan-500 to-emerald-500 bg-clip-text text-transparent">
                  ABOUT ME
                </div>
                <div className="text-lg md:text-xl text-stone-300 font-lucidaSans absolute top-32 lg:top-52">
                  Hi! My name is Nicolas and I'm a graduate from the University
                  of Calgary with a degree in Computer Science.
                  <br /> <br />
                  In my university years, I learned many fields in computer
                  science and worked on many projects. I gained interest in the
                  topics of networks, databases, human-computer interactions,
                  and software engineering.
                  <br /> <br />I am fascinated by the challenges of designing
                  and implementing efficient and user-friendly systems, and I
                  believe these areas offer exciting opportunities for
                  innovation and impact.
                  <br /> <br />
                  In my leisure time, I like to workout and spend time with my
                  pet guinea pig whose name is Greg.
                </div>
              </div>
            </div>

            {/*  SECOND VERTICAL LINE  */}
            <div className="hidden md:flex justify-end mr-16 -mt-2">
              <div className="h-[490px] lg:h-96 w-[3px] bg-stone-600 "></div>
            </div>

            {/*  RING  */}
            <div className="hidden md:flex justify-end mr-14">
              <div className="w-5 h-5 border-4 border-stone-600 rounded-full"></div>
            </div>

            {/*  THIRD VERTICAL LINE  */}
            <div className="hidden md:flex justify-end mr-16 ">
              <div className="h-[490px] lg:h-96 w-[3px] bg-stone-600 "></div>
            </div>
          </div>

          {/*  TURN LEFT SEGMENT  */}
          <div className="hidden md:flex justify-end mr-16 -mt-2">
            <div className="curve3"></div>
          </div>

          {/* SECOND HORIZONTAL LINE */}
          <div className="hidden md:block -mt-[3px] ml-28">
            <div className="h-[3px] w-48 md:w-[500px] lg:w-[800px] bg-stone-600"></div>
          </div>

          {/*  TURN DOWN SEGMENT  */}
          <div className="hidden md:flex justify-start ml-16 -mt-[3px]">
            <div className="curve4"></div>
          </div>

          {/************************************************************/}

          {/**************  PROJECTS PAGE  **************/}

          {/************************************************************/}
          <div className="block md:hidden pb-20 pt-10">
            {/*  RING  */}
            <div className="flex justify-center ">
              <div className="h-[1px] w-full bg-stone-600"></div>
            </div>
          </div>
          <div className="w-full h-[1500px] bg-blue-300 relative">
            {/*  TECH FRAMEWORKS SLIDE  */}
            <TechBar />
          </div>

          <div className="text-9xl">
            a<br />b<br />a<br />a<br />i<br />j<br />a<br />a<br />a<br />a
            <br />a<br />a<br />a<br />a<br />a<br />a<br />a<br />a<br />a
            <br />a<br />a<br />a<br />a<br />a<br />a<br />a<br />a<br />
            mm
          </div>
        </div>
      </div>
    </>
  );
}
