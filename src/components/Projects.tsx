import React from 'react';
import { styled } from '@mui/material/styles';
import { motion } from 'framer-motion';

const ProjectsSection = styled('section')(({ theme }) => ({
  padding: '4rem 0',
  backgroundColor: theme.palette.background.paper,
  borderRadius: '8px',
  boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
}));

const ProjectsContent = styled('div')({
  maxWidth: '1200px',
  margin: '0 auto',
  padding: '0 2rem',
});

const Title = styled('h2')(({ theme }) => ({
  fontSize: '2rem',
  color: theme.palette.primary.main,
  marginBottom: '2rem',
  textAlign: 'center',
}));

const ProjectsGrid = styled('div')({
  display: 'grid',
  gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
  gap: '2rem',
});

const ProjectCard = styled(motion.div)(({ theme }) => ({
  backgroundColor: theme.palette.background.default,
  borderRadius: '8px',
  overflow: 'hidden',
  boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
}));

const ProjectImage = styled('div')(({ theme }) => ({
  height: '200px',
  backgroundColor: theme.palette.secondary.main,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  color: 'white',
  fontSize: '1.5rem',
}));

const ProjectContent = styled('div')({
  padding: '1.5rem',
});

const ProjectTitle = styled('h3')(({ theme }) => ({
  fontSize: '1.2rem',
  color: theme.palette.primary.main,
  marginBottom: '1rem',
}));

const ProjectDescription = styled('p')(({ theme }) => ({
  color: theme.palette.secondary.main,
  marginBottom: '1rem',
}));

const ProjectTags = styled('div')({
  display: 'flex',
  flexWrap: 'wrap',
  gap: '0.5rem',
});

const Tag = styled('span')(({ theme }) => ({
  backgroundColor: theme.palette.primary.main,
  color: 'white',
  padding: '0.25rem 0.5rem',
  borderRadius: '4px',
  fontSize: '0.8rem',
}));

const projects = [
  {
    title: 'Project 1',
    description: 'A brief description of the project and its main features.',
    tags: ['React', 'Node.js', 'MongoDB']
  },
  {
    title: 'Project 2',
    description: 'Another project description highlighting the key achievements.',
    tags: ['Python', 'Machine Learning', 'TensorFlow']
  },
  {
    title: 'Project 3',
    description: 'Description of a third project showcasing different skills.',
    tags: ['Java', 'Spring Boot', 'MySQL']
  }
];

const Projects: React.FC = () => {
  return (
    <ProjectsSection>
      <ProjectsContent>
        <Title>Projects</Title>
        <ProjectsGrid>
          {projects.map((project, index) => (
            <ProjectCard
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <ProjectImage>Project Image</ProjectImage>
              <ProjectContent>
                <ProjectTitle>{project.title}</ProjectTitle>
                <ProjectDescription>{project.description}</ProjectDescription>
                <ProjectTags>
                  {project.tags.map((tag) => (
                    <Tag key={tag}>{tag}</Tag>
                  ))}
                </ProjectTags>
              </ProjectContent>
            </ProjectCard>
          ))}
        </ProjectsGrid>
      </ProjectsContent>
    </ProjectsSection>
  );
};

export default Projects; 