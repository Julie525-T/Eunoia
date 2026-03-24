import React from "react";
import { Link } from "react-router-dom";


const Footer = () => {
  return (
    <footer className="container-fluid  mt-5 py-5 ">

      <div className="row footer">

        

        
        <div className="col-md-3">
          <h3 className="text-dark">Eunoia</h3>
          <p className="text-dark">
            Curating aesthetic products that enhance beauty, calmness, and intentional living. Boosting your confidence with cute products to make you become your real self everywhere.
          </p>
          <h5 className="text-secondary">Beautiful mind,Beautiful Self,100%confidence</h5>
        </div>

        
        <div className="col-md-3">
          <h3 className="text-dark">Explore</h3>
           <Link to={"/"} className='nav'>Get Products</Link>
           <br />        
           <Link to={"/addproducts"} className='nav'>Add Products</Link>
           <br />        
           <Link to={"/signin"} className='nav'>Sign In</Link>
           <br />
           <Link to={"/signup"} className='nav'>Sign Up</Link>
          
          
        </div>

        
        <div className="col-md-3">
          <h3 className="text-dark">Support</h3>
          <p className="text-secondary">Email: support@eunoia.com</p>
          <p className="text-secondary">Phone: +254 769 508807</p>
          <p className="text-secondary">Available 24/7</p>
        </div>

        
        <div className="col-md-3">
          <h3 className="text-dark">Payments</h3>
          <p className="text-secondary">M-Pesa Supported</p>
          <p className="text-secondary">Secure Transactions</p>
          <p className="text-secondary">Instant Confirmation</p>
        </div>

      </div>

      <hr />

      <div className="text-center last bg-secondary">
        <p className="text-light">
          © Eunoia. All rights reserved 2026.
        </p>
      </div>

    </footer>
  );
};

export default Footer;