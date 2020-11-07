import React from "react";
import Navbar from "../../components/navbar/Navbar";
import "./About.css";
import about from "../../assets/images/about.png";
import emmanuel from "../../assets/images/Olowookere-Emmanuel.jfif";
import ezike from "../../assets/images/Ifedubem-Ezike.jfif";
import job from "../../assets/images/Job-Oaikhenah.jfif";
import raffia from "../../assets/images/Raffia-city-hub.jfif";
import Footer from "../../components/Footer/Footer";
import styled from "styled-components";

const StyledTitle = styled.h1`
  font-size: 18px;
  font-weight: 500;
  line-height: 22px;
  color: #216de0;

  @media only screen and (min-device-width: 375px) and (max-device-width: 667px) and (-webkit-min-device-pixel-ratio: 2) {
    font-size: 20px;
  }
`;

const StyledPara = styled.p`
  font-size: 18px;
  font-style: normal;
  font-weight: 400;
  line-height: 30px;
  letter-spacing: 0em;
  color: #474747;

  @media only screen and (min-device-width: 375px) and (max-device-width: 667px) and (-webkit-min-device-pixel-ratio: 2) {
    display: flex !important;
    flex-direction: column !important;
    text-align: center !important;
    font-size: 17px;
  }
`;

function About() {
  const teamProfile = [
    { name: "Olowookere Emmanuel", picture: emmanuel },
    { name: "Ifedubem Ezike", picture: ezike },
    { name: "Job Oaikhenah", picture: job },
    { name: "Raffia city hub", picture: raffia },
  ];

  return (
    <div>
      <Navbar />
      <div className="mt-4" />
      <div className="container">
        <div className="row about-wrapper">
          <div className="col about_content">
            <StyledTitle>About Us</StyledTitle>
            <h2>Who We Are</h2>
            <StyledPara>
              We create functional resume structure that allows for the
              candidate to focus heavily on the skills and abilities that he or
              she can bring to the new role. <br />
              <br />
              It is a highly useful tool for jobseekers looking to change
              careers or those who have little or no work experience such as
              students or even for some entry-level
            </StyledPara>
            <div className="upper">
              <h2>Why Choose Us</h2>
              <StyledPara>
                We create functional resume structure that allows for the
                candidate to focus heavily on the skills and abilities that he
                or she can bring to the new role. <br />
                <br />
                It is a highly useful tool for jobseekers looking to change
                careers or those who have little or no work experience such as
                students or even for some entry-level
              </StyledPara>
            </div>
          </div>
          <div className="col about_image mt-4">
            <img src={about} alt="" />
          </div>
        </div>
        <div className="our-team">
          <h2 className="text-center">Meet our team</h2>
          <div className="row team-images">
            {teamProfile.map((profile) => {
              return (
                <div key={profile.picture} className="col profile text-center">
                  <img src={profile.picture} alt="" />
                  <div className="mt-4" />
                  <p className="profile-name text-center">{profile.name}</p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default About;
