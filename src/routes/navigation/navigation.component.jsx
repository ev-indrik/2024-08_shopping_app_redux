import { useContext } from "react";
import { Link, Outlet } from "react-router-dom";

import CrwnLogo from "../../assets/crown.svg";

import { UserContext } from "../../contexts/user.context";

import { signOutUser } from "../../utils/firebase/firebase.utils";

import CartIcon from "../../components/cart-icon/cart-icon.component";
import CartDropdown from "../../components/cart-dropdown/cart-dropdown.component";

import "./navigation.component.styles.scss";

const Navigation = () => {
  const { currentUser } = useContext(UserContext);

  return (
    <>
      <div className={"navigation"}>
        <Link className={"logo-container"} to="/">
          <img src={CrwnLogo} alt="main-logo" />
        </Link>
        <div className={"nav-links-container"}>
          <Link className={"nav-link"} to={"/"}>
            {"Home"}
          </Link>
          <Link className={"nav-link"} to={"/shop"}>
            {"Shop"}
          </Link>
          {currentUser ? (
            <span className={"nav-link"} onClick={signOutUser}>
              {"Sign Out"}
            </span>
          ) : (
            <Link className={"nav-link"} to={"/auth"}>
              {"Sign In"}
            </Link>
          )}
          <CartIcon />
        </div>
        <CartDropdown />
      </div>
      <Outlet />
    </>
  );
};

export default Navigation;
