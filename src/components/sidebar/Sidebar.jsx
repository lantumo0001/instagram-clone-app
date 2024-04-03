import { Link as RouterLink } from "react-router-dom";
import { Box, Flex, Tooltip, Avatar, Link , Button} from "@chakra-ui/react"; // Added Link
import { AiFillHome } from "react-icons/ai";
import { CiLogout } from "react-icons/ci";
import useLogout from "../../hooks/useLogout";
import {
  InstagramLogo,
  InstagramMobileLogo,
  SearchLogo,
  CreatePostLogo,
  NotificationsLogo,
} from "../../assets/contants";

function Sidebar() {
  const sidebarItems = [
    {
      icon: <AiFillHome />,
      text: "Home",
      link: "/",
    },
    {
      icon: <SearchLogo />,
      text: "Search",
      link: "/search",
    },
    {
      icon: <NotificationsLogo />,
      text: "Notifications",
      link: "/notifications",
    },
    {
      icon: <CreatePostLogo />,
      text: "Create Post",
      link: "/createpost",
    },
    {
      icon: (
        <Avatar
          size="sm"
          name="Dan Abrahmov"
          src="https://bit.ly/dan-abramov"
        />
      ),
      text: "Profile",
      link: "/asaprogrammer",
    },
  ];
  const {handleLogout, isLoggingout, error} = useLogout();
  return (
    <Box
      height={"100vh"}
      borderRight={"1px solid"}
      borderColor={"whiteAlpha.300"}
      py={8}
      position={"sticky"}
      top={0}
      left={0}
      px={{ md: 2, lg: 4 }}
    >
      <Flex direction={"column"} gap={10} w="full" height={"full"}>
        <Link
          to={"/"}
          as={RouterLink}
          pl={2}
          display={{ base: "none", md: "block" }}
          borderRadius={6}
          _hover={{
            bg: "whiteAlpha.100",
            color: "blackAlpha.900",
          }}
          cursor={"pointer"}
        >
          <InstagramLogo />
        </Link>
        <Link
          to={"/"}
          as={RouterLink}
          pl={2}
          display={{ md: "block", md: "none" }}
          borderRadius={6}
          w={10}
          _hover={{
            bg: "whiteAlpha.100",
            color: "blackAlpha.900",
          }}
          cursor={"pointer"}
        >
          <InstagramMobileLogo />
        </Link>
        <Flex direction={"column"} cursor="pointer" gap={5}>
          {sidebarItems.map((item, index) => (
         
            <Tooltip
              key={index}
              label={item.text}
              hasArrow
              placement="right"
              ml={1}
              openDelay={500}
              display={{ base: "block", md: "none" }}
            >
              <Link
                display={"flex"}
                to={item.link}
                as={RouterLink}
                alignItems={"center"}
                gap={4}
                _hover={{ bg: "whiteAlpha.400" }}
                borderRadius={6}
                p={2}
                w={"full"}
              >
                {item.icon}
                <Box display={{ base: "none", md: "block" }}>{item.text}</Box>
              </Link>
            </Tooltip>
          ))}
        </Flex>
        {/* logout  */}
        <Tooltip
          label={'Logout'}
          hasArrow
          placement="right"
          ml={1}
          openDelay={500}
          display={{ base: "block", md: "none" }}
        >
          <Flex
            onClick = {handleLogout}
            alignItems={"center"}
            gap={4}
            _hover={{ bg: "whiteAlpha.400" }}
            borderRadius={6}
            p={2}
            w={"full"}
            mt={'auto'}
          >
             <CiLogout />
            <Button display={{ base: "none", md: "block" }} variant={'gost'} _hover={{bg:'transparent'}} isLoading={isLoggingout}>Logout</Button>
          </Flex>
        </Tooltip>
      </Flex>
    </Box>
  );
}

export default Sidebar;
