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

const projects: ProjectItem[] = [
  {
    image: 'recent-projects/1.png',
    title: 'ТОВ "АгроКорп"',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam vehicula dolor eu odio dapibus, ac egestas ante lobortis. Proin non ante nulla. Nulla cursus metus vel nisl suscipit, in gravida eros egestas.',
    tags: ['ReactJS', 'E-Commerce'],
    demoUrl: 'https://github.com',
    gitHubUrl: 'https://github.com',
  },
  {
    image: 'recent-projects/2.png',
    title: 'Monito | Pets for Best',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam vehicula dolor eu odio dapibus, ac egestas ante lobortis. Proin non ante nulla. Nulla cursus metus vel nisl suscipit, in gravida eros egestas.',
    tags: ['ReactJS', 'NextJS', 'E-Commerce'],
    demoUrl: 'https://github.com',
    gitHubUrl: 'https://github.com',
  },
];

const RecentProjects: React.FC = () => {
  return (
    <Section id="recent-projects">
      <SectionTitle className="mb-10">Recent projects</SectionTitle>
      <div className="flex flex-wrap gap-7 justify-center">
        {projects.map((project, idx) => (
          <RecentProjectsItem key={idx} {...project} />
        ))}
        {projects.length < 3 && (
          <div className="bg-stone-700 flex items-center justify-center max-w-xs lg:max-w-none lg:flex-1 p-4 text-center text-xl uppercase">
            <h4>Soon there will be something in this place</h4>
          </div>
        )}
      </div>
    </Section>
  );
};

export default RecentProjects;
