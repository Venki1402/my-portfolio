import { motion } from "framer-motion";

// variants
const stairAnimation = {
  initial: {
    top: "0%",
  },
  animate: {
    top: "100%",
  },
  exit: {
    top: ["100%", "0%"],
  },
};

// Stairs component
const Stairs = () => {
  // clalc rev index
  const reverseIndex = (index) => {
    const totalsteps = 6;
    return totalsteps - index;
  };

  return (
    // render 6 divs , each representing a step of the stairs.
    <>
      {[...Array(6)].map((_, index) => (
        <motion.div
          key={index}
          variants={stairAnimation}
          initial="initial"
          animate="animate"
          exit="exit"
          transition={{
            duration: 0.4,
            delay: reverseIndex(index) * 0.1,
          }}
          className="w-full h-full bg-white relative"
        />
      ))}
    </>
  );
};

export default Stairs;
