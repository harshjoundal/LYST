import { Box,  Image, Modal, ModalBody, ModalCloseButton, ModalContent, ModalOverlay,   Text } from '@chakra-ui/react';
import { useDisclosure } from '@chakra-ui/react';




function Home(){
    const{isOpen ,onOpen, onClose} = useDisclosure()

    const firstRow=[

        {
            name :'BAG AN ICON',
            image :'https://cdna.lystit.com/cms/ea59bbea_bf2d_4441_90aa_b0a1a8ee614b_21dfec2728.png'
        },
        {
            name :'30 UNDER 300',
            image :'https://cdna.lystit.com/cms/2c09c3f3_34a7_4302_9a44_416fd3fa5d76_10988971ba.png'
        },
        {
            name :'TREND TO KNOW : WHITE NIGHTS',
            image :'https://cdna.lystit.com/cms/3c70c00c_25c6_42ef_8e12_6a5e0e5819e7_fd338f521d.png'
        },
        {
            name :'THIS IS FASHION',
            image :'https://cdna.lystit.com/cms/cd20a12e_e37b_4e36_8325_ed1a2b420728_b7596dca3b.png'
        },
        {
            name :'REFINED GLAMOUR',
            image :'https://cdna.lystit.com/cms/c10401b4_0e1c_4b30_8ebd_302ad87518f7_79739750c4.png'
        },
        {
            name :'BAG AN ICON',
            image :'https://cdna.lystit.com/cms/ea59bbea_bf2d_4441_90aa_b0a1a8ee614b_21dfec2728.png'
        },
        {
            name :'30 UNDER 300',
            image :'https://cdna.lystit.com/cms/2c09c3f3_34a7_4302_9a44_416fd3fa5d76_10988971ba.png'
        },
        {
            name :'TREND TO KNOW : WHITE NIGHTS',
            image :'https://cdna.lystit.com/cms/3c70c00c_25c6_42ef_8e12_6a5e0e5819e7_fd338f521d.png'
        },
        {
            name :'THIS IS FASHION',
            image :'https://cdna.lystit.com/cms/cd20a12e_e37b_4e36_8325_ed1a2b420728_b7596dca3b.png'
        },
        {
            name :'REFINED GLAMOUR',
            image :'https://cdna.lystit.com/cms/c10401b4_0e1c_4b30_8ebd_302ad87518f7_79739750c4.png'
        }
    ]
    const secondRow=[
        {
            name : 'DISCOVER OUR STYLISH AND ICONIC MULBERRY BAGS',
            image :'https://cdna.lystit.com/cms/LYST_600x600_CTA_5_1_18f34c2397.jpg'
        },
        {
            name : 'TARNISH FREE JEWWLRY AND STYLES THAT TRANSCEND SEASONS',
            image :'https://cdna.lystit.com/cms/Arms_of_Eve_337b105039.jpeg'
        },
        {
            name : 'TAKE KRIPT | SHOP THE NEW MONTHLY DROP TODAY',
            image :'https://cdna.lystit.com/cms/THE_KRIPT_1_b1fedfd3d1.jpg'
        },
        {
            name : 'SABRINA ZENG | SUSTAINABLE DESIGNER LEATHER GOODS',
            image :'https://cdna.lystit.com/cms/SZ_LYST_Hammock_Camel_1_bc0dd8c317.jpg'
        },
        {
            name : 'VOTED ONE OF BEST STORES IN THE WORLD VOUGEITALIA',
            image :'https://cdna.lystit.com/cms/madison_beverly_hills_lyst_63f59bd7db.jpg'
        },
        {
            name : 'DISCOVER OUR STYLISH AND ICONIC MULBERRY BAGS',
            image :'https://cdna.lystit.com/cms/LYST_600x600_CTA_5_1_18f34c2397.jpg'
        },
    ]

    const scrollbar ={
        '&::-webkit-scrollbar':{display:'none'},

        WebkitOverflowScrolling:'touch',
    }
    
    
    return(
        <Box>
            
            <Box as='button' onClick={onOpen} >
                <Image src ='https://cdna.lystit.com/cms/ENG_header_XL_9f9e2af236_615828663f.jpg' />
            </Box>
            <Modal isOpen={isOpen} onClose ={onClose}>
                <ModalOverlay/>
                <ModalContent>
                    <ModalCloseButton/>
                    <ModalBody textAlign='center'>
                       <Box p='10px' boxShadow='2xl' w ='35%' m='auto' mb='1rem'>
                        <Image src='https://user-images.githubusercontent.com/72031522/180143748-57073894-b996-45c6-8d3b-73db57ae60f5.png' alt='barcode'/>
                       </Box>
                       <Text as='h2' fontWeight='bold' fontSize='1.5rem'>Scan the code on your phone</Text>
                       <Text fontWeight='500' >Open the camera on your phone to scan and download the Lyst app for free</Text>
                       <Text fontWeight='lite'>Available on iOS and Android</Text>
                       <Box>    
                            <Image m='auto' mb='-8px' src ='https://static.lystit.com/static/n/web/react/components/qrcode-overlay/images/get-app-phone.ba25ca91295f8c2fa372763d098933cd.png' />
                        </Box>
                    </ModalBody>
                </ModalContent>
            </Modal>

            <Box  overflowX='scroll'  display='flex' minH='300px'css ={scrollbar}>
                {firstRow.map((ele)=>(
                        <Box display='flex' border='1px'>
                            <Box minW='100px' minH='300px' maxH='300px' display='flex' alignItems='start' justifyContent='start' transform='scale(-1,-1)' >
                                <Text textAlign='left' fontSize='1.4rem' sx={{writingMode:'vertical-lr'}}>{ele.name}</Text>
                            </Box>
                            <Box minW='300px' maxH='300px'>
                                {/* <Text fontSize='2rem'>{ele.name}</Text> */}
                                <Image w='300px' h='300px' src ={ele.image}/>
                            </Box>
                        </Box>

                    ))}
            </Box> 
            
            <Box mb='3rem' overflowX='scroll'  display='flex' minH='300px'css ={scrollbar}>
                {secondRow.map((ele)=>(
                        <Box display='flex' border='1px'>
                            <Box minW='100px' minH='300px' maxH='300px' display='flex' alignItems='start' justifyContent='start' transform='scale(-1,-1)' >
                                <Text textAlign='left' fontSize='1.4rem' sx={{writingMode:'vertical-lr'}}>{ele.name}</Text>
                            </Box>
                            <Box minW='300px' maxH='300px'>
                                {/* <Text fontSize='2rem'>{ele.name}</Text> */}
                                <Image w='300px' h='300px' src ={ele.image}/>
                            </Box>
                        </Box>

                    ))}
            </Box> 
        </Box>
    )
}
export default Home