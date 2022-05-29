import React from "react";
import styled from "styled-components";
import BannerExample from "../../components/carousel";
import Slider from "../../components/slider";
import ThreeD from "../../components/threeD";
import "./__home.scss";
import Bg1 from "../../assets/images/bg1.jpg";
import Bg2 from "../../assets/images/bg2.jpg";
import Bg3 from "../../assets/images/bg3.jpg";
import AnimationText from "../../components/animationText/AnimationText";
import Container from "../../components/container/Container";
import UpcommingEvent from "../../layout/home/upcommingEvent/index";
import HeadMessage from "../../layout/home/headMessage";

const Wrapper = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: row;
  border: 3px solid #000;
  /* width: 100vw; */
  /* transform: translateX(${(props) => props.slideIndex * -100}vw); */
  transform: translateX(10px);
`;

// const Slide = styled.div`
//   /* display: flex; */
//   /* align-items: center; */
//   /* width: 100vw;
//   height: 100vh;
//   background-color: ${(props) => props.bg}; */
//   /* background-image: url("../../assets/images/bg1.jpg"); */
// `;

const Home = () => {
  return (
    <>
      <div className="wrappe banner">
        <div className="text">
          <h1 className="animate-bounce">
            <span className="hidetext">ALUMNI</span>
          </h1>
          <h2 className="animate-bounc-X">CUET</h2>
          <h3 className="animate-bounce-X">
            <span>
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
        <div className="hero-img-container">
          <div className="hero-img1">
            <img width={300} height={200} src={Bg1} alt="" />
          </div>
          <div className="hero-img2">
            <img
              // width={350} height={300}
              src={Bg2}
              alt=""
            />
          </div>
          <div className="hero-img3">
            <img
              // width={300} height={380}
              src={Bg3}
              alt=""
              className="img03"
            />
          </div>
        </div>
      </div>
      <UpcommingEvent />
      <HeadMessage />
      {/* <div className="animate-container">
        <h1 style={{ marginTop: "" }} className="animate-img-header">
          CUET TO BUILD A BETTER WORLD
        </h1>
        <AnimationText />
      </div> */}
    </>
  );
};
export default Home;
