import React from "react";

export default function Vlogs() {
  return (
    <>
      <div
        className="vlog-page"
        id="vlogs"
        style={{ backgroundColor: "#B7966B", textAlign: "center", padding:'10px' }}
      >
        <h1>
          Latest <span>Blogs</span>
        </h1>
        <div className="vlog-card">
          <div className="vlog-cards" style={{ backgroundColor: "white" }}>
            <img
              src="https://img.freepik.com/free-photo/person-doing-house-tour-online_23-2151050240.jpg?ga=GA1.1.1709676787.1720240453&semt=ais_hybrid&w=740"
              alt=""
              style={{
                width: "100%",
                height: "60%",
                borderRadius: "8px",
                padding: "10px",
              }}
            />
            <h3> Liam Anderson</h3>

            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptas
              quidem autem assumenda eius in obcaecati consequuntur hic corrupti
              veniam ducimus.
            </p>
            <button
              style={{
                width: "200px",
                borderRadius: "10px",
                backgroundColor: " #6f4e37",
                border: "2px solid  #6f4e37 ",
              }}
            >
              <a
                href="https://www.youtube.com/playlist?list=PLoGYYkbGH2siWtvM7tIryFeJOLtfkdRjR"
                style={{color:'white'}}
              
              >
                Read More..
              </a>
            </button>
          </div>
          <div className="vlog-cards" style={{ backgroundColor: "white" }}>
            <img
              src="https://img.freepik.com/premium-photo/close-up-portrait-happy-charismatic-young-blond-man-taking-selfie-smartphone-posing-with-cup_1258-245249.jpg?ga=GA1.1.1709676787.1720240453&semt=ais_hybrid&w=740"
              alt=""
              style={{
                width: "100%",
                height: "60%",
                borderRadius: "8px",
                padding: "10px",
              }}
            />
            <h3>James Parker</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus
              necessitatibus ullam architecto obcaecati, vel perferendis porro
              enim doloremque deserunt est?
            </p>
            <button
              style={{
                width: "200px",
                borderRadius: "10px",
                backgroundColor: " #6f4e37",
                border: "2px solid  #6f4e37 ",
              }}
            >
              <a
                href="https://www.youtube.com/playlist?list=PLoGYYkbGH2siWtvM7tIryFeJOLtfkdRjR"
                style={{color:'white'}}
               
              >
                Read More..
              </a>
            </button>
          </div>
          <div className="vlog-cards" style={{ backgroundColor: "white" }}>
            <img
              src="https://img.freepik.com/free-photo/portrait-smiling-woman-blogger-casual-wear-posing-camera-with-cup-coffee_496169-435.jpg?ga=GA1.1.1709676787.1720240453&semt=ais_hybrid&w=740"
              alt=""
              style={{
                width: "100%",
                height: "60%",
                borderRadius: "8px",
                padding: "10px",
              }}
            />
            <h3> Oliver Harris</h3>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptas
              nisi esse, placeat aperiam ut sint adipisci exercitationem
              accusantium deleniti est.
            </p>
            <button
              style={{
                width: "200px",
                borderRadius: "10px",
                backgroundColor: " #6f4e37",
                border: "2px solid  #6f4e37 ",
              }}
            >
              <a
                href="https://www.youtube.com/playlist?list=PLoGYYkbGH2siWtvM7tIryFeJOLtfkdRjR"
                style={{color:'white'}}
               
              >
                Read More..
              </a>
            </button>
          </div>
          <div className="vlog-cards" style={{ backgroundColor: "white" }}>
            <img
              src="https://img.freepik.com/free-photo/front-view-man-recording-himself_23-2150336097.jpg?ga=GA1.1.1709676787.1720240453&semt=ais_hybrid&w=740"
              alt=""
              style={{
                width: "100%",
                height: "60%",
                borderRadius: "8px",
                padding: "10px",
             
              }}
            />
            <h3>Ava Morgan</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nihil
              natus excepturi praesentium, debitis quae inventore optio
              reiciendis aperiam obcaecati qui.
            </p>
            <button
              style={{
                width: "200px",
                borderRadius: "10px",
                backgroundColor: " #6f4e37",
                border: "2px solid  #6f4e37 ",
              }}
            >
              <a
                href="https://www.youtube.com/playlist?list=PLoGYYkbGH2siWtvM7tIryFeJOLtfkdRjR"
               style={{color:'white'}}
              >
                Read More..
              </a>
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
