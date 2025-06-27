import React from "react";

export default function Contact() {
  return (
    <>
      <div id="contact">
        <div
          class="row  g-lg-5 py-5"
          style={{ backgroundColor: "white", marginTop: "20px" }}
        >
          <div class="col-lg-7 text-center text-lg-start">
            <h1
              class="display-4 fw-bold lh-1 text-body-emphasis mb-3"
              style={{ paddingLeft: "30px" }}
            >
              Contact Us
            </h1>
            <p
              class="col-lg-10 fs-4"
              style={{ color: "black", paddingLeft: "30px" }}
            >
              Below is an example form built entirely with Bootstrap’s form
              controls. Each required form group has a validation state that can
              be triggered by attempting to submit the form without completing
              it.
              <br />
              <br />
              <br />
              Coffee Shop Name: Aroma & Bean Café Address: 217 Oakwood Avenue,
              Brooksville, IL 60471 Phone: (312) 555-7834 Email:
              <a href="" style={{ color: "black" }}>
                {" "}
                contact@Aromabean.com
              </a>
            </p>
          </div>
          <div class="col-md-10 mx-auto col-lg-5">
            <form
              class="p-4 p-md-5 border rounded-3 bg-body-tertiary "
              style={{ marginRight: "30px" }}
            >
              <div class="form-floating mb-3">
                <input
                  type="email"
                  class="form-control"
                  id="floatingInput"
                  placeholder="name@example.com"
                />
                <label for="floatingInput">Email address</label>
              </div>
              <div class="form-floating mb-3">
                <input
                  type="number"
                  class="form-control"
                  id="floatingPassword"
                  placeholder="Password"
                />
                <label for="floatingPassword">Contact Number</label>
              </div>
              <div>
                <textarea
                  type="text"
                  placeholder=" Submit Your Complaint"
                  style={{
                    height: "200px",
                    width: "500px",
                    borderRadius: "10px",
                    border: "1px solid #D3D3D3",
                  }}
                ></textarea>
              </div>
              <div class="checkbox mb-3">
                <label>
                  <input type="checkbox" value="remember-me" /> Remember me
                </label>
              </div>
              <button
                class="w-100 btn btn-lg btn-primary"
                type="submit"
                style={{
                  backgroundColor: "#795C34",
                  border: "2px solid #795C34",
                }}
              >
                Sign up
              </button>
              <hr class="my-4" />
              <small class="text-body-secondary">
                By clicking Sign up, you agree to the terms of use.
              </small>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}
