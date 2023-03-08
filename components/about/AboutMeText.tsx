import { motion } from "framer-motion";
const rightIn = {
  offscreen: { x: 200 },
  onscreen: { x: 0, transition: { duration: 1 } },
};

const AboutMeText = () => {
  return (
    <motion.p className="w-full text-justify text-cinder-700 dark:text-gray-400 lg:w-2/4" variants={rightIn}>
      Hello! My name is Mehmet Eren Çelik and I am a self-taught developer. I am passionate about web development and
      front end. I graduated from law school in 2021, but during the Covid era and while doing my legal apprenticeship,
      I became interested in web development. I have been studying full-time on this field since june 2022.
      <br /> <br />I started with learning HTML & CSS and during this process, I also learned technologies like
      JavaScript, TypeScript, React.js, Next.js, and Remix.js. Most recently, I have been learning Dart and Flutter as a
      Trainee at{" "}
      <a
        href="https://oyunveuygulamaakademisi.com/"
        target="_blank"
        rel="noreferrer"
        className="text-earth-300 transition-all duration-300 hover:underline"
      >
        Oyun ve Uygulama Akademisi
      </a>{" "}
      since December 2022. Constantly improving myself and learning new technologies is essential for me.
      <br /> <br />
      As I continue on this passionate journey, I enjoy working and developing myself. I will continue to improve and
      learn in the future as well. Collaborating with people who share this passion would be a great pleasure for me.
      <br /> <br />I would also like to share some of the projects I have worked on along the way. You can take a look
      at the list below and learn more about my projects.
    </motion.p>
  );
};

export default AboutMeText;
