import { Fragment, useEffect } from "react";
import { Route } from "react-router";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import HomePage from "../../pages/HomePage";
import FiverrCarousel from "../../components/FiverrCarousel/FiverrCarousel";
import { useSelector } from "react-redux";
import toast, { Toaster } from "react-hot-toast";
export const HomeTemplate = (props) => {
  const { Component, ...restRoute } = props;

  let usLogin = JSON.parse(localStorage.getItem("USER_LOGIN"));

  return (
    <Route
      {...restRoute}
      render={(propsRoute) => {
        return (
          <Fragment>
            <Header {...usLogin} />
            <FiverrCarousel {...propsRoute} />

            <Component {...propsRoute} />

            <Footer {...propsRoute} />
            <Toaster />
          </Fragment>
        );
      }}
    />
  );
};
