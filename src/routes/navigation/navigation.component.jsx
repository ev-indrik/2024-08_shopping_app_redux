import { useContext } from "react";
import { Link, Outlet } from "react-router-dom";

import CrwnLogo from "../../assets/crown.svg";
import { UserContext } from "../../contexts/user.context";

import "./navigation.component.styles.scss";

const Navigation = () => {
  const { currentUser } = useContext(UserContext);
  console.log(currentUser);
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
            <span className={"nav-link"}>{"Sign Out"}</span>
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
