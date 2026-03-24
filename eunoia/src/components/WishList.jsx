import React, { useEffect, useState } from "react";

const Wishlist = () => {
  const [wishlist, setWishlist] = useState([]);

  const image_url = "http://julie.alwaysdata.net/static/images/";

  // Load wishlist from localStorage
  useEffect(() => {
    const savedWishlist = JSON.parse(localStorage.getItem("wishlist")) || [];
    setWishlist(savedWishlist);
  }, []);

  // Remove item
  const removeFromWishlist = (product) => {
    const updatedWishlist = wishlist.filter(
      (item) => item.product_id !== product.product_id
    );

    setWishlist(updatedWishlist);
    localStorage.setItem("wishlist", JSON.stringify(updatedWishlist));
  };

  return (
    <div className="row">
      <h1>My Wishlist ❤️</h1>

      {wishlist.length === 0 ? (
        <p className="text-muted">Your wishlist is empty</p>
      ) : (
        wishlist.map((product) => (
          <div className="col-md-3" key={product.product_id}>
            <div className="card shadow m-4">

              <img
                src={image_url + product.product_photo}
                alt={product.product_name}
                className="product_img"
              />

              <div className="card-body">
                <p className="text-success">{product.product_name}</p>
                <p className="text-secondary">{product.product_description}</p>
                <p className="text-warning">Ksh {product.product_cost}</p>

                <button
                  className="btn btn-danger w-100"
                  onClick={() => removeFromWishlist(product)}
                >
                  ❌ Remove
                </button>
              </div>

            </div>
          </div>
        ))
      )}
    </div>
  );
};

export default Wishlist;