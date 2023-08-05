import React from "react";
import "./Cart.css";
import { Link } from "react-router-dom";
import axios from "axios";
import { useParams } from "react-router-dom";

const ShoppingCart = () => {
  const Products = JSON.parse(sessionStorage.getItem("Products"));
  const params = useParams();

  const calculatePrice = () => {
    let totle = 0;
    Products.forEach((element) => {
      totle += element.price;
    });
    return totle;
  };

  // send data to database

  const setProductsData = async () => {
    const response = await axios.post(`/api/v1/customer/${params.customerId}`);
  };

  return (
    <section className="h-100 h-custom" style={{ backgroundColor: "#eee" }}>
      <div className="container py-5 h-100">
        <div className="row d-flex justify-content-center align-items-center h-100">
          <div className="col">
            <div className="card">
              <div className="card-body p-4">
                <div className="row">
                  <div className="col-lg-7">
                    <h5 className="mb-3">
                      <Link to="/Products" className="text-body">
                        <i className="fas fa-long-arrow-alt-right me-2"></i>
                        <br />
                      </Link>
                    </h5>
                    <div className="d-flex justify-content-between align-items-center mb-4">
                      <div>
                        <h3 className="mb-1">عربة التسوق</h3>
                      </div>
                    </div>

                    <hr />

                    {/* منتج 1 */}
                    {Products.map((product) => {
                      return (
                        <div className="card mb-3">
                          <div className="card-body">
                            <div className="d-flex justify-content-between">
                              <div className="d-flex flex-row align-items-center">
                                <div className="ms-3">
                                  <h5>{product.title}</h5>
                                </div>
                              </div>
                              <div className="d-flex flex-row align-items-center">
                                <div style={{ width: "50px" }}>
                                  <h5 className="fw-normal mb-0">{}</h5>
                                </div>
                                <div style={{ width: "80px" }}>
                                  <h5 className="mb-0">{product.price}JD</h5>
                                </div>
                                <a href="#!" style={{ color: "#cecece" }}>
                                  <i className="fas fa-trash-alt"></i>
                                </a>
                              </div>
                            </div>
                          </div>
                        </div>
                      );
                    })}
                  </div>

                  <div className="col-lg-5">
                    <div className="bebo">
                      <div className="card-body">
                        <div className="d-flex justify-content-between mb-4">
                          <p className="mb-2">المجموع الكلي</p>
                          <p className="mb-2">{calculatePrice()} د.أ</p>
                        </div>

                        <button
                          type="button"
                          className="btn btn-info btn-block btn-lg btn-2"
                        >
                          <div className="d-flex justify-content-between ">
                            <Link className="pay" to="/Checkout">
                              استكمال الطلب{" "}
                            </Link>{" "}
                          </div>
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ShoppingCart;
