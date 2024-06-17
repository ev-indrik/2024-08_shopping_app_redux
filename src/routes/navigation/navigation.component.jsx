import { useContext } from "react";
import { Link, Outlet } from "react-router-dom";

import CrwnLogo from "../../assets/crown.svg";
import { UserContext } from "../../contexts/user.context";

import { signOutUser } from "../../utils/firebase/firebase.utils";

import "./navigation.component.styles.scss";

const Navigation = () => {
  const { currentUser, setCurrentUser } = useContext(UserContext);

  const signOutHandler = async () => {
    await signOutUser();
    setCurrentUser(null);
  };

  return (
    <>
      <div className={"navigation"}>
        <Link className={"logo-container"} to="/">
          <img src={CrwnLogo} alt="main-logo" />
        </Link>
        <div className={"nav-links-container"}>
          <Link className={"nav-link"} to={"/"}>
            {"Shop"}
          </Link>
          {currentUser ? (
            <span className={"nav-link"} onClick={signOutHandler}>
              {"Sign Out"}
            </span>
          ) : (
            <Link className={"nav-link"} to={"/auth"}>
              {"Sign In"}
            </Link>
          )}
        </div>
      </div>
      <Outlet />
    </>
  );
};

export default Navigation;
