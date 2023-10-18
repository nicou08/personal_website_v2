import Image from "next/image";

const TechComp = ({ tech, techAlt }: { tech: string; techAlt: string }) => {
  return (
    <>
      <div className="flex justify-center items-center  bg-zinc-100 rounded-lg">
        <Image src={tech} alt={techAlt} width={50} height={50} />
      </div>
    </>
  );
};

export default TechComp;
