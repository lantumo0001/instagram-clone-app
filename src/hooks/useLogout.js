import {useSignOut} from 'react-firebase-hooks/auth';
import {auth} from '../firebase/firebase';
import useShowToast from './useShowToast';
function useLogout(){

  const [signOut, isLoggingout, error] = useSignOut(auth);
  const showToast = useShowToast();
 function handleLogout(){
    async()=>{
      try{
        await signOut();
        localstorage.removeItem('user');
      }catch(error){
       showToast('Error', error.message, 'error')
      }
    }
  }
  return {handleLogout , isLoggingout, error}
}
export default useLogout