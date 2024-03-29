import { Box, Flex } from "@chakra-ui/react";
import { useLocation } from "react-router-dom";
import Sidebar from '../../components/sidebar/Sidebar';

function PageLayout({ children }) {
  const { pathname } = useLocation(); 
  return (
    <Flex>
      {/* side bar on the left side */}
      {pathname !== "/auth" ? (
        <Box w={{ base: '70px', md: '240px' }}>
          <Sidebar />
        </Box>
      ) : null}

      {/* page content on the right side   */}
      <Box flex={1} w={{ base: '100% - 70px', md: '100% - 240px' }}>
        {children}
      </Box>
    </Flex>
  );
}

export default PageLayout;
