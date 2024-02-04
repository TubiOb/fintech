import { Box, Grid, Text, UnorderedList, ListItem, Icon } from "@chakra-ui/react";
import { FaFacebook, FaInstagram, FaPhoneAlt, FaTwitter } from "react-icons/fa";


const Footer = () => {
  return (
    <Box mt="16" as="footer" py={[10]} px={4} bg="gray.100" color="black" fontWeight="bold" fontSize={['md', 'lg']}>
      <Grid  maxW='1300px' mx='auto' templateColumns={['1fr', '1fr', '1fr 1fr', 'repeat(5, 1fr)']} gap={4} textAlign="left">
      
        <Box>
          <Text >About Company</Text>
         <Text fontSize={['sm', 'md']} fontWeight='500'> Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt dolore possimus minus tempora nostrum rerum.</Text>
          <Box mt={2} display='flex' gap='2' flexWrap='wrap'>
           
            <Icon boxSize={[6]} color='blue.300' as={FaFacebook} />
            <Icon boxSize={[6]}  color='red.400' as={FaInstagram} />
            <Icon boxSize={[6]}  color='blue.500' as={FaTwitter} />
          </Box>
        </Box>

       
        <Box>
          <Text fontWeight="bold" ml={['0','1','2','3']}>Card</Text>
          <UnorderedList listStyleType='none'  fontSize={['sm', 'md']} fontWeight='500'>
          <ListItem ml={[-2,-2, -2,0]}>Standard Card </ListItem>
            <ListItem ml={[-2,-2, -2,0]}>Auto Card</ListItem>
            <ListItem ml={[-2,-2, -2,0]}>Standard Card </ListItem>
            <ListItem ml={[-2,-2, -2,0]}>Auto Card</ListItem>
            <ListItem ml={[-2,-2, -2,0]}>Updates </ListItem>

           
          </UnorderedList>
        </Box>

       
        <Box>
          <Text fontWeight="bold"  ml={['0','1','2','3']}>Resources</Text>
          <UnorderedList listStyleType='none'  fontSize={['sm', 'md']} fontWeight='500'>
          <ListItem ml={[-2,-2, -2,0]}>Contact Us</ListItem>
            <ListItem ml={[-2,-2, -2,0]}>About Us</ListItem>
            <ListItem ml={[-2,-2, -2,0]}>Emergencies</ListItem>
            <ListItem ml={[-2,-2, -2,0]}>Help & Support</ListItem>
            <ListItem ml={[-2,-2, -2,0]}>Carerer</ListItem>
          </UnorderedList>
        </Box>

       
        <Box>
          <Text fontWeight="bold"  ml={['0','1','2','3']}>About Us</Text>
          <UnorderedList listStyleType='none'  fontSize={['sm', 'md']} fontWeight='500'>
          <ListItem ml={[-2,-2, -2,0]}>Our Team</ListItem>
            <ListItem ml={[-2,-2, -2,0]}>Mission & Vision</ListItem>
            <ListItem ml={[-2,-2, -2,0]}>Values</ListItem>
            <ListItem ml={[-2,-2, -2,0]}>Dreams</ListItem>
            <ListItem ml={[-2,-2, -2,0]}>Life Resources</ListItem>
          </UnorderedList>
        </Box>

       
        <Box display='flex' gap={2} alignItems='flex-start'>
          <Icon  p={2} borderRadius='50%' bg='blue.200' boxSize={8} as={FaPhoneAlt} />
          <Text  fontSize={['sm', 'md']} fontWeight='500'>+1 (555) 123-4567</Text>
        </Box>
      </Grid>
    </Box>
  );
};

export default Footer;
