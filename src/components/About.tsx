import React from 'react';
import { styled } from '@mui/material/styles';
import { motion } from 'framer-motion';

const AboutSection = styled('section')(({ theme }) => ({
  padding: '4rem 0',
  backgroundColor: theme.palette.background.paper,
  borderRadius: '8px',
  boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
}));

const AboutContent = styled('div')({
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

const Description = styled('p')(({ theme }) => ({
  fontSize: '1.1rem',
  lineHeight: 1.6,
  color: theme.palette.primary.main,
  marginBottom: '1.5rem',
}));

const About: React.FC = () => {
  return (
    <AboutSection>
      <AboutContent>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <Title>About Me</Title>
          <Description>
            I am a passionate Computer Engineer with expertise in software development and system design.
            My journey in technology began with a deep curiosity about how things work, which led me to
            pursue a career in computer engineering.
          </Description>
          <Description>
            With a strong foundation in both hardware and software, I bring a unique perspective to
            solving complex technical challenges. I am constantly learning and adapting to new
            technologies to stay at the forefront of innovation.
          </Description>
        </motion.div>
      </AboutContent>
    </AboutSection>
  );
};

export default About; 