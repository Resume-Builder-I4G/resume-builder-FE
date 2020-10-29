import React from "react";
import Navbar from "../../components/navbar/Navbar";
import Footer from "../../components/Footer/Footer";

import resume_bro_1 from "../../assets/images/img-home/Resume-bro 1.svg";
import bean_1 from "../../assets/images/img-home/bean-1.png";
import phonebook from "../../assets/images/img-home/phonebook.png";
import templates from "../../assets/images/img-home/template.png";
import support from "../../assets/images/img-home/support.png";
import resume_rafiki from "../../assets/images/img-home/Resume-rafiki.png";

import test_1 from "../../assets/images/testimonials/test-1.png";
import test_2 from "../../assets/images/testimonials/test-2.png";
import test_3 from "../../assets/images/testimonials/test-3.png";

import next from "../../assets/svgs/next-btn.svg";
import prev from "../../assets/svgs/prev-btn.svg";
import bottom_background from "../../assets/svgs/background-bottom.svg";

import "./Home.css";
import styled from "styled-components";

const StyledTitle = styled.h1`
  width: 674px;
  font-weight: 600;
  font-size: 60px;
  line-height: 90px;
  color: #2e2e2e;
`;
const StyledButton = styled.button`
  background: #216de0;
  border-radius: 6px;
  border: none;
  outline: none;
`;
const StyledRole = styled.h5`
  font-size: 20px;
  font-weight: 400;
  line-height: 24px;
  margin: 0px;
`;
function Home() {
  return (
    <div className="homepage">
      <Navbar />
      <header>
        <div className="left">
          <StyledTitle>Create a mind blowing resume.</StyledTitle>
          <p>Design and build a unique CV that your dream job will notice.</p>
          <StyledButton className="btn btn-primary">
            Build your resume
          </StyledButton>
        </div>
        <div className="right">
          <img className="bean" src={bean_1} alt="bean-1" />
          <img className="headerPic" src={resume_bro_1} alt="resume pic" />
        </div>
      </header>
      <section id="section1">
        <h2>Some of our benefits</h2>
        <div className="horizontal1 row">
          <div className="col-md-4">
            <img src={phonebook} alt="easy to use" />
            <p className="head text-center">Easy to Use</p>
            <p className="text-center body font-weight-normal">
              You can choose a theme & update informations in our inout fields.
              Save and your resume will be ready.
            </p>
          </div>
          <div className="col-md-4">
            <img src={templates} alt="easy to use" />
            <p className="head text-center">Access to Templates</p>
            <p className="text-center body font-weight-normal">
              You can choose a theme & update informations in our inout fields.
              Save and your resume will be ready.
            </p>
          </div>
          <div className="col-md-4">
            <img src={support} alt="easy to use" />
            <p className="head text-center">Support & Feedbck</p>
            <p className="text-center body font-weight-normal">
              You can choose a theme & update informations in our inout fields.
              Save and your resume will be ready.
            </p>
          </div>
        </div>
        <StyledButton className="btn btn-primary">
          Build your resume
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
      <section id="testimonials">
        <h2 className="text-center">Some words from our awesome clients</h2>

        <div className="co">
          <div
            id="carouselIndicators"
            className="carousel slide carousel-fade"
            data-ride="carousel"
          >
            <ol className="carousel-indicators">
              <li
                data-target="#carouselIndicators"
                data-slide-to="0"
                className="active"
              ></li>
              <li data-target="#carouselIndicators" data-slide-to="1"></li>
              <li data-target="#carouselIndicators" data-slide-to="2"></li>
            </ol>
            <div className="carousel-inner test-wrapper">
              <div className="carousel-item active">
                <div className="card">
                  <div className="comment">
                    “It is very functional, has great templates and indeed has
                    loads of interesting features that helps you create a unique
                    CV. I am really satisfied and i definitely recommend their
                    service.”
                  </div>
                  <div className="info text-center">
                    <img src={test_1} width="70" className="rounded-circle" />
                    <div className="profile-info">
                      <h4>Micheal James</h4>
                      <StyledRole>Product designer</StyledRole>
                    </div>
                  </div>
                </div>
              </div>
              <div className="carousel-item">
                <div className="card">
                  <div className="comment">
                    “I created my CV with Resume Builder, and everything was
                    perfect. It was easy to use, funtional and helped me get the
                    job I wanted. Recommended it to few of my friends and they
                    loved as much I did.”
                  </div>
                  <div className="info text-center">
                    <img src={test_2} width="70" className="rounded-circle" />
                    <div className="profile-info">
                      <h4>James Oluwaseun</h4>
                      <StyledRole>Brand Manager</StyledRole>
                    </div>
                  </div>
                </div>
              </div>
              <div className="carousel-item">
                <div className="card">
                  <div className="comment">
                    “So many resume bulders out there, but none I’ve fount as
                    funtional as Resume Builder. This has become my main go-to
                    tool.”
                  </div>
                  <div className="info text-center">
                    <img src={test_3} width="70" className="rounded-circle" />
                    <div className="profile-info">
                      <h4>Mary Jane</h4>
                      <StyledRole>UI/UX Designer</StyledRole>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <a
              className="carousel-control-prev carousel-control"
              href="#carouselIndicators"
              role="button"
              data-slide="prev"
            >
              {/* <span
                className="carousel-control-prev-icon"
                aria-hidden="true"
              ></span>
              <span className="sr-only">Previous</span> */}
              <img src={prev} alt="" />
            </a>
            <a
              className="carousel-control-next carousel-control"
              href="#carouselIndicators"
              role="button"
              data-slide="next"
            >
              {/* <span
                className="carousel-control-next-icon"
                aria-hidden="true"
              ></span>
              <span className="sr-only">Next</span> */}
              <img src={next} alt="" />
            </a>
          </div>
        </div>
        {/* <img src={bottom_background} alt="" /> */}
        <div className="text-center">
          <StyledButton className="btn btn-primary">
            Build your resume
          </StyledButton>
        </div>
      </section>
      <Footer />
    </div>
  );
}

export default Home;
