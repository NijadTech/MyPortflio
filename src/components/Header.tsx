import React from 'react';
import { styled } from '@mui/material/styles';
import { motion } from 'framer-motion';

const HeaderContainer = styled('header')(({ theme }) => ({
  backgroundColor: theme.palette.primary.main,
  color: 'white',
  padding: '2rem 0',
  position: 'relative',
  overflow: 'hidden',
}));

const HeaderContent = styled('div')({
  maxWidth: '1200px',
  margin: '0 auto',
  padding: '0 2rem',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
});

const ProfileSection = styled('div')({
  display: 'flex',
  alignItems: 'center',
  gap: '2rem',
});

const ProfileImage = styled(motion.div)(({ theme }) => ({
  width: '150px',
  height: '150px',
  borderRadius: '50%',
  backgroundColor: theme.palette.secondary.main,
  overflow: 'hidden',
  border: '4px solid white',
  boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
  '& img': {
    width: '100%',
    height: '100%',
    objectFit: 'cover',
  },
}));

const TitleSection = styled('div')(({ theme }) => ({
  '& h1': {
    fontSize: '2.5rem',
    margin: 0,
    fontWeight: 700,
  },
  '& h2': {
    fontSize: '1.5rem',
    margin: '0.5rem 0 0',
    fontWeight: 400,
    color: theme.palette.secondary.main,
  },
}));

const Header: React.FC = () => {
  return (
    <HeaderContainer>
      <HeaderContent>
        <ProfileSection>
          <ProfileImage
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.5 }}
          >
            {/* Profile image will be added here */}
            <div style={{ width: '100%', height: '100%', backgroundColor: '#95a5a6' }} />
          </ProfileImage>
          <TitleSection>
            <h1>Your Name</h1>
            <h2>Computer Engineer</h2>
          </TitleSection>
        </ProfileSection>
      </HeaderContent>
    </HeaderContainer>
  );
};

export default Header; 