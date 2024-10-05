import React from "react";
import { Link } from "react-router-dom";

function SingleProduct(props) {
  const { productItem } = props;
  return (
    <div className="product-item men">
      <Link to={`/product/${productItem.id}`} style={{ textDecoration: 'none', color: 'inherit' }}>
      <div
        className="product discount product_filter"

      >
        <div className="product_image">
        
          <img
                  className="card-img-top p-3"
                  src={productItem.image}
                  alt="Card"
                  height={300}
                />
        </div>
        <div className="favorite favorite_left">
          <i className="far fa-heart"></i>
        </div>
       
        <div className="product_info">
          <h6 className="product_name">
            <div>{productItem.title}</div>
          </h6>
          <div className="product_price">
            ₹ {productItem.price}
            <span> ₹ {(parseFloat(productItem.price) + 30).toFixed(2)}</span>
          </div>
        </div>
      </div>
      </Link>
      
    </div>
  );
}

export default SingleProduct;