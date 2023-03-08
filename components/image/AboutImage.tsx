import { motion } from "framer-motion";
import Image from "next/image";
import Pp from "../../public/pp.png";
const leftIn = {
  offscreen: { x: -200 },
  onscreen: { x: 0, transition: { duration: 1 } },
};
const AboutImage = () => {
  return (
    <motion.div className="block w-full max-w-[300px] overflow-hidden rounded-md" variants={leftIn}>
      <Image src={Pp} alt="pp" className="rounded-md object-cover" width={300} height={300} />
    </motion.div>
  );
};

export default AboutImage;
