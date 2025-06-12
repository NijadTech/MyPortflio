import React from 'react';
import { styled } from '@mui/material/styles';
import { motion } from 'framer-motion';
import { Typography, Box, Grid, Paper, Button } from '@mui/material';
import DownloadIcon from '@mui/icons-material/Download';

const ExperienceSection = styled('section')({
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

const ExperienceContent = styled('div')({
  display: 'flex',
  flexDirection: 'column',
  gap: '6rem',
});

const ExperienceCard = styled(Paper)({
  padding: '3rem',
  borderRadius: '20px',
  boxShadow: '0 10px 30px rgba(0, 0, 0, 0.1)',
  backgroundColor: '#FFFFFF',
  marginBottom: '3rem',
});

const CardTitle = styled(Typography)({
  fontSize: '2.5rem',
  fontWeight: 600,
  marginBottom: '2.5rem',
  color: '#2C3E50',
  textAlign: 'center',
  background: 'linear-gradient(45deg, #FF6B6B, #4ECDC4)',
  WebkitBackgroundClip: 'text',
  WebkitTextFillColor: 'transparent',
});

const LanguageItem = styled(motion.div)({
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
  },
  '& p': {
    fontSize: '1.2rem',
    color: '#2C3E50',
    opacity: 0.9,
    lineHeight: 1.6,
  },
});

const ExpertiseItem = styled(motion.div)({
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
    marginBottom: '1rem',
  },
  '& ul': {
    listStyle: 'none',
    padding: 0,
    '& li': {
      fontSize: '1.1rem',
      color: '#2C3E50',
      marginBottom: '0.5rem',
      paddingLeft: '1.5rem',
      position: 'relative',
      '&::before': {
        content: '"•"',
        color: '#FF6B6B',
        position: 'absolute',
        left: 0,
      },
    },
  },
});

const DownloadButton = styled(Button)({
  padding: '1.2rem 2.5rem',
  borderRadius: '50px',
  textTransform: 'none',
  fontSize: '1.2rem',
  fontWeight: 600,
  transition: 'all 0.3s ease',
  boxShadow: '0 4px 15px rgba(0, 0, 0, 0.1)',
  '&:hover': {
    transform: 'translateY(-5px)',
    boxShadow: '0 8px 25px rgba(0, 0, 0, 0.15)',
  },
});

const Experience: React.FC = () => {
  const languages = [
    { name: 'Arabic', level: 'Native' },
    { name: 'English', level: 'Professional' },
    { name: 'French', level: 'Intermediate' },
    { name: 'Turkish', level: 'Intermediate' },
  ];

  const expertise = [
    {
      title: 'Web Development',
      description: 'Full-stack web development with modern technologies',
      skills: [
        'React.js, TypeScript, and Material-UI for frontend development',
        'Node.js and Express for backend development',
        'MongoDB and MySQL for database management',
        'RESTful API design and implementation',
        'Responsive and mobile-first design',
      ],
    },
    {
      title: 'Mobile Development',
      description: 'Android application development',
      skills: [
        'Kotlin and Java for Android development',
        'Firebase integration for backend services',
        'Material Design implementation',
        'Offline data synchronization',
        'Performance optimization',
      ],
    },
    {
      title: 'AI and Machine Learning',
      description: 'Master\'s degree in AI with focus on medical imaging',
      skills: [
        'Projects on detecting pancreatic cancer and brain tumors',
        'Deep learning and computer vision techniques',
        'Data preprocessing and model evaluation',
        'Collaboration with medical professionals',
        'Research and development in healthcare AI',
      ],
    },
  ];

  const handleDownloadCV = () => {
    // Replace with your actual CV file path
    window.open('/cv.pdf', '_blank');
  };

  return (
    <ExperienceSection>
      <ContentWrapper>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <SectionTitle>Experience & Languages</SectionTitle>
          <ExperienceContent>
            <ExperienceCard elevation={0}>
              <CardTitle>Languages</CardTitle>
              <Grid container spacing={3}>
                {languages.map((language, index) => (
                  <Grid item xs={12} sm={6} key={index}>
                    <LanguageItem
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                    >
                      <Typography variant="h4">{language.name}</Typography>
                      <Typography variant="body1">
                        Proficiency Level: {language.level}
                      </Typography>
                    </LanguageItem>
                  </Grid>
                ))}
              </Grid>
            </ExperienceCard>

            <ExperienceCard elevation={0}>
              <CardTitle>Expertise</CardTitle>
              <Grid container spacing={3}>
                {expertise.map((item, index) => (
                  <Grid item xs={12} key={index}>
                    <ExpertiseItem
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                    >
                      <Typography variant="h4">{item.title}</Typography>
                      <Typography variant="body1">{item.description}</Typography>
                      <ul>
                        {item.skills.map((skill, skillIndex) => (
                          <li key={skillIndex}>{skill}</li>
                        ))}
                      </ul>
                    </ExpertiseItem>
                  </Grid>
                ))}
              </Grid>
            </ExperienceCard>

            <Box sx={{ textAlign: 'center', mt: 4 }}>
              <DownloadButton
                variant="contained"
                startIcon={<DownloadIcon />}
                onClick={handleDownloadCV}
                sx={{
                  backgroundColor: '#FF6B6B',
                  '&:hover': {
                    backgroundColor: '#FF5252',
                  },
                }}
              >
                Download My CV
              </DownloadButton>
            </Box>
          </ExperienceContent>
        </motion.div>
      </ContentWrapper>
    </ExperienceSection>
  );
};

export default Experience; 