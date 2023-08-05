import React from "react";
import food from "../../Images/food.webp";
import handcraft from "../../Images/handcraft1.webp";
import personalcare from "../../Images/personalcare.webp";
import "./Home.css";

function CategoryCard() {
  return (
    <>
      <div className="card-title">
        <h1 className="title-one">منتجات مصنوعة بِحُب</h1>
        <p className="title-one">
          سعداء لأن اختيارك وقع على دكان، نتمنى لك تجربة تسوق رائعة!
        </p>
      </div>
      <div className="row">
        <div className="col">
          <div className="card h-50 mt-4 mx-auto " style={{ width: "18rem" }}>
            <img src={food} className="card-img-top" alt="food" />
            <div className="card-body">
              <p className="card-text fw-bold texts">أغذية</p>
            </div>
          </div>
        </div>

        <div className="col">
          <div className="card h-50 mt-4 mx-auto" style={{ width: "18rem" }}>
            <img src={handcraft} className="card-img-top" alt="handcraft" />
            <div className="card-body">
              <p className="card-text fw-bold texts">حرف يدوية</p>
            </div>
          </div>
        </div>

        <div className="col">
          <div className="card h-50 mt-4 mx-auto" style={{ width: "18rem" }}>
            <img
              src={personalcare}
              className="card-img-top"
              alt="personalcare"
            />
            <div className="card-body">
              <p className="card-text fw-bold texts">منتجات العناية الشخصية</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default CategoryCard;
