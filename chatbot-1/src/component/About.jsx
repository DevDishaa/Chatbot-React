import React from "react";

export default function About() {
  return (
    <>
      {" "}
      <div className="about" id="about">
        <div className="container1">
          <div
            className="heading"
            style={{
              textAlign: "center",
              fontWeight: "bold",
              fontSize: "30px",
              marginBottom: "30px",
            }}
          >
            About <span style={{ color: "#6f4e37" }}>Us</span>
          </div>
          <div className="row">
            <div className="col-md-6">
              <div className="card">
                <img
                  src="https://img.freepik.com/premium-photo/espresso-coffee-poured-into-glass-cup_164008-424.jpg?ga=GA1.1.1709676787.1720240453&semt=ais_hybrid&w=740"
                  alt=""
                  style={{ borderRadius: "10px" }}
                />
              </div>
            </div>
            <div className="col-md-6">
              <h3>What Makes Our Coffee Special?</h3>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum
                minima numquam porro consequuntur ipsum, nulla aliquam amet quam
                consequatur expedita. <br />
                <br />
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque
                minus dicta quia maxime! Suscipit rerum similique non
                perferendis maiores rem, cumque explicabo exercitationem
                deserunt illum in aperiam natus impedit recusandae? <br />
                <br />
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Id rem
                voluptates harum, quis excepturi voluptatum!
              </p>
              <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsa
                temporibus velit blanditiis delectus quaerat eaque assumenda
                facere quod repudiandae eligendi.
              </p>
              <p>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. A,
                quia ad maxime officiis voluptatibus dignissimos dolorum animi
                non dolore sequi necessitatibus minima quam, totam architecto
                nostrum explicabo voluptas rerum incidunt?
              </p>
              <a href="https://en.wikipedia.org/wiki/Coffee" target="_blank">
                <button id="about-btn">Learn More.</button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
