import SignInForm from "../../components/sign-in-form/sign-in-form.component.component";
import SignUpForm from "../../components/sign-up-form/sign-up.component.component";
import {
  signInWithGooglePopup,
  createUserDocumentFromAuth,
} from "../../utils/firebase/firebase.utils";

const Authentication = () => {
  return (
    <div>
      <h2>Sign In Page 🐣</h2>
      <SignInForm />
      <SignUpForm />
    </div>
  );
};

export default Authentication;
