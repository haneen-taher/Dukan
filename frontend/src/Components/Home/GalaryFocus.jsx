import React from "react";
import img1 from "../../Images/food.webp";
import img2 from "../../Images/2.jpg";
import img3 from "../../Images/1.jpg";
import img4 from "../../Images/sliders-11.jpg";
import img5 from "../../Images/4.jpg";
import img6 from "../../Images/3.jpg";

const ImageFocus = () => {
  return (
    <section className="imgs-focus">
      <div className="continar-img-focus">
        <div className="img-focus">
          <img src={img1} alt="" />
          <h5>مقدوس</h5>
          <span>+</span>
        </div>
        <div className="img-focus">
          <img src={img2} alt="" />
          <h5>رسم على الفخار</h5>
          <span>+</span>
        </div>
        <div className="img-focus">
          <img src={img3} alt="" />
          <h5>رسم على الزجاج</h5>
          <span>+</span>
        </div>
        <div className="img-focus">
          <img className="square-img" src={img4} alt="" />
          <h5>رسم تقليدي</h5>
          <span>+</span>
        </div>
        <div className="img-focus">
          <img src={img5} alt="" />
          <h5>حلويات</h5>
          <span>+</span>
        </div>
        <div className="img-focus">
          <img src={img6} alt="" />
          <h5>صابون</h5>
          <span>+</span>
        </div>
      </div>
    </section>
  );
};

export default ImageFocus;
