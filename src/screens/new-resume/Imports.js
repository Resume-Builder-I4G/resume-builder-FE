import personalInfow from "../../assets/svgs/create-resume-img/personalinfo.svg";
import educationInfo from "../../assets/svgs/create-resume-img/educationIcon.svg";
import workexperience from "../../assets/svgs/create-resume-img/workexperience.svg";
import language from "../../assets/svgs/create-resume-img/languageIcon.svg";
import certification from "../../assets/svgs/create-resume-img/certificationIcon.svg";
import achievement from "../../assets/svgs/create-resume-img/achievementIcon.svg";
import skills from "../../assets/svgs/create-resume-img/skillsIcon.svg";
import reference from "../../assets/svgs/create-resume-img/referenceIcon.svg";

const ResumeTabs = [
  {
    id: 1,
    image: personalInfow,
    title: "Personal Info",
    alt: "personalinfoW",
    path: "personal-info",
  },
  {
    id: 2,
    image: educationInfo,
    title: "Education",
    alt: "educationIcon",
    path: "education",
  },
  {
    id: 3,
    image: workexperience,
    title: "Work Experience",
    alt: "workexperience",
    path: "experience",
  },
  {
    id: 4,
    image: language,
    title: "Languages",
    alt: "languageIcon",
    path: "languages",
  },
  {
    id: 5,
    image: certification,
    title: "Certifications",
    alt: "certificationIcon",
    path: "certifications",
  },
  {
    id: 6,
    image: achievement,
    title: "Achievements",
    alt: "achievementIcon",
    path: "achivements",
  },
  {
    id: 7,
    image: skills,
    title: "Skills",
    alt: "skillsIcon",
    path: "skills",
  },
  {
    id: 9,
    image: reference,
    title: "Reference",
    alt: "referenceIcon",
    path: "references",
  },
];

export default ResumeTabs;
