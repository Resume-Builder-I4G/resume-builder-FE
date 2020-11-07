import styled from "styled-components";

const StyledResume = styled.div`
  height: 842px;
  width: 595px;
  border-radius: 0px;
  border: 1px solid black;
  margin: 0 auto;
`;

const StyledResumeLeft = styled.div`
  background: #413c3c;
  color: #ffffff !important;
  height: 842px;
  width: 205px;
  padding: 10px 10px 20px 20px;
`;

const StyledResumeRight = styled.div`
  padding: 20px 25px 30px 25px;
  height: 842px;
  width: 390px;
`;

const StyledH1 = styled.h1`
  font-size: 36px;
  font-style: normal;
  font-weight: 600;
  line-height: 44px;
  color: #2e2e2e;
`;
const StyledH2 = styled.h2`
  font-size: 16px !important;
  font-style: normal;
  font-weight: 500;
  line-height: 19px;
  letter-spacing: 0em;
  text-align: left;
  margin-bottom: 10px;
`;

const StyledH3 = styled.h3`
  margin-bottom: 5px;
  font-size: 10px;
  font-style: normal;
  font-weight: 500;
  line-height: 12px;
  letter-spacing: 0em;
  text-align: left;
`;

const StylePicDiv = styled.div`
  padding-top: 10px;
`;

const StyledProfileImg = styled.img`
  border-radius: 50%;
  margin: 0 auto !important;
  text-align: center;
`;

const StyledAboutText = styled.p`
  font-size: 8px;
  font-style: normal;
  font-weight: 400;
  line-height: 12px;
  letter-spacing: 0em;
  text-align: left;
`;

const StyledInstitution = styled.p`
  margin-bottom: 5px;
  font-size: 8px;
  font-style: normal;
  font-weight: 400;
  line-height: 12px;
  letter-spacing: 0em;
  text-align: left;
`;

const StyledELocation = styled.p`
  margin-bottom: 5px;
  font-size: 8px;
  font-style: normal;
  font-weight: 400;
  line-height: 12px;
  letter-spacing: 0em;
  text-align: left;
`;

const StyledEInformation = styled.p`
  margin-bottom: 5px;
  font-size: 8px;
  font-style: normal;
  font-weight: 400;
  line-height: 12px;
  letter-spacing: 0em;
  text-align: left;
`;

const StyledEDuration = styled.p`
  font-size: 8px;
  font-style: italic;
  font-weight: 400;
  line-height: 12px;
  letter-spacing: 0em;
  text-align: left;
`;

const StyledLlist = styled.li`
  margin-bottom: 5px;
  font-size: 8px;
  font-style: normal;
  font-weight: 400;
  line-height: 12px;
  letter-spacing: 0em;
  text-align: left;
`;

const StyledSlist = styled.li`
  margin-bottom: 5px;
  font-family: Inter;
  font-size: 8px;
  font-style: normal;
  font-weight: 400;
  line-height: 12px;
  letter-spacing: 0em;
  text-align: left;
`;

const NameDiv = styled.div`
  max-width: 250px;
`;

const StyledResumeRole = styled.p`
  font-size: 12px;
  font-style: normal;
  font-weight: 400;
  line-height: 15px;
  letter-spacing: 0em;
  text-align: left;
`;

const ContactItem = styled.li`
  font-family: Inter;
  font-size: 8px;
  font-style: normal;
  font-weight: 400;
  line-height: 10px;
  letter-spacing: 0em;
  text-align: left;
  margin-bottom: 12px;
`;

const StyledExperienceDiv = styled.div`
  margin-top: 15px;
`;

const CompanySpan = styled.span`
  margin-bottom: 5px;
  font-size: 10px;
  font-style: normal;
  font-weight: 500;
  line-height: 12px;
  letter-spacing: 0em;
  text-align: left;
`;

const ExpDuration = styled.span`
  margin-bottom: 5px;
  font-family: Inter;
  font-size: 8px;
  font-style: italic;
  font-weight: 400;
  line-height: 12px;
  letter-spacing: 0em;
  text-align: right;
`;

const ExpText = styled.p`
  margin-bottom: 5px;
  font-family: Inter;
  font-size: 8px;
  font-style: normal;
  font-weight: 400;
  line-height: 12px;
  letter-spacing: 0em;
  text-align: left;
`;

//Certification Styles
const CertText = styled.span`
  font-family: Inter;
  font-size: 10px;
  font-style: normal;
  font-weight: 500;
  line-height: 12px;
  letter-spacing: 0em;
  text-align: left;
`;

export {
  StyledResume,
  StyledResumeLeft,
  StyledResumeRight,
  StyledProfileImg,
  StylePicDiv,
  StyledH1,
  StyledH2,
  StyledH3,
  StyledAboutText,
  StyledInstitution,
  StyledELocation,
  StyledEInformation,
  StyledEDuration,
  StyledLlist,
  StyledSlist,
  NameDiv,
  StyledResumeRole,
  ContactItem,
  StyledExperienceDiv,
  CompanySpan,
  ExpDuration,
  ExpText,
  CertText,
};
