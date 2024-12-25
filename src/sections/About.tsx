import { Card } from "@/components/Card";
import { SectionHeader } from "@/components/SectionHeader";
import StarIcon from "@/assets/icons/star.svg";
import bookImage from "@/assets/images/book-cover.jpg";
import Image from "next/image";
import ReactIcon from "@/assets/icons/react.svg";
import HtmlIcon from "@/assets/icons/html5.svg";
import CssIcon from "@/assets/icons/css3.svg";
import JsIcon from "@/assets/icons/square-js.svg";
import ChromeIcon from "@/assets/icons/chrome.svg";
import GithubIcon from "@/assets/icons/github.svg";
import mapImage from "@/assets/images/map.png";
import smileMemoji from "@/assets/images/memoji-smile.png";
import { CardHeader } from "@/components/CardHeader";
import { ToolboxItems } from "@/components/ToolboxItems";

const toolboxItems = [
  {
    title: "React",
    iconType: ReactIcon
  },
  {
    title: "HTML",
    iconType: HtmlIcon
  },
  {
    title: "CSS",
    iconType: CssIcon 
  },
  {
    title: "JavaScript",
    iconType: JsIcon  
  },
  {
    title: "Chrome DevTools",
    iconType: ChromeIcon 
  },
  {
    title: "GitHub",
    iconType: GithubIcon 
  },

];

const hobbies = [
  {
    title : "Travel",
    emoji : "🌍",
    top : "5%",
    left : "5%"
  },
  {
    title : "Photography",
    emoji : "📷",
    top : "5%",
    left : "30%"
  },
  {
    title : "Music",
    emoji : "🎵",
    top : "5%",
    left : "60%"
  },
  {
    title : "Hiking",
    emoji : "🥾",
    top : "35%",
    left : "15%"
  },
  {
    title : "Cooking",
    emoji : "🍳",
    top : "35%",
    left : "40%"
  },
  {
    title : "Gaming",
    emoji : "🎮",
    top : "65%",
    left : "25%"
  },
];


export const AboutSection = () => {
  return (
      <div className="py-20 lg:py-28">
        <div className="container">
        <SectionHeader 
        eyebrow="About" 
        title="A Glimpse Into My World" 
        description="Learn more about who I am, what I do, and what inspires me." 
        />
        <div className="mt-20 flex flex-col gap-8">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-5 lg:grid-cols-3  " > 
            <Card className="h-[330px]  md:col-span-2 lg:col-span-1">
              <CardHeader 
              title="My Reads" 
              description="Explore the books shaping my perspective."   
            />
              <div className="w-40 mx-auto mt-2 md:mt-0">
                <Image src={bookImage} alt="Book Cover" /> 
              </div>
            </Card>
            <Card className="h-[330px] md:col-span-3 lg:col-span-2">
              <CardHeader title="My Toolbox" 
              description="Explore the technologies and tools I use to create digital experiences." 
              /> 
              <ToolboxItems items={toolboxItems} itemsWrapperClassName=" animate-move-left [animation-duration:30s]"  />
              <ToolboxItems items={toolboxItems}  className="mt-6 "
              itemsWrapperClassName="  animate-move-right [animation-duration:15s]"
              />
            </Card>
          </div>

          <div className="grid grid-cols-1 gap-8 md:grid-cols-5 lg:grid-cols-3">
            <Card className="h-[330px]  flex flex-col md:col-span-3 lg:col-span-2">
              <CardHeader 
              title="Beyond the Code" 
              description="Explore my interests and hobbies beyond the digital realm."
              className="" 
              />
            
                <div className="relative flex-1 ">
                  {hobbies.map((hobby) => (
                    <div key={hobby.title} className="absolute inline-flex items-center gap-2 px-6 bg-gradient-to-r from-emerald-300 to-sky-400 rounded-full py-1.5  "
                    style={{
                      left: hobby.left,
                      top: hobby.top 
                  }}
                    >
                      <span className=" font-medium text-gray-950">{hobby.title}</span>
                      <span>{hobby.emoji}</span>
                    </div>
                  ))}
                </div>
            </Card>
            <Card className="h-[330px] relative md:col-span-2 lg:col-span-1">
                <Image src={mapImage} alt="Map" className="h-full w-full object-cover" />
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 size-20 rounded-full bg-gradient-to-r from-emerald-300 to-sky-400 after:content-[''] after:absolute after:inset-0 after:outline after:outline-2 after:-outline-offset-2 after:rounded-full after:outline-gray-950/30 ">
                  <Image src={smileMemoji} alt="Memoji" className="size-20" />
                </div>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
};
