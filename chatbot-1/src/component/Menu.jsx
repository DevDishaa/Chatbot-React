import React from "react";

export default function () {
  return (
    <>
      <div id="menu-bar">
        <h3
          style={{
            color: "white",
            textAlign: "center",
            fontSize: "30px",
            // border: "2px solid white",
            fontWeight: "bold",
          }}
        >
          Menu
        </h3>
        <div className="menu-card">
          <div className="menu-cards">
            <img
              src="https://img.freepik.com/free-photo/vertical-shot-hot-coffee-with-waffles_181624-43126.jpg?ga=GA1.1.1709676787.1720240453&semt=ais_hybrid&w=740"
              alt=""
              style={{
                width: "100%",
                height: "84%",
                borderRadius: "8px",
              }}
            />
            <h3 style={{ color: "black", textAlign: "center" }}>Coffee</h3>
            <p style={{ color: "black", textAlign: "center" }}>
              $99 <strike>$100</strike>
            </p>
          </div>
          <div className="menu-cards">
            <img
              src="https://img.freepik.com/free-photo/closeup-classic-fresh-espresso-served-dark-surface_1220-5376.jpg?ga=GA1.1.1709676787.1720240453&semt=ais_hybrid&w=740"
              alt=""
              style={{
                width: "100%",
                height: "84%",
                borderRadius: "8px",
              }}
            />
            <h3 style={{ color: "black", textAlign: "center" }}>Coffee</h3>
            <p style={{ color: "black", textAlign: "center" }}>
              $100 <strike>$200</strike>
            </p>
          </div>
          <div className="menu-cards">
            <img
              src="https://img.freepik.com/free-photo/front-view-cup-cappuccino-with-cookies-book-table_141793-2825.jpg?ga=GA1.1.1709676787.1720240453&semt=ais_hybrid&w=740"
              alt=""
              style={{
                width: "100%",
                height: "84%",
                borderRadius: "8px",
              }}
            />
            <h3 style={{ color: "black", textAlign: "center" }}>Coffee</h3>
            <p style={{ color: "black", textAlign: "center" }}>
              $110 <strike>$200</strike>
            </p>
          </div>
        </div>

        <div id="menu-card1">
          <div className="menu-cards">
            <img
              src="https://img.freepik.com/free-photo/rqyhuff6clhj4wpwei9l5b0chbcjqyvxoeuojqbzjpg_181624-60296.jpg?ga=GA1.1.1709676787.1720240453&semt=ais_hybrid&w=740"
              alt=""
              style={{
                width: "100%",
                height: "84%",
                borderRadius: "8px",
              }}
            />
            <h3 style={{ color: "black", textAlign: "center" }}>Coffee</h3>
            <p style={{ color: "black", textAlign: "center" }}>
              $60 <strike>$70</strike>
            </p>
          </div>
          <div className="menu-cards">
            <img
              src="https://img.freepik.com/premium-photo/iced-dalgona-coffee-sifting-cocoa-trendy-creamy-whipped-coffee-south-korean-cold-summer-drink_149384-266.jpg?ga=GA1.1.1709676787.1720240453&semt=ais_hybrid&w=740"
              alt=""
              style={{
                width: "100%",
                height: "84%",
                borderRadius: "8px",
              }}
            />
            <h3 style={{ color: "black", textAlign: "center" }}>Coffee</h3>
            <p style={{ color: "black", textAlign: "center" }}>
              $80 <strike>$100</strike>
            </p>
          </div>
          <div className="menu-cards">
            <img
              src="https://img.freepik.com/free-photo/cup-three-layered-coffee-dark_140725-6011.jpg?ga=GA1.1.1709676787.1720240453&semt=ais_hybrid&w=740"
              alt=""
              style={{
                width: "100%",
                height: "84%",
                borderRadius: "8px",
              }}
            />
            <h3 style={{ color: "black", textAlign: "center" }}>Coffee</h3>
            <p style={{ color: "black", textAlign: "center" }}>
              $110 <strike>$250</strike>
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
