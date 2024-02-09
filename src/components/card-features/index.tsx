
import { Box, Grid, GridItem, Icon, Image, Text } from "@chakra-ui/react";
import { FiCodesandbox } from "react-icons/fi";
import { LuBadgeDollarSign } from "react-icons/lu";
import { MdOutlineCreditCard, MdPhoneAndroid } from "react-icons/md";
import { card, } from "../../assets";
import { FeatureCardProps } from "../../interface";
import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef } from 'react'




  
const FeatureCard: React.FC<FeatureCardProps> = ({ icon, title, description }) => (
  <GridItem colSpan={[2, 2, 1]} >
    <Box p={4} textAlign="center" >
      <Icon as={icon} color='blue.300' boxSize={[10,12,14]} />
      <Box mt={3}>
        <Text fontWeight="700" fontSize={["md", "lg"]}>
          {title}
        </Text>
        <Text fontSize={["sm", "md"]}>{description}</Text>
      </Box>
    </Box>
  </GridItem>
);

const CardFeatures = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['1', '1.33 1'],
  });
  const scaleProgress = useTransform(scrollYProgress, [0, 1], [0.8, 1]);
  const opacityProgress = useTransform(scrollYProgress, [0, 1], [0.7, 1.6]);

  return (
    <Box as={motion.div} ref={ref} style={{ scale: scaleProgress, opacity: opacityProgress }} mb={10} mt={[10,14, 18, 20]} transformOrigin='center' className="margin" >
      <Text px='20px' mb={4} textAlign='center' fontWeight="700" fontSize={["lg", "x-large", "xx-large"]}> Card Features</Text>

      <Grid templateRows={["repeat(2, 1fr)", "repeat(2, 1fr)"]} 
      templateColumns={["1fr", "1fr", "repeat(2, 1fr)"]} maxW='1000px' mx='auto'>
        <FeatureCard
          icon={LuBadgeDollarSign}
          title="Ultimate cashback match"
          description="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Deserunt asperiores id nihil delectus possimus minima suscipit non et, ipsa ut?"
        />

        <FeatureCard
          icon={MdPhoneAndroid}
          title="Payment by mobile app"
          description="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Deserunt asperiores id nihil delectus possimus minima suscipit non et, ipsa ut?"
        />

        <GridItem colSpan={[2, 2, 2]} rowSpan={[1, 1, 2]}>
          <Box w={["200px"]} mx="auto" display="flex" justifyContent="center" alignItems="center" h={["200px"]} p={1} >
            <Image src={card} />
          </Box>
        </GridItem>

        <FeatureCard
          icon={MdOutlineCreditCard}
          title="Earn 20% cashback"
          description="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Deserunt asperiores id nihil delectus possimus minima suscipit non et, ipsa ut?"
        />

      

        <FeatureCard
          icon={FiCodesandbox}
          title="Refundable Deposit"
          description="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Deserunt asperiores id nihil delectus possimus minima suscipit non et, ipsa ut?"
        />
      </Grid>
    </Box>
  );
};

export default CardFeatures;
