import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Rating from "./Rating";
import Pagination from "./pagination";
import routes from "../../constants/routes";
import { useDispatch, useSelector } from "react-redux";
import { listProduct } from "../../Redux/actions/ProductAction";
import Message from "../LoadingError/Error";
import Loader from "../LoadingError/Loading";

const ShopSection = () => {
  const { products, loading, error } = useSelector((store) => store.productList);
  const dispatch = useDispatch();

  useEffect(async () => {
    dispatch(listProduct());
  }, [dispatch]);
  return (
    <>
      <div className="container">
        <div className="section">
          <div className="row">
            <div className="col-lg-12 col-md-12 article">
              <div className="shopcontainer row">
                {loading ? (
                  <div className="mb-4">
                    <Loader />
                  </div>
                ) : error ? (
                  <Message variant="alert-danger">{error}</Message>
                ) : (
                  <>
                    {products.length > 0 &&
                      products.map((product) => (
                        <div className="shop col-lg-4 col-md-6 col-sm-6" key={product._id}>
                          <div className="border-product">
                            <Link to={`${routes.product}${product._id}`}>
                              <div className="shopBack">
                                <img src={product.image} alt={product.title} />
                              </div>
                            </Link>

                            <div className="shoptext">
                              <p>
                                <Link to={`${routes.product}${product._id}`}>{product.title}</Link>
                              </p>

                              <Rating value={product.rating} text={`${product.numReviews} reviews`} />
                              <h3>${product.price}</h3>
                            </div>
                          </div>
                        </div>
                      ))}
                    {/* Pagination */}
                    <Pagination />
                  </>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ShopSection;
