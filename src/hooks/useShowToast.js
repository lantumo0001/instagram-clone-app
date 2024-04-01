import { useToast } from "@chakra-ui/react";
function useShowToast(duration = 3000) {
  const toast = useToast();
  function showToast(title, description, status) {
    toast({
      title: title,
      description: description,
      status: status,
      duration: duration,
      isClosable: true,
    });
  }
  return showToast;
}

export default useShowToast