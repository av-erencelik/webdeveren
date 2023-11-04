import FadeInWhenVisible from "../utils/FadeInWhenVisible";
import SectionTitle from "../utils/SectionTitle";
import { motion } from "framer-motion";
import eCommerce from "@/public/projects/e-commerce.png";
import imdbc from "@/public/projects/IMDB-C.png";
import recipe from "@/public/projects/recipecost.png";
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
      hrefs: { demo: "https://webdeveren.com/", code: "https://github.com/av-erencelik/e-commerce-monorepo" },
      name: "Full Stack E-Commerce Website (Sourdough)",
      src: eCommerce,
      description: t("projects.ecommerce"),
      techs: ["Next.js 13", "TypeScript", "Express", "MySQL", "Docker", "Kubernetes", "RabbitMQ"],
      reverse: false,
    },
    {
      hrefs: {
        demo: "https://sevdem-monorepo-admin.vercel.app/",
        code: "https://github.com/av-erencelik/sevdem-monorepo",
      },
      name: "Recipe Cost Calculator",
      src: recipe,
      description: t("projects.recipe"),
      techs: ["Next.js 13", "TypeScript", "Tailwind", "Prisma", "MySQL"],
      reverse: true,
    },
    {
      hrefs: { demo: "https://imdb-c.vercel.app/", code: "https://github.com/av-erencelik/Imdb-c" },
      name: "Online Movie and TV Database",
      src: imdbc,
      description: t("projects.imdb-c"),
      techs: ["Remix.js", "TypeScript", "Chakra UI", "Framer-Motion", "Node-Vibrant"],
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
