import { Box, Grid, Text, UnorderedList, ListItem, Icon } from "@chakra-ui/react";
import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";


const Footer = () => {
  return (
    <Box mt="10" as="footer" py={[10]} px={4} bg="gray.100" color="black" fontWeight="bold" fontSize={['md', 'lg']}>
      <Grid  maxW='1300px' mx='auto' templateColumns={['1fr', '1fr', 'repeat(5, 1fr)']} gap={4} textAlign="left">
      
        <Box>
          <Text >About Company</Text>
         <Text fontSize={['sm', 'md']} fontWeight='500'> Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt dolore possimus minus tempora nostrum rerum.</Text>
          <Box mt={2} display='flex' gap='1' flexWrap='wrap'>
           
            <Icon boxSize={[4,5,6]} as={FaFacebook} />
            <Icon boxSize={[4,5,6]} as={FaTwitter} />
            <Icon boxSize={[4,5,6]} as={FaInstagram} />
          </Box>
        </Box>

       
        <Box>
          <Text fontWeight="bold" ml={['0','1','2','3']}>Card Types</Text>
          <UnorderedList listStyleType='none'  fontSize={['sm', 'md']} fontWeight='500'>
          <ListItem m={0}>Card Type 1</ListItem>
            <ListItem m={0}>Card Type 2</ListItem>
           
          </UnorderedList>
        </Box>

       
        <Box>
          <Text fontWeight="bold"  ml={['0','1','2','3']}>Resources</Text>
          <UnorderedList listStyleType='none'  fontSize={['sm', 'md']} fontWeight='500'>
          <ListItem m={0}>Contact Us</ListItem>
            <ListItem m={0}>About Us</ListItem>
            <ListItem m={0}>Emergencies</ListItem>
            <ListItem m={0}>Help & Support</ListItem>
          </UnorderedList>
        </Box>

       
        <Box>
          <Text fontWeight="bold"  ml={['0','1','2','3']}>About Us</Text>
          <UnorderedList listStyleType='none'  fontSize={['sm', 'md']} fontWeight='500'>
          <ListItem m={0}>Our Team</ListItem>
            <ListItem m={0}>Mission</ListItem>
            <ListItem m={0}>Values</ListItem>
          </UnorderedList>
        </Box>

       
        <Box>
          <Text fontWeight="bold">Phone Number</Text>
          <Text  fontSize={['sm', 'md']} fontWeight='500'>+1 (555) 123-4567</Text>
        </Box>
      </Grid>
    </Box>
  );
};

export default Footer;
