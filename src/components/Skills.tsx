import React from 'react';
import { styled } from '@mui/material/styles';
import { motion } from 'framer-motion';

const SkillsSection = styled('section')({
  padding: '4rem 0',
});

const SkillsContent = styled('div')({
  maxWidth: '800px',
  margin: '0 auto',
  padding: '0 2rem',
});

const Title = styled('h2')(({ theme }) => ({
  fontSize: '2rem',
  color: theme.palette.primary.main,
  marginBottom: '2rem',
  textAlign: 'center',
}));

const SkillsGrid = styled('div')({
  display: 'grid',
  gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
  gap: '2rem',
});

const SkillCard = styled(motion.div)(({ theme }) => ({
  backgroundColor: theme.palette.background.paper,
  padding: '1.5rem',
  borderRadius: '8px',
  boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
  textAlign: 'center',
}));

const SkillTitle = styled('h3')(({ theme }) => ({
  fontSize: '1.2rem',
  color: theme.palette.primary.main,
  marginBottom: '1rem',
}));

const SkillList = styled('ul')({
  listStyle: 'none',
  padding: 0,
  margin: 0,
});

const SkillItem = styled('li')(({ theme }) => ({
  color: theme.palette.secondary.main,
  marginBottom: '0.5rem',
}));

const skills = [
  {
    category: 'Programming Languages',
    items: ['JavaScript', 'Python', 'Java', 'C++']
  },
  {
    category: 'Web Development',
    items: ['React', 'Node.js', 'HTML/CSS', 'TypeScript']
  },
  {
    category: 'Tools & Technologies',
    items: ['Git', 'Docker', 'AWS', 'Linux']
  }
];

const Skills: React.FC = () => {
  return (
    <SkillsSection>
      <SkillsContent>
        <Title>Skills</Title>
        <SkillsGrid>
          {skills.map((skill, index) => (
            <SkillCard
              key={skill.category}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <SkillTitle>{skill.category}</SkillTitle>
              <SkillList>
                {skill.items.map((item) => (
                  <SkillItem key={item}>{item}</SkillItem>
                ))}
              </SkillList>
            </SkillCard>
          ))}
        </SkillsGrid>
      </SkillsContent>
    </SkillsSection>
  );
};

export default Skills; 