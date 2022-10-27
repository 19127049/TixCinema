import { useSelector } from "react-redux";
import { Redirect, Route, useLocation } from "react-router";


const AdminTemplate = (props) => {
  const { userLogin } = useSelector((state) => state.UserManagementReducer);

  const { Component, ...restProps } = props;
  const { component: ComponentAdmin, ...rest } = props;
  let location = useLocation();

  return (
    <Route
      {...rest}
      render={(propsRoute) => {
        if (userLogin) {
          if (userLogin.maLoaiNguoiDung === "QuanTri") {
            return <ComponentAdmin {...propsRoute} />;
          }
        }
        return (
          <Redirect
            to={{
              pathname: "/login",
              state: location.pathname,
            }}
          />
        );
      }}
    />
  );
};

export default AdminTemplate;
