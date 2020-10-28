import React from "react";
import Navbar from "../../components/navbar/Navbar";
import Footer from "../../components/Footer/Footer";
import "./Home.css";
import resume_bro_1 from "../../assets/images/img-home/Resume-bro 1.svg";
import bean_1 from "../../assets/images/img-home/bean-1.png";
import phonebook from "../../assets/images/img-home/phonebook.png";
import templates from "../../assets/images/img-home/template.png";
import support from "../../assets/images/img-home/support.png";
import resume_rafiki from "../../assets/images/img-home/Resume-rafiki.png";
import styled from "styled-components";

const StyledButton = styled.button`
  background: #216de0;
  border-radius: 6px;
  border: none;
  outline: none;
`;

function Home() {
  return (
    <div classNameName="homepage">
      <Navbar />
      <header>
        <div className="left">
          <h1>Create a mind blowing resume.</h1>
          <p>Design and build a unique CV that your dream job will notice.</p>
          <StyledButton>
            <p> Build your resume</p>
          </StyledButton>
        </div>
        <div className="right">
          <img className="bean" src={bean_1} alt="bean-1" />
          <img className="headerPic" src={resume_bro_1} alt="resume pic" />
        </div>
      </header>
      <section id="section1">
        <h2>Some of our benefits</h2>
        <div className="horizontal1">
          <div className="col1">
            <img src={phonebook} alt="easy to use" />
            <p className="head text-center">Easy to Use</p>
            <p className="text-center">
              You can choose a theme & update informations in our inout fields.
              Save and your resume will be ready.
            </p>
          </div>
          <div className="col1">
            <img src={templates} alt="easy to use" />
            <p className="head text-center">Access to Templates</p>
            <p className="text-center">
              You can choose a theme & update informations in our inout fields.
              Save and your resume will be ready.
            </p>
          </div>
          <div className="col1">
            <img src={support} alt="easy to use" />
            <p className="head text-center">Support & Feedbck</p>
            <p className="text-center">
              You can choose a theme & update informations in our inout fields.
              Save and your resume will be ready.
            </p>
          </div>
        </div>
        <StyledButton>
          {" "}
          <p>Build your resume</p>{" "}
        </StyledButton>
      </section>
      <section id="section2">
        <div className="left2">
          <img src={resume_rafiki} alt="Resume-rafiki" />
        </div>
        <div className="right2">
          <h2>How it works</h2>
          <div className="list2">
            <div className="contain2">
              <div className="number" id="blue">
                <p>01</p>
              </div>
              <div className="text2">
                <p className="head2">Create an account</p>
                <p>Sign up for an account with full details</p>
              </div>
            </div>
            <div className="contain2">
              <div className="number">
                <p>02</p>
              </div>
              <div className="text2">
                <p className="head2">Select template</p>
                <p>
                  Choose from our various professional templates and start
                  building
                </p>
              </div>
            </div>
            <div className="contain2">
              <div className="number">
                <p>03</p>
              </div>
              <div className="text2">
                <p className="head2">Add some content </p>
                <p>Edit and change contents as you build your CV</p>
              </div>
            </div>
            <div className="contain2">
              <div className="number">
                <p>04</p>
              </div>
              <div className="text2">
                <p className="head2">Choose your style</p>
                <p>Style your CV using our awesome design themes</p>
              </div>
            </div>
            <div className="contain2">
              <div className="number">
                <p>05</p>
              </div>
              <div className="text2">
                <p className="head2">Download</p>
                <p>Download your CV and get the dream job you deserve</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
}

export default Home;
