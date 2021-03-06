import React from "react";
import Navbar from "../../components/navbar/Navbar";
import Footer from "../../components/Footer/Footer";

import resume_bro_1 from "../../assets/images/img-home/Resume-bro 1.svg";
import bean_1 from "../../assets/images/img-home/bean-1.png";
import bean_mobile from "../../assets/images/img-home/bg-mobile.svg";

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
import { Link } from "react-router-dom";

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
  const testimonialData = [
    {
      name: "Micheal James",
      role: "Product designer",
      comments:
        "“It is very functional, has great templates and indeed has loads of interesting features that helps you create a unique CV. I am really satisfied and i definitely recommend their service.”",
      avatar: test_1,
    },
    {
      name: "James Oluwaseun",
      role: "Brand Manager",
      comments:
        "“I created my CV with Resume Builder, and everything was perfect. It was easy to use, funtional and helped me get the job I wanted. Recommended it to few of my friends and they loved as much I did.”",
      avatar: test_2,
    },
    {
      name: "Mary Jane",
      role: "UI/UX Designer",
      comments:
        "“So many resume bulders out there, but none I’ve fount as funtional as Resume Builder. This has become my main go-to tool.”",
      avatar: test_3,
    },
  ];
  return (
    <div className="homepage">
      <Navbar />
      <header className="row desktop-hero">
        <div className="left col-md" data-aos="fade-right">
          <StyledTitle>Create a mind blowing resume.</StyledTitle>
          <p className="motto">
            Design and build a unique CV that your dream job will notice.
          </p>
          <Link to="/sign-up">
            <StyledButton className="btn btn-primary">
              Build your resume
            </StyledButton>
          </Link>
        </div>
        <div className="right col-md">
          <img className="bean" src={bean_1} alt="bean-1" />
          <img className="headerPic" src={resume_bro_1} alt="resume pic" />
        </div>
      </header>
      <header className="mobile-hero text-center">
        <h1 className="mobile-title">Create a mind blowing resume.</h1>
        <div className="header-images-mobile">
          <img className="bean" src={bean_mobile} alt="bean-1" />
          <img className="resume_img" src={resume_bro_1} alt="resume pic" />
        </div>
        <p className="motto-mobile text-center">
          Design and build a unique CV that your dream job will notice.
        </p>
        <div className="build-resume-btn-mobile-wrap d-flex justify-content-center">
          <Link to="/sign-up">
            <button className="build-resume-btn-mobile text-white px-2 py-3">
              Build your resume
            </button>
          </Link>
        </div>
      </header>
      <section id="section1">
        <h2>Some of our benefits</h2>
        <div
          className="horizontal1 row"
          data-aos="fade-up"
          data-aos-duration="3000"
        >
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
        <Link to="/sign-up">
          <StyledButton className="btn btn-primary">
            Build your resume
          </StyledButton>
        </Link>
      </section>
      <section id="section2">
        <h2 className="how-it-works-mobile">How it works</h2>
        <div className="left2">
          <img src={resume_rafiki} alt="Resume-rafiki" />
        </div>
        <div className="right2">
          <h2 className="how-it-works-desktop">How it works</h2>
          <div
            className="list2"
            data-aos="fade-down"
            data-aos-easing="linear"
            data-aos-duration="1500"
          >
            <div className="contain2">
              <div className="number" id="blue">
                <p>01</p>
              </div>
              <div className="text2">
                <p className="head2">Create an account</p>
                <p className="body2">
                  Sign up for an account with full details
                </p>
              </div>
            </div>
            <div className="contain2">
              <div className="number">
                <p>02</p>
              </div>
              <div className="text2">
                <p className="head2">Select template</p>
                <p className="body2">
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
                <p className="body2">
                  Edit and change contents as you build your CV
                </p>
              </div>
            </div>
            <div className="contain2">
              <div className="number">
                <p>04</p>
              </div>
              <div className="text2">
                <p className="head2">Choose your style</p>
                <p className="body2">
                  Style your CV using our awesome design themes
                </p>
              </div>
            </div>
            <div className="contain2">
              <div className="number">
                <p>05</p>
              </div>
              <div className="text2">
                <p className="head2">Download</p>
                <p className="body2">
                  Download your CV and get the dream job you deserve
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section id="testimonials">
        <h2 className="text-center">Some words from our awesome clients</h2>

        <div className="co desktop-testimonials">
          <div
            id="carouselIndicators"
            className="carousel"
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
              {testimonialData.map((testimonial) => {
                return (
                  <div className="carousel-item" key={testimonial.name}>
                    <div className="card">
                      <div className="comment">{testimonial.comments}</div>
                      <div className="info text-center">
                        <img
                          src={testimonial.avatar}
                          width="70"
                          className="rounded-circle"
                          alt=""
                        />
                        <div className="profile-info">
                          <h4>{testimonial.name}</h4>
                          <StyledRole>{testimonial.role}</StyledRole>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
              <div
                className="carousel-item active"
                key={testimonialData[0].name}
              >
                <div className="card">
                  <div className="comment">{testimonialData[0].comments}</div>
                  <div className="info text-center">
                    <img
                      src={testimonialData[0].avatar}
                      width="70"
                      className="rounded-circle"
                      alt=""
                    />
                    <div className="profile-info">
                      <h4>{testimonialData[0].name}</h4>
                      <StyledRole>{testimonialData[0].role}</StyledRole>
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
              <img src={prev} alt="" />
            </a>
            <a
              className="carousel-control-next carousel-control"
              href="#carouselIndicators"
              role="button"
              data-slide="next"
            >
              <img src={next} alt="" />
            </a>
          </div>
        </div>
        <ul className="mobile-testimonials">
          {testimonialData.map((data) => {
            return (
              <li className="mb-3" key={data.role}>
                <div className="mobile-card text-center">
                  <p className="testimonial-comment">{data.comments}</p>
                  <img src={data.avatar} alt={`${data.name} img`} />
                </div>
                <div className="mobile-testimonial-info text-center">
                  <p className="testimonial-name text-center">{data.name}</p>
                  <p className="testimonial-role text-center">{data.role}</p>
                </div>
              </li>
            );
          })}
        </ul>
        <div className="text-center">
          <Link to="/sign-up">
            <StyledButton className="btn btn-primary">
              Build your resume
            </StyledButton>
          </Link>
        </div>
      </section>
      <Footer />
    </div>
  );
}

export default Home;
