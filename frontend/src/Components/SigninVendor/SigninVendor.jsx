import React, { useEffect, useState } from "react";
import "./Signin.css";
import axios from "axios";
import { useNavigate, useParams, redirect, NavLink } from "react-router-dom";
import { Link } from "react-router-dom";

function LoginVendor() {
  const navigate = useNavigate();
  const [Alldata, setAllData] = useState({
    email: "",
    password: "",
  });

  const handlerData = (event) => {
    const { name, value } = event.target;
    setAllData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const token = JSON.parse(sessionStorage.getItem("vendor_token"));

  axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;

  // handle send email and password
  const handlerSendData = async () => {
    try {
      const response = await axios.post("/api/v1/vendors/login", Alldata);
      sessionStorage.setItem("vendor_token", JSON.stringify(response.data));
      navigate(`/store`);
    } catch (err) {
      console.log("err", err);
    }
  };

  const handleSubmit = (e) => {
    console.log(token);
    e.preventDefault();
    handlerSendData();
  };

  return (
    <section
      className="vh-100 bg-image"
      style={{
        backgroundImage:
          "url('https://media.discordapp.net/attachments/1125716795635027988/1133657069308887190/0-ostrich-eggs-credit-jordan-jewel-web.webp?width=993&height=662')",
      }}
    >
      <div className="mask d-flex align-items-center h-100 gradient-custom-3">
        <div className="container h-100">
          <div className="row d-flex justify-content-center align-items-center h-100">
            <div className="col-12 col-md-9 col-xl-6">
              <div className="card" style={{ borderRadius: "15px" }}>
                <div className="card-body p-5">
                  <h2 className="text-uppercase text-center mb-5">
                    الدخول إلى المتجر
                  </h2>
                  <form className="vendorForm">
                    <div className="form-outline mb-4">
                      <input
                        type="email"
                        id="form3Example1cg"
                        className="form-control-lg"
                        placeholder="الإيميل"
                        name="email"
                        value={Alldata.email}
                        onChange={(e) => {
                          handlerData(e);
                        }}
                      />
                    </div>
                    <div className="form-outline mb-4">
                      <input
                        type="password"
                        id="form3Example4cdg"
                        className="form-control-lg"
                        placeholder="كلمة المرور"
                        name="password"
                        value={Alldata.password}
                        onChange={(e) => {
                          handlerData(e);
                        }}
                      />
                    </div>
                    <div className="d-flex justify-content-center">
                      <button
                        className="btn"
                        onClick={(e) => {
                          handleSubmit(e);
                        }}
                      >
                        تسجيل الدخول
                      </button>
                    </div>
                  </form>
                  <br />
                  <p>
                    ليس لديك حساب؟
                    <Link to="/Vendor/SiginUp" className="text-1">
                      سجل من هنا
                    </Link>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default LoginVendor;
