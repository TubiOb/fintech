
import { Box, Flex,Text, IconButton, useDisclosure, Drawer, DrawerOverlay, DrawerContent, DrawerHeader, DrawerBody, Stack, DrawerCloseButton, Button,  } from '@chakra-ui/react';
import { HamburgerIcon } from '@chakra-ui/icons';
import { MdJoinInner } from 'react-icons/md';
import { HeaderProps } from '../../interface';
import { Link as ReactRouterLink, useNavigate } from 'react-router-dom'
import { Link as ChakraLink,  } from '@chakra-ui/react'




const Header: React.FC<HeaderProps> = ({  }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const navigate = useNavigate(); 

  const handleJoinWaitlist = () => {
    navigate('/waitlist'); 
  };

  return (
    <Flex p={4} align="center" justify="space-between" w={['full', 'full', 'full',  '1200px', '1500px']} mx='auto'>
    
      <Box>
        <Text fontSize={["x-large", 'xx-large', 'xxx-large']} fontWeight="bold">
       Flex.
        </Text>
      </Box>

   
      <Flex align="center" fontWeight='600' gap={4} display={{ base: 'none', lg: 'flex' }}>
  <Box
    mr={4}
    _hover={{ color: 'green.300', cursor: 'pointer' }} 
  >
    <Text fontSize="md">Home</Text>
  </Box>
  <Box
    mr={4}
    _hover={{  color: 'green.300', cursor: 'pointer' }}
  >
    <Text fontSize="md">About</Text>
  </Box>



<ChakraLink     mr={4}
    _hover={{  color: 'green.300', cursor: 'pointer' }}  fontSize="md" as={ReactRouterLink} to='/admin'>
  Admin
</ChakraLink>
  <Box
    _hover={{ color: 'green.300', cursor: 'pointer' }}
  >
    <Text fontSize="md">Contact</Text>
  </Box>

  <Button bg='green.100' _hover={{ bg: 'green.200' }} onClick={handleJoinWaitlist}  leftIcon={<MdJoinInner />}>
          Join Waitlist
        </Button>
</Flex>


     
      <Box display={{ base: 'block', lg: 'none' }}>
        <IconButton
          as={HamburgerIcon}
          aria-label="Open sidebar"
          variant="ghost"
          boxSize={6}
          onClick={onOpen}
        />
      </Box>

    
      <Drawer placement="right" onClose={onClose} isOpen={isOpen}>
        <DrawerOverlay />
        <DrawerContent bg="white" color="black" shadow='md'>
          <DrawerHeader borderBottomWidth="1px">
            Menu
          </DrawerHeader>
          <DrawerBody>
          <DrawerCloseButton />
            <Stack spacing={4}>
              <Text fontSize="md">Home</Text>
              <Text fontSize="md">About</Text>
              <Text fontSize="md">Contact</Text>
              <ChakraLink fontSize="md" as={ReactRouterLink} to='/admin'>
                 Admin
                </ChakraLink>
              <Button bg='green.100' _hover={{ bg: 'green.200' }}
               onClick={handleJoinWaitlist}  leftIcon={<MdJoinInner />}>
          Join Waitlist
        </Button>
        
            </Stack>
          </DrawerBody>
        </DrawerContent>
      </Drawer>

    </Flex>
  );
}

export default Header;



