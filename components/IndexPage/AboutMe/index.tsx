import React from 'react';
import Section from '../../Section';
import SectionSubtitle from '../../Section/SectionSubtitle';
import SectionTitle from '../../Section/SectionTitle';
import ProgressBar from '../../UI/ProgressBar';

const skills: [string, number][] = [
  ['HTML', 90],
  ['CSS', 90],
  ['SASS (SCSS)', 90],
  ['JavaScript (ES6)', 90],
  ['ReactJS', 90],
  ['NextJS', 90],
  ['Redux ToolKit', 90],
  ['TypeScript', 90],
  ['NodeJS', 90],
];

const AboutMe: React.FC = () => {
  return (
    <Section>
      <SectionTitle className="mb-10">About me</SectionTitle>
      <div className="flex flex-col gap-5 md:flex-row md:gap-8 items-start">
        <div className="flex flex-col items-center border-teal-500 border-solid border-2 md:flex-1">
          <img src="./static/img/about-me/image.jpg" alt="About Me" />
        </div>
        <div className="flex flex-col gap-5 md:flex-1">
          <div>
            <SectionSubtitle className="1 mb-2">Some about me</SectionSubtitle>
            <p className="text-sm md:text-base">
              As you may have noticed earlier, my name is Kirill. I am a web
              developer.
              <br />
              My journey in website development started around 2018. It all
              started from static websites on HTML, CSS and Vanilla JS. For a
              long time I was doing usual layout without using JavaScript
              frameworks like ReactJS.
              <br />
              After a while (early 2022), I came to a JavaScript framework,
              namely ReactJS. At this moment I have experience and can develop
              standard HTML sites (on my own build of Gulp4), as well as dynamic
              sites on ReactJS / NextJS. I easily learn new technologies and
              every day I learn something new. You can see examples of my work
              below on this site, as well as on my GitHub profile.
              <br />
              Completely open to cooperation, ready to answer any question you
              have (just don't ask me what I ate this morning). The forms of
              contact with me are listed on this site just below.
              <br />
              If you've read to this point, I want to thank you for your time
              and attention to my portfolio, have a nice day :*
            </p>
          </div>
          <div>
            <SectionSubtitle className="mb-2">What do I use?</SectionSubtitle>
            {skills.map((item) => (
              <div>
                <p className="text-sm md:text-base">{item[0]}</p>
                <div className="flex gap-4 items-center text-sm md:text-base">
                  <ProgressBar percentage={item[1]} className="flex-1" />{' '}
                  {item[1]}%
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Section>
  );
};

export default AboutMe;
