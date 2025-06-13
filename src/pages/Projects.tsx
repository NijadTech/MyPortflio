import React from 'react';
import { styled } from '@mui/material/styles';
import { motion } from 'framer-motion';
import { Typography, Box, Grid, Button, Link } from '@mui/material';

const ProjectsSection = styled('section')({
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

const ProjectsGrid = styled(Grid)({
  marginTop: '3rem',
});

const ProjectCard = styled(motion.div)({
  height: '100%',
  borderRadius: '20px',
  overflow: 'hidden',
  backgroundColor: '#FFFFFF',
  boxShadow: '0 10px 30px rgba(0, 0, 0, 0.1)',
  transition: 'transform 0.3s ease, box-shadow 0.3s ease',
  '&:hover': {
    transform: 'translateY(-10px)',
    boxShadow: '0 15px 40px rgba(0, 0, 0, 0.15)',
  },
});

const ProjectImage = styled('div')({
  position: 'relative',
  paddingTop: '56.25%', // 16:9 aspect ratio
  overflow: 'hidden',
  '& img': {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    objectFit: 'cover',
    transition: 'transform 0.3s ease',
  },
  '&:hover img': {
    transform: 'scale(1.1)',
  },
});

const ProjectContent = styled(Box)({
  padding: '2rem',
  '& h3': {
    fontSize: '1.8rem',
    fontWeight: 600,
    marginBottom: '1rem',
    color: '#2C3E50',
  },
  '& p': {
    fontSize: '1.1rem',
    lineHeight: 1.6,
    color: '#2C3E50',
    marginBottom: '1.5rem',
    opacity: 0.9,
  },
});

const ProjectTags = styled(Box)({
  display: 'flex',
  flexWrap: 'wrap',
  gap: '0.5rem',
  marginBottom: '1.5rem',
  '& span': {
    padding: '0.5rem 1rem',
    borderRadius: '50px',
    backgroundColor: '#F0F2F5',
    fontSize: '0.9rem',
    color: '#2C3E50',
  },
});

const StyledButton = styled(Button)({
  padding: '0.8rem 2rem',
  borderRadius: '50px',
  textTransform: 'none',
  fontSize: '1.1rem',
  fontWeight: 600,
  transition: 'all 0.3s ease',
  '&:hover': {
    transform: 'translateY(-3px)',
  },
});

const Projects: React.FC = () => {
  const projects = [
    {
      title: 'Order Website',
      description: 'A full-featured e-commerce platform with user authentication, product management, and payment integration.',
      image: '/MyPortflio/images/cayweb.jpg',
      tags: ['React', 'Node.js', 'MongoDB', 'Stripe'],
      githubLink: 'https://github.com/NijadTech/CayWeb',
      liveLink: 'https://cayweb.vercel.app/',
    },
    {
      title: '3D Electronics Website',
      description: 'An interactive website showcasing electronic products with 3D models and real-time customization.',
      image: '/MyPortflio/images/3D.jpg',
      tags: ['Three.js', 'React', 'WebGL'],
      githubLink: 'https://github.com/NijadTech/3D-Website',
      liveLink: 'https://nijadtech.github.io/MyPortflio/#/projects',
    },
    {
      title: 'Portfolio Website',
      description: 'A personal portfolio website showcasing my projects and skills.',
      image: '/MyPortflio/images/portflio.jpg',
      tags: ['React', 'Material-UI', 'Framer Motion'],
      githubLink: 'https://github.com/NijadTech/Phd.Portflio',
      liveLink: 'https://nijadtech.github.io/Phd.Portflio/',
    },
    {
      title: 'Odd Website',
      description: 'A website for the Haut-Commissariat au Plan (HCP) in Dakhla, showcasing statistics and information.',
      image: '/MyPortflio/images/hcp.jpg',
      tags: ['PHP', 'HTML', 'CSS', 'JavaScript'],
      githubLink: 'https://github.com/NijadTech/OddWebsite',
      liveLink: '#',
    },
    {
      title: 'Music Player App',
      description: 'A mobile application for playing music with a user-friendly interface.',
      image: '/MyPortflio/images/music.jpg',
      tags: ['Kotlin', 'Android', 'Firebase'],
      githubLink: 'https://github.com/NijadTech/Music-Player-App',
      liveLink: '#',
    },
    {
      title: 'AI Brain Tumor Detection',
      description: 'A project focused on detecting brain tumors using AI and machine learning techniques.',
      image: '/MyPortflio/images/BrainTumor.jpg',
      tags: ['AI', 'Machine Learning', 'Medical Imaging'],
      githubLink: '/MyPortflio/images/Project.pdf',
      liveLink: '#',
    },
    {
      title: 'Pancreatic Cancer Detection',
      description: 'A project focused on detecting pancreatic cancer using AI and machine learning techniques.',
      image: '/MyPortflio/images/Pancreatic.png',
      tags: ['AI', 'Machine Learning', 'Medical Imaging'],
      githubLink: '/MyPortflio/images/Article.pdf',
      liveLink: '#',
    },
  ];

  return (
    <ProjectsSection>
      <ContentWrapper>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <SectionTitle>My Projects</SectionTitle>
          <ProjectsGrid container spacing={4}>
            {projects.map((project, index) => (
              <Grid item xs={12} sm={6} key={index}>
                <ProjectCard
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <ProjectImage>
                    <img src={project.image} alt={project.title} />
                  </ProjectImage>
                  <ProjectContent>
                    <Typography variant="h3">{project.title}</Typography>
                    <Typography variant="body1">{project.description}</Typography>
                    <ProjectTags>
                      {project.tags.map((tag, tagIndex) => (
                        <span key={tagIndex}>{tag}</span>
                      ))}
                    </ProjectTags>
                    <Box sx={{ display: 'flex', gap: 2 }}>
                      <Link href={project.githubLink} target="_blank" rel="noopener noreferrer" underline="none">
                        <StyledButton
                          variant="contained"
                          sx={{
                            backgroundColor: '#333',
                            '&:hover': {
                              backgroundColor: '#444',
                            },
                          }}
                        >
                          GitHub
                        </StyledButton>
                      </Link>
                      {project.liveLink !== '#' && (
                        <Link href={project.liveLink} target="_blank" rel="noopener noreferrer" underline="none">
                          <StyledButton
                            variant="contained"
                            sx={{
                              backgroundColor: '#FF6B6B',
                              '&:hover': {
                                backgroundColor: '#FF5252',
                              },
                            }}
                          >
                            Live Demo
                          </StyledButton>
                        </Link>
                      )}
                    </Box>
                  </ProjectContent>
                </ProjectCard>
              </Grid>
            ))}
          </ProjectsGrid>
        </motion.div>
      </ContentWrapper>
    </ProjectsSection>
  );
};

export default Projects; 