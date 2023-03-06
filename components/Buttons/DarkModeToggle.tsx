import { motion } from "framer-motion";
import { useEffect, useState } from "react";

motion;

const DarkModeToggle = () => {
  const [isDarkMode, toggle] = useState(
    typeof window !== "undefined" ? (localStorage.getItem("theme") === "light" ? false : true) : true
  );

  const properties = {
    sun: {
      r: 9,
      transform: "rotate(40deg)",
      cx: 12,
      cy: 4,
      opacity: 0,
    },
    moon: {
      r: 5,
      transform: "rotate(90deg)",
      cx: 30,
      cy: 0,
      opacity: 1,
    },
  };
  const { r, transform, cx, cy, opacity } = isDarkMode ? properties["moon"] : properties["sun"];
  useEffect(() => {
    if (!isDarkMode) {
      localStorage.setItem("theme", "light");
    } else {
      localStorage.removeItem("theme");
    }
    document.body.classList.toggle("dark", isDarkMode);
  }, [isDarkMode]);
  return (
    <button className="dark:text-earth-300">
      <motion.svg
        xmlns="http://www.w3.org/2000/svg"
        width="20"
        height="20"
        viewBox="0 0 24 24"
        fill="none"
        stroke={isDarkMode ? "currentColor" : "black"}
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
        animate={{ transform }}
        transition={{ type: "spring", stiffness: 75 }}
        style={{ cursor: "pointer" }}
        onClick={() => {
          toggle((prev) => !prev);
        }}
      >
        <mask id="mask">
          <rect x="0" y="0" width="100%" height="100%" fill="white" />
          <motion.circle
            animate={{ cx, cy }}
            cx="12"
            cy="4"
            r="9"
            fill="black"
            transition={{ type: "spring", stiffness: 75 }}
          />
        </mask>
        <motion.circle
          animate={{ r }}
          transition={{ type: "spring", stiffness: 75 }}
          fill={isDarkMode ? "currentColor" : "black"}
          cx="12"
          cy="12"
          r="9"
          mask="url(#mask)"
        />

        <motion.g animate={{ opacity }} fill="red" transition={{ type: "spring", stiffness: 75 }}>
          <line x1="12" y1="1" x2="12" y2="3" />
          <line x1="12" y1="21" x2="12" y2="23" />
          <line x1="4.22" y1="4.22" x2="5.64" y2="5.64" />
          <line x1="18.36" y1="18.36" x2="19.78" y2="19.78" />
          <line x1="1" y1="12" x2="3" y2="12" />
          <line x1="21" y1="12" x2="23" y2="12" />
          <line x1="4.22" y1="19.78" x2="5.64" y2="18.36" />
          <line x1="18.36" y1="5.64" x2="19.78" y2="4.22" />
        </motion.g>
      </motion.svg>
    </button>
  );
};

export default DarkModeToggle;
