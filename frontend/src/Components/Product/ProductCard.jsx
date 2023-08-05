import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import SortByPrice from "./SortProducts";
import { Link } from "react-router-dom";
import Pagination from "./Pagination";
import axios from "axios";
import swal from "sweetalert";

//display products as cards
const ProductsCard = () => {
  //Variable declaration
  // to hold fetched data
  const [data, setData] = useState([]);
  //sorting based on price
  const [sorting, setSorting] = useState("low-price");
  //current page number
  const [currentPage, setCurrentPage] = useState(1);
  //number of products in each page, which is 9 in our case
  const [itemsPerPage] = useState(9);

  //fetch data

  useEffect(() => {
    getProducts();
  }, []);

  const getProducts = async () => {
    try {
      const response = await axios.get("/api/v1/Products");
      console.log(response.data.data.products);
      setData(response.data.data.products);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  //display products according to the selected option
  const sortProducts = (products, sorting) => {
    if (sorting === "low-price") {
      return [...products].sort((a, b) => a.price - b.price);
    } else if (sorting === "high-price") {
      return [...products].sort((a, b) => b.price - a.price);
    } else {
      return products;
    }
  };

  const sortedData = sortProducts(data, sorting);

  //pagination
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = sortedData.slice(indexOfFirstItem, indexOfLastItem);

  //move from the current page
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  //add product in user cart
  // function InsertCart(e, ID) {
  //   e.preventDefault();
  //   if (ID.quantity) {
  //     axios
  //       .get(`/api/v1/Products`)
  //       .then(function (response) {
  //         const userData = response.data;
  //         const isElementExists = userData.Orders.New_Cart.filter(
  //           (ele) => ele.id == ID.id
  //         );
  //         if (isElementExists.length) {
  //           swal("تمت إضافة المنتج سابقًا!", "", "error");
  //         } else {
  //           swal("تمت إضافة المنتج بنجاح", "", "success");
  //           userData.Orders.New_Cart.push(ID);
  //           // DECREMENT THE QUANTITY BY ONE, ENSURING IT DOESN'T GO BELOW ZERO
  //           axios
  //             .get(`/api/v1/Products/${ID.id}`)
  //             .then(function (response) {
  //               const productData = response.data;
  //               productData.quantity -= 1;
  //               // UPDATE THE DATA ARRAY WITH THE NEW QUANTITY VALUE
  //               const updatedData = data.map((product) => {
  //                 if (product.id === ID.id) {
  //                   return {
  //                     ...product,
  //                     quantity: productData.quantity,
  //                   };
  //                 }
  //                 return product;
  //               });
  //               setData(updatedData);
  //               return axios.put(`/api/v1/Products/${ID.id}`, productData);
  //             })
  //             .then((response) => {})
  //             .catch((error) => {});
  //           return axios.put(
  //             `http://localhost:3001/Users/${sessionStorage.getItem("id")}`,
  //             userData
  //           );
  //         }
  //       })
  //       .then((response) => {})
  //       .catch((error) => {});
  //   } else {
  // swal("نفذ من المخزون، سيتوفر المنتج قريبًا", "", "error");
  //   }
  // }

  return (
    <>
      <div className="container">
        <SortByPrice sorting={sorting} setSorting={setSorting} />
        <div className="row">
          {currentItems.map((product) => (
            <div
              className="col-12 col-lg-4 col-md-4 col-sm-6 h-50"
              key={product.id}
            >
              <div className="mb-5 box-Shaddow">
                <div className="card border border-0">
                  <div className="card-body p-0 position-relative">
                    <NavLink to={`${product._id}`} className="card-link">
                      <img
                        src={product.Image}
                        className="card-img-top"
                        alt={product.title}
                        height="250px"
                      />
                    </NavLink>
                    <div className="ps-4 mb-3 h-100">
                      <h5 className="card-title mb-0 pb-3">{product.title}</h5>
                      <div className="d-flex gap-4 align-items-baseline">
                        <p className="card-text">{product.price} د.أ</p>
                      </div>
                      <Link to={`${product._id}`}>
                        <button className="btn">عرض التفاصيل</button>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        <Pagination
          itemsPerPage={itemsPerPage}
          totalItems={sortedData.length}
          currentPage={currentPage}
          paginate={paginate}
        />
      </div>
    </>
  );
};

export default ProductsCard;
