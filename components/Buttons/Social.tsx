import { motion } from "framer-motion";
import { Github, Twitter, Linkedin, FileText, Mail } from "lucide-react";
const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};
const itemUp = {
  hidden: { opacity: 0, x: -100 },
  show: { opacity: 1, x: 0, transition: { type: "tween", duration: 1 } },
};
const Social = () => {
  const links = [
    {
      id: 1,
      child: (
        <>
          GitHub <Github size={20} />
        </>
      ),
      href: "https://github.com/av-erencelik",
      style: "hover:rounded-tr-md",
    },
    {
      id: 2,
      child: (
        <>
          LinkedIn <Linkedin size={20} />
        </>
      ),
      href: "https://www.linkedin.com/in/mehmet-eren-%C3%A7elik-6710b0222/",
    },
    {
      id: 3,
      child: (
        <>
          Twitter <Twitter size={20} />
        </>
      ),
      href: "https://twitter.com/m_eren_celik",
    },
    {
      id: 4,
      child: (
        <>
          Mail <Mail size={20} />
        </>
      ),
      href: "mailto:av.erencelik@gmail.com",
    },
    {
      id: 5,
      child: (
        <>
          Resume <FileText size={20} />
        </>
      ),
      href: "https://twitter.com/m_eren_celik",
      style: "hover:rounded-br-md",
      download: true,
    },
  ];
  return (
    <div className="fixed top-[40%] left-0 hidden flex-col lg:flex">
      <motion.ul initial="hidden" animate="show" variants={container}>
        {links.map(({ id, child, href, style, download }) => (
          <motion.li
            variants={itemUp}
            className={
              "ml-[-70px] flex h-10 w-32 items-center justify-between bg-transparent px-4 text-cinder-900 duration-300 hover:ml-[-10px] hover:text-earth-300  dark:text-earth-50 dark:hover:text-earth-300" +
              " " +
              style
            }
            key={id}
          >
            <a
              href={href}
              className="flex w-full items-center justify-between text-sm font-semibold "
              download={download}
              target="_blank"
              rel="noreferrer"
            >
              {child}
            </a>
          </motion.li>
        ))}
      </motion.ul>
    </div>
  );
};

export default Social;
