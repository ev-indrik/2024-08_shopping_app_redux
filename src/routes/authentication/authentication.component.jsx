import SignInForm from "../../components/sign-in-form/sign-in.component.component";
import SignUpForm from "../../components/sign-up-form/sign-up.component.component";
import {
  signInWithGooglePopup,
  createUserDocumentFromAuth,
} from "../../utils/firebase/firebase.utils";

const Authentication = () => {
  const logGoogleUser = async () => {
    const { user } = await signInWithGooglePopup();
    const userDocRef = await createUserDocumentFromAuth(user);
    console.log(userDocRef);
  };

  return (
    <div>
      <h2>Sign In Page 🐣</h2>
      <SignInForm />
      <SignUpForm />
    </div>
  );
};

export default Authentication;
