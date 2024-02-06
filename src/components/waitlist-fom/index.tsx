import React, { useState } from 'react';
import { useToast, Box, Input, Button, Text, Modal, ModalOverlay, ModalContent, ModalHeader, ModalBody, ModalCloseButton, FormControl,  } from '@chakra-ui/react';
import { createUserWithEmailAndPassword, getAuth } from 'firebase/auth';
import { app } from '../../firebase';
import { addDoc, collection, getDocs, getFirestore } from 'firebase/firestore';

const WaitlistForm: React.FC = () => {
  const [email, setEmail] = useState<string>('');
  const [waitlistPosition, setWaitlistPosition] = useState<number | null>(null);
  const [isModalOpen, setModalOpen] = useState(false); 
  const [isLoading, setLoading] = useState(false); 

  const toast = useToast(); 

 

  const handleFormSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
        setLoading(true); 
      const auth = getAuth(app);
      const { user } = await createUserWithEmailAndPassword(auth, email, 'password');

      const firestore = getFirestore(app);
      const waitlistCollection = collection(firestore, 'waitlist');

      const docRef = await addDoc(waitlistCollection, {
        email: user?.email,
        userId: user?.uid,
        created: new Date().toISOString(),
      });

      console.log("Document written with ID: ", docRef.id);

      localStorage.clear();

      const waitlistSnapshot = await getDocs(waitlistCollection);
      const lastPosition = waitlistSnapshot.docs.length;

      setWaitlistPosition(lastPosition);
      setModalOpen(true); 

     
      toast({
        title: 'Success!',
        description: 'Successfully added to the waitlist!',
        status: 'success',
        duration: 5000,
        isClosable: true,
      });
    } catch (error:any) {
    
      toast({
        title: 'Error',
        description: `Error adding to the waitlist: ${error.message}`,
        status: 'error',
        duration: 5000,
        isClosable: true,
      });
    } finally {
    setLoading(false); 
  }
  };

  const closeModal = () => {
    setModalOpen(false);
  };

  return (
    <div className="" >
      <Box p={4} maxW='1300px' mx='auto' textAlign='center' mt={14}>
      <Box w={['full', ]} mb={5}>
     <Text fontSize={["lg", "x-large", "xx-large"]}fontWeight="bold" mb={1}>
        Elevate Your Finances Together
      </Text>
      <Text mb={2} fontSize={['sm', 'md', 'lg']} >
        Experience the joy of seamlessly splitting bills, achieving shared financial goals, and effortlessly tracking expenses as a team. Join the waitlist below for exclusive early access. Your relationship will thank you for it!
      </Text>

     </Box>

   
        <form onSubmit={handleFormSubmit}>
        <Box display={['grid','grid','flex']} maxW='70%' mx='auto' alignItems='center' gap={3} w='full'> 
      
                   <FormControl isRequired>
         {/* <FormLabel htmlFor="email" textAlign='center'  mb={2}>Email</FormLabel> */}
         <Input type="email" id="email" placeholder="Enter your email" value={email} onChange={(e) => setEmail(e.target.value)} required />
         </FormControl>

          <Button bg='green.100' type="submit"   isLoading={isLoading} 
            loadingText="Submitting..." 
          _hover={{ bg: 'green.200' }}>
            Join Waitlist
          </Button>
          </Box>
        </form>

        

        {waitlistPosition !== null && (
          <Modal isOpen={isModalOpen} onClose={closeModal} isCentered>
            <ModalOverlay />
            <ModalContent bg='white'>
              <ModalHeader>Waitlist Position</ModalHeader>
              <ModalCloseButton />
              <ModalBody>
                <Text>You are number {waitlistPosition} on the waitlist.</Text>
              </ModalBody>
            </ModalContent>
          </Modal>
        )}
      </Box>
    </div>
  );
};

export default WaitlistForm;
