import React from 'react';
import { styled } from '@mui/material/styles';
import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';

const ContactSection = styled('section')({
  padding: '4rem 0',
});

const ContactContent = styled('div')({
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

const ContactInfo = styled('div')({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  gap: '2rem',
});

const ContactText = styled('p')(({ theme }) => ({
  fontSize: '1.1rem',
  color: theme.palette.secondary.main,
  textAlign: 'center',
  maxWidth: '600px',
}));

const SocialLinks = styled('div')({
  display: 'flex',
  gap: '2rem',
});

const SocialLink = styled(motion.a)(({ theme }) => ({
  color: theme.palette.primary.main,
  fontSize: '2rem',
  transition: 'color 0.3s ease',
  '&:hover': {
    color: theme.palette.secondary.main,
  },
}));

const Contact: React.FC = () => {
  return (
    <ContactSection>
      <ContactContent>
        <Title>Get in Touch</Title>
        <ContactInfo>
          <ContactText>
            I'm always open to new opportunities and collaborations. Feel free to reach out to me through any of the following channels:
          </ContactText>
          <SocialLinks>
            <SocialLink
              href="https://github.com/yourusername"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <FaGithub />
            </SocialLink>
            <SocialLink
              href="https://linkedin.com/in/yourusername"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <FaLinkedin />
            </SocialLink>
            <SocialLink
              href="mailto:your.email@example.com"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <FaEnvelope />
            </SocialLink>
          </SocialLinks>
        </ContactInfo>
      </ContactContent>
    </ContactSection>
  );
};

export default Contact; 