import { motion } from "framer-motion";
import { ReactNode } from "react";
function FadeInWhenVisible({ children }: { children: ReactNode }) {
  return (
    <motion.div
      initial="offscreen"
      whileInView="onscreen"
      viewport={{ once: true, amount: 0.4 }}
      transition={{ duration: 0.5 }}
      className="bg-transparent"
    >
      {children}
    </motion.div>
  );
}
export default FadeInWhenVisible;
