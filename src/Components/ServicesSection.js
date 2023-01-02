import React from "react";
import styled from "styled-components";
import { InnerLayout } from "../styles/Layouts";
import Title from "./Title";
import ServiceCard from "./ServiceCard";
// import design from "../img/design.svg";
// import intelligence from "../img/intelligence.svg";
// import gamedev from "../img/game-dev.svg";
import WebIcon from "@mui/icons-material/Web";

function ServicesSection() {
  return (
    <InnerLayout>
      <ServicesSectionStyled>
        <Title title={"Services"} span={"services"} />
        <div className="services">
          <ServiceCard
            image={<WebIcon />}
            title={"Web Design"}
            paragraph={
              "The world of web design has transformed from a minuscale industry that crafted scary pages with condent"
            }
          />
          <div className="mid-card">
            <ServiceCard
              //   image={intelligence}
              title={"App Development"}
              paragraph={
                "Developing mobile application which can be used on Android operating system and ios operating system"
              }
            />
          </div>
          <ServiceCard
            // image={gamedev}
            title={"Web Development"}
            paragraph={
              "Developing static and dynamic responsive web-app which can be used both mobile and computers."
            }
          />
        </div>
      </ServicesSectionStyled>
    </InnerLayout>
  );
}

const ServicesSectionStyled = styled.section`
  .services {
    margin-top: 5rem;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-gap: 1.5rem;
    @media screen and (max-width: 1000px) {
      flex-direction: column;
    }
    @media screen and (max-width: 950px) {
      grid-template-columns: repeat(2, 1fr);
    }
    @media screen and (max-width: 650px) {
      grid-template-columns: repeat(1, 1fr);
    }
  }
`;

export default ServicesSection;
