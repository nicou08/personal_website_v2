import Link from "next/link";

const Header = () => {
  return (
    <div
      className="
          lg:container 
          lg:mx-auto 
          max-w-full 
          lg:max-w-6xl 
          bg-transparent 
          h-32 
          lg:rounded-b-[40px] 
          shadow-3xl 
          border-b-2 
          border-l 
          border-r  
          border-neutral-900 
          text-white
          sticky
          top-0
          z-20"
    >
      <div className="flex justify-end items-center h-full ">
        <nav className="font-monoSans text-xl">
          <Link href="#home" className="mr-10 cursor-pointer">
            Home
          </Link>
          <Link href="#about" className="mr-10 cursor-pointer">
            About
          </Link>
          <Link href="#projects" className="mr-10 cursor-pointer">
            Projects
          </Link>
          <Link href="#contact" className="mr-10 cursor-pointer">
            Contact
          </Link>
        </nav>
      </div>
    </div>
  );
};

export default Header;
