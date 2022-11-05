import { useTranslation } from 'next-i18next';
import React from 'react';
import Section from '../../Section';
import SectionSubtitle from '../../Section/SectionSubtitle';
import SectionTitle from '../../Section/SectionTitle';
import ProgressBar from '../../UI/ProgressBar';

const skills: [string, number][] = [
  ['HTML', 95],
  ['CSS', 90],
  ['SASS (SCSS)', 87],
  ['JavaScript (ES6)', 85],
  ['ReactJS', 83],
  ['NextJS', 78],
  ['Redux ToolKit', 74],
  ['TypeScript', 75],
  ['NodeJS', 82],
];

const AboutMe: React.FC = () => {
  const { t } = useTranslation();
  return (
    <Section id="about-me">
      <SectionTitle className="mb-10">{t('headings.about_me')}</SectionTitle>
      <div className="flex flex-col gap-5 md:flex-row md:gap-8 items-start">
        <div className="flex flex-col items-center border-teal-500 border-2 md:flex-1 p-2 md:p-5">
          <img src="./static/img/about-me/image.jpg" alt="About Me" />
        </div>
        <div className="flex flex-col gap-5 md:flex-1">
          <div>
            <SectionSubtitle className="1 mb-2">
              {t('headings.some_about_me')}
            </SectionSubtitle>
            <p className="text-sm md:text-base whitespace-pre-line">
              {t('about_me')}
            </p>
          </div>
          <div>
            <SectionSubtitle className="mb-2">
              {t('headings.what_i_use')}
            </SectionSubtitle>
            {skills.map((item, idx) => (
              <div key={idx}>
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
