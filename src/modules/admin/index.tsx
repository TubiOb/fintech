
 // /admin?role=admin
 import React, { useEffect, useState } from 'react';
 import {
   Box,
   Text,
   Modal,
   ModalOverlay,
   ModalContent,
   ModalHeader,
   ModalBody,
   ModalFooter,
   Button,
   Table,
   Thead,
   Tbody,
   Tr,
   Th,
   Td,
   Input,
   InputGroup,
   InputRightElement,
 } from '@chakra-ui/react';
 import { getDocs, collection, getFirestore } from 'firebase/firestore';
 import { useNavigate } from 'react-router-dom';
 import { UserData } from '../../interface';
import { FaEyeSlash, FaEye } from 'react-icons/fa';
 
 const AdminPage = () => {
   const [showModal, setShowModal] = useState(false);
   const [users, setUsers] = useState<UserData[]>([]);
   const [password, setPassword] = useState('');
   const [showPassword, setShowPassword] = useState(false);
   const navigate = useNavigate();
 
   useEffect(() => {
     fetchUserDetails();
   }, []);
 
   const fetchUserDetails = async () => {
     try {
       const firestore = getFirestore();
       const usersCollection = collection(firestore, 'waitlist');
       const usersSnapshot = await getDocs(usersCollection);
 
       const usersData: UserData[] = usersSnapshot.docs.map((doc) => {
         const data = doc.data();
         console.log(data.created, ' created');
         console.log(data, ' data');
         return {
           email: data.email || '',
           created: data.created || '',
           signedIn: data.SignedIn || '',
           userUid: data.userId || '', 
         };
       });
 
       console.log(usersData, ' usersData');
       setUsers(usersData);
       console.log(users, ' users');
     } catch (error:any) {
       console.error('Error fetching user details:', error.message);
     }
   };
 
   const handleCloseModal = () => {
     setShowModal(false);
     navigate('/');
   };

   const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (password === '/admin?role=admin') {
      fetchUserDetails();
    } else {
      setShowModal(true);
    }
  };
 
   return (
     <Box textAlign="center">
          {password !== '/admin?role=admin' && (
        <form onSubmit={handleSubmit}>
        <Box display="flex" height='100vh' px='5' maxWidth='1000px' mx='auto' gap={2} alignItems='center'>
        <InputGroup size="md" >
            <Input
              type={showPassword ? 'text' : 'password'}
              placeholder="Enter Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <InputRightElement width="4.5rem">
              <Button
                size="sm"
                onClick={() => setShowPassword(!showPassword)}
                variant="ghost"
              >
                {showPassword ? <FaEyeSlash /> : <FaEye />}
              </Button>
            </InputRightElement>
          </InputGroup>
          <Button type="submit" colorScheme="teal">
            Submit
          </Button>
        </Box>
        </form>
      )}

       {password === '/admin?role=admin' ? (
         <Box px={[0, 0, 0, 2]}>
           <Text
             fontWeight="700"
             textTransform="uppercase"
             fontSize={['md', 'lg', 'x-large']}
             p={3}
           >
             Welcome to the admin page
           </Text>
 
           {users.length > 0 ? (
             <Table
               className="table-"
               css={{
                 '&::-webkit-scrollbar': {
                   width: '2px',
                   height: '2px',
                 },
                 '&::-webkit-scrollbar-thumb': {
                   backgroundColor: '#4FD1C5',
                   borderRadius: '2px',
                 },
                 '&::-webkit-scrollbar-track': {
                   backgroundColor: '#F1F1F1',
                   borderRadius: '2px',
                 },
               }}
               variant="striped"
               colorScheme="teal"
               mt={4}
               pb={4}
               color="black"
               overflowX={{ base: 'auto', md: 'unset' }}
             >
               <Thead>
                 <Tr>
                   <Th>No.</Th>
                   <Th>Email</Th>
                   <Th>Created</Th>
                   <Th>User UID</Th>
                 </Tr>
               </Thead>
               <Tbody>
                 {users.map((user, index) => (
                   <Tr key={index}>
                     <Td>{index + 1}</Td>
                     <Td>{user.email}</Td>
                     <Td>{user.created}</Td>
                     <Td>{user.userUid}</Td>
                   </Tr>
                 ))}
               </Tbody>
             </Table>
           ) : (
             <Text>No users available</Text>
           )}
         </Box>
       ) : null}
 
       <Modal isOpen={showModal} onClose={handleCloseModal} isCentered>
         <ModalOverlay />
         <ModalContent bg="white">
           <ModalHeader>Unauthorized Access</ModalHeader>
           <ModalBody>
             <Text>You do not have permission to access this page.</Text>
           </ModalBody>
           <ModalFooter>
             <Button colorScheme="blue" onClick={handleCloseModal}>
               Close
             </Button>
           </ModalFooter>
         </ModalContent>
       </Modal>
     </Box>
   );
 };
 
 export default AdminPage;
 