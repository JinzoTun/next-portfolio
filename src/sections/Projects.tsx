import nookLandingPage from "@/assets/images/nook.png";
import shope from "@/assets/images/shope.png";
import Image from "next/image";
import CheckIcon from "@/assets/icons/check-circle.svg";
import ArrowUpRight from "@/assets/icons/arrow-up-right.svg";
import grainImage from "@/assets/images/grain.jpg";
import { SectionHeader } from "@/components/SectionHeader";
import { Card } from "@/components/Card";

const portfolioProjects = [
  {
    company: "Personal Project",
    year: "2024",
    title: "Nook - A Reddit Clone",
    results: [
      { title: "Developed a responsive and mobile-friendly design" },
      { title: "Integrated user authentication and authorization" },
      { title: "Added real-time chat functionality" },
    ],
    link: "https://nook-nk.vercel.app",
    image: nookLandingPage,
  },
  {
    company: "Personal Project",
    year: "2023",
    title: "ShopE - An E-commerce Store",
    results: [
      { title: "Built a responsive and mobile-friendly design" },
      { title: "Integrated advanced search and filter functionality" },
      { title: "Added Admin Panel for managing products and orders" },
    ],
    link: "https://shop-e-three.vercel.app",
    image: shope,
  },
];

export const ProjectsSection = () => {
  return (
    <section className="pb-16 lg:py-24">
      <div className="container">   
        <SectionHeader 
        eyebrow="Real-world Results" 
        title="Featured Projects" 
        description="See How I transform concept into engaging digital experiences." 
        />
        <div className="flex flex-col mt-10 md:mt-20 gap-20">
          {portfolioProjects.map((project) => (
            <Card key={project.title} className="pb-0 px-8 pt-8 md:pt-12 md:px-10 lg:pt-16 lg:px-20 "
            >
            <div className="lg:grid lg:grid-cols-2 lg:gap-16  ">
            <div className="lg:pb-16">
                <div className="bg-gradient-to-r from-emerald-300 to-sky-400 inline-flex font-bold tracking-widest uppercase text-sm gap-2 text-transparent bg-clip-text"> 
                  <span >{project.company}</span>
                  <span >•</span>
                  <span >{project.year}</span>
                </div>
                <h3 className="font-serif text-2xl md:text-4xl mt-2 md:mt-5 ">
                  {project.title}
                </h3>
                <hr className="border-t-2 border-white/5 mt-4 md:mt-5" />
                <ul className="flex flex-col mt-4 gap-4 md:mt-5">
                  {project.results.map((result) => (
                    <li key={result.title} className="flex gap-2 text-sm md:text-base text-white/15">
                      <CheckIcon className="size-5 md:size-6" />
                      <span>{result.title}</span>
                    </li>
                  ))}
                </ul>
                <a href={project.link} target="_blank" rel="noreferrer">
                  <button className="bg-white text-gray-950 h-12 w-full md:w-auto px-6 font-semibold inline-flex items-center justify-center gap-2 rounded-xl mt-8">
                    <ArrowUpRight className="size-4 "/>
                    <span>Visit Live Site</span>
                  </button>
                </a>
              </div>
              <div className="relative">
                <Image src={project.image} alt={project.title} className="mt-8 -mb-4 md:-mb-0 lg:mt-0 lg:absolute lg:h-full lg:w-auto lg:max-w-none" />
              </div>
            </div>
          </Card>
          ))}
        </div>
      </div>
    </section>  
  );
};
