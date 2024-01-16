import HomeProjects from "./projects";

export default function Home() {
  return (
    <>
      <div className="relative bg-black h-full">
        <video
          autoPlay
          src="earth.mp4"
          muted
          loop
          className="absolute inset-0 w-full h-full object-cover"
        >
          <source src="earth.mp4" type="video/mp4" />
        </video>
        <div className="relative z-10 flex flex-col items-center justify-center h-[760px] text-white">
          <h1 className="text-6xl font-bold">UL Aerosoc HiPR</h1>
          <h1 className="text-2xl font-light pt-2">
            Rocketry something something
          </h1>
        </div>
      </div>
      <HomeProjects />
    </>
  );
}
