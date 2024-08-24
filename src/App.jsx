import { Routes, Route } from "react-router-dom";

import { useEffect } from "react";
import { useDispatch } from "react-redux";

import {
  createUserDocumentFromAuth,
  onAuthStateChangedListener,
} from "./utils/firebase/firebase.utils";

import Navigation from "./routes/navigation/navigation.component";
import Home from "./routes/home/home.component";
import Authentication from "./routes/authentication/authentication.component";
import Shop from "./routes/shop/shop.component";
import Checkout from "./routes/checkout/checkout.component";

import { setCurrentUser } from "./store/user/user.reducer";

import "./App.scss";

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    const unsubscribe = onAuthStateChangedListener((user) => {
      if (user) {
        createUserDocumentFromAuth(user);
      }

      const pickedUser =
        user && (({ accessToken, email }) => ({ accessToken, email }))(user);

      dispatch(setCurrentUser(pickedUser));
    });
    return unsubscribe;
  }, [dispatch]);

  // redux dispatch does not change so there's no need to point it in useEffect's []. But we may do it to resolve React issues

  return (
    <Routes>
      <Route path={"/"} element={<Navigation />}>
        <Route index element={<Home />} />
        <Route path={"shop/*"} element={<Shop />} />
        <Route path={"auth"} element={<Authentication />} />
        <Route path={"checkout"} element={<Checkout />} />
      </Route>
    </Routes>
  );
};

export default App;
