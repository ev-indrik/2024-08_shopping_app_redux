import { Fragment } from "react";
import { Outlet } from "react-router-dom";

import { useSelector } from "react-redux";

import CrwnLogo from "../../assets/crown.svg";

import { selectCurrentUser } from "../../store/user/user.selector";
import { selectIsCartOpen } from "../../store/cart/cart.selector";

import { signOutUser } from "../../utils/firebase/firebase.utils";

import CartIcon from "../../components/cart-icon/cart-icon.component";
import CartDropdown from "../../components/cart-dropdown/cart-dropdown.component";

import {
  NavigationContainer,
  NavLinks,
  NavLink,
  LogoContainer,
} from "./navigation.component.styles";

const Navigation = () => {
  const currentUser = useSelector(selectCurrentUser);
  const isCartOpen = useSelector(selectIsCartOpen);

  return (
    <Fragment>
      <NavigationContainer>
        <LogoContainer to="/">
          <img src={CrwnLogo} alt="main-logo" />
        </LogoContainer>
        <NavLinks>
          <NavLink to={"/"}>{"Home"}</NavLink>
          <NavLink to={"/shop"}>{"Shop"}</NavLink>
          {currentUser ? (
            <NavLink as={"span"} onClick={signOutUser}>
              {"Sign Out"}
            </NavLink>
          ) : (
            <NavLink to={"/auth"}>{"Sign In"}</NavLink>
          )}
          <CartIcon />
        </NavLinks>
        {isCartOpen && <CartDropdown />}
      </NavigationContainer>
      <Outlet />
    </Fragment>
  );
};

export default Navigation;
