import FadeInWhenVisible from "../utils/FadeInWhenVisible";
import SectionTitle from "../utils/SectionTitle";
import { motion } from "framer-motion";
import twitato from "@/public/projects/twitato.png";
import imdbc from "@/public/projects/IMDB-C.png";
import gaming from "@/public/projects/Gaming.png";
import IndividualProjects, { ProjectType } from "./IndividualProjects";
import { cn } from "@/utils/utils";
const itemDown = {
  offscreen: { opacity: 0, y: 100 },
  onscreen: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 1,
      ease: "easeInOut",
    },
  },
};
const projects: ProjectType[] = [
  {
    hrefs: { demo: "https://twitato.vercel.app/", code: "https://github.com/av-erencelik/twitato" },
    name: "Twitato",
    src: twitato,
    description:
      "Twitato is a social media platform that allows users to create and share short messages, comment, like or bookmark other's posts, and see the trending topics, similar to Twitter.",
    techs: ["Next.js 13", "TypeScript", "Tailwind", "Firebase", "NextAuth"],
    reverse: false,
  },
  {
    hrefs: { demo: "https://imdb-c.vercel.app/", code: "https://github.com/av-erencelik/Imdb-c" },
    name: "Imdb-c",
    src: imdbc,
    description:
      "IMDB-C is a movie and TV shows database website created with TMDB api that allow users to search for movies and TV shows, rate them, add them to their watchlist, and mark them as favorites.",
    techs: ["Remix.js", "TypeScript", "Chakra UI", "Framer-Motion", "Node-Vibrant"],
    reverse: true,
  },
  {
    hrefs: {
      demo: "https://gamingdbsiteproject.netlify.app/home",
      code: "https://github.com/av-erencelik/GamingRealm",
    },
    name: "GamingRealm",
    src: gaming,
    description:
      "GamingRealm is a website, powered by Rawg.io API, allows users to browse, favorite, and comment on games, connecting them with a community of gaming enthusiasts.",
    techs: ["React.js", " JavaScript", "Tailwind", "Redux", "Firebase"],
    reverse: false,
  },
];
const ProjectsSection = () => {
  return (
    <FadeInWhenVisible>
      <motion.div className="flex flex-col justify-center gap-10" variants={itemDown}>
        <SectionTitle title="Projects" />
        {projects.map((project, index) => (
          <FadeInWhenVisible key={index}>
            <div
              className={cn(
                `flex flex-col items-center gap-5 lg:items-start lg:justify-center xl:gap-10`,
                project.reverse ? "lg:flex-row-reverse" : "lg:flex-row"
              )}
            >
              <IndividualProjects
                description={project.description}
                hrefs={project.hrefs}
                name={project.name}
                techs={project.techs}
                src={project.src}
                reverse={project.reverse}
              />
            </div>
          </FadeInWhenVisible>
        ))}
      </motion.div>
    </FadeInWhenVisible>
  );
};

export default ProjectsSection;
