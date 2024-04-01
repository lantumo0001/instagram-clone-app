import { auth, firestore } from '../firebase/firebase';
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { doc, setDoc } from "firebase/firestore";
import useShowToast from './useShowToast';

function useSignupWithEmailAndPassword() {
  const [createUserWithEmailAndPassword, , loading, error] = useCreateUserWithEmailAndPassword(auth);
  const showToast = useShowToast();

  const signup = async (inputs) => {
    if (!inputs.password || !inputs.fullName || !inputs.username || !inputs.email) {
       showToast('Error', 'Please fill all the fields', 'error')
      return // Return early to indicate failure
    }

    try {
      const newUser = await createUserWithEmailAndPassword(inputs.email, inputs.password);
      if (!newUser && error) {
        // Handle specific errors (e.g., email already in use)
         showToast('Error',error.message, 'error')
      }
        if(newUser){  
      const userDoc = {
        uid: newUser.user.uid,
        fullName: inputs.fullName,
        username: inputs.username,
        email: inputs.email,
        // **Security:** Never store passwords in plain text. Implement secure password hashing.
        bio: '',
        profilePicURL: '',
        followers: [],
        following: [],
        posts: [],
        createdAt: new Date().toISOString(),
      };
      await setDoc(doc(firestore, "users", newUser.user.uid), userDoc);
      localStorage.setItem('user', JSON.stringify(userDoc)); // Consider using a more secure storage solution
        }

    } catch (error) {
       showToast('Error', error.message, 'error')
      return { loading, error }; // Update error state
    }

    return { loading: false, error: null }; // Indicate successful signup (no error)
  };

  return { loading, error, signup };
}

export default useSignupWithEmailAndPassword;
