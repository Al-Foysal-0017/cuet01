import React from "react";
import BannerExample from "../../components/carousel";
import Slider from "../../components/slider";
import ThreeD from "../../components/threeD";
import "./__home.scss";

const Home = () => {
  return (
    <>
      <div className="wrappe banner">
        <div className="text">
          <h1>
            <span className="hidetext">ALUMNI</span>
          </h1>
          <h2>CUET</h2>
          <h3>
            <span className="hidetext">
              WELCOME OUR
              <br />
              ALUMNI
            </span>
          </h3>
          <p>
            <span className="hidetext">
              Membership of CUET Alumni enables you to enjoy being a part of the
              CUET Alumni community and related fellowship in various forms. Be
              “Proud to be a CUET Graduate!"
            </span>
          </p>
        </div>
      </div>
      <Slider />
    </>
  );
};

export default Home;
