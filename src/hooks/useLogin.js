import { useSignInWithEmailAndPassword } from "react-firebase-hooks/auth";
import useShowToast from "./useShowToast";
import { auth, firestore } from "../firebase/firebase";
import { doc, getDoc } from "firebase/firestore";
import useAuthStore from "../store/authStore";

function useLogin() {
  const showToast = useShowToast();
  const [signInWithEmailAndPassword, , loading, error] = useSignInWithEmailAndPassword(auth);

  async function Login(inputs){
      if (!inputs.email || !inputs.password) {
        return showToast("Error", "Please fill all the fields", "error");
      }
    try{
      const userCred = await signInWithEmailAndPassword(inputs.email, inputs.password);

      if (userCred) {
        const docRef = doc(firestore, "users", userCred.user.uid);
        const docSnap = await getDoc(docRef);
        localStorage.setItem("user", JSON.stringify(docSnap.data()));
        loginUser(docSnap.data());
      }
    }catch(error){
      showToast("Error", error.message, "error");
    }
    
  }
  
}
export default useLogin