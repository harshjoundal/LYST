import {Box,Flex,Stack,Text,Heading,Input,InputGroup,InputLeftElement} from '@chakra-ui/react'
import { SearchIcon} from '@chakra-ui/icons'
import {Link, Navigate,useNavigate} from 'react-router-dom'
import { Country } from './Modals/Country'
import Help from './Help'

function Navbar(){
    const navigate = useNavigate()
    const lyst =()=>{
        navigate('/')
    }


    return(
        <Box borderBottom='1px' p ='1rem' mb={0}>
            <Box display='flex' flexDirection='column' gap='0.5rem'>
                <Box display='flex' direction='row' justifyContent='right' gap='1rem'  alignItems='center'>
                    <Country/>
                    <Help/>
                    <Link to ='/signin'>Sign in</Link>
                    <Link to ='/signin'><Text bg ='black' px='10px' color ='white'>Join</Text></Link>
                    {/* <Text bg ='black' px='10px' color ='white'>Join</Text> */}
                </Box>
                <Box >
                    <Flex justify='center' alignItems='center' gap ='1rem'>
                        <Heading as='h1' onClick={lyst} fontWeight='1000' _hover={{
                            color: "teal.500",
                            cursor:'pointer'
                        }}>LYST</Heading>
                        <Text>Men</Text>
                        <Text>Women</Text>
                        <InputGroup>
                            <InputLeftElement
                            pointerEvents='none'
                            children={<SearchIcon color='balck' />}
                            />
                            <Input borderColor='black' type='text' placeholder='SESRCH (E.G. "VALENTINO DRESSES")' />
                        </InputGroup>
                        
                    </Flex>
                </Box>
            </Box>
        </Box>
        
    )
}
export default Navbar