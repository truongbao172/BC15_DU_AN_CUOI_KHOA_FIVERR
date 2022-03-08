import { Fragment } from "react";
import { Route } from "react-router";
import Footer from "../../components/Footer/Footer";
import LWHeader from "./ListWorkHeader/LWHeader";

export const LWTemplate = (props) => {
  const { Component, ...restRoute } = props;
  return (
    <Route
      {...restRoute}
      render={(propsRoute) => {
        return (
          <Fragment>
            <LWHeader />

            <Component {...propsRoute} />
            <Footer />
          </Fragment>
        );
      }}
    />
  );
};
