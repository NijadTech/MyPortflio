import React from 'react';
import { styled } from '@mui/material/styles';
import { motion } from 'framer-motion';
import { Typography, Box, Grid, Paper } from '@mui/material';

const AboutSection = styled('section')({
  minHeight: '100vh',
  padding: '8rem 2rem',
  backgroundColor: '#F7F9FC',
  position: 'relative',
  overflow: 'hidden',
});

const ContentWrapper = styled('div')({
  maxWidth: '1400px',
  margin: '0 auto',
});

const SectionTitle = styled(Typography)({
  fontSize: '4rem',
  fontWeight: 700,
  marginBottom: '4rem',
  textAlign: 'center',
  background: 'linear-gradient(45deg, #FF6B6B, #4ECDC4)',
  WebkitBackgroundClip: 'text',
  WebkitTextFillColor: 'transparent',
  '@media (max-width: 768px)': {
    fontSize: '3rem',
    marginBottom: '3rem',
  },
});

const AboutContent = styled('div')({
  display: 'flex',
  flexDirection: 'column',
  gap: '6rem',
});

const AboutText = styled(Paper)({
  padding: '3rem',
  borderRadius: '20px',
  boxShadow: '0 10px 30px rgba(0, 0, 0, 0.1)',
  backgroundColor: '#FFFFFF',
  '& p': {
    fontSize: '1.25rem',
    lineHeight: 1.8,
    color: '#2C3E50',
    marginBottom: '2rem',
  },
});

const EducationSection = styled(Paper)({
  padding: '3rem',
  borderRadius: '20px',
  boxShadow: '0 10px 30px rgba(0, 0, 0, 0.1)',
  backgroundColor: '#FFFFFF',
  marginBottom: '3rem',
});

const EducationTitle = styled(Typography)({
  fontSize: '2.5rem',
  fontWeight: 600,
  marginBottom: '2.5rem',
  color: '#2C3E50',
  textAlign: 'center',
  background: 'linear-gradient(45deg, #FF6B6B, #4ECDC4)',
  WebkitBackgroundClip: 'text',
  WebkitTextFillColor: 'transparent',
});

const EducationItem = styled(motion.div)({
  padding: '2rem',
  borderRadius: '15px',
  backgroundColor: '#F7F9FC',
  marginBottom: '2rem',
  transition: 'all 0.3s ease',
  '&:hover': {
    transform: 'translateY(-5px)',
    boxShadow: '0 8px 25px rgba(0, 0, 0, 0.1)',
  },
  '& h4': {
    fontSize: '1.8rem',
    fontWeight: 600,
    marginBottom: '1rem',
    color: '#2C3E50',
  },
  '& p': {
    fontSize: '1.2rem',
    color: '#2C3E50',
    opacity: 0.9,
    lineHeight: 1.6,
  },
});

const SkillsSection = styled(Paper)({
  padding: '3rem',
  borderRadius: '20px',
  boxShadow: '0 10px 30px rgba(0, 0, 0, 0.1)',
  backgroundColor: '#FFFFFF',
});

const SkillsTitle = styled(Typography)({
  fontSize: '2.5rem',
  fontWeight: 600,
  marginBottom: '2.5rem',
  color: '#2C3E50',
  textAlign: 'center',
  background: 'linear-gradient(45deg, #FF6B6B, #4ECDC4)',
  WebkitBackgroundClip: 'text',
  WebkitTextFillColor: 'transparent',
});

const SkillsGrid = styled(Grid)({
  marginTop: '2rem',
});

const SkillCard = styled(motion.div)({
  padding: '2.5rem',
  borderRadius: '20px',
  backgroundColor: '#F7F9FC',
  height: '100%',
  transition: 'all 0.3s ease',
  '&:hover': {
    transform: 'translateY(-10px)',
    boxShadow: '0 15px 40px rgba(0, 0, 0, 0.1)',
  },
});

const SkillTitle = styled(Typography)({
  fontSize: '1.8rem',
  fontWeight: 600,
  marginBottom: '1.5rem',
  color: '#2C3E50',
  display: 'flex',
  alignItems: 'center',
  gap: '1rem',
  '&::before': {
    content: '""',
    width: '30px',
    height: '3px',
    background: 'linear-gradient(45deg, #FF6B6B, #4ECDC4)',
    borderRadius: '3px',
  },
});

const SkillDescription = styled(Typography)({
  fontSize: '1.2rem',
  lineHeight: 1.6,
  color: '#2C3E50',
  opacity: 0.9,
});

const About: React.FC = () => {
  const skills = [
    { title: 'Programming Languages', description: 'Java, C++, PHP, JavaScript, Python, SQL, HTML, CSS' },
    { title: 'Mobile Development', description: 'Android Studio, Kotlin' },
    { title: 'Web Development', description: 'React.js, Three.js, GSAP, Web Development, Website Building, Front-End Development, Back-End Web Development, PhpMyAdmin, MySQL, Databases' },
    { title: 'AI and Machine Learning', description: 'Machine Learning, Deep Learning, Data Classification, Augmented Reality (AR), Bioinformatics, Cryptography' },
    { title: 'Hardware & Engineering', description: 'Hardware Development, Electronics Hardware Design, Hardware Architecture, Hardware Engineering, Hardware Design, Computer Hardware, Computer Formatting' },
    { title: 'Software & Infrastructure', description: 'Software Infrastructure, Debugging, Enhanced Performance, Software Industry, Internet Software' },
    { title: 'Other Skills', description: 'Cybersecurity, Problem Solving, Team Leadership, Teamwork, Team Motivation, Student Services, International Admissions, Microsoft Office, Microsoft Excel, Design' },
    { title: 'Languages', description: 'Arabic (Native), English (Professional), French (Intermediate), Turkish (Intermediate)' },
  ];

  return (
    <AboutSection>
      <ContentWrapper>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <SectionTitle>About Me</SectionTitle>
          <AboutContent>
            <AboutText elevation={0}>
              <Typography variant="body1" sx={{ fontSize: '1.25rem', lineHeight: 1.8, mb: 3 }}>
                I am a dedicated Computer Engineer currently pursuing my Master's degree at Çankırı Karatekin University.
                With a strong foundation in both hardware and software development, I bring a unique perspective to
                solving complex technical challenges.
              </Typography>
              <Typography variant="body1" sx={{ fontSize: '1.25rem', lineHeight: 1.8, mb: 3 }}>
                My experience spans across web development, mobile applications, and hardware systems. I have worked
                on various projects including e-commerce platforms, 3D electronics websites, and hospital management
                systems. I am passionate about creating innovative solutions that make a real impact.
              </Typography>
              <Typography variant="body1" sx={{ fontSize: '1.25rem', lineHeight: 1.8 }}>
                Fluent in multiple languages (Arabic, English, French, and Turkish), I thrive in diverse environments
                and enjoy collaborating with teams from different cultural backgrounds. When I'm not coding, you can
                find me contributing to community projects or mentoring aspiring developers.
              </Typography>
            </AboutText>

            <EducationSection elevation={0}>
              <EducationTitle>Education</EducationTitle>
              <EducationItem
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                <Typography variant="h4">Feb 2025 - Now</Typography>
                <Typography variant="body1">
                  Master's degree in Computer Engineering<br />
                  Çankırı Karatekin University, Turkey<br />
                  Skills: Machine Learning, Augmented Reality (AR), Deep Learning, Cryptography, Bioinformatics, Data Classification
                </Typography>
              </EducationItem>
              <EducationItem
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
              >
                <Typography variant="h4">Sep 2020 - Aug 2024</Typography>
                <Typography variant="body1">
                  Bachelor of Engineering in Computer Engineering<br />
                  Çankırı Karatekin University, Turkey<br />
                  Skills: Three.js, Databases, PHP, Android Studio, PhpMyAdmin, Web Development, JavaScript, React.js, Front-End Development, GreenSock Animation Platform (GSAP), Website Building, SQL, Full-Stack Development, Kotlin, Cybersecurity, C++, MySQL, Back-End Web Development
                </Typography>
              </EducationItem>
              <EducationItem
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.6 }}
              >
                <Typography variant="h4">Sep 2019 - Aug 2020</Typography>
                <Typography variant="body1">
                  TOMER, Turkish Language and Literature<br />
                  Eskişehir Osmangazi Üniversitesi, Turkey<br />
                  Turkish Language Studies (2019–2020)
                </Typography>
              </EducationItem>
              <EducationItem
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.8 }}
              >
                <Typography variant="h4">Aug 2016 - Jul 2019</Typography>
                <Typography variant="body1">
                  Bachelor's degree in Physics<br />
                  Faculté des Sciences Semlalia Marrakech, Morocco
                </Typography>
              </EducationItem>
            </EducationSection>

            <SkillsSection elevation={0}>
              <SkillsTitle>My Skills</SkillsTitle>
              <SkillsGrid container spacing={4}>
                {skills.map((skill, index) => (
                  <Grid item xs={12} sm={6} md={4} key={index}>
                    <SkillCard
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                    >
                      <SkillTitle>{skill.title}</SkillTitle>
                      <SkillDescription>{skill.description}</SkillDescription>
                    </SkillCard>
                  </Grid>
                ))}
              </SkillsGrid>
            </SkillsSection>
          </AboutContent>
        </motion.div>
      </ContentWrapper>
    </AboutSection>
  );
};

export default About; 