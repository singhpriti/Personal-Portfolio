import React from "react";
import {
  Section,
  SectionText,
  SectionTitle,
} from "../../styles/GlobalComponents";
import Button from "../../styles/GlobalComponents/Button";
import { LeftSection } from "./HeroStyles";

const Hero = (props) => (
  <>
    <Section row nopadding>
      <LeftSection>
        <SectionTitle main center>
          Welcome To <br />
          My Digital Home
        </SectionTitle>
        <SectionText>
          The purpose of my Portfolio is to reflect my personal learning,
          <br />
          Hii, I am Priti singh
          <br />
          A Software Engineer with skills in IOS and Full Stack Development, 
          I love to design, create and modify web app and
          mobile app.
        </SectionText>
        <Button
          onClick={() =>
            (window.location =
              "https://www.linkedin.com/in/priti-singh-aa4459141/")
          }
        >
          Learn More
        </Button>
      </LeftSection>
    </Section>
  </>
);

export default Hero;
