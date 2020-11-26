import React from "react";
import preview from "../../assets/svgs/create-resume-img/Eye preview icon.svg";
import download from "../../assets/svgs/create-resume-img/Download icon.svg";
import "./PreviewDownload.css";
import { Link } from "react-router-dom";

const PreviewDownload = () => {
  return (
    <div
      className={`d-flex justify-content-between previewndownload`}
      id="previewndownload"
    >
      <Link to="/template-a" className="text-dark">
        <div className="preview">
          <img src={preview} alt="preview icon" className="mr-2" />
          <span>Preview Resume</span>
        </div>
      </Link>
      <Link to="/template-a" className="text-dark">
        <div className="download">
          <img src={download} alt="download icon" className="mr-2" />
          <span>Download</span>
        </div>
      </Link>
    </div>
  );
};

export default PreviewDownload;
