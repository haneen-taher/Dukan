import "./App.css";
import HeaderMegaMenu from "./Components/Nav/Nav";
import FooterSocial from "./Components/Footer/Footer";
import LandingPage from "./Components/Home/LandingPage";
import LoginVendor from "./Components/SigninVendor/SigninVendor";
import LoginCutoumers from "./Components/SigninCustomers/SigninCustomers";
import SignUpVendor from "./Components/Signup/Vendor/Vendor";
import SignUpCustomers from "./Components/Signup/Customers/Customers";
import Store from "./Components/Store/Store";
import Cart from "./Components/Cart/Cart";
import Home from "./Components/Home/Home";
import Products from "./Components/Product/Products";
import ProductView from "./Components/Product/ProductView";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ProductViewView from "./Components/Product/ProductView";
import Profile from "./Components/Profile/Profile";
import Checkout from "./Components/Checkout/Checkout";
import GetInTouchSimple from "./Components/Contactus/Contactus";
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <HeaderMegaMenu />
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/Home" element={<Home />} />
          <Route path="/Vendor/Login" element={<LoginVendor />} />
          <Route path="/Vendor/SiginUp" element={<SignUpVendor />} />
          <Route path="/Cutoumers/Login" element={<LoginCutoumers />} />
          <Route path="/Cutoumers/SiginUp" element={<SignUpCustomers />} />
          <Route path="/Products" element={<Products />} />
          <Route path="/ProductView" element={<ProductView />} />
          <Route path="/Cart" element={<Cart />} />
          <Route path="/store" element={<Store />} />
          <Route path="/products/:productId" element={<ProductViewView />} />
          <Route path="/Profile" element={<Profile />} />
          <Route path="/Checkout" element={<Checkout />} />
          <Route path="/Contactus" element={<GetInTouchSimple />} />
        </Routes>
        <FooterSocial />
      </BrowserRouter>
    </div>
  );
}

export default App;
