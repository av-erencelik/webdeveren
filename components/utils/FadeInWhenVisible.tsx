import { motion } from "framer-motion";
import { ReactNode } from "react";
function FadeInWhenVisible({
  children,
  className,
  delay = 0,
}: {
  children: ReactNode;
  className?: string;
  delay?: number;
}) {
  return (
    <motion.div
      initial="offscreen"
      whileInView="onscreen"
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.5, delayChildren: delay }}
      className={"bg-transparent " + className}
    >
      {children}
    </motion.div>
  );
}
export default FadeInWhenVisible;
