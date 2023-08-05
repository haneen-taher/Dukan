import React from "react";
import swal from "sweetalert";

const Checkout = () => {
  const handleSubmit = (event) => {
    event.preventDefault();
    swal("تم تسجيل الطلب!", "سيتم التواصل معك خلال 24 ساعة.", "success");
  };
  return (
    <>
      <form class="row g-3 m-4 p-4 text-center" onSubmit={handleSubmit}>
        <div class="col-md-6">
          <h3>استكمال الطلب</h3>
        </div>
        <div class="col-md-6">
          <label for="inputPassword4" class="form-label">
            الاسم الثلاثي
          </label>
          <input
            type="text"
            class="form-control"
            id="inputPassword4"
            required
          />
        </div>
        <div class="col-md-6">
          <label for="inputPassword4" class="form-label">
            رقم الهاتف
          </label>
          <input type="tel" class="form-control" id="inputPassword4" required />
        </div>
        <div class="col-md-6">
          <label for="inputAddress" class="form-label">
            العنوان{" "}
          </label>
          <input
            type="text"
            class="form-control"
            id="inputAddress"
            placeholder="شارع الجامعة، بناية رقم 116"
            required
          />
        </div>

        <div class="col-md-6">
          <label for="inputCity" class="form-label">
            المحافظة
          </label>
          <input type="text" class="form-control" id="inputCity" required />
        </div>

        <div class="col-12">
          <button type="submit" class="btn btn-primary">
            تسجيل الطلب
          </button>
        </div>
      </form>
    </>
  );
};

export default Checkout;
