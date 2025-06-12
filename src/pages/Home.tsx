import React from 'react';
import { styled } from '@mui/material/styles';
import { motion } from 'framer-motion';
import { Typography, Button, Box, Container } from '@mui/material';
import { Link, LinkProps } from 'react-router-dom';
import { ButtonProps } from '@mui/material/Button';

const HeroSection = styled('section')({
  minHeight: '100vh',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  background: 'linear-gradient(135deg, #F7F9FC 0%, #E8F0F7 100%)',
  position: 'relative',
  overflow: 'hidden',
  '&::before': {
    content: '""',
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    background: 'url("/images/pattern.svg")',
    opacity: 0.1,
    zIndex: 1,
  },
});

const ContentWrapper = styled(Container)({
  position: 'relative',
  zIndex: 2,
  display: 'flex',
  alignItems: 'center',
  gap: '6rem',
  '@media (max-width: 1200px)': {
    gap: '4rem',
  },
  '@media (max-width: 768px)': {
    flexDirection: 'column',
    textAlign: 'center',
    gap: '3rem',
  },
});

const ProfileImage = styled(motion.div)({
  width: '500px',
  height: '500px',
  borderRadius: '50%',
  overflow: 'hidden',
  boxShadow: '0 20px 40px rgba(0, 0, 0, 0.15)',
  border: '10px solid #FFFFFF',
  position: 'relative',
  '@media (max-width: 1200px)': {
    width: '400px',
    height: '400px',
  },
  '@media (max-width: 768px)': {
    width: '300px',
    height: '300px',
  },
  '& img': {
    width: '100%',
    height: '100%',
    objectFit: 'cover',
    transition: 'transform 0.5s ease',
    '&:hover': {
      transform: 'scale(1.05)',
    },
  },
  '&::after': {
    content: '""',
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    background: 'linear-gradient(45deg, rgba(255, 107, 107, 0.1), rgba(78, 205, 196, 0.1))',
    borderRadius: '50%',
    zIndex: 1,
  },
});

const TextContent = styled('div')({
  flex: 1,
  maxWidth: '600px',
});

const Title = styled(Typography)({
  fontSize: '5rem',
  fontWeight: 700,
  marginBottom: '1.5rem',
  background: 'linear-gradient(45deg, #FF6B6B, #4ECDC4)',
  WebkitBackgroundClip: 'text',
  WebkitTextFillColor: 'transparent',
  lineHeight: 1.2,
  '@media (max-width: 768px)': {
    fontSize: '3.5rem',
  },
});

const Subtitle = styled(Typography)({
  fontSize: '2.5rem',
  color: '#2C3E50',
  marginBottom: '2rem',
  fontWeight: 500,
  '@media (max-width: 768px)': {
    fontSize: '2rem',
  },
});

const Description = styled(Typography)({
  fontSize: '1.4rem',
  lineHeight: 1.8,
  color: '#2C3E50',
  marginBottom: '3rem',
  opacity: 0.9,
  '@media (max-width: 768px)': {
    fontSize: '1.2rem',
  },
});

const ButtonGroup = styled(Box)({
  display: 'flex',
  gap: '2rem',
  marginTop: '3rem',
  '@media (max-width: 768px)': {
    flexDirection: 'column',
    gap: '1rem',
  },
});

const StyledButton = styled(Button)<ButtonProps & { component?: React.ElementType } & LinkProps>({
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

const Home: React.FC = () => {
  return (
    <HeroSection>
      <ContentWrapper maxWidth="lg">
        <ProfileImage
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          <img
            src="/images/profile.jpg"
            alt="Hafsa Nijad"
            style={{ width: '100%', height: '100%', objectFit: 'cover' }}
          />
        </ProfileImage>
        <TextContent>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <Title variant="h1">
              Hi, I'm Hafsa Nijad
            </Title>
            <Subtitle variant="h2">
              Computer Engineer & Full Stack Developer & AI Engineer
            </Subtitle>
            <Description variant="body1">
              I am a passionate Computer Engineer from Morocco, born on 25/10/1998, with expertise in web development and software engineering.
              Currently pursuing my Master's degree in AI at Çankırı Karatekin University, I bring a strong foundation
              in both theoretical knowledge and practical experience to create innovative solutions.
            </Description>
            <ButtonGroup>
              <StyledButton
                variant="contained"
                component={Link}
                to="/projects"
                sx={{
                  backgroundColor: '#FF6B6B',
                  '&:hover': {
                    backgroundColor: '#FF5252',
                  },
                }}
              >
                View My Work
              </StyledButton>
              <StyledButton
                variant="outlined"
                component={Link}
                to="https://wa.me/905525254186"
                sx={{
                  borderColor: '#FF6B6B',
                  color: '#FF6B6B',
                  '&:hover': {
                    borderColor: '#FF5252',
                    color: '#FF5252',
                  },
                }}
              >
                Contact Me
              </StyledButton>
            </ButtonGroup>
          </motion.div>
        </TextContent>
      </ContentWrapper>
    </HeroSection>
  );
};

export default Home; 