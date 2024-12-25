import Image from "next/image";
import memojiImage from "@/assets/images/memoji-computer.png";
import ArrowDown from "@/assets/icons/arrow-down.svg";
import grainImage from "@/assets/images/grain.jpg";
import { HeroOrbit } from "@/components/HeroOrbit";
import StarIcon from "@/assets/icons/star.svg";
import SparkleIcon from "@/assets/icons/sparkle.svg";


export const HeroSection = () => {
  return (
  <div className="py-32 md:py-48 lg:py-60 relative z-0 overflow-x-clip">
    <div className=" absolute inset-0 [mask-image:linear-gradient(to_bottom,transparent,black_10%,black_70%,transparent)] -z-10 ">
    <div className="absolute inset-0 z-[-1] opacity-5 " 
    style={{
        backgroundImage: `url(${grainImage.src})`,
      }}></div>
    <div className="size-[620px] hero-ring"></div>
    <div className="size-[820px] hero-ring"></div>
    <div className="size-[1020px] hero-ring"></div>
    <div className="size-[1220px] hero-ring"></div>
    <HeroOrbit size={430} rotation={-14} isOrbiting orbitDuration={25} isSpinning spinDuration={3}>
      <SparkleIcon className="size-8 text-emerald-300/20" />
    </HeroOrbit>
    <HeroOrbit size={450} rotation={79} isOrbiting orbitDuration={28} isSpinning spinDuration={3}>
      <SparkleIcon className="size-7 text-emerald-300/20" />
    </HeroOrbit>
    <HeroOrbit size={520} rotation={-41} isOrbiting orbitDuration={31} isSpinning spinDuration={3}>
      <SparkleIcon className="size-6 rounded-full text-emerald-300/20" />
    </HeroOrbit>
    <HeroOrbit size={540} rotation={178} isOrbiting orbitDuration={34} isSpinning spinDuration={3}>
      <SparkleIcon className="size-10 text-emerald-300/20" />
    </HeroOrbit>
    <HeroOrbit size={570} rotation={20} isOrbiting orbitDuration={37} isSpinning spinDuration={6}>
      <StarIcon className="size-16 text-emerald-300" />
    </HeroOrbit>
    <HeroOrbit size={600} rotation={98} isOrbiting orbitDuration={40} isSpinning spinDuration={6}>
      <StarIcon className="size-12 text-emerald-300" />
    </HeroOrbit>
    <HeroOrbit size={660} rotation={-5} isOrbiting orbitDuration={43} isSpinning spinDuration={6}>
      <StarIcon className="size-6 rounded-full text-emerald-300/20" />
    </HeroOrbit>
    <HeroOrbit size={720} rotation={144} isOrbiting orbitDuration={46} isSpinning spinDuration={3}>
      <SparkleIcon className="size-18 text-emerald-300/20" />
    </HeroOrbit>
    <HeroOrbit size={740} rotation={85} isOrbiting orbitDuration={49} isSpinning spinDuration={6}>
      <StarIcon className="size-6 rounded-full text-emerald-300/20" />
    </HeroOrbit>
    <HeroOrbit size={820} rotation={-72} isOrbiting orbitDuration={52} isSpinning spinDuration={6}>
      <StarIcon className="size-22 text-emerald-300" />
    </HeroOrbit>
    <HeroOrbit size={950} rotation={45} isOrbiting orbitDuration={55} isSpinning spinDuration={6}>
      <StarIcon className="size-28 text-emerald-300" />
    </HeroOrbit>
    <HeroOrbit size={1100} rotation={-90} isOrbiting orbitDuration={58} isSpinning spinDuration={6}>
      <StarIcon className="size-36 text-emerald-300" />
    </HeroOrbit>
    </div>
    <div className="container"> 
      <div className="flex flex-col items-center">
        <Image src={memojiImage} 
        className="size-[100px]" 
        alt="Person peeking from behind laptop" />
        <div className="bg-gray-900 border border-gray-800 px-4 py-1.5 inline-flex items-center gap-4 rounded-lg ">
          <div className="bg-green-500 size-2.5 relative rounded-full">
            <div className="bg-green-500 inset-0 rounded-full absolute animate-ping-large"> </div>
          </div>
          <div className=" text-sm font-semibold">Available for new projects</div>
        </div>
      </div>
      <div className="max-w-lg mx-auto ">
        <h1 className=" font-serif text-3xl md:text-5xl text-center mt-8 tracking-wide">Building Exceptional User Experiences</h1>
        <p className="mt-4 text-center text-white/60 md:text-lg">
          I specialize in transforming complex ideas into intuitive digital solutions. Let&apos;s discuss your next project.
        </p>
      </div>
      <div className=" flex flex-col md:flex-row justify-center items-center mt-8 gap-4">
        <button className="inline-flex items-center gap-2 border border-white/15 px-6 h-12 rounded-xl ">
          <span className="font-semibold">Explore My Work</span>
          <ArrowDown className="size-4" />
        </button>
        <button className="inline-flex items-center gap-2 border border-white bg-white text-gray-900  h-12 px-6 rounded-xl">
          <span>👋</span>
          <span className="font-semibold">Let&apos;s Connect</span>
        </button>
      </div>
    </div>
  </div>
);};
