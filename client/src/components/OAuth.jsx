import { Button } from "flowbite-react";
import { AiFillGoogleCircle } from "react-icons/ai";
import { app } from "../firebase";
import { GoogleAuthProvider, signInWithPopup, getAuth } from "firebase/auth";
import { useDispatch } from "react-redux";
import { signInSuccess } from "../redux/user/userSlice";
import { useNavigate } from "react-router-dom";

function OAuth() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const auth = getAuth(app);
  const handleGoogleClick = async () => {
    const provider = new GoogleAuthProvider();
    provider.setCustomParameters({ prompt: "select_account" });
    try {
      const resultsFromGoogle = await signInWithPopup(auth, provider);
      console.log(resultsFromGoogle);
      const res = await fetch("/api/auth/google-in", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          username: resultsFromGoogle.user.displayName,
          email: resultsFromGoogle.user.email,
          googlePhotoURL: resultsFromGoogle.user.photoURL,
        }),
      });
      const data = await res.json();
      console.log(data);
      if (res.ok) {
        dispatch(signInSuccess(data));
        navigate("/");
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Button
      onClick={handleGoogleClick}
      gradientDuoTone="pinkToOrange"
      type="button"
      outline
    >
      <AiFillGoogleCircle className="w-6 h-6 mr-2" />
      Continue with Google
    </Button>
  );
}
export default OAuth;
