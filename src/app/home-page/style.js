"use client";
import styled from "@emotion/styled";
import { Box, Typography } from "@mui/material";
import Image from "next/image";
import image4 from "@/images/image4.jpeg";
import image5 from "@/images/image5.jpeg";
import image6 from "@/images/image6.jpeg";
import banner from "@/images/moritz.jpg";

export const FirstSec = styled("section")(({}) => ({
  position: "relative",
  backgroundImage: `linear-gradient(rgb(20 106 164 / 75%), rgba(20, 106, 164, 0.3)), url(${banner.src})`,
  backgroundSize: "cover",
  backgroundPositionX: "-1px",
  height: "100vh",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  paddingTop: "140px",
  paddingBottom: "110px",
}));

export const Blur = styled("div")(({}) => ({
  position: "absolute",
  top: "-20vw",
  zIndex: -1,
  alignSelf: "center",
  maxWidth: "700px",
  "@media all and (max-width: 600px)": {
    top: "-80px",
  },
}));

export const FirstSecInner1 = styled("div")(({}) => ({
  textAlign: "center",
  margin: "0 auto",
  color: "white",
  padding: "35px 24px",
  // boxShadow: " 0px 0px 155px #0098ff",
  // background: "#0098ff6e",
  position: "relative",
  width: "100%",
  display: "flex",
  alignItems: "center",
  flexDirection: "column",
  borderRadius: "59px",
  position: "absolute",
  top: "15vh",
  "@media all and (max-width: 750px)": {
    // boxShadow: " 0px 0px 155px #0098ffad",
    // background: "#0098ff4a",
  },
}));

export const MainText = styled("p")(({}) => ({
  fontFamily: "Poppins, sans-serif",
  fontSize: "40px",
  fontStyle: "normal",
  fontWeight: 600,
  lineHeight: "40px",
  letterSpacing: "0.36px",
  maxWidth: "570px",
  "@media all and (max-width: 600px)": {
    fontSize: "20px",
    lineHeight: "12px",
    letterSpacing: "0.21px",
    maxWidth: "345px",
  },
}));

export const Description = styled("p")(({}) => ({
  fontFamily: "'DM Sans', sans-serif",
  fontSize: "16px",
  fontStyle: "normal",
  fontWeight: 400,
  lineHeight: "20px",
  letterSpacing: "0.08px",
  maxWidth: "520px",
  margin: "12px 0 32px",
  "@media all and (max-width: 600px)": {
    maxWidth: "305px",
    fontSize: "12px",
    lineHeight: "15px",
  },
}));

// section 2
export const SecSection = styled("section")(({}) => ({}));
export const SecSectionInner1 = styled("div")(({}) => ({
  borderRadius: "24px",
  background: "#3598DB",
  maxWidth: "500px",
  padding: "40px",
  position: "relative",
  "@media all and (max-width: 1141px)": {
    maxWidth: "800px",
  },
}));

export const SecSectionInner1FirstTitle = styled("p")(({}) => ({
  color: "#FFF",
  fontFamily: "DM Sans",
  fontSize: "32px",
  fontStyle: "normal",
  fontWeight: 500,
  lineHeight: "125%", // Вместо "40px", так как "125%" относится к размеру шрифта
  letterSpacing: "0.16px",
  margin: "24px 0 12px",
}));
export const SecSectionInner1SecondTitle = styled("p")(({}) => ({
  color: "#FFF",
  fontFamily: "DM Sans",
  fontSize: "21px",
  fontStyle: "normal",
  fontWeight: 400,
  lineHeight: "145.455%", // Вместо "32px", так как "145.455%" относится к размеру шрифта
  letterSpacing: "0.11px",
}));

export const SecSectionMainInner = styled("div")(({}) => ({
  display: "flex",
  gap: "32px",
  marginTop: "-200px",
  justifyContent: "center",
  "@media all and (max-width: 1141px)": {
    flexDirection: "column",
    alignItems: "center",
  },
}));

export const SecSectionInner2 = styled("div")(({}) => ({
  display: "flex",
  gap: "12px",
  "@media all and (max-width: 660px)": {
    flexDirection: "column",
  },
}));

export const SecSectionCards = styled("div")(({}) => ({
  display: "flex",
  flexDirection: "column",
  gap: "12px",
}));

export const SecSectionCard = styled("div")(({ theme, height, bgrnd, idx }) => {
  let images = [image5, image6];

  return {
    borderRadius: "16px",
    width: "308px",
    height: height ? height : "202px",
    background: bgrnd
      ? ` linear-gradient(0deg, rgba(38, 56, 84, 0.56) 0%, rgba(38, 56, 84, 0.56) 100%), url(${images[idx].src}), lightgray 50% / cover no-repeat`
      : "none",
    backgroundPosition: "center",
    "@media all and (max-width: 660px)": {
      width: "345px",
      height: "180px",
    },
  };
});

export const SecSectionCardImage = styled(Image)(({}) => ({
  width: "100%",
  height: "100%",
  objectFit: "cover",
  borderRadius: "16px",
}));

export const SecSectionBigCard = styled("div")(({ theme, bgrnd }) => ({
  borderRadius: "16px",
  width: "308px",
  height: "560px",
  background: bgrnd
    ? `linear-gradient(0deg, rgba(38, 56, 84, 0.56) 0%, rgba(38, 56, 84, 0.56) 100%), url(${image4.src}), lightgray 50% / cover no-repeat`
    : "none",
  backgroundPosition: "center",
  backgroundSize: "245%",
  "@media all and (max-width: 660px)": {
    width: "345px",
    height: "180px",
  },
}));
export const SecSectionBigCardImg = styled(Image)(({}) => ({
  width: "100%",
  height: "100%",
  objectFit: "cover",
  borderRadius: "16px",
}));

// Sixth Section

export const SixthSec = styled("section")(({}) => ({
  background: "#3598DB",
  display: "flex",
  padding: "50px 0",
  marginTop: "100px",
}));

export const SixthSecInner = styled("div")(({}) => ({
  color: "white",
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  "@media all and (max-width: 660px)": {
    flexDirection: "column",
    alignItems: "center",
    gap: "60px",
  },
}));

export const SixthTextgroup = styled("div")(({}) => ({
  maxWidth: "630px",
  "@media all and (max-width: 890px)": {
    maxWidth: "395px",
  },
}));
export const SixthTitle = styled("p")(({}) => ({
  fontSize: "48px",
  lineHeight: "56px",
  fontFamily: "DM Sans, sans-serif",
  marginBottom: "16px",
  "@media all and (max-width: 650px)": {
    fontSize: "38px",
    lineHeight: "53px",
  },
}));

export const SixthDescription = styled("p")(({}) => ({
  fontFamily: "DM Sans, sans-serif",
  fontSize: "16px",
  fontStyle: "normal",
  fontWeight: 400,
  lineHeight: "normal",
}));

// fourth section

export const FourthSection = styled("section")(({}) => ({
  display: "flex",
  gap: "32px",
  marginTop: "150px",
  justifyContent: "center",
  "@media all and (max-width: 700px)": {
    flexDirection: "column",
    alignItems: "center",
  },
}));

export const FourthSectionInner1 = styled("div")(({}) => ({
  borderRadius: "24px",
  background: "#3598DB",
  maxWidth: "500px",
  padding: "40px",
  position: "relative",
}));

export const FourthSectionInner2 = styled("div")(({}) => ({
  display: "flex",
  gap: "12px",
  "@media all and (max-width: 700px)": {
    flexDirection: "column",
    alignItems: "center",
  },
}));

export const FourthSectionCards = styled("div")(({}) => ({
  display: "flex",
  flexDirection: "column",
  gap: "12px",
}));

export const FourthSectionCard = styled("div")(
  ({ theme, height, bgrnd, idx }) => {
    let images = [image5, image6];

    return {
      borderRadius: "16px",
      width: "308px",
      height: height ? height : "202px",
      background: bgrnd
        ? ` linear-gradient(0deg, rgba(38, 56, 84, 0.56) 0%, rgba(38, 56, 84, 0.56) 100%), url(${images[idx].src}), lightgray 50% / cover no-repeat`
        : "none",
      backgroundPosition: "center",
      "@media all and (max-width: 700px)": {
        width: "345px",
        height: "180px",
      },
    };
  }
);

export const FourthSectionCardImage = styled(Image)(({}) => ({
  width: "100%",
  height: "100%",
  objectFit: "cover",
  borderRadius: "16px",
}));

export const FourthSectionBigCard = styled("div")(({ theme, bgrnd }) => ({
  borderRadius: "16px",
  width: "308px",
  height: "100%",
  background: bgrnd
    ? `linear-gradient(0deg, rgba(38, 56, 84, 0.56) 0%, rgba(38, 56, 84, 0.56) 100%), url(${image4.src}), lightgray 50% / cover no-repeat`
    : "none",
  backgroundPosition: "center",
  backgroundSize: "245%",
  "@media all and (max-width: 1040px)": {
    display: "none",
  },
  "@media all and (max-width: 700px)": {
    width: "345px",
    height: "180px",
    display: "inline-block",
  },
}));
export const FourthSectionBigCardImg = styled(Image)(({}) => ({
  width: "100%",
  height: "100%",
  objectFit: "cover",
  borderRadius: "16px",
}));

// contact

export const ContactUs = styled("section")(({}) => ({
  background: "#fff",
}));
export const ContactUsMain = styled("div")(({}) => ({}));
export const ContactUsInner1 = styled("div")(({}) => ({
  padding: "50px",
  borderRadius: "20px",
  boxShadow: "0px 6px 24px 0px rgba(15, 109, 186, 0.07)",
  position: "relative",
  top: "-50vh",
  background: "#fff",
  color: "black",
  textAlign: "start",
  "& > p": {
    fontFamily: " DM Sans, sans-serif",
    fontSize: "42px",
    fontWeight: 700,
    lineHeight: "46px" /* 116.667% */,
    letterSpacing: "-2px",
    color: "#071B2C",
    marginBottom: "40px",
  },
  // "@media all and (max-width: 650px)": {
  //   position: "static",
  //   marginTop: "70px",
  // },
}));

export const ContactUsForm = styled("form")(({}) => ({
  display: "flex",
  flexDirection: "column",
  gap: "20px",
}));
export const ContactUsFormInner = styled("div")(({}) => ({
  display: "flex",
  gap: "25px",
  "@media all and (max-width: 550px)": {
    flexDirection: "column",
  },
}));

export const ContactUsInner2 = styled("div")(({}) => ({
  display: "flex",
  gap: "70px",
  justifyContent: "center",
  marginTop: "-100px",
  paddingBottom: "100px",
  "@media all and (max-width: 650px)": {
    marginTop: "70px",
    flexDirection: "column",
    alignItems: "center",
  },
}));
export const ContactUsInner2Card = styled("div")(({}) => ({
  textAlign: "center",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  maxWidth: "330px",
  "& > p:first-of-type": {
    fontSize: "24px",
    lineHeight: "32px",
    fontFamily: "DM Sans, sans-serif",
    fontWeight: "700",
    color: "#183B56",
    marginTop: "25px",
  },
  "& > p:nth-of-type(2)": {
    fontSize: "16px",
    lineHeight: "28px",
    fontFamily: "DM Sans, sans-serif",
    fontWeight: "400",
    marginTop: "12px",
    color: "#5A7184",

    marginBottom: "16px",
  },
  a: {
    fontSize: "16px",
    lineHeight: "28px",
    fontFamily: "DM Sans, sans-serif",
    fontWeight: "700",
    marginTop: "12px",
    marginBottom: "16px",
    color: "#0F6DBA",
  },
}));

export const ContactSectionFormInner = styled("div")(({ theme, height }) => ({
  width: "100%",
  "p:first-of-type": {
    fontFamily: " DM Sans, sans-serif",
    fontSize: "14px",
    fontStyle: "normal",
    fontWeight: 600,
    lineHeight: "22px" /* 116.667% */,
    letterSpacing: "0.08px",
    color: "#09080D",
    marginBottom: "8px",
  },
  "p:last-child": {
    fontFamily: " DM Sans, sans-serif",
    fontSize: "13px",
    fontStyle: "normal",
    fontWeight: 600,
    lineHeight: "22px" /* 116.667% */,
    letterSpacing: "0.08px",
    color: "#ff0000d6",
    ".react-tel-input .form-control": {
      padding: "4px",
    },
  },
  "input, .contact_input_phone .form-control": {
    width: "100%",
    height: "52px",
    padding: "16px",
    paddingLeft: "16px",
    fontSize: "15px",
    borderRadius: "8px",
    border: "1px solid #E9EBED",
    fontFamily: " DM Sans, sans-serif",

    outline: "none",
    textAlign: "start",
    "&:focus": {
      border: "2px solid #3598dbab",
    },
  },
  ".phone_input .form-control": {
    paddingLeft: "50px",
  },
  textarea: {
    width: "100%",
    height: "130px",
    paddingLeft: "16px",
    paddingTop: "16px",
    borderRadius: "8px",
    border: "1px solid #E9EBED",
    // transition: "border 0.3s ease-in-out",
    outline: "none",
    height: height || "auto",
    fontFamily: " DM Sans, sans-serif",

    "&:focus": {
      border: "2px solid #3598db",
    },

    resize: "none",
  },
}));
