
import { Box } from '@chakra-ui/react';
import { useEffect } from 'react';
import { motion, AnimatePresence, useAnimation } from 'framer-motion';
import { CardFeatures, Footer, Header, Hero, WaitlistForm } from '../../components';

const HomePage = () => {
  const headerControls = useAnimation();
  const heroControls = useAnimation();
  const waitlistFormControls = useAnimation();
  const cardFeaturesControls = useAnimation();
  const footerControls = useAnimation();

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
          <Box bg="gray.100">
            <motion.div initial={{ y: 50 }} animate={{ y: 0 }}>
              <Header />
            </motion.div>
            <motion.div initial={{ y: 50 }} animate={{ y: 0 }}>
              <Hero />
            </motion.div>
          </Box>
        <motion.div
          initial={{ x: -50 }}
          animate={waitlistFormControls}
          exit={{ x: -50 }}
          transition={{ duration: 0.5 }}
        >
          <WaitlistForm />
        </motion.div>
        <motion.div
          initial={{ x: 50 }}
          animate={cardFeaturesControls}
          exit={{ x: 50 }}
          transition={{ duration: 0.5 }}
        >
          <CardFeatures />
        </motion.div>
        <motion.div
          initial={{ x: -50 }}
          animate={footerControls}
          exit={{ x: -50 }}
          transition={{ duration: 0.5 }}
        >
          <Footer />
        </motion.div>
      </AnimatePresence>
    </Box>
  );
};

export default HomePage;
