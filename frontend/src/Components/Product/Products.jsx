import React from "react";
import "./Product.css";
import ProductsCard from "./ProductCard";
import ProfileHeader from "./Header";
import Pagination from "./Pagination";

//Create the component
function Products() {
  return (
    <div>
      <ProfileHeader />

      <div className="container my-5 py-5">
        <div className="row">
          <div className="col-12  mb-5 ">
            <h3 className=" text-center pheader" style={{ marginTop: "10px" }}>
              استمتع بتجربة تسوق فريدة في دكان!
            </h3>
          </div>
        </div>
        <br />
        <ProductsCard />
        <Pagination />
      </div>
    </div>
  );
}

export default Products;
