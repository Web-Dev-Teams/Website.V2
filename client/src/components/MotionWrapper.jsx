import { motion } from 'framer-motion';

const MotionWrapper = ({ children, direction = 'up', delay = 0 }) => {
  let variants = {
    hidden: { opacity: 0, y: 0, x: 0 },
    visible: { opacity: 1, y: 0, x: 0 },
  };

  switch (direction) {
    case 'up':
      variants.hidden.y = 50;
      break;
    case 'down':
      variants.hidden.y = -50;
      break;
    case 'left':
      variants.hidden.x = 100;
      break;
    case 'right':
      variants.hidden.x = -100;
      break;
    case 'zoom':
      variants.hidden.scale = 0.8;
      variants.visible.scale = 1;
      break;
    default:
      break;
  }

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.6, delay }}
      variants={variants}
    >
      {children}
    </motion.div>
  );
};

export default MotionWrapper;
