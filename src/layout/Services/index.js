import React from "react";
import Icon1 from "../../images/savings.svg";
import Icon2 from "../../images/office.svg";
import Icon3 from "../../images/benefits.svg";
import {
  ServicesContainer,
  ServicesH1,
  ServicesWrapper,
  ServicesCard,
  ServicesIcon,
  ServicesH2,
  ServicesP,
} from "./ServicesElements";

const Services = () => {
  return (
    <ServicesContainer id="services">
      <ServicesH1>Our Responsibility</ServicesH1>
      <ServicesWrapper>
        <ServicesCard>
          <ServicesIcon src={Icon1} />
          <ServicesH2>Scholarship</ServicesH2>
          <ServicesP>
            De create building thinking about your requirment and latest treand
            on our marketplace area
          </ServicesP>
        </ServicesCard>

        <ServicesCard>
          <ServicesIcon src={Icon2} />
          <ServicesH2>Help Current Students</ServicesH2>
          <ServicesP>
            De create building thinking about your requirment and latest treand
            on our marketplace area
          </ServicesP>
        </ServicesCard>

        <ServicesCard>
          <ServicesIcon src={Icon3} />
          <ServicesH2>Build Our Community</ServicesH2>
          <ServicesP>
            De create building thinking about your requirment and latest treand
            on our marketplace area
          </ServicesP>
        </ServicesCard>
      </ServicesWrapper>
    </ServicesContainer>
  );
};

export default Services;
