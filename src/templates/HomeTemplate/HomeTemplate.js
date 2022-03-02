import { Fragment } from "react";
import { Route } from "react-router";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import HomePage from "../../pages/HomePage";
import FiverrCarousel from "../../components/FiverrCarousel/FiverrCarousel";

export const HomeTemplate = (props) => {
  const { Component, ...restRoute } = props;
  return (
    <Route
      {...restRoute}
      render={(propsRoute) => {
        return (
          <Fragment>
            <Header {...propsRoute} />
            <FiverrCarousel {...propsRoute} />

            <Component {...propsRoute} />

            <Footer {...propsRoute} />
          </Fragment>
        );
      }}
    />
  );
};
