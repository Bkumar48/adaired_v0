import { motion } from "framer-motion";
const SliderCard = ({ data }) => {
  return (
    <motion.div
      layout
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: {
          duration: 1.0,
        },
      }}
      // exit={{
      //   scale: 1,
      //   opacity: 0,
      //   transition: {
      //     duration: 0.5,
      //   },
      // }}
      // transition={{
      //   type: "spring",
      //   damping: 20,
      //   stiffness: 100,
      // }}
      className="diagonalSlider__SlideCard"
    >
      <motion.img
        layoutId={data?.img}
        alt={data?.alt}
        src={data?.img}
        className="diagonalSlider__SlideCard-img"
      />
    </motion.div>
  );
};

export default SliderCard;
