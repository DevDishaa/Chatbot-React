import React from "react";

export default function Home() {
  return (
    <>
      <div
        style={{ height: "600px" }}
        className="d-flex justify-content-center align-items-center "
      >
        <section className="m-auto" id="home">
          <div
            className="content d-flex"
            style={{
              flexDirection: "column",
              color: "white",
            }}
          >
            <h3
              style={{
                fontSize: "80px",
                textAlign: "center",
                textDecoration: "underline",
                fontFamily: "fantasy",
              }}
            >
              Start Your Day With a <br />
              Fresh{" "}
              <span
                style={{
                  fontSize: "80px",
                  textAlign: "center",
                  textDecoration: "underline",
                  fontFamily: "fantasy",
                  color: "yellow",
                }}
              >
                Coffee
              </span>
            </h3>
            <p style={{ fontSize: "15px", textAlign: "center" }}>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Libero,
              fugit <br />
              ipsum dolor sit amet consectetur.
            </p>
            <button id="btn"><a href="#menu-bar"style={{color:'white',textDecoration:'none'}}>Shop Now</a></button>
          </div>
        </section>
        <button style={{position:'fixed',bottom:'10px',left:'12px', textDecoration:'none', zIndex:'4', borderRadius:'50%', padding:'12px', border:'none ', background:'black',opacity:'70%'}}> <a href="#top"> <i class="fa-solid fa-arrow-up" style={{color:'white'}}></i> </a> </button>
      </div>
    </>
  );
}
