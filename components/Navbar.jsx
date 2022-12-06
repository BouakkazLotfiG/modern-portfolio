"use client";
import { useState } from "react";
import { motion } from "framer-motion";

import styles from "../styles";
import { navVariants } from "../utils/motion";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  return (
    <motion.nav
      variants={navVariants}
      initial="hidden"
      whileInView="show"
      className={`${styles.xPaddings} py-8 relative `}
    >
      <div className="absolute w-[50%] inset-0 gradient-01" />
      <div
        className={`${styles.innerWidth} mx-auto flex justify-between gap-8`}
      >
        <h2 className="font-extrabold text-[24px] leading-[30px] text-white">
          BOUAKKAZ
        </h2>
        <div className="w-[24px] h-[24px] object-contain">
          {!open ? (
            <img
              src="/arrow.svg"
              alt="menu"
              onClick={() => {
                setOpen(!open);
                console.log(open);
              }}
            />
          ) : (
            <img
              src="/menu.svg"
              alt="menu"
              onClick={() => {
                setOpen(!open);
                console.log(open);
              }}
            />
          )}
        </div>
      </div>
    </motion.nav>
  );
};

export default Navbar;
