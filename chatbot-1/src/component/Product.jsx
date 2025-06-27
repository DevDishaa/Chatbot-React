import React from "react";

export default function Product() {
  return (
    <>
      <div className="product-page" id="product">
        <h3
          style={{
            color: "white",
            textAlign: "center",
            fontSize: "30px",
            // border: "2px solid white",
            fontWeight: "bold",
          }}
        >
          Products
        </h3>
        <div className="product-card">
          <div id="product-cards">
            <img
              src="https://i.pinimg.com/474x/f2/6e/8d/f26e8d72acead8ad45a5617ffeb0ff82.jpg"
              alt=""
              style={{
                width: "100%",
                height: "86%",
                borderRadius: "8px",
              }}
            />
            <h3 style={{ color: "brown", textAlign: "center" }}> Iced Latte</h3>
            <p
              style={{
                color: "black",
                fontSize: "17px",
                marginBottom: "2px",
               
              }}
            >
              $100 <strike> $200</strike>
            </p>
          </div>
          <div id="product-cards">
            <img
              src="https://i.pinimg.com/474x/e2/c7/b3/e2c7b35bdd7cf665fd85d3541f72fdf6.jpg"
              style={{
                width: "100%",
                height: "86%",
                borderRadius: "8px",
              }}
            />
            <h3 style={{ color: "brown", textAlign: "center" }}> Coffee</h3>
            <p
              style={{
                color: "black",
                fontSize: "17px",
                marginBottom: "2px",
              }}
            >
              $100 <strike> $200</strike>
            </p>
          </div>
          <div id="product-cards">
            <img
              src="https://i.pinimg.com/474x/a6/ee/8c/a6ee8c7d6bb2b84702b5aca69a9377ec.jpg"
              alt=""
              style={{
                width: "100%",
                height: "86%",
                borderRadius: "8px",
              }}
            />
            <h3 style={{ color: "brown", textAlign: "center" }}> Nescafe Gold</h3>
            <p
              style={{
                color: "black",
                fontSize: "17px",
                marginBottom: "2px",
               
              }}
            >
              $100 <strike> $200</strike>
            </p>
          </div>
          <div id="product-cards">
            <img
              src="https://i.pinimg.com/474x/f7/2f/a4/f72fa421e291c990043fb81bef820f04.jpg"
              alt=""
              style={{
                width: "100%",
                height: "86%",
                borderRadius: "8px",
              }}
            />
            <h3 style={{ color: "brown", textAlign: "center" }}> Coffee Beans</h3>
            <p
              style={{
                color: "black",
                fontSize: "17px",
                marginBottom: "2px",
            
              }}
            >
              $100 <strike> $200</strike>
            </p>
          </div>
          <div id="product-cards">
            <img
              src="https://i.pinimg.com/474x/cc/35/65/cc3565ff163906c1828ac9fab417ffc2.jpg"
              alt=""
              style={{
                width: "100%",
                height: "86%",
                borderRadius: "8px",
              }}
            />
            <h3 style={{ color: "brown", textAlign: "center" }}> Espresso</h3>
            <p
              style={{
                color: "black",
                fontSize: "17px",
                marginBottom: "2px",
               
              }}
            >
              $100 <strike> $200</strike>
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
