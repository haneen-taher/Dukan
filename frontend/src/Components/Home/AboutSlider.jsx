import React from "react";

function AboutCard() {
  return (
    <>
      <div className="card-title" id="about">
        <h1 className="title-one">عنّا</h1>
      </div>
      <div className="row">
        <div class="card about  mt-4 mx-auto " style={{ width: "18rem" }}>
          <div class="card-body">
            <p class="card-text texts">
              دكان هي منصّة إلكترونية، وسوق للمنتجات الحرفية في الأردن، حيث
              يجتمع الحرفيون المبدعون لصنع وعرض وبيع منتجاتهم للزبائن.
            </p>
          </div>
        </div>
        <div class="card about mt-4 mx-auto " style={{ width: "18rem" }}>
          <div class="card-body">
            <p class="card-text texts ">
              نؤمن في دكان أنّ لكلّ بائع قصة فريدة تستحق أن تُروى، ويعرفها
              العالم. لذا نحن لا نساعد الحرفيين على بيع منتجاتهم المميزة وحسب،
              بل وندعمهم ليكشفوا لنا عن الحكايات الدافئة وراء كلّ منتج يصنعونه.
            </p>
          </div>
        </div>
        <div class="card about mt-4 mx-auto " style={{ width: "18rem" }}>
          <div class="card-body">
            <p class="card-text texts">
              دكان ليس مجرّد موقع للتجارة الإلكترونية وحسب. إننا نُسهم في جعل
              حياة الآخرين أفضل وأكثر إشراقًا، في دكان ندعم العشرات من الحرفيين
              في الأردن، ونساعدهم على تحقيق دخل إضافي من خلال بيع منتجاتهم على
              المنصّة.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default AboutCard;
