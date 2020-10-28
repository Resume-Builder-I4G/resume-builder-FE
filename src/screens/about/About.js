import React from "react";
import Navbar from "../../components/navbar/Navbar";
import "./About.css";
import about from "../../assets/images/about.jfif";
import emmanuel from "../../assets/images/Olowookere-Emmanuel.jfif";
import ezike from "../../assets/images/Ifedubem-Ezike.jfif";
import job from "../../assets/images/Job-Oaikhenah.jfif";
import raffia from "../../assets/images/Raffia-city-hub.jfif";
import Footer from "../../components/Footer/Footer";
import styled from "styled-components";

const StyledTitle = styled.h1``;

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
      <div className="container">
        <div className="row">
          <div className="col about_content mr-4">
            <h1>About Us</h1>
            <h2>Who We Are</h2>
            <p>
              We create functional resume structure that allows for the
              candidate to focus heavily on the skills and abilities that he or
              she can bring to the new role. <br />
              <br />
              It is a highly useful tool for jobseekers looking to change
              careers or those who have little or no work experience such as
              students or even for some entry-level
            </p>
            <h2>Why Choose Us</h2>
            <p>
              We create functional resume structure that allows for the
              candidate to focus heavily on the skills and abilities that he or
              she can bring to the new role. <br />
              <br />
              It is a highly useful tool for jobseekers looking to change
              careers or those who have little or no work experience such as
              students or even for some entry-level
            </p>
          </div>
          <div className="col about_image">
            <img src={about} alt="" />
          </div>
        </div>
        <div className="our-team">
          <h2 className="text-center">Meet our team</h2>
          <div className="row team-images">
            {teamProfile.map((profile) => {
              return (
                <div className="col profile text-center">
                  <img src={profile.picture} alt="" />
                  <br />
                  {profile.name}
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
