import React from "react";
import styled from "styled-components";
import { InnerLayout } from "../styles/Layouts";
import Title from "../Components/Title";
import ProgressBar from "./ProgressBar";

function Skills() {
  return (
    <SkillsStyled>
      <Title title={"My Skills"} span={"my skills"} />
      <InnerLayout>
        <div className="skills">
          <ProgressBar title={"React.js"} width={"85%"} text={"85%"} />
          <ProgressBar title={"Node.js"} width={"70%"} text={"70%"} />
          <ProgressBar title={"JAVASCRIPT"} width={"70%"} text={"70%"} />
          <ProgressBar title={"Express.js"} width={"75%"} text={"75%"} />
          <ProgressBar title={"MongoDB"} width={"80%"} text={"80%"} />
          <ProgressBar title={"Git"} width={"80%"} text={"80%"} />
          <ProgressBar title={"Material UI"} width={"85%"} text={"85%"} />
          <ProgressBar title={"HTML"} width={"90%"} text={"90%"} />
          <ProgressBar title={"CSS"} width={"85%"} text={"85%"} />
          <ProgressBar title={"Bootstrap"} width={"85%"} text={"85%"} />
        </div>
      </InnerLayout>
    </SkillsStyled>
  );
}

const SkillsStyled = styled.section`
  .skills {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-row-gap: 2rem;
    grid-column-gap: 3rem;
    @media screen and (max-width: 700px) {
      grid-template-columns: repeat(1, 1fr);
    }
  }
`;

export default Skills;
