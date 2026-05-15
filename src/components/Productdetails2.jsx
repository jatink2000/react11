// import "./ProductDetails.css";

import { useLocation, useParams } from "react-router-dom";

export default function ProductDetailsPage2() {
  let data=useParams()
  let a=data.productdata
  let b=JSON.parse(a)
  return (
    <>
      <h1>product deatils 2</h1>
      <div className="page">
        <div className="container">
          <div className="left-section">
            <div className="main-image-box">
              <img
                src={b.thumbnail}
                alt="Product"
                className="main-image"
              />
            </div>
          </div>
  
          <div className="right-section">
            <span className="tag">New Arrival</span>
  
            <h1 className="title">{b.title}</h1>
  
            <div className="rating-row">
              <div className="stars">★★★★★</div>
              <span className="review">(4.9 Reviews)</span>
            </div>
  
            <p className="description">
             {b.description}
            </p>
  
            <div className="price-row">
              <span className="price">₹{b.price}</span>
              <span className="discount">{b.discountPercentage}% OFF</span>
            </div>
  
            <div className="size-section">
              <h3>Select Size</h3>
  
              <div className="size-wrapper">
                {[6, 7, 8, 9, 10].map((size) => (
                  <button className="size-btn" key={size}>
                    {size}
                  </button>
                ))}
              </div>
            </div>
  
            <div className="btn-wrapper">
              <button className="cart-btn">Add to Cart</button>
              <button className="buy-btn">Buy Now</button>
            </div>
  
            <div className="feature-wrapper">
              <div className="feature-card">
                <h4>Free Delivery</h4>
                <p>Delivery within 3-5 business days.</p>
              </div>
  
              <div className="feature-card">
                <h4>Easy Returns</h4>
                <p>7 days easy return policy.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

