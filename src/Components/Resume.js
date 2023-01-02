import React from "react";
import styled from "styled-components";
import { InnerLayout } from "../styles/Layouts";
import Title from "./Title";
import SmallTitle from "./SmallTitle";
import BusinessCenterIcon from "@material-ui/icons/BusinessCenter";
import SchoolIcon from "@material-ui/icons/School";
import ResumeItem from "./ResumeItem";

function Resume() {
  const briefcase = <BusinessCenterIcon />;
  const school = <SchoolIcon />;
  return (
    <ResumeStyled>
      <Title title={"Resume"} span={"resume"} />
      <InnerLayout>
        <div className="small-title">
          <SmallTitle icon={briefcase} title={"Working Experience"} />
        </div>
        <div className="resume-content">
          <ResumeItem
            year={"2022 - Present"}
            title={"Mern Stack Developer"}
            subTitle={"B-JeLT Technologies Pvt Ltd"}
            text={
              "I've given 100% to every project using my skills in the Mern stack "
            }
            text1={
              "Worked on the project titled RestoAp,which is a pre-booking dining and digital menu for resturant"
            }
          />
        </div>
        <div className="small-title u-small-title-margin">
          <SmallTitle icon={school} title={"Educational Qualifications"} />
        </div>
        <div className="resume-content " id="education">
          <ResumeItem
            year={"2019 - 2022"}
            title={"BCA(Big Data Analytics & Cloud Computing)"}
            subTitle={"Yenepoya University "}
            text={"8 cgpa"}
          />
          <ResumeItem
            year={"2017 - 2029"}
            title={"Higher Secondary"}
            subTitle={"R.G.M.H.S.S"}
            text={"Computer Science"}
          />
        </div>
      </InnerLayout>
    </ResumeStyled>
  );
}

const ResumeStyled = styled.section`
  .small-title {
    padding-bottom: 3rem;
  }
  .u-small-title-margin {
    margin-top: 4rem;
  }

  .resume-content {
    border-left: 2px solid var(--border-color);
  }
`;
export default Resume;
