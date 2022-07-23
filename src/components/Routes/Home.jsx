import { Box,  Button,  Heading,  Image, Modal, ModalBody, ModalCloseButton, ModalContent, ModalOverlay,   Text } from '@chakra-ui/react';
import { useDisclosure } from '@chakra-ui/react';
import {ArrowForwardIcon} from '@chakra-ui/icons'




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
    const breakOutBrands = [
        {
            name: 'PATOU',
            image : 'https://cdna.lystit.com/cms/My_Post_81_76121ffa01.jpg'
        },
        {
            name: 'GUCCI',
            image : 'https://cdna.lystit.com/cms/designer_rail_gucci_eca9e74796.jpg'
        },
        {
            name: 'SAINT LAURENT',
            image : 'https://cdna.lystit.com/cms/designer_rail_saint_laurent_2031eb80f7.jpeg'
        },
        {
            name: 'OFF-WHITE C/O VIRGIL ABLOH',
            image : 'https://cdna.lystit.com/cms/designer_rail_off_white_co_virgil_abloh_d8c6b37a9f.jpeg'
        },
        {
            name: 'BALENCIAGA',
            image : 'https://cdna.lystit.com/cms/designer_rail_balenciaga_215cbc0fe0.jpeg'
        },
        {
            name: 'NIKE',
            image : 'https://cdna.lystit.com/cms/designer_rail_nike_c3045162ba.png'
        },
        {
            name: 'DOLCE & GABBANA',
            image : 'https://cdna.lystit.com/cms/designer_rail_dolce_gabbana_bcb7049bb0.jpeg'
        },
    ]

    const scrollbar ={
        '&::-webkit-scrollbar':{display:'none'},

        WebkitOverflowScrolling:'touch',
    }
    
    
    return(
        <Box>
            
            <Box as='button' onClick={onOpen} borderBottom='1px' mb='50px'>
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

            <Box  overflowX='auto'  display='flex' minH='300px'css ={scrollbar}>
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
            
            <Box mb='100px' overflowX='scroll'  display='flex' minH='300px'css ={scrollbar}>
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
            
            <Box overflow='scroll' display='flex' minH='365px' css={scrollbar}>
                <Box minW='436px' maxH='365px' border='1px' display='flex' justifyContent='center' alignItems='center' bg='#F5F4F2'>
                    <Box>
                        <Text fontSize='70px'>BREAKOUT</Text>
                        <Text mt='-30px' fontSize='70px'>BRANDS</Text>
                    </Box>    
                </Box>
                <Box display='flex'>
                    {firstRow.map((ele) => (
                        <Box minW='436px' maxH='365px' border='1px' pos='relative'>
                            <Text as ='h1' fontSize='1.5rem' pos='absolute' top='1rem' left='1rem'>{ele.name}</Text>
                            <Image src={ele.image} w ='363px' h='262px' pos='absolute' bottom='0px' right='0px' />
                        </Box>
                    ))}
                </Box>

            </Box>
            <Box overflow='scroll' display='flex' minH='365px' css={scrollbar} mb='50px'>
                <Box minW='436px' maxH='365px' border='1px' display='flex' justifyContent='center' alignItems='center' bg='#F5F4F2'>
                    <Box>
                        <Text fontSize='70px'>TRENDING</Text>
                        <Text mt='-30px' fontSize='70px'>NOW</Text>
                    </Box>    
                </Box>
                <Box display='flex'>
                    {breakOutBrands.map((ele) => (
                        <Box minW='436px' maxH='365px' border='1px' pos='relative'>
                            <Text as ='h1' fontSize='1.5rem' pos='absolute' top='1rem' left='1rem'>{ele.name}</Text>
                            <Image src={ele.image} w ='363px' h='262px' pos='absolute' bottom='0px' right='0px' />
                        </Box>
                    ))}
                </Box>

            </Box>

            <Box border='1px' display='flex' flexDirection={['column','column','row']} mb='40px'>
                <Box display='flex' minH={['500px','500px','570px']} w={['100%','100%','65%']} alignItems='center' justifyContent='right' bg='#F5F4F2'>
                   
                    <Box bg='#F5F4F2' w='30%' minH='75%' maxH='75%' p='20px'>
                        <Heading as='h1' textAlign='left' fontSize='110px'>1</Heading>
                        <Text fontSize='4xl' lineHeight='2rem' textAlign='left'>The Biggest Collection</Text>
                        <br />
                        <Text textAlign='left'>Shop over 12,000 brands and stores in one place.</Text>
                        <br />
                        <Text textAlign='left'>Find exactly what you want with powerful search and personal recommendations.</Text>
                    </Box>
                    <Box bg='#F5F4F2' w='30%' minH='75%' maxH='75%' p='20px'>
                        <Heading as='h1' textAlign='left' fontSize='110px'>2</Heading>
                        <Text fontSize='4xl' lineHeight='2rem' textAlign='left'>THE HOTTEST PRODUCTS</Text>
                        <br />
                        <Text textAlign='left'>Shop over 12,000 brands and stores in one place.</Text>
                        <br />
                        <Text textAlign='left'>Find exactly what you want with powerful search and personal recommendations.</Text>
                    </Box>
                    <Box bg='#F5F4F2' w='30%' minH='75%' maxH='75%' p='20px'>
                        <Heading as='h1' textAlign='left' fontSize='110px'>3</Heading>
                        <Text fontSize='4xl' lineHeight='2rem' textAlign='left'>THE BEST PRICES</Text>
                        <br />
                        <Text textAlign='left'>Shop over 12,000 brands and stores in one place.</Text>
                        <br />
                        <Text textAlign='left'>Find exactly what you want with powerful search and personal recommendations.</Text>
                    </Box>
                    

                </Box>
                <Box borderLeft='1px' minH={['300px','300px','570px']} w={['100%','100%','35%']} bg='#CAFC4F' p='2rem' display='flex' alignItems='center'>
                    <Box maxW={['80%','80%','300px']} display='flex' flexDirection='column' >
                        <Heading fontWeight='500' textAlign='left' fontSize='45px'>SIGN UP FOR SMATTER SHOPPING</Heading>
                        
                        <Button w='126px' h='40px' mt='1rem' rightIcon={<ArrowForwardIcon />} color='white' bg='black'>Join</Button>
                    </Box>
                </Box>
            </Box>
        </Box>
    )
}
export default Home