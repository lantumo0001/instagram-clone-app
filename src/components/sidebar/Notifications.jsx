import { useAuthState } from "react-firebase-hooks/auth";
import { firestore } from "../../firebase/firebase";
import { Box, Flex, Tooltip, Badge , Circle} from "@chakra-ui/react";

import { NotificationsLogo } from "../../assets/constants";
import useAuthStore from "../../store/authStore";
import { useEffect, useState } from "react";
import { collection, query, where, getDocs } from "firebase/firestore";
import useShowToast from "../../hooks/useShowToast";
import { auth } from '../../firebase/firebase';

const Notifications = () => {
  const [notifications, setNotifications] = useState([]);
  const [authUser] = useAuthState(auth);

  const showToast = useShowToast();

  useEffect(() => {
    if (!authUser.uid) return;

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
        showToast("error", "Error fetching notifications: " + error.message, "error");
        console.error("Error fetching notifications:", error);
      }
    };

    fetchNotifications();
  }, [authUser?.uid, showToast]);

  if (!authUser.uid) return null;

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
        <Circle size='15px' bg='white' color='black'>
          {notifications.length}
        </Circle>
      </Flex>
    </Tooltip>
  );
};

export default Notifications;
