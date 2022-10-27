import { Fragment, useEffect } from "react";
import { Route } from "react-router";
import style from "./UserTemplate.module.css";
export const UserTemplate = (props) => {
  const { Component, ...restProps } = props;

  useEffect(() => {
    window.scrollTo(0, 0);
  });
  return (
    <Route
      {...restProps}
      render={(propsRoute) => {
        return (
          <Fragment>
            <div className="flex">
              <div className={`${style["background"]}`}></div>
              <Component {...propsRoute} />
            </div>
          </Fragment>
        );
      }}
    />
  );
};
