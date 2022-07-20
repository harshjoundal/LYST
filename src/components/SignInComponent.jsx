
import { Box, Button, Heading,Input,Text } from '@chakra-ui/react';
import {EmailIcon} from '@chakra-ui/icons'
import Facebook from './Icons/Social';
import {GoogleIcon} from './Icons/Social'

function SignInComponent(){


    return(
        <Box mt='1rem'>
            <Heading fontSize='1.5rem'>Sign In</Heading>
            <form >
                <label>
                    <Text textAlign='left' mb='0.5rem' mt ='2rem'>Email address</Text> 
                    <Input border='2px' type="email" name="email" mb ='1rem'/>
                </label>

                <Button w = '100%' bg = 'black' color='white' leftIcon={<EmailIcon />}>sign in</Button>
                <Text m = '1rem'>Or</Text>
                <Button w = '100%' bg = '#506CA2' color='white' mb='1rem' leftIcon={<Facebook/>}>Continue with Facebook</Button>
                <Button w = '100%' color='black' leftIcon={<GoogleIcon/>}>Continue with Google</Button>


            </form>

        </Box>
    )
}
export default SignInComponent