import { Box, Button, Center, Flex, HStack,ButtonGroup, Heading,Text,List,ListItem,ListIcon} from "@chakra-ui/react";
import { useEffect, useState } from "react";
import SignInComponent from "../SignInComponent";
import Facebook,{SearchIcon2} from './../Icons/Social';
import { SearchIcon } from '@chakra-ui/icons';
import {FaHeart} from 'react-icons/fa'
import {BsFillBellFill} from 'react-icons/bs'
import SignUpComponent from './../SignUpComponent';

function SignIn(){
    const [LState,setState] = useState('signin')

    const signin=()=>{
        setState('signin')
    }
    const signup=()=>{
        setState('signup')
    }
    useEffect(()=>{
        console.log(LState);
    },[LState])



    return(

            <Box>
                <Flex  maxW='800px' border='0px' m='auto' p ='0' direction={['column','column','row']}>
                    <Box w='50%' border='0px' p ='2rem'>
                        {/* Login */}
                            <Flex gap='0px' direction={['column','column','row']}>
                                <Button w='50%' variant='outline' onClick={signup} colorScheme='black' borderColor='gray.300' borderRadius='none' fontSize={['0.7rem','0.7rem','1rem']}>New to Lyst?</Button>
                                <Button variant='outline' onClick={signin} bg ='black' color='white' borderRadius='none' fontSize={['0.7rem','0.7rem','1rem']}>Already a menber</Button>
                            </Flex>
                        {/* <SignInComponent/> */}
                        {LState =='signin' && <SignInComponent/>}
                        {LState =='signup' && <SignUpComponent/>}

                    </Box>

                    <Box display='flex' justifyContent='center' alignItems='center' px='1rem' py='3rem' w='50%' mt='0px' backgroundImage="url('https://static.lystit.com/static/n/img/encouraged-search/gradient-bg-6-2.deff3c85cca058ba0fe2cc465803e1fa.jpg')"
                    >
                        <Box bg='white' color='black' p='1rem'>
                            <Heading fontSize='1.5rem'>As a Lyst member you can...</Heading>

                            <List spacing={3} mt='1rem'>
                                <ListItem display='flex' alignItems='center' gap='1rem'>
                                    <ListIcon as={SearchIcon2} />
                                    Save your Searches
                                </ListItem>
                                <ListItem display='flex' alignItems='center' gap='1rem'>
                                    <ListIcon as={FaHeart} />
                                    Create a wishlist
                                </ListItem>
                                <ListItem display='flex' alignItems='center' gap='1rem'>
                                    <ListIcon as={BsFillBellFill} />
                                    Get alert on your Items
                                </ListItem>

                            </List>
                        </Box>
                    </Box>
                </Flex>
            </Box>

    )
}
export default SignIn