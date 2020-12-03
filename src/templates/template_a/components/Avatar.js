import React, { useState, useEffect } from "react";
import axios from "../../../axios";
import { getToken } from "../../../utils/Common";
import {
  StyledProfileImg,
  StylePicDiv,
  StyledImageInput,
} from "./StyledComponents";

function Avatar({ avatar }) {
  let imageDetails = {
    imageFile: null,
    url: "",
    progress: 0,
  };
  const [images, setImages] = useState(imageDetails);
  const [display, setDisplay] = useState("none");

  const token = getToken();

  const hover = (e) => {
    setDisplay("flex");
  };

  const notHover = (e) => {
    setDisplay("none");
  };

  const handleChange = (e) => {
    if (e.target.files[0]) {
      const image = e.target.files[0];
      setImages({ ...images, imageFile: image });
    }
  };

  const handleUpload = () => {
    const formData = new FormData();
    const { imageFile } = images;

    formData.append("avatar", imageFile);
    const config = {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };
    axios.put("/user", formData, config);
  };

  const { imageFile } = images;
  useEffect(() => {
    handleUpload();
    getUserImage();
    // return () => {
    //   cleanup;
    // };
  }, [imageFile]);

  // Handle Getting User Image
  const getUserImage = () => {
    const config = {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };
    axios
      .get("/user", config)
      .then((response) => {
        setImages({ ...images, url: response.data.image_path });
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const hero = "https://via.placeholder.com/100";
  return (
    <StylePicDiv
      className="text-center mb-4"
      id="avatar-template-a"
      onMouseEnter={hover}
      onMouseLeave={notHover}
    >
      <StyledProfileImg
        src={images.url ? images.url : hero}
        alt="profile-img"
        width="100"
        height="100"
      />
      <StyledImageInput
        style={{ display: display }}
        type="file"
        onChange={handleChange}
      />
    </StylePicDiv>
  );
}

export default Avatar;
