import React from "react";
import { Link, useLocation, useParams } from "react-router-dom";

const ProductDetail = () => {
  const { id } = useParams();
  const location = useLocation();
  return (
    <div className="container">
      <div className="product-item col-medium-4">
        <a className="product-img">
          <img src="https://picsum.photos/seed/picsum/200/200" alt="image" />
        </a>
        <h4 className="product-name">Product {id}</h4>
        <p className="product-desc">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit.
        </p>
        <button className="product-action">Add to cart</button>
      </div>
    </div>
  );
};

export default ProductDetail;
