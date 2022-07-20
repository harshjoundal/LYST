import { Icon,Image} from "@chakra-ui/react";
import {AiFillFacebook,AiOutlineFileSearch} from 'react-icons/ai'
import { FaBeer } from 'react-icons/fa'
import {FcGoogle} from 'react-icons/fc'


export default function Facebook(){
    return(
        <Icon w='22px' h='22px' as={AiFillFacebook} />
    )
}

export function GoogleIcon(){
    return(
        <Icon w='22px' h='22px' as={FcGoogle} />
    )
}

export function SearchIcon2(){
    return(
        <Icon as={AiOutlineFileSearch} />
    )
}
