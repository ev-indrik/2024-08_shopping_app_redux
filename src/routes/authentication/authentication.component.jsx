import SignInForm from "../../components/sign-in-form/sign-in-form.component.component";
import SignUpForm from "../../components/sign-up-form/sign-up.component.component";

import "./authentication.scss";

const Authentication = () => {
  return (
    <div className={"authentication-container"}>
      <SignInForm />
      <SignUpForm />
    </div>
  );
};

export default Authentication;
