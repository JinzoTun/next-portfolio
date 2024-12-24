import memojiAvatar1 from "@/assets/images/memoji-avatar-1.png";
import memojiAvatar2 from "@/assets/images/memoji-avatar-2.png";
import memojiAvatar3 from "@/assets/images/memoji-avatar-3.png";
import memojiAvatar4 from "@/assets/images/memoji-avatar-4.png";
import memojiAvatar5 from "@/assets/images/memoji-avatar-5.png";
import { SectionHeader } from "@/components/SectionHeader";
import Image from "next/image";
import { Card } from "@/components/Card";

const testimonials = [
  {
    name: "Alex Turner",
    position: "Marketing Manager @ TechStartups",
    text: "Jinzo was instrumental in transforming our website into a powerful marketing tool. His attention to detail and ability to understand our brand is exceptional. We're thrilled with the results!",
    avatar: memojiAvatar1,
  },
  {
    name: "Sarah Thompson",
    position: "CEO @ MarketingPro",
    text: "Jinzo is a true professional. He took the time to understand our business and created a website that met all our requirements. I highly recommend his services.",
    avatar: memojiAvatar2,
  },
  {
    name: "John Doe",
    position: "Founder @ StartupHub",
    text: "Working with Jinzo was a great experience. He's a talented designer with a keen eye for detail. Our website looks amazing and we couldn't be happier with the results.",
    avatar: memojiAvatar3,
  },
  {
    name: "Jane Smith",
    position: "Marketing Director @ TechSolutions",
    text: "Jinzo is a pleasure to work with. He's professional, responsive, and has a great eye for design. We're very happy with the website he created for us.",
    avatar: memojiAvatar4,
  },
  {
    name: "Mike Johnson",
    position: "CEO @ TechInnovations",
    text: "Jinzo is a talented designer who delivers excellent results. He's responsive, detail-oriented, and has a great sense of style. I highly recommend his services.",
    avatar: memojiAvatar5,
  },
  
];

export const TestimonialsSection = () => {
  return (
    <div className="py-16 lg:py-24">
      <div className="container ">
        <SectionHeader 
        eyebrow="Happy Clients" 
        title="What Clients Say about Me" 
        description="Don't just take my word for it. Here's what my clients have to say about my work."
        />
        <div className="mt-16 md:mt-24 flex overflow-x-clip [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
          <div className="flex gap-8 flex-none">
          {testimonials.map((testimonial) => (
            <Card key={testimonial.name} className="max-w-xs md:p-8 md:max-w-md">
              <div className="flex gap-4 items-center">
                <div className="size-14 bg-gray-700 inline-flex items-center justify-center rounded-full shrink-0">
                  <Image 
                  src={testimonial.avatar} 
                  alt={testimonial.name}
                  className="max-h-full"
                   />
                </div>
                <div>
                  <div className="font-semibold">
                    {testimonial.name}
                  </div>
                  <div className="text-sm md:text-base text-white/40">
                    {testimonial.position}
                  </div>
                </div>
              </div>
              <p className="mt-4 md:mt-6 text-sm">
                {testimonial.text}
              </p>
            </Card>
          ))}
          </div>
        </div>
      </div>
    </div>
  );
};
