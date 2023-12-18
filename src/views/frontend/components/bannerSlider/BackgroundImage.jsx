import { motion, AnimatePresence } from "framer-motion";

const BackgroundImage = ({ transitionData }) => {
  const imageVariants = {
    enter: { opacity: 1, y: 0 },
    exit: { opacity: 1, y: "100%" },
  };

  return (
    <>
      <AnimatePresence exitBeforeEnter={false} initial={false}>
        {transitionData && (
          <motion.img
            key={transitionData.img}
            layoutId={transitionData.img}
            initial={{ opacity: 0, y: 0 }}
            animate="enter"
            exit="exit"
            variants={imageVariants}
            transition={{
              opacity: { ease: "circIn", duration: 0.95 },
              y: { type: "tween", ease: "easeOut", duration: 0.95 },
            }}
            alt="Transition Image"
            className="banner-slider__image"
            src={transitionData.img}
          />
        )}
      </AnimatePresence>
    </>
  );
};

export default BackgroundImage;
