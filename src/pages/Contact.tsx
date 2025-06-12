import React from 'react';
import { styled } from '@mui/material/styles';
import { motion } from 'framer-motion';
import { Typography, Box, Grid, Paper, TextField, Button } from '@mui/material';

const ContactSection = styled('section')({
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

const ContactGrid = styled(Grid)({
  marginTop: '3rem',
});

const ContactCard = styled(Paper)({
  padding: '3rem',
  borderRadius: '20px',
  backgroundColor: '#FFFFFF',
  boxShadow: '0 10px 30px rgba(0, 0, 0, 0.1)',
  height: '100%',
});

const ContactInfo = styled(Box)({
  marginBottom: '3rem',
  '& h3': {
    fontSize: '2rem',
    fontWeight: 600,
    marginBottom: '1.5rem',
    color: '#2C3E50',
  },
  '& p': {
    fontSize: '1.2rem',
    lineHeight: 1.6,
    color: '#2C3E50',
    marginBottom: '1rem',
    opacity: 0.9,
  },
});

const SocialLinks = styled(Box)({
  display: 'flex',
  flexDirection: 'column',
  gap: '1.5rem',
  '& a': {
    display: 'flex',
    alignItems: 'center',
    gap: '1rem',
    textDecoration: 'none',
    color: '#2C3E50',
    fontSize: '1.2rem',
    transition: 'all 0.3s ease',
    '&:hover': {
      color: '#FF6B6B',
      transform: 'translateX(10px)',
    },
    '& i': {
      fontSize: '1.5rem',
      width: '40px',
      height: '40px',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: '#F0F2F5',
      borderRadius: '50%',
      transition: 'all 0.3s ease',
    },
    '&:hover i': {
      backgroundColor: '#FF6B6B',
      color: '#FFFFFF',
    },
  },
});

const StyledTextField = styled(TextField)({
  marginBottom: '2rem',
  '& .MuiOutlinedInput-root': {
    borderRadius: '10px',
    '& fieldset': {
      borderColor: '#E0E0E0',
    },
    '&:hover fieldset': {
      borderColor: '#FF6B6B',
    },
    '&.Mui-focused fieldset': {
      borderColor: '#FF6B6B',
    },
  },
  '& .MuiInputLabel-root': {
    fontSize: '1.1rem',
  },
  '& .MuiInputBase-input': {
    fontSize: '1.1rem',
    padding: '1rem',
  },
});

const StyledButton = styled(Button)({
  padding: '1rem 2rem',
  borderRadius: '50px',
  textTransform: 'none',
  fontSize: '1.2rem',
  fontWeight: 600,
  transition: 'all 0.3s ease',
  '&:hover': {
    transform: 'translateY(-3px)',
  },
});

const Contact: React.FC = () => {
  const socialLinks = [
    { icon: 'fas fa-envelope', text: 'nijadhafsa@gmail.com', link: 'mailto:nijadhafsa@gmail.com' },
    { icon: 'fas fa-phone', text: '+905525254186', link: 'tel:+905525254186' },
    { icon: 'fas fa-map-marker-alt', text: 'Cankiri, Turkey', link: '#' },
  ];

  return (
    <ContactSection>
      <ContentWrapper>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <SectionTitle>Get In Touch</SectionTitle>
          <ContactGrid container spacing={4}>
            <Grid item xs={12} md={5}>
              <ContactCard elevation={0}>
                <ContactInfo>
                  <Typography variant="h3">Contact Information</Typography>
                  <Typography variant="body1">
                    Feel free to reach out to me for any inquiries or opportunities. I'm always open to discussing new projects, creative ideas, or opportunities to be part of your visions.
                  </Typography>
                </ContactInfo>
                <SocialLinks>
                  {socialLinks.map((link, index) => (
                    <motion.a
                      key={index}
                      href={link.link}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                    >
                      <i className={link.icon}></i>
                      <span>{link.text}</span>
                    </motion.a>
                  ))}
                </SocialLinks>
              </ContactCard>
            </Grid>
            <Grid item xs={12} md={7}>
              <ContactCard elevation={0}>
                <Typography variant="h3" sx={{ fontSize: '2rem', mb: 3 }}>
                  Send Me a Message
                </Typography>
                <form>
                  <StyledTextField
                    fullWidth
                    label="Your Name"
                    variant="outlined"
                  />
                  <StyledTextField
                    fullWidth
                    label="Your Email"
                    variant="outlined"
                  />
                  <StyledTextField
                    fullWidth
                    label="Subject"
                    variant="outlined"
                  />
                  <StyledTextField
                    fullWidth
                    label="Message"
                    variant="outlined"
                    multiline
                    rows={4}
                  />
                  <StyledButton
                    variant="contained"
                    sx={{
                      backgroundColor: '#FF6B6B',
                      '&:hover': {
                        backgroundColor: '#FF5252',
                      },
                    }}
                  >
                    Send Message
                  </StyledButton>
                </form>
              </ContactCard>
            </Grid>
          </ContactGrid>
        </motion.div>
      </ContentWrapper>
    </ContactSection>
  );
};

export default Contact; 