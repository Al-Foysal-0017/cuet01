import Marquee from "react-fast-marquee";
import CanadaImg from "../../assets/flag/Canada.png";
import AustraliaImg from "../../assets/flag/Australia.png";
import USAImg from "../../assets/flag/USA.png";
import BritainImg from "../../assets/flag/Britain.png";
// import JapanImg from "../../assets/flag/Japan.png";
import TurkeyImg from "../../assets/flag/Turkey.png";
import SwitzerlandImg from "../../assets/flag/switzerland.png";
import RussiaImg from "../../assets/flag/Russia.png";
import GermanyImg from "../../assets/flag/Germany.png";
import ChinaImg from "../../assets/flag/China.png";
import IrelandImg from "../../assets/flag/ireland.png";
import IndiaImg from "../../assets/flag/india.png";
import "./_animateText.scss";

const AnimationText = () => {
  const data = [
    {
      name: "Irfan Khan",
      job: "Soft Eng at Google",
      img: "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    },
    {
      name: "Irfan Khan",
      job: "Soft Eng at Google",
      img: "https://images.pexels.com/photos/874158/pexels-photo-874158.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    },
    {
      name: "Irfan Khan",
      job: "Soft Eng at Google",
      img: "https://images.pexels.com/photos/1878687/pexels-photo-1878687.jpeg?auto=compress&cs=tinysrgb&w=800&lazy=load",
    },
    {
      name: "Irfan Khan",
      job: "Soft Eng at Google",
      img: "https://images.pexels.com/photos/1516680/pexels-photo-1516680.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    },
    {
      name: "Irfan Khan",
      job: "Soft Eng at Google",
      img: "https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    },
    {
      name: "Irfan Khan",
      job: "Soft Eng at Google",
      img: "https://images.pexels.com/photos/262391/pexels-photo-262391.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    },
    {
      name: "Irfan Khan",
      job: "Soft Eng at Google",
      img: "https://images.pexels.com/photos/819530/pexels-photo-819530.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    },
    {
      name: "Irfan Khan",
      job: "Soft Eng at Google",
      img: "https://images.pexels.com/photos/769772/pexels-photo-769772.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    },
    {
      name: "Irfan Khan",
      job: "Soft Eng at Google",
      img: "https://images.pexels.com/photos/678785/pexels-photo-678785.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    },
    {
      name: "Irfan Khan",
      job: "Soft Eng at Google",
      img: "https://images.pexels.com/photos/842811/pexels-photo-842811.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    },
    {
      name: "Irfan Khan",
      job: "Soft Eng at Google",
      img: "https://images.pexels.com/photos/709188/pexels-photo-709188.jpeg?auto=compress&cs=tinysrgb&w=800",
    },
    {
      name: "Irfan Khan",
      job: "Soft Eng at Google",
      img: "https://images.pexels.com/photos/718261/pexels-photo-718261.jpeg?auto=compress&cs=tinysrgb&w=800",
    },
    {
      name: "Irfan Khan",
      job: "Soft Eng at Google",
      img: "https://images.pexels.com/photos/1516680/pexels-photo-1516680.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    },
    {
      name: "Irfan Khan",
      job: "Soft Eng at Google",
      img: "https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    },
    {
      name: "Irfan Khan",
      job: "Soft Eng at Google",
      img: "https://images.pexels.com/photos/262391/pexels-photo-262391.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    },
    {
      name: "Irfan Khan",
      job: "Soft Eng at Google",
      img: "https://images.pexels.com/photos/819530/pexels-photo-819530.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    },
    {
      name: "Irfan Khan",
      job: "Soft Eng at Google",
      img: "https://images.pexels.com/photos/769772/pexels-photo-769772.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    },
  ];
  return (
    <div>
      <Marquee style={{ zIndex: "-999" }} gradient={false} speed={15}>
        <div className="borderText">
          <img src={USAImg} alt="" className="animateImgHome" />
          <img src={AustraliaImg} alt="" className="animateImgHome" />
          <img src={CanadaImg} alt="" className="animateImgHome" />
          <img src={BritainImg} alt="" className="animateImgHome" />
          <img src={IrelandImg} alt="" className="animateImgHome" />
          <img src={TurkeyImg} alt="" className="animateImgHome" />
          <img src={GermanyImg} alt="" className="animateImgHome" />
          <img src={RussiaImg} alt="" className="animateImgHome" />
          <img src={SwitzerlandImg} alt="" className="animateImgHome" />
          {/* <img src={JapanImg} alt="" className="animateImgHome" /> */}

          <img src={IndiaImg} alt="" className="animateImgHome" />

          <img src={ChinaImg} alt="" className="animateImgHome" />
        </div>
      </Marquee>
      <Marquee
        style={{ zIndex: "-999" }}
        direction="right"
        gradient={false}
        speed={15}
      >
        <div className="marginAnimateHero" style={{ display: "flex" }}>
          {data.map((item, index) => (
            <div key={index} className="marginAnimateHero-item">
              <img src={item.img} alt="" className="animateSecondImg" />
              <div className="animateSecondName">{item.name}</div>
              <div className="animateSecondJob">{item.job}</div>
            </div>
          ))}
        </div>
      </Marquee>
    </div>
  );
};

export default AnimationText;
