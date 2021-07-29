import React from "react";
import { Link } from "react-router-dom";
import HeroBanner from "../../../components /HeroBanner";

const Product = () => {
  const products = [1, 2, 3, 4, 5, 6, 7, 8];
  return (
    <>
      <section className="section-product">
        <div className="container">
          <h2>Product List</h2>
          <ul className="product-list row ">
            {products.map((e) => (
              <li className="product-item col-medium-3">
                <a className="product-img">
                  <img
                    src="https://picsum.photos/seed/picsum/200/200"
                    alt="image"
                  />
                </a>
                <h4 className="product-name">
                  <Link to={`/products/${e}`}>Product {e}</Link>
                </h4>
                <p className="product-desc">
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                </p>
                <button className="product-action">Add to cart</button>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </>
  );
};

export default Product;
