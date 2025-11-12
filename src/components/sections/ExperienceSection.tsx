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
          <div className="flex-shrink-0 h-24 w-24 lg:h-32 md:w-32 rounded-full overflow-hidden dark:bg-neutral-50">
            {logo}
          </div>
          <div className="flex-1">
            <h4 className="text-3xl lg:text-4xl font-serif mb-4">
              {item.content.title}
            </h4>
            <p className="text-base lg:text-2xl font-light text-neutral-700 dark:text-neutral-300 mb-6">
              {item.content.subtitle}
            </p>
            <ul className="list-disc list-inside text-md lg:text-xl font-normal text-neutral-600 dark:text-neutral-400 leading-relaxed">
              {item.content.description.map((desc, index) => (
                <li key={index}>{desc}</li>
              ))}
            </ul>
          </div>
        </div>
      ),
    });
  }

  return (
    <div className="relative w-full overflow-clip">
      <Timeline
        title={portfolioData.timeline.title}
        subtitle={portfolioData.timeline.subtitle}
        data={timelineData}
      />
    </div>
  );
}
