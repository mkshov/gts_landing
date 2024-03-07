import Image from "next/image";
import logo from "@/images/svg/logoWhite.svg";
import image1 from "@/images/image1-1.png";
import image2 from "@/images/image2-2.jpeg";
import image3 from "@/images/image3.png";
import {
  SecSectionInner1FirstTitle,
  SecSection,
  SecSectionInner1,
  SecSectionInner1SecondTitle,
  SecSectionInner2,
  SecSectionCards,
  SecSectionCard,
  SecSectionCardImage,
  SecSectionBigCard,
  SecSectionBigCardImg,
  SecSectionMainInner,
  ContactUsMain,
  ContactUsInner1,
  ContactUsForm,
  ContactUsFormInner,
  ContactSectionFormInner,
} from "./style";

import ContainedButton from "@/components/Buttons/ContainedButton";
import { Container } from "@mui/material";
import Link from "next/link";
export default function B_SecondSection() {
  return (
    <SecSection>
      <Container maxWidth="lg">
        <ContactUsMain>
          <ContactUsInner1>
            <p>Get in touch</p>
            <ContactUsForm>
              <ContactUsFormInner>
                <ContactSectionFormInner>
                  <p>First name</p>
                  <input type="text" placeholder="First name" />
                </ContactSectionFormInner>
                <ContactSectionFormInner>
                  <p>Last name</p>
                  <input type="text" placeholder="Last name" />
                </ContactSectionFormInner>
              </ContactUsFormInner>
              <ContactUsFormInner>
                <ContactSectionFormInner>
                  <p>Email address</p>
                  <input type="text" placeholder="Email" />
                </ContactSectionFormInner>
                <ContactSectionFormInner>
                  <p>Phone number</p>
                  <input type="text" placeholder="Phone number" />
                </ContactSectionFormInner>
              </ContactUsFormInner>
              <ContactSectionFormInner height="130px">
                <p>How can we help?</p>
                <textarea
                  type="text"
                  height="160px"
                  placeholder="Type here..."
                />
              </ContactSectionFormInner>
              <ContainedButton br="8px" styles={{ width: "100%" }}>
                Send message
              </ContainedButton>
            </ContactUsForm>
          </ContactUsInner1>
        </ContactUsMain>
      </Container>
      <SecSectionMainInner id="what-we-do">
        <SecSectionInner1>
          <Image src={logo} alt="GTS Recruitment logo white" />
          <SecSectionInner1FirstTitle>
            About "GTS Recruitment
          </SecSectionInner1FirstTitle>
          <SecSectionInner1SecondTitle>
            - is a leading business recruitment company. We offer highly
            qualified specialists to meet unique business needs. A specialized
            method of personnel selection aimed at identifying and attracting
            top specialists for specific positions in the organization. We use
            advanced technologies, databases, and in-depth interviews to ensure
            the candidate’s professionalism.
          </SecSectionInner1SecondTitle>
        </SecSectionInner1>
        <SecSectionInner2>
          <SecSectionCards>
            <SecSectionCard height="274px">
              <SecSectionCardImage
                alt="a man explaining something to someone"
                src={image2}
              />
            </SecSectionCard>
            <SecSectionCard height="274px">
              <SecSectionCardImage
                alt="a guy and a girl shake hands"
                src={image3}
              />
            </SecSectionCard>
          </SecSectionCards>
          <SecSectionBigCard>
            <SecSectionBigCardImg
              alt="a man draws a graph on the blackboard with a marker"
              src={image1}
            />
          </SecSectionBigCard>
        </SecSectionInner2>
      </SecSectionMainInner>
    </SecSection>
  );
}
