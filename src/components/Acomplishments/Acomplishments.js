import React from 'react';
import { Section, SectionDivider, SectionTitle, SectionText } from '../../styles/GlobalComponents';
import { Box, Boxes, BoxNum, BoxText, P, H4 } from './AcomplishmentsStyles';

// const data = [
//   { number: 10, text: 'Projects'},
//   { number: 1000, text: 'Students', },
//   { number: 19, text: 'Github ', },
//   { number: 5000, text: 'Github', }
// ];

const Acomplishments = () => (
  <Section>
    <SectionTitle>Recent work</SectionTitle>
    <br/>
    <SectionTitle>Tech Mates</SectionTitle>
    <H4>Web and Mobile App Developer Intern</H4>
    <br/>
    <P>10/2021 - 12/2021</P>
    <br/>
    <SectionText>
    <ul>
    <li> Added the Notification feature using firebase in the mobile app</li>
    <li>Added the graph For crypto coin value according to days and hours which was being fetched realtime from an API.</li>
    <li>Developed the company's official website using ReactJs</li>
    </ul>
    </SectionText>
    <br/>
     <SectionTitle>Binmark IT Consultancy and Solutions</SectionTitle>
    <H4>Full Stack Developer Intern</H4>
    <br/>
    <P>08/2021 - 10/2021</P>
    <br/>
    <SectionText>
    <ul>
    <li> Developed the company's official website using ReactJs.</li>
    <li>The website mainly comprises attractive animations and at the same time delivers the company's message</li>
    <li>Made it such that it is completely responsive on all the devices. The code is well optimized and structured. Used styled component to do so</li>
    <li>It was teamwork and all the codebase was shared among teammates through Microsoft Azure.</li>
    <li>Developed RESTful API Webservices. Used MongoDB as database storage.</li>
    </ul>
    </SectionText>
    <SectionTitle>Engineer Diaries</SectionTitle>
    <H4>Web Developer Intern</H4>
    <br/>
    <P>05/2021 - 06/2021</P>
    <br/>
    <SectionText>
    <ul>
    <li> Worked on an already developed website, using AngularJs, made it responsive, and also added a comment and like
feature in it along with Disqus comment section.
</li>
    <li>The database storage used was Disqus ( A well-recognized platform used as a database for comments ).
</li>
    <li>The viewers can resolve their doubts by leaving the comment on a specific blog so that others can reply to them so
that there can be a clear flow of information publicly</li>
    <li>Wrote efficient, maintainable and reusable code prioritizing privacy and security.</li>
    </ul>
    </SectionText>
    
    {/* <Boxes>
      {data.map((card, index) => (
        <Box key={index}>
          <BoxNum>{`${card.number}+`}</BoxNum>
          <BoxText>{card.text}</BoxText>
        </Box>
      ))}
    </Boxes> */}
    <SectionDivider/>
  </Section>
);

export default Acomplishments;
