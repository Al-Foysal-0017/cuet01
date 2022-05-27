import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Bg1 from "../../assets/images/bg1.jpg";

const Container = styled.div`
  width: 100%;
  height: 100vh;
  /* min-height: 800px; */
  display: flex;
  position: relative;
  overflow: hidden;
  height: 800px;
  /* background-image: url("../../assets/images/bg1.jpg"); */
  /* border: 3px solid red; */
  /* background-image: url("../../assets/images/bg1.jpg");
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  height: 800px;
  display: flex;
  flex-direction: column;
  color: white; */
  /* max-width: 1600px; */
  /* margin: 0 auto;
  clip-path: polygon(0 0, 100% 0, 100% 91%, 0% 100%); */
  &:before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    //   bottom: 0;
    height: 800px;
    background: linear-gradient(
        180deg,
        rgba(0, 0, 0, 0.6) 0%,
        rgba(0, 0, 0, 0.2) 100%
      ),
      linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, transparent 100%);
    max-width: 1600px;
    margin: 0 auto;
    z-index: 1;
  }
`;

const Arrow = styled.div`
  width: 50px;
  height: 50px;
  background: #fff;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1px solid #000;
  position: absolute;
  top: 0;
  bottom: 0;
  left: ${(props) => props.direction === "left" && "10px"};
  right: ${(props) => props.direction === "right" && "10px"};
  margin: auto;
  cursor: pointer;
  opacity: 0.5;
  z-index: 2;
`;

const Wrapper = styled.div`
  height: 100%;
  display: flex;
  transform: translateX(${(props) => props.slideIndex * -100}vw);
`;

const Slide = styled.div`
  display: flex;
  align-items: center;
  width: 100vw;
  height: 100vh;
  background-color: ${(props) => props.bg};
  /* background-image: url("../../assets/images/bg1.jpg"); */
`;
const ImgContainer = styled.div`
  flex: 1;
  height: 100%;
`;
const Image = styled.img`
  /* height: 80%; */
  height: 100%;
  min-height: 800px;
  width: 100%;
  object-fit: cover;
`;
const InfoContainer = styled.div`
  flex: 1;
  padding: "50px";
`;

const Title = styled.h1`
  font-size: 70px;
`;
const Desc = styled.p`
  margin: 50px 0;
  font-size: 20px;
  font-weight: 500;
  letter-spacing: 3px;
`;
const Button = styled.button`
  padding: 10px;
  font-size: 20px;
  background-color: transparent;
  cursor: pointer;
`;

const Slider = () => {
  const [slideIndex, setSlideIndex] = useState(0);

  const handleClick = (direction) => {
    if (direction === "left") {
      setSlideIndex(slideIndex > 0 ? slideIndex - 1 : 2);
    } else {
      setSlideIndex(slideIndex < 2 ? slideIndex + 1 : 0);
    }
  };

  //   useEffect(() => {
  //     //  setInterval(handleClick(), 3000);
  //     setInterval(function (direction) {
  //       if (direction === "left") {
  //         setSlideIndex(slideIndex > 0 ? slideIndex - 1 : 2);
  //       } else {
  //         setSlideIndex(slideIndex < 2 ? slideIndex + 1 : 0);
  //       }
  //     }, 1000);
  //   }, []);
  return (
    <Container>
      <Arrow direction="left" onClick={() => handleClick("left")}>
        Left
      </Arrow>
      <Wrapper slideIndex={slideIndex}>
        {/* <Slider>
          <ImgContainer>
            <Image src={Bg1} alt="" />
          </ImgContainer>
          <div className="text" style={{ border: "3px solid red" }}>
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
                Membership of CUET Alumni enables you to enjoy being a part of
                the CUET Alumni community and related fellowship in various
                forms. Be “Proud to be a CUET Graduate!"
              </span>
            </p>
          </div>
        </Slider> */}
        <Slide>
          <ImgContainer>
            <Image
              src="data:image/jpeg;base64,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"
              alt=""
            />
          </ImgContainer>
          {/* <InfoContainer>
            <Title>Khan Foysal</Title>
            <Desc>My Full Name is Naiem Al Foysal</Desc>
            <Button>Click</Button>
          </InfoContainer> */}
        </Slide>
        <Slide>
          <ImgContainer>
            <Image
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTgsDxsrpr8H-LK-6TbrMf2PIg2hMNvN-o2uw&usqp=CAU"
              alt=""
            />
          </ImgContainer>
          {/* <InfoContainer>
            <Title>Al Foysal</Title>
            <Desc>My Full Name is Naiem Al Foysal</Desc>
            <Button>Click</Button>
          </InfoContainer> */}
        </Slide>
      </Wrapper>
      <Arrow direction="right" onClick={() => handleClick("right")}>
        Right
      </Arrow>
    </Container>
  );
};

export default Slider;
