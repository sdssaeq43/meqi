import { Button } from "./ui/buttonHeader";
import { motion } from "framer-motion";
const itemVariants = {
  hidden: { x: 100, opacity: 0 }, // Start off-screen to the left
  visible: (i: number) => ({
    x: 0,
    opacity: 1,
    transition: {
      delay: i * 0.2, // Add stagger effect for each item
      duration: 0.5,
    },
  }),
};
export const Sidebar = () => {
  const menuItems = ["Resources", "NFT Vault", "Earn ZEPH"];
  return (
    <div className="z-10 absolute inset-0 bg-black bg-opacity-90 backdrop-blur-sm min-h-screen">
      <div className="flex justify-center items-center h-full w-full text-2xl text-center">
        <ul className="flex flex-col gap-10">
          {menuItems.map((item, index) => (
            <motion.li
              key={item}
              custom={index} // Pass index as a custom prop
              initial="hidden"
              animate="visible"
              variants={itemVariants}
            >
              {item}
            </motion.li>
          ))}
          <motion.li
            custom={menuItems.length} // Animate the button last
            initial="hidden"
            animate="visible"
            variants={itemVariants}
          >
            <Button />
          </motion.li>
        </ul>
      </div>
    </div>
  );
};
