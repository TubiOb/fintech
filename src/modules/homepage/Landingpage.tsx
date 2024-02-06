
import { Box } from '@chakra-ui/react';
import { useEffect } from 'react';
import { motion, AnimatePresence, useAnimation } from 'framer-motion';
import { Header, Hero, } from '../../components';


const Landingpage = () => {
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
    <Box fontFamily="Montserrat, sans-serif"  h={['70vh','80vh', '90vh', '100vh']} >
      <AnimatePresence>
          <Box bg="gray.100" alignItems='center' display={['grid', 'grid', 'grid', 'flex']} flexDir={'column'}>
            <motion.div initial={{ y: 50 }} animate={{ y: 0 }} >
          <Box w="100%">  <Header /></Box>
            </motion.div>
            <motion.div initial={{ y: 50 }} animate={{ y: 0 }}>
              <Hero />
            </motion.div>
          </Box>

         
       
      </AnimatePresence>
    </Box>
  );
};

export default Landingpage
