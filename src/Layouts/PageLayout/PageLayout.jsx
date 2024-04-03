import { Box, Flex, Spinner } from "@chakra-ui/react";
import { auth } from "../../firebase/firebase";
import { useLocation } from "react-router-dom";
import { useAuthState } from "react-firebase-hooks/auth";

import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/Navbar/Navbar";

function PageLayout({ children }) {
  const { pathname } = useLocation();
  const [user, loading, error] = useAuthState(auth);
  const canRenderSidebar = pathname !== "/auth" && user;
  const canRenderNavbar = pathname !== "/auth" && !user && !loading;

  const checkingUserAuth = !user && loading ;
  if (checkingUserAuth) return <PageLayoutSpinner/>
  
  return (
    <Flex flexDir={canRenderNavbar ? "column" : "row"}>
      {/* side bar on the left side */}
      {canRenderSidebar ? (
        <Box w={{ base: "70px", md: "240px" }}>
          <Sidebar />
        </Box>
      ) : null}
      {/* navbar */}
      {canRenderNavbar ? <Navbar /> : null}

      {/* page content on the right side   */}
      <Box flex={1} w={{ base: "100% - 70px", md: "100% - 240px" }} mx={"auto"}>
        {children}
      </Box>
    </Flex>
  );
}

export default PageLayout;

const PageLayoutSpinner = () => {
  return (
    <Flex flexDir='column' h='100vh' alignItems='center' justifyContent='center'>
      <Spinner size='xl' />
    </Flex>
  );
};