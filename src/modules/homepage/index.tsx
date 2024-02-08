import { Box } from '@chakra-ui/react';
import { useEffect, useRef } from 'react';
import { motion, AnimatePresence, useAnimation } from 'framer-motion';
import { CardFeatures, Footer, WaitlistForm, Hero } from '../../components';

const HomePage = () => {
  const headerControls = useAnimation();
  const heroControls = useAnimation();
  const cardFeaturesControls = useAnimation();
  const footerControls = useAnimation();
  const waitlistRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      const rect = document.body.getBoundingClientRect();
      if (rect.top < window.innerHeight) {
        headerControls.start({ x: 0 });
        heroControls.start({ x: 0 });
        cardFeaturesControls.start({ x: 0 });
        footerControls.start({ x: 0 });
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [headerControls, heroControls, cardFeaturesControls, footerControls]);

  const handleJoinWaitlist = () => {
    if (waitlistRef.current) {
      waitlistRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <Box fontFamily="Montserrat, sans-serif">
      <AnimatePresence>
        <Box>
          <Box bg="gray.100">
            <motion.div key="hero" initial={{ y: 50 }} animate={{ y: 0 }}>
              <Hero handleJoinWaitlist={handleJoinWaitlist} />
            </motion.div>
          </Box>
        </Box>
        <motion.div
          key="cardFeatures"
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: -50, opacity: 0 }}
          transition={{ duration: 0.5 }}
        >
          <CardFeatures />
        </motion.div>
        <motion.div key="waitlistForm" ref={waitlistRef} 
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: -50, opacity: 0 }}
          transition={{ duration: 0.5 }}
        >
          <WaitlistForm />
        </motion.div>
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
