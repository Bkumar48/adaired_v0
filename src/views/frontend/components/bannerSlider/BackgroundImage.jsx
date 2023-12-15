import { motion, AnimatePresence } from "framer-motion";

const BackgroundImage = ({ transitionData }) => {
  const imageVariants = {
    enter: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: "100%" },
  };
  return (
    <AnimatePresence initial={false}>
      {transitionData && (
        <motion.img
          key={transitionData.img}
          layoutId={transitionData.img}
          initial={{ opacity: 0, y: 0 }}
          animate="enter"
          variants={imageVariants}
          transition={{
            opacity: { ease: "linear", duration: 0.6 },
            y: { type: "tween", ease: "easeOut", duration: 0.6, delay: 0.2 },
          }}
          alt="Transition Image"
          className="banner-slider__image"
          src={transitionData.img}
        />
      )}
    </AnimatePresence>
  );
};

export default BackgroundImage;
