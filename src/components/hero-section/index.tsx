import { Box, Button, Icon, Image, Text } from '@chakra-ui/react'
import { FaStar } from 'react-icons/fa'
import { MdJoinInner } from 'react-icons/md'
import { cards } from '../../assets'
import { HeaderProps } from '../../interface'


const Hero: React.FC<HeaderProps> = ({handleJoinWaitlist} ) => {
 
  return (
    <Box py={['8',13,17, '24']} display='flex' alignItems='center' justifyContent='center'>

     
  <Box display={['grid', 'grid', 'grid', 'flex']} justifyContent={['space-between']}    pt='3' px={[4, 6, 8]}  gap={[4,6,2,2]}>
  <Box  w={['full','full', 'full', '70%']} h='max-content' mb={[3,5,7,9]}  textAlign='left'>
        <Text fontWeight="700" mb={[1,2,3,]} fontSize={['35px', '53px', '65px', '75px',]}>
          Welcome to Choose Freedom Flex Card.
        </Text>
        <Text fontWeight="500" mb={[1,2,3,]}  fontSize={['sm', 'md', 'x-large','xx-large',]}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque mollitia, sit, dicta at nihil dolor odio
          beatae, eius ad eveniet iusto laborum non provident quidem libero natus ducimus tempore nam.
        </Text>
        <Button mb={[1,2,3,]}  bg='green.100'  py={[5,6,7,8,9]} fontSize={['sm', 'md', 'x-large','xx-large',]}
          _hover={{ bg: 'green.200' }} onClick={handleJoinWaitlist}   leftIcon={<MdJoinInner />}>
          Join Waitlist
        </Button>
        <Box display="flex" gap={1} color='blue.100' mb={[1,2,3,]} >
          {[1, 2, 3, 4, 5].map((_, index) => (
            <Icon key={index} as={FaStar} boxSize={[4,5,6,7,]} />
          ))}
        </Box>
        <Text fontSize={['sm', 'md','lg']} fontWeight='700'>
          Rated 4.6 out of 5
        </Text>
      </Box>

      <Box   h='max-content'>
        <Image src={cards} w={['full', 'full', '100%']} objectFit='contain' />
      </Box>
  </Box>
    </Box>
  );
}

export default Hero;
