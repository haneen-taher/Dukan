import React from "react";

import "./Product.css";
import { HashLink } from "react-router-hash-link";

function BreadCrumb() {
  return (
    <nav style={{ "--bs-breadcrumb-divider": "'>'" }} aria-label="breadcrumb">
      <ol className="breadcrumb">
        <li className="breadcrumb-item">
          <HashLink to="/Home">
            {" "}
            <i class="fa-solid fa-house" style={{ color: "#0c0d0d" }}></i>
          </HashLink>
        </li>
        <li className="breadcrumb-item active" aria-current="page">
          تسوق
        </li>
      </ol>
    </nav>
  );
}

export default BreadCrumb;
