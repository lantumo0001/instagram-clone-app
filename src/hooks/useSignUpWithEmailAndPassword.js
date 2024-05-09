import { auth, firestore } from "../firebase/firebase";
import { useCreateUserWithEmailAndPassword } from "react-firebase-hooks/auth";
import {
  doc,
  setDoc,
  collection,
  where,
  query,
  getDocs,
} from "firebase/firestore";
import useShowToast from "./useShowToast";
import useAuthStore from "../store/authStore";
function useSignupWithEmailAndPassword() {
  const [createUserWithEmailAndPassword, , loading, error] =
    useCreateUserWithEmailAndPassword(auth);
  const showToast = useShowToast();
  const loginUser = useAuthStore((state) => state.login);
  const signup = async (inputs) => {
    if (
      !inputs.password ||
      !inputs.fullName ||
      !inputs.username ||
      !inputs.email
    ) {
      showToast("Error", "Please fill all the fields", "error");
      return;
    }

    const usersRef = collection(firestore, "users");
    const q = query(usersRef, where("username", "==", inputs.username));
    const querySnapshot = await getDocs(q);
    if (!querySnapshot.empty) {
      showToast("Error", "Username already taken", "error");
      return;
    }
    try {
      const newUser = await createUserWithEmailAndPassword(
        inputs.email,
        inputs.password,
      );
      if (!newUser && error) {
        showToast("Error", error.message, "error");
      }
      if (newUser) {
        const userDoc = {
          uid: newUser.user.uid,
          fullName: inputs.fullName,
          username: inputs.username,
          email: inputs.email,
          // **Security:** Never store passwords in plain text. Implement secure password hashing.
          bio: "",
          profilePicURL: "",
          followers: [],
          following: [],
          posts: [],
          createdAt: new Date().toISOString(),
        };
        await setDoc(doc(firestore, "users", newUser.user.uid), userDoc);
        localStorage.setItem("user", JSON.stringify(userDoc));
        loginUser(userDoc);
      }
    } catch (error) {
      showToast("Error", error.message, "error");
      return { loading, error };
    }

    return { loading: false, error: null };
  };

  return { loading, error, signup };
}

export default useSignupWithEmailAndPassword;
