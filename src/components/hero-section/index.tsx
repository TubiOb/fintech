import { Box, Button, Icon, Image, Text } from '@chakra-ui/react'
import { FaStar } from 'react-icons/fa'
import { MdJoinInner } from 'react-icons/md'
import { cards } from '../../assets'
import { HeaderProps } from '../../interface'
import { useNavigate } from 'react-router-dom'

const Hero: React.FC<HeaderProps> = () => {
  const navigate = useNavigate(); 

  const handleJoinWaitlist = () => {
    navigate('/waitlist'); 
  };
  return (
    <Box display={['grid', 'grid', 'flex']} justifyContent={['space-between']}  py='3' px={[4, 6, 8]} mt={[3,5,7,10]}>

     
      <Box  w={['full','full', 'full', '70%']}  textAlign='left'>
        <Text fontWeight="700" fontSize={['lg', 'x-large', 'xx-large', '70px',]}>
          Welcome to Choose Freedom Flex Card.
        </Text>
        <Text fontWeight="500" fontSize={['sm', 'md', 'x-large','xx-large',]}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque mollitia, sit, dicta at nihil dolor odio
          beatae, eius ad eveniet iusto laborum non provident quidem libero natus ducimus tempore nam.
        </Text>
        <Button mt={3} bg='green.100'  py={[5,6,7,8,9]} fontSize={['sm', 'md', 'x-large','xx-large',]}
          _hover={{ bg: 'green.200' }} onClick={handleJoinWaitlist} leftIcon={<MdJoinInner />}>
          Join Waitlist
        </Button>
        <Box display="flex" gap={1} color='blue.100' my={3}>
          {[1, 2, 3, 4, 5].map((_, index) => (
            <Icon key={index} as={FaStar} boxSize={[4,5,6,7,]} />
          ))}
        </Box>
        <Text fontSize={['sm', 'md','lg']} fontWeight='700'>
          Rated 4.6 out of 5
        </Text>
      </Box>

      <Box w=''>
        <Image src={cards} w={['full', 'full', '100%']} objectFit='contain' />
      </Box>
    </Box>
  );
}

export default Hero;
