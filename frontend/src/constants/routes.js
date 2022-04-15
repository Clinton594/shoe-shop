const domain = "http://localhost:5000/";
const routes = {
  home: "/",
  products: "/products",
  product: "/product/:id",
  login: "/login",
  register: "/register",
  profile: "/profile",
  cart: "/cart/:id",
  shipping: "/shipping",
  payment: "/payment",
  placeorder: "/placeorder",
  order: "/order",
  notFound: "/*",
  api: {
    products: `${domain}api/products`,
    product: `${domain}api/product/`,
  },
};

export default routes;
