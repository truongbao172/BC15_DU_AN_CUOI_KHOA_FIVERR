import { Fragment } from "react";
import { Route } from "react-router";
import Footer from "../../components/Footer/Footer";
import LWHeader from "../ListWorkTemplate/ListWorkHeader/LWHeader";

export const DetailTemplate = (props) => {
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
