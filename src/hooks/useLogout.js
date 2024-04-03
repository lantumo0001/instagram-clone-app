import { useSignOut } from 'react-firebase-hooks/auth';
import { auth } from '../firebase/firebase';
import useShowToast from './useShowToast';
import useAuthStore from '../store/authStore';
function useLogout() {
  const [signOut, isLoggingout, error] = useSignOut(auth);
  const showToast = useShowToast();
 const logoutUser = useAuthStore((state)=>state.logout)
  async function handleLogout() {
    try {
      await signOut();
      localStorage.removeItem('user'); 
      logoutUser();
     
    } catch (error) {
      showToast('Error', error.message, 'error');
    }
  }

  return { handleLogout, isLoggingout, error };
}

export default useLogout;
