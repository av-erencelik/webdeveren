import FadeInWhenVisible from "../utils/FadeInWhenVisible";
import SectionTitle from "../utils/SectionTitle";
import { motion } from "framer-motion";
import twitato from "@/public/projects/twitato.png";
import imdbc from "@/public/projects/IMDB-C.png";
import gaming from "@/public/projects/Gaming.png";
import IndividualProjects, { ProjectType } from "./IndividualProjects";
import { cn } from "@/utils/utils";
import { useTranslation } from "next-i18next";
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

const ProjectsSection = () => {
  const { t } = useTranslation("common");
  const projects: ProjectType[] = [
    {
      hrefs: { demo: "https://twitato.vercel.app/", code: "https://github.com/av-erencelik/twitato" },
      name: "Twitato",
      src: twitato,
      description: t("projects.twitato"),
      techs: ["Next.js 13", "TypeScript", "Tailwind", "Firebase", "NextAuth"],
      reverse: false,
    },
    {
      hrefs: { demo: "https://imdb-c.vercel.app/", code: "https://github.com/av-erencelik/Imdb-c" },
      name: "Imdb-c",
      src: imdbc,
      description: t("projects.imdb-c"),
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
      description: t("projects.gamingRealm"),
      techs: ["React.js", " JavaScript", "Tailwind", "Redux", "Firebase"],
      reverse: false,
    },
  ];
  return (
    <FadeInWhenVisible>
      <motion.div className="flex flex-col justify-center gap-10" variants={itemDown}>
        <SectionTitle title={t("nav.projects")} />
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
