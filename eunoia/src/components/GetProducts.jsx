import React from 'react'
import axios from "axios";
import { useState, useEffect} from "react";
import { useNavigate } from "react-router-dom";

const GetProducts=()=>{

    const[loading,setLoading]=useState("")
    const[error,setError]=useState("")
    const[products,setProducts]=useState([])
    const[searchTerm,setSearchTerm]=useState("")
    const [wishlist, setWishlist] = useState([]);
    



    const navigate=useNavigate()

    // Variable to store image

    const image_url="http://julie.alwaysdata.net/static/images/"

    // Creat a function to get our products from the api


    const fetchProducts=async()=>{

        setLoading("Please wait as we retrieve your products")

        try {

            const response=await axios.get("https://julie.alwaysdata.net/api/getproductdetails")
            setProducts(response.data)

            console.log("The response is",response)
            setLoading("")
        

        } catch (error) {
            setLoading("")
            setError(error.message)
        }

    }

    // End of function to call useEffect

    useEffect(()=>{
        fetchProducts()

        const savedWishlist = JSON.parse(localStorage.getItem("wishlist")) || [];
    setWishlist(savedWishlist);
    },[])

    const toggleWishlist = (product) => {
    const exists = wishlist.find((item) => item.product_id === product.product_id);

    let updatedWishlist;

    if (exists) {
        updatedWishlist = wishlist.filter((item) => item.product_id !== product.product_id);
    } else {
        updatedWishlist = [...wishlist, product];
    }

    setWishlist(updatedWishlist);
    localStorage.setItem("wishlist", JSON.stringify(updatedWishlist));
};

    return(

        <div className="row">

            <h1>Available Products</h1>

            <p>❤️ Wishlist: {wishlist.length}</p>

            <p className="text-warning">{loading}</p>
            <p className="text-danger">{error}</p>

            {/* Loop through our product */}
         <div>
           <input
              type="text"
              placeholder="🔍 Search your vibe..."
              className="form-control rounded-pill shadow-sm px-4 py-2"
              style={{ maxWidth: "400px", margin: "0 auto" }}
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
             />
         </div> 

            {products
              .filter((product) =>
              product.product_name.toLowerCase().includes(searchTerm.toLowerCase()) ||
              product.product_description.toLowerCase().includes(searchTerm.toLowerCase())
              )
              .map((product) => (

           

        <div className="col-md-3 justify-content-center">

                <div className="card shadow m-4">

                <div style={{ position: "relative" }}>
          <img 
                src={image_url + product.product_photo} 
                alt={product.product_name} 
                className="product_img w-100"
         />

           <span
             onClick={() => toggleWishlist(product)}
             style={{
               position: "absolute",
               top: "12px",
               right: "12px",
               cursor: "pointer",
               fontSize: "22px",
               background: "white",
               borderRadius: "50%",
               padding: "6px 10px",
               boxShadow: "0 2px 6px rgba(0,0,0,0.2)"
          }}
         >
          {wishlist.find(item => item.product_id === product.product_id) ? "❤️" : "🤍"}
         </span>
        </div>

                <div className="card-body">

                    <p className="text-success">{product.product_name}</p>
                    <p className="text-secondary">{product.product_description}</p>
                    <p className="text-warning">Ksh {product.product_cost}</p>

                    <input type="button" className=" btn btn-info w-100"  value="Purchase now" onClick={()=>navigate("/mpesa",{state:{product}})}/>

                   
                    

                </div>

                </div>


            </div>

             ))}



         
        </div>
    )
}

export default GetProducts