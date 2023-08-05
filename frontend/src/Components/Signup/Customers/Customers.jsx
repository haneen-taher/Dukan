import React, { useEffect, useState } from "react";
import "./Customers.css";
import axios from "axios";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
const SignUpCustomers = () => {
  const navigate = useNavigate();
  const [Alldata, setAllData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
    order: "",
  });

  const handlerData = (event) => {
    const { name, value } = event.target;
    setAllData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };
  useEffect(() => {
    // getCustomerData();
  }, []);

  const getCustomerData = async () => {
    try {
      const response = await axios.get(`/api/v1/customer`);
      console.log(response.data.data);
    } catch (err) {
      console.log(err);
    }
  };
  const postCustomerData = async () => {
    try {
      const response = await axios.post(`/api/v1/customer/register`, Alldata);
      navigate("/Products");
      sessionStorage.setItem("customer_token", JSON.stringify(response.data));
    } catch (err) {
      console.log("-----------", err);
    }
  };

  // handlerSubmit
  const handlerSubmit = (event) => {
    event.preventDefault();
    postCustomerData();
    console.log("done");
    console.log(Alldata);
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
                    إنشاء حساب عميل
                  </h2>
                  <form onSubmit={handlerSubmit}>
                    <div className="form-outline mb-4">
                      <input
                        type="text"
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
                        type="text"
                        id="form3Example1cg"
                        className="form-control-lg"
                        placeholder="اسم المستخدم"
                        name="name"
                        value={Alldata.name}
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
                        pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}"
                        value={Alldata.password}
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
                        placeholder="تأكيد كلمة المرور"
                        pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}"
                        name="confirmPassword"
                        value={Alldata.confirmPassword}
                        onChange={(e) => {
                          handlerData(e);
                        }}
                      />
                    </div>
                    <div className="d-flex justify-content-center">
                      <button className="btn">إنشاء حساب</button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SignUpCustomers;
