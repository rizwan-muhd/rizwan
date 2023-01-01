import React from "react";
import styled from "styled-components";
import FacebookIcon from "@material-ui/icons/Facebook";
import GithubIcon from "@material-ui/icons/GitHub";
import LinkdinIcon from "@material-ui/icons/LinkedIn";
import InstagramIcon from "@material-ui/icons/Instagram";
import Particle from "../Components/Particle";

function HomePage() {
  return (
    <HomePageStyled>
      <div className="particle-con">
        <Particle />
      </div>
      <div className="typography">
        <h1>
          Hi, I'm <span>Muhammed Rizwan kk</span>
        </h1>
        <p>
          Self-taught Mern Stack Developer always willing to learn new
          technologies.I can work well both in a team environment as well as
          using my initiative.My Strength are selfmotivated,hard working and a
          disciplined person
        </p>
        <div className="icons">
          <a
            href="https://www.instagram.com/rizwan__kk/?igshid=YmMyMTA2M2Y%3D"
            className="icon i-facebook"
          >
            <FacebookIcon />
          </a>
          <a href="https://github.com/rizwan-muhd" className="icon i-github">
            <GithubIcon />
          </a>
          <a
            href="https://www.linkedin.com/in/muhammed-rizwan-kk-503403204"
            className="icon i-youtube"
          >
            <LinkdinIcon />
          </a>
          <a
            href="https://www.instagram.com/rizwan__kk/?igshid=YmMyMTA2M2Y%3D"
            className="icon i-youtube"
          >
            <InstagramIcon />
          </a>
        </div>
      </div>
    </HomePageStyled>
  );
}

const HomePageStyled = styled.header`
  width: 100%;
  height: 100vh;
  position: relative;

  .typography {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    text-align: center;
    width: 80%;

    .icons {
      display: flex;
      justify-content: center;
      margin-top: 1rem;
      .icon {
        border: 2px solid var(--border-color);
        display: flex;
        align-items: center;
        justify-content: center;
        border-radius: 50%;
        transition: all 0.4s ease-in-out;
        cursor: pointer;
        &:hover {
          border: 2px solid var(--primary-color);
          color: var(--primary-color);
        }
        &:not(:last-child) {
          margin-right: 1rem;
        }
        svg {
          margin: 0.5rem;
        }
      }

      .i-youtube {
        &:hover {
          border: 2px solid red;
          color: red;
        }
      }
      .i-github {
        &:hover {
          border: 2px solid #5f4687;
          color: #5f4687;
        }
      }
    }
  }
`;

export default HomePage;
