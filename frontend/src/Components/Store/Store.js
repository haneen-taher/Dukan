import React, { useEffect, useState } from "react";
import axios from "axios";
import "./Stroe.css";
import { useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";
const Store = () => {
  const token = sessionStorage.getItem("vendor_token");
  const params = useParams();
  const Navigate = useNavigate();
  const [products, setProducts] = useState();
  const [formData, setFormData] = useState({
    title: "",
    price: "",
    description: "",
    image: null,
  });
  const handleInputChange = (event) => {
    const { name, value, type, files } = event.target;
    const inputValue = type === "file" ? files[0] : value;
    setFormData({
      ...formData,
      [name]: inputValue,
    });
  };

  /* Function to show the image preview */
  const renderImagePreview = () => {
    if (formData.image) {
      return (
        <img
          src={URL.createObjectURL(formData.image)}
          alt="Product Preview"
          style={{ maxWidth: "100%", maxHeight: "300px" }}
        />
      );
    }
    return null;
  };

  // handleAddProducts
  const handleAddProducts = async () => {
    const response = await axios.post(`/api/v1/vendors/store`, formData);
  };
  // getProducts
  const getProducts = async () => {
    const response = await axios.get("/api/v1/products");
    setProducts([...response.data.data.products]);
  };

  useEffect(() => {
    getProducts();
  }, []);

  const handleSubmit = (event) => {
    event.preventDefault();
    handleAddProducts();
    console.log("Form submitted!");
    console.log(formData);
    console.log(params);
  };

  return (
    <>
      {token ? (
        <section className="vh-100 bg-image">
          <div className="mask d-flex align-items-center h-100 gradient-custom-3">
            <div className="container h-100">
              <div className="row d-flex justify-content-center align-items-center h-100">
                <div className="col-12 col-md-9 col-xl-6">
                  <div className="card" style={{ borderRadius: "15px" }}>
                    <div className="card-body p-5">
                      <h2 className="text-uppercase text-center mb-5">
                        المخزون
                      </h2>
                      <form onSubmit={handleSubmit} className="StoreForm">
                        <div className="form-outline mb-4">
                          <input
                            type="text"
                            id="title"
                            className="form-control-lg"
                            placeholder="اسم المنتج"
                            name="title"
                            value={formData.title}
                            onChange={handleInputChange}
                          />
                        </div>
                        <div className="form-outline mb-4">
                          <input
                            type="text"
                            id="price"
                            className="form-control-lg"
                            placeholder="السعر"
                            name="price"
                            value={formData.price}
                            onChange={handleInputChange}
                          />
                        </div>
                        <div className="form-outline mb-4">
                          <input
                            type="text"
                            id="description"
                            className="form-control-lg"
                            placeholder="الوصف"
                            name="description"
                            value={formData.description}
                            onChange={handleInputChange}
                          />
                        </div>
                        <div className="form-outline mb-4">
                          <input
                            type="file"
                            id="image"
                            className="form-control-lg"
                            name="image"
                            onChange={handleInputChange}
                          />
                        </div>
                        <div className="image-preview mb-4">
                          {renderImagePreview()}
                        </div>
                        <div className="d-flex justify-content-center">
                          <button type="submit" className="btn">
                            إنشاء منتج
                          </button>
                        </div>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      ) : <h1 style={{height:"100vh", textAlign:"left", margin:"10px"}} dir="ltr">Page:<span style={{color:"red"}}>Not Found</span></h1>}
    </>
  );
};

export default Store;
