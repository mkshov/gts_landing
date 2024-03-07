import Image from "next/image";

import {
  FirstSecInner1,
  FirstSec,
  Blur,
  ContactUsForm,
  ContactUsFormInner,
  ContactUsInner1,
  ContactUsMain,
  ContactSectionFormInner,
  MainText,
  Description,
} from "./style";

import blur from "@/images/blur.png";

import ContainedButton from "@/components/Buttons/ContainedButton";
import { Container } from "@mui/material";
import Link from "next/link";

export default function A_FirstSection() {
  return (
    <FirstSec>
      <FirstSecInner1
        data-aos="fade-right"
        data-aos-offset="300"
        data-aos-easing="ease-in-sine"
      >
        <MainText>Your business is our talents</MainText>
        <Description>
          A specialized method of personnel selection aimed at identifying and
          attracting top specialists for specific positions in the organization
        </Description>
      </FirstSecInner1>
    </FirstSec>
  );
}
