import personalInfow from "../../assets/svgs/create-resume-img/personalinfoW.svg";
import educationInfo from "../../assets/svgs/create-resume-img/educationIcon.svg";
import workexperience from "../../assets/svgs/create-resume-img/workexperience.svg";
import language from "../../assets/svgs/create-resume-img/languageIcon.svg";
import certification from "../../assets/svgs/create-resume-img/certificationIcon.svg";
import achievement from "../../assets/svgs/create-resume-img/achievementIcon.svg";
import skills from "../../assets/svgs/create-resume-img/skillsIcon.svg";
import reference from "../../assets/svgs/create-resume-img/referenceIcon.svg";

const ResumeTabs = [
  {
    image: personalInfow,
    title: "Personal Info",
    alt: "personalinfoW",
    path: "personal-info",
  },
  {
    image: educationInfo,
    title: "Education",
    alt: "educationIcon",
    path: "education",
  },
  {
    image: workexperience,
    title: "Work Experience",
    alt: "workexperience",
    path: "experience",
  },
  {
    image: language,
    title: "Languages",
    alt: "languageIcon",
    path: "languages",
  },
  {
    image: certification,
    title: "Certifications",
    alt: "certificationIcon",
    path: "certification",
  },
  {
    image: achievement,
    title: "Achievements",
    alt: "achievementIcon",
    path: "achivements",
  },
  { image: skills, title: "Skills", alt: "skillsIcon", path: "skills" },
  {
    image: reference,
    title: "Reference",
    alt: "referenceIcon",
    path: "reference",
  },
];

export default ResumeTabs;
