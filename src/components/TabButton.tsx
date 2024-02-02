import React, { ReactNode, MouseEvent } from "react";
import { motion, Variants } from "framer-motion";

interface TabButtonProps {
  active: boolean;
  selectTab: () => void;
  children: ReactNode;
}

const variants: Variants = {
  default: { width: 0 },
  active: { width: "calc(100% - 0.75rem)" },
};

const TabButton: React.FC<TabButtonProps> = ({ active, selectTab, children }) => {
  const buttonClasses = active ? "text-white" : "text-[#ADB7BE]";

  const handleClick = (event: MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    selectTab();
  };

  return (
    <button onClick={handleClick} className="focus:outline-none">
      <p className={`mr-3 font-semibold hover:text-white ${buttonClasses}`}>
        {children}
      </p>
      <motion.div
        animate={active ? "active" : "default"}
        variants={variants}
        className="h-1 bg-[#6229e7] "
      ></motion.div>
    </button>
  );
};

export default TabButton;
