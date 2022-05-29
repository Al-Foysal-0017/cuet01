import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Bg1 from "../../assets/images/bg2.jpg";

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
  /* &:before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
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
  } */
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
  /* background-color: ${(props) => props.bg};
  background-image: url(${Bg1});
  object-fit: cover; */
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
        <Slide>
          {/* <ImgContainer>
            <Image src={Bg1} alt="" />
          </ImgContainer> */}
          {/* <InfoContainer>
            <Title>Khan Foysal</Title>
            <Desc>My Full Name is Naiem Al Foysal</Desc>
            <Button>Click</Button>
          </InfoContainer> */}
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
                Membership of CUET Alumni enables you to enjoy being a part of
                the CUET Alumni community and related fellowship in various
                forms. Be “Proud to be a CUET Graduate!"
              </span>
            </p>
          </div>
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
                Membership of CUET Alumni enables you to enjoy being a part of
                the CUET Alumni community and related fellowship in various
                forms. Be “Proud to be a CUET Graduate!"
              </span>
            </p>
          </div>
        </Slide>
        <Slide>
          <ImgContainer>
            <Image
              src="https://media.istockphoto.com/photos/forest-wooden-table-background-summer-sunny-meadow-with-green-grass-picture-id1353553203?b=1&k=20&m=1353553203&s=170667a&w=0&h=QTyTGI9tWQluIlkmwW0s7Q4z7R_IT8egpzzHjW3cSas="
              alt=""
            />
          </ImgContainer>
          {/* <InfoContainer>
            <Title>Al Foysal</Title>
            <Desc>My Full Name is Naiem Al Foysal</Desc>
            <Button>Click</Button>
          </InfoContainer> */}
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
                Membership of CUET Alumni enables you to enjoy being a part of
                the CUET Alumni community and related fellowship in various
                forms. Be “Proud to be a CUET Graduate!"
              </span>
            </p>
          </div>
        </Slide>
      </Wrapper>
      <Arrow direction="right" onClick={() => handleClick("right")}>
        Right
      </Arrow>
    </Container>
  );
};

export default Slider;
