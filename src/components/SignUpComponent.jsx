
import { Box, Button, Heading,Input,Text } from '@chakra-ui/react';
import {EmailIcon} from '@chakra-ui/icons'
import Facebook from './Icons/Social';
import {GoogleIcon} from './Icons/Social'




function SignUpComponent(){

    return(
            
            <Box mt='1rem'>
                <Heading fontSize='1.5rem' p ='0.1rem'>Search thousands of fashion brands and stores all in one place</Heading>
                <form >
                    <label>
                        <Text textAlign='left' mb='0.5rem' mt ='2rem'>Email address</Text> 
                        <Input border='2px' type="email" name="email"/>
                    </label>
                    <label>
                        <Text textAlign='left' mb='0.5rem' mt ='1rem'>Password</Text> 
                        <Input border='2px' type="password" name="password" mb ='1rem'/>
                    </label>
    
                    <Button w = '100%' bg = 'black' color='white'>Join Lyst</Button>
                    <Text m = '1rem'>Or</Text>
                    <Button w = '100%' bg = '#506CA2' color='white' mb='1rem' leftIcon={<Facebook/>}>Continue with Facebook</Button>
                    <Button w = '100%' color='black' leftIcon={<GoogleIcon/>}>Continue with Google</Button>

                    <Text mt='1rem' as='p' color='gray.400'>By creating an account,you concent to Lyst's <span style={{color:'black'}}>Terms & Conditions.</span>To learn more about how Lyst uses and protects your personal data,please read Lyst's <span style={{color:'black'}}>Privacy Policy</span></Text>
    
    
                </form>
    
            </Box>
        
    )
}
export default SignUpComponent