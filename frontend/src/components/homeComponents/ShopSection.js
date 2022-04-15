import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Rating from "./Rating";
import Pagination from "./pagination";
import routes from "../../constants/routes";
import axios from "axios";

const ShopSection = () => {
  const [products, setProducts] = useState([]);

  useEffect(async () => {
    const { data } = await axios.get(routes.api.products);
    setProducts(data);
  }, []);
  return (
    <>
      <div className="container">
        <div className="section">
          <div className="row">
            <div className="col-lg-12 col-md-12 article">
              <div className="shopcontainer row">
                {products.map((product) => (
                  <div className="shop col-lg-4 col-md-6 col-sm-6" key={product._id}>
                    <div className="border-product">
                      <Link to={`/product/${product._id}`}>
                        <div className="shopBack">
                          <img src={product.image} alt={product.title} />
                        </div>
                      </Link>

                      <div className="shoptext">
                        <p>
                          <Link to={`${routes.product}/${product._id}`}>{product.title}</Link>
                        </p>

                        <Rating value={product.rating} text={`${product.numReviews} reviews`} />
                        <h3>${product.price}</h3>
                      </div>
                    </div>
                  </div>
                ))}
                {/* Pagination */}
                <Pagination />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ShopSection;
