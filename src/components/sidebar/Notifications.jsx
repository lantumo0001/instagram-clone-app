import { firestore } from "../../firebase/firebase";
import { Box, Flex, Tooltip, Badge } from "@chakra-ui/react";
import { NotificationsLogo } from "../../assets/constants";
import useAuthStore from "../../store/authStore";
import { useEffect, useState } from "react";
import { collection, query, where, getDocs } from "firebase/firestore";
import useShowToast from "../../hooks/useShowToast";

const Notifications = () => {
  const [notifications, setNotifications] = useState([]);
  const authUser = useAuthStore((state) => state.user);
  const showToast = useShowToast();
  console.log(authUser.uid)
  
  useEffect(() => {
    const fetchNotifications = async () => {
      try {
        const notificationsQuery = query(
          collection(firestore, "notifications"),
          where("userId", "==", authUser.uid)
        );
        const notificationsSnapshot = await getDocs(notificationsQuery);
        const notificationsData = notificationsSnapshot.docs.map(doc => ({
          id: doc.id,
          ...doc.data()
        }));
        setNotifications(notificationsData);
      } catch (error) {
        showToast("error", "Error fetching notifications", "error");
        console.error("Error fetching notifications:", error);
      }
    };

    fetchNotifications();
  }, []);

  return (
    <Tooltip
      hasArrow
      label={"Notifications"}
      placement='right'
      ml={1}
      openDelay={500}
      display={{ base: "block", md: "none" }}
    >
      <Flex
        alignItems={"center"}
        gap={4}
        _hover={{ bg: "whiteAlpha.400" }}
        borderRadius={6}
        p={2}
        w={{ base: 10, md: "full" }}
        justifyContent={{ base: "center", md: "flex-start" }}
      >
        <NotificationsLogo />
        <Box display={{ base: "none", md: "block" }}>Notifications</Box>
        <Badge colorScheme="blue">{notifications.length}</Badge>
      </Flex>
    </Tooltip>
  );
};

export default Notifications;
