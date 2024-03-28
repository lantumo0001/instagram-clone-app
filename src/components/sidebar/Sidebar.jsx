import {Box, Flex, Image, Text, useColorModeValue, Link} from "@chakra-ui/react";
import {Link as RouterLink} from "react-router-dom";
import {InstagramLogo, InstagramMobileLogo} from "../../assets/icons/InstaLogo";
function Sidebar(){
  <Box height={'100vh'}
    borderRight={'1px solid '}
    borderColor={'whiteAlpha.300'}
    py={8}
    position={'sticky'}
    top={0}
    left= {0}
    px= {{md:2, lg:4}}
    >
    <Flex direction={'column'} gap={10} w='full' height={'full'} >
     <Link to={'/'} as={RouterLink} pl={2} display={{md:'none', md:'block'}} 
       borderRadius={6}
       _hover={{
         bg:'whiteAlpha.100',
         color:'blackAlpha.900',
         
       }
       }
       cursor={'pointer'}>
     <InstagramLogo/>
     </Link>
     <Link to={'/'} as={RouterLink} pl={2} display={{md:'block', md:'none'}}
       _hover={{
          bg:'whiteAlpha.100',
          color:'blackAlpha.900',

        }
        }
       cursor={'pointer'}>
     <InstagramLogo/>
     </Link>
    </Flex>
  
  </Box>
}