import React from "react";
import "./App.css";
import "./responsive.css";
import "react-toastify/dist/ReactToastify.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import HomeScreen from "./screens/HomeScreen";
import SingleProduct from "./screens/SingleProduct";
import Login from "./screens/Login";
import Register from "./screens/Register";
import CartScreen from "./screens/CartScreen";
import ShippingScreen from "./screens/ShippingScreen";
import ProfileScreen from "./screens/ProfileScreen";
import PaymentScreen from "./screens/PaymentScreen";
import PlaceOrderScreen from "./screens/PlaceOrderScreen";
import OrderScreen from "./screens/OrderScreen";
import NotFound from "./screens/NotFound";
import routes from "./constants/routes";

const App = () => {
  return (
    <Router>
      <Switch>
        <Route path={routes.home} component={HomeScreen} exact />
        <Route path={`${routes.product}`} component={SingleProduct} />
        <Route path={`${routes.login}`} component={Login} />
        <Route path={`${routes.register}`} component={Register} />
        <Route path={`${routes.profile}`} component={ProfileScreen} />
        <Route path={`${routes.cart}`} component={CartScreen} />
        <Route path={`${routes.shipping}`} component={ShippingScreen} />
        <Route path={`${routes.payment}`} component={PaymentScreen} />
        <Route path={`${routes.placeorder}`} component={PlaceOrderScreen} />
        <Route path={`${routes.order}`} component={OrderScreen} />
        <Route path={`${routes.notFound}`} component={NotFound} />
      </Switch>
    </Router>
  );
};

export default App;
