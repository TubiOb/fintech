import { Box, Button, Icon, Image, Text } from '@chakra-ui/react'
import { FaStar } from 'react-icons/fa'
import { MdJoinInner } from 'react-icons/md'
import { cards } from '../../assets'
import { HeaderProps } from '../../interface'

const Hero: React.FC<HeaderProps> = ({ scrollToWaitlist }) => {
  return (
    <Box display={['grid', 'grid', 'flex']} justifyContent='space-evenly'py='3' px={[4, 6, 8]}>

     
      <Box w={['full', 'full', '40%']}>
        <Text fontWeight="700" fontSize={['lg', 'x-large', 'xx-large', 'xxx-large',]}>
          Welcome to Choose Freedom Flex Card.
        </Text>
        <Text fontWeight="500" fontSize={['sm', 'md',]}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque mollitia, sit, dicta at nihil dolor odio
          beatae, eius ad eveniet iusto laborum non provident quidem libero natus ducimus tempore nam.
        </Text>
        <Button mt={3} bg='green.100'  onClick={scrollToWaitlist}   _hover={{ bg: 'green.200' }} leftIcon={<MdJoinInner />}>
          Join Waitlist
        </Button>
        <Box display="flex" gap={1} color='blue.100' my={3}>
          {[1, 2, 3, 4, 5].map((_, index) => (
            <Icon key={index} as={FaStar} boxSize={4} />
          ))}
        </Box>
        <Text fontSize={['sm', 'md']} fontWeight='700'>
          Rated 4.6 out of 5
        </Text>
      </Box>

      <Box bg=''>
        <Image src={cards} w={['full', 'full', '400px', '500px',  '600px']} objectFit='contain' />
      </Box>
    </Box>
  );
}

export default Hero;
