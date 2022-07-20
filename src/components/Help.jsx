import { Button, Popover, PopoverArrow, PopoverBody, PopoverCloseButton, PopoverContent, PopoverHeader, PopoverTrigger,Text} from "@chakra-ui/react"
import {ChevronDownIcon} from '@chakra-ui/icons'

function Help(){

    return(
        <Popover>
            <PopoverTrigger>
                <Button fontWeight='lite' variant='ghost' rightIcon={<ChevronDownIcon/>}>Help</Button>
            </PopoverTrigger>
            <PopoverContent>
                <PopoverArrow />
                <PopoverCloseButton />
                <PopoverHeader>Help!</PopoverHeader>

                    <Text as='p'  mb ='1rem' borderBottom='1px' mx='2rem'p='0.5rem' _hover={{textDecoration:'underline',cursor:'pointer'}}>Help center</Text>
                    <Text as='p' mb ='1rem' borderBottom='1px' mx='2rem'p='0.5rem' _hover={{textDecoration:'underline',cursor:'pointer'}}>Contact Us</Text>
                    <Text as='p' mb ='1rem' borderBottom='1px' mx='2rem'p='0.5rem' _hover={{textDecoration:'underline',cursor:'pointer'}}>About Us</Text>
                    <Text as='p' mb ='1rem' borderBottom='1px' mx='2rem'p='0.5rem' _hover={{textDecoration:'underline',cursor:'pointer'}}>Careers</Text>

                </PopoverContent>
        </Popover>
    )
}
export default Help