import React, { useEffect, useState } from "react";
import "./Signin.css";
import axios from "axios";
import { useNavigate, useParams, redirect, NavLink } from "react-router-dom";
import { Link } from "react-router-dom";

function LoginCutoumers() {
  const navigate = useNavigate();
  const [Alldata, setAllData] = useState({
    email: "",
    password: "",
  });

  const [error, setError] = useState(false);
  console.log(Alldata);

  const handlerData = (event) => {
    const { name, value } = event.target;
    setAllData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const token = JSON.parse(sessionStorage.getItem("customer_token"));

  axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;

  // handle send email and password
  const handlerSendData = async () => {
    try {
      const response = await axios.post("/api/v1/customer/login", Alldata);
      navigate(`/Products`);

      sessionStorage.setItem("customer_token", JSON.stringify(response.data));
    } catch (err) {
      console.log("err", err);
    }
  };

  const handleSubmit = (e) => {
    console.log(token);
    e.preventDefault();
    if (Alldata.email.length === 0) {
      setError(true);
    }
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
                    تسجيل الدخول{" "}
                  </h2>
                  <form className="vendorForm">
                    <div className="form-outline mb-4">
                      <input
                        type="email"
                        id="form3Example1cg"
                        className="form-control-lg"
                        placeholder="البريد الإلكتروني"
                        name="email"
                        value={Alldata.email}
                        onChange={(e) => {
                          handlerData(e);
                        }}
                      />
                      {error && Alldata.password.length <= 0 ? (
                        <label
                          style={{
                            color: "red",
                            textAlign: "center",
                            display: "block",
                          }}
                        >
                          هذا الحقل مطلوب{" "}
                        </label>
                      ) : (
                        ""
                      )}
                    </div>
                    <div className="form-outline mb-4">
                      <input
                        type="password"
                        id="form3Example4cdg"
                        className="form-control-lg"
                        placeholder="كلمة المرور"
                        name="password"
                        pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}"
                        value={Alldata.password}
                        onChange={(e) => {
                          handlerData(e);
                        }}
                      />
                      {error && Alldata.password.length <= 0 ? (
                        <label
                          style={{
                            color: "red",
                            textAlign: "center",
                            display: "block",
                          }}
                        >
                          هذا الحقل مطلوب{" "}
                        </label>
                      ) : (
                        ""
                      )}
                    </div>
                    <div className="d-flex justify-content-center">
                      <Link to={`/Store`}>
                        <button
                          className="btn"
                          onClick={(e) => {
                            handleSubmit(e);
                          }}
                        >
                          تسجيل دخول
                        </button>
                      </Link>
                    </div>
                  </form>
                  <br />

                  <p>
                    ليس لديك حساب؟
                    <Link to="/Cutoumers/SiginUp" className="text-1">
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

export default LoginCutoumers;
