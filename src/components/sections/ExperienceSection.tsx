import { portfolioData } from "@/data/portfolio.data";
import { Timeline } from "../ui/timeline";
import Image from "next/image";

export default function ExperienceSection() {
  const timelineData = [];

  const getInitials = (s: string) =>
    s
      .split(" ")
      .map((w) => w.charAt(0))
      .filter(Boolean)
      .slice(0, 2)
      .join("")
      .toUpperCase();

  for (const item of portfolioData.timeline.data) {
    const logo = item.logo ? (
      <Image
        src={item.logo}
        alt={`${item.title} logo`}
        width={48}
        height={48}
        className="h-full w-full object-contain"
      />
    ) : (
      // fallback: initials in a subtle gradient circle
      <div className="h-full w-full flex items-center justify-center text-white font-semibold bg-gradient-to-tr from-purple-500 to-blue-500">
        {getInitials(item.content.title || "")}
      </div>
    );

    timelineData.push({
      title: item.title,
      content: (
        <div className="flex items-start gap-4 md:gap-6">
          <div className="flex-shrink-0 h-20 w-20 md:h-24 md:w-24 rounded-2xl overflow-hidden dark:bg-neutral-50 backdrop-blur-apple border border-primary/10 shadow-subtle">
            {logo}
          </div>
          <div className="flex-1">
            <h4 className="text-2xl md:text-3xl font-semibold mb-3 text-foreground">
              {item.content.title}
            </h4>
            <p className="text-base md:text-lg font-normal text-muted-foreground mb-6 leading-relaxed">
              {item.content.subtitle}
            </p>
            <ul className="space-y-2 text-sm md:text-base font-normal text-muted-foreground/90 leading-relaxed">
              {item.content.description.map((desc, index) => (
                <li key={index} className="flex items-start gap-3">
                  <span className="text-accent flex-shrink-0">•</span>
                  <span>{desc}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      ),
    });
  }

  return (
    <section
      id="experience"
      className="min-h-screen relative py-24 px-8 flex items-center justify-center bg-gradient-to-br from-background via-primary/[0.02] to-background overflow-hidden"
    >
      {/* Ambient glow */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 h-96 w-96 rounded-full bg-primary/10 blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 h-96 w-96 rounded-full bg-accent/10 blur-3xl" />
      </div>
      
      <Timeline
        title={portfolioData.timeline.title}
        subtitle={portfolioData.timeline.subtitle}
        data={timelineData}
      />
    </section>
  );
}
