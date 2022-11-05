import { useTranslation } from 'next-i18next';
import React from 'react';
import Section from '../../Section';
import SectionTitle from '../../Section/SectionTitle';
import RecentProjectsItem from './RecentProjectsItem';

export interface ProjectItem {
  image: string;
  title: string;
  description: string;
  tags: string[];
  demoUrl: string;
  gitHubUrl: string;
}

const RecentProjects: React.FC = () => {
  const { t } = useTranslation();

  const projects: ProjectItem[] = [
    {
      image: 'recent-projects/1.png',
      title: t('recent_projects.first.title'),
      description: t('recent_projects.first.description'),
      tags: ['ReactJS', 'TypeScript', 'E-Commerce'],
      demoUrl: 'https://agro-corp.net.ua/',
      gitHubUrl: 'https://github.com/ptrv-dev/react-agrocorp',
    },
    {
      image: 'recent-projects/2.png',
      title: t('recent_projects.second.title'),
      description: t('recent_projects.second.description'),
      tags: ['ReactJS', 'NextJS', 'TypeScript', 'E-Commerce'],
      demoUrl: 'https://next-monito.vercel.app/',
      gitHubUrl: 'https://github.com/ptrv-dev/next-monito',
    },
  ];
  return (
    <Section id="recent-projects">
      <SectionTitle className="mb-10">
        {t('headings.recent_projects')}
      </SectionTitle>
      <div className="flex flex-wrap gap-7 justify-center">
        {projects.map((project, idx) => (
          <RecentProjectsItem key={idx} {...project} />
        ))}
        {projects.length < 3 && (
          <div className="bg-stone-700 flex items-center justify-center max-w-xs lg:max-w-none lg:flex-1 p-4 text-center text-xl uppercase">
            <h4>{t('recent_projects.soon')}</h4>
          </div>
        )}
      </div>
    </Section>
  );
};

export default RecentProjects;
