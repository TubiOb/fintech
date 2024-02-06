
import { Box } from '@chakra-ui/react';
import { useEffect } from 'react';
import { motion, AnimatePresence, useAnimation } from 'framer-motion';
import { CardFeatures, Footer, WaitlistForm } from '../../components';
import { useRef } from 'react';

const HomePage = () => {
  const headerControls = useAnimation();
  const heroControls = useAnimation();
  const waitlistFormControls = useAnimation();
  const cardFeaturesControls = useAnimation();
  const footerControls = useAnimation();
  const waitlistRef = useRef<HTMLDivElement>(null); 

  useEffect(() => {
    const handleScroll = () => {
      const rect = document.body.getBoundingClientRect();
      if (rect.top < window.innerHeight) {
        headerControls.start({ x: 0 });
        heroControls.start({ x: 0 });
        waitlistFormControls.start({ x: 0 });
        cardFeaturesControls.start({ x: 0 });
        footerControls.start({ x: 0 });
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [headerControls, heroControls, waitlistFormControls, cardFeaturesControls, footerControls]);

  return (
    <Box fontFamily="Montserrat, sans-serif">
<AnimatePresence>
  <motion.div
    key="cardFeatures"
    initial={{ y: -50, opacity: 0 }}
    animate={{ y: 0, opacity: 1 }}
    exit={{ y: -50, opacity: 0 }}
    transition={{ duration: 0.5 }}
  >
    <CardFeatures />
  </motion.div>
  <Box ref={waitlistRef}>
    <motion.div
      key="waitlistForm"
      initial={{ y: -50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      exit={{ y: -50, opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <WaitlistForm />
    </motion.div>
  </Box>
  <motion.div
    key="footer"
    initial={{ y: -50, opacity: 0 }}
    animate={{ y: 0, opacity: 1 }}
    exit={{ y: -50, opacity: 0 }}
    transition={{ duration: 0.5 }}
  >
    <Footer />
  </motion.div>
</AnimatePresence>

    </Box>
  );
};

export default HomePage;
