
import { Accordion, AccordionButton, AccordionIcon, AccordionItem, AccordionPanel, Box, Image, Text } from '@chakra-ui/react';
function Footer() {
    
    
    return (
        <Box p='10px' bg='#F5F4F2'>
            <Box display='flex' flexDirection={['column','column','row']} justifyContent='center'>
                <Box w='481px'  textAlign='left'>
                    <Image mb='20px' w='300px' src='https://user-images.githubusercontent.com/72031522/180593938-c153c87c-f6a7-4257-8b52-0933e04f158d.png' />
                    <Text _hover={{ textDecoration: 'underline' }}>Learn about Lyst app for iPhone,iPad and Android</Text>
                    <br />
                    <Text>@ 2022 Lyst</Text>
                </Box>
                
                <Box>
                    <Box w={['80%','80%','500px']} >
                        <Accordion defaultIndex={[0,1]}  allowMultiple display='flex' flexDirection={['column','column','row']} gap='40px'>
                            <AccordionItem>
                                <AccordionButton>
                                    <Box><Text fontSize='20px'>INTERNATIONAL</Text></Box>
                                    <AccordionIcon/>
                                </AccordionButton>

                                <AccordionPanel textAlign='left' lineHeight='30px' fontSize='14px'>
                                    <Text _hover={{textDecoration:'underline',color:'blue',cursor:'pointer'}}>Lyst -CA</Text>
                                    <Text _hover={{textDecoration:'underline',color:'blue',cursor:'pointer'}}>Lyst -AU</Text>
                                    <Text _hover={{textDecoration:'underline',color:'blue',cursor:'pointer'}}>Lyst -UK</Text>
                                    <Text _hover={{textDecoration:'underline',color:'blue',cursor:'pointer'}}>Lyst -Österreich</Text>
                                    <Text _hover={{textDecoration:'underline',color:'blue',cursor:'pointer'}}>Lyst -Schweiz</Text>
                                    <Text _hover={{textDecoration:'underline',color:'blue',cursor:'pointer'}}>Lyst -Deutschland</Text>
                                    <Text _hover={{textDecoration:'underline',color:'blue',cursor:'pointer'}}>Lyst -España</Text>
                                    <Text _hover={{textDecoration:'underline',color:'blue',cursor:'pointer'}}>Lyst -France</Text>
                                    <Text _hover={{textDecoration:'underline',color:'blue',cursor:'pointer'}}>Lyst -Italia</Text>
                                    <Text _hover={{textDecoration:'underline',color:'blue',cursor:'pointer'}}>Lyst -日本</Text>
                                    <Text _hover={{textDecoration:'underline',color:'blue',cursor:'pointer'}}>Lyst -België</Text>
                                    <Text _hover={{textDecoration:'underline',color:'blue',cursor:'pointer'}}>Lyst -Nederland</Text>
                                </AccordionPanel>
                            </AccordionItem>
                            
                            <AccordionItem>
                                <AccordionButton>
                                    <Box><Text fontSize='20px'>HELP AND INFO</Text></Box>
                                    <AccordionIcon/>
                                </AccordionButton>

                                <AccordionPanel textAlign='left' lineHeight='30px' fontSize='14px'>
                                    <Text _hover={{textDecoration:'underline',color:'blue',cursor:'pointer'}}>Help center</Text>
                                    <Text _hover={{textDecoration:'underline',color:'blue',cursor:'pointer'}}>About us</Text>
                                    <Text _hover={{textDecoration:'underline',color:'blue',cursor:'pointer'}}>Shipping policy</Text>
                                    <Text _hover={{textDecoration:'underline',color:'blue',cursor:'pointer'}}>Refund policy</Text>
                                    <Text _hover={{textDecoration:'underline',color:'blue',cursor:'pointer'}}>Payments</Text>
                                    <Text _hover={{textDecoration:'underline',color:'blue',cursor:'pointer'}}>Return policy</Text>
                                    <Text _hover={{textDecoration:'underline',color:'blue',cursor:'pointer'}}>Developers</Text>
                                    <Text _hover={{textDecoration:'underline',color:'blue',cursor:'pointer'}}>Careers</Text>
                                    <Text _hover={{textDecoration:'underline',color:'blue',cursor:'pointer'}}>Contact</Text>
                                    <Text _hover={{textDecoration:'underline',color:'blue',cursor:'pointer'}}>Terms & cnditions</Text>
                                    <Text _hover={{textDecoration:'underline',color:'blue',cursor:'pointer'}}>Privacy & cookie policy</Text>
                                    <Text _hover={{textDecoration:'underline',color:'blue',cursor:'pointer'}}>Intellectual property</Text>
                                    <Text _hover={{textDecoration:'underline',color:'blue',cursor:'pointer'}}>Categories</Text>
                                    <Text _hover={{textDecoration:'underline',color:'blue',cursor:'pointer'}}>Become a partner</Text>
                                    <Text _hover={{textDecoration:'underline',color:'blue',cursor:'pointer'}}>Lyst Insights</Text>
                                    <Text _hover={{textDecoration:'underline',color:'blue',cursor:'pointer'}}>Lyst News</Text>
                                </AccordionPanel>
                            </AccordionItem>
                       </Accordion>
                    </Box>
                </Box>
            </Box>
        </Box>    
    )
}
export default Footer