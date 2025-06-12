import React, { useState } from 'react';
import { styled } from '@mui/material/styles';
import { AppBar, Toolbar, Typography, Box, IconButton, Drawer, List, ListItem, ListItemText, Button } from '@mui/material';
import { Link, LinkProps } from 'react-router-dom';
import MenuIcon from '@mui/icons-material/Menu';

const StyledAppBar = styled(AppBar)({
  backgroundColor: 'rgba(247, 249, 252, 0.95)',
  backdropFilter: 'blur(10px)',
  boxShadow: '0 2px 20px rgba(0, 0, 0, 0.1)',
  transition: 'all 0.3s ease',
});

const StyledToolbar = styled(Toolbar)({
  maxWidth: '1400px',
  width: '100%',
  margin: '0 auto',
  padding: '1.5rem 2rem',
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
});

const Logo = styled(Typography)<{ component: React.ElementType } & LinkProps>({
  fontFamily: 'Poppins, sans-serif',
  fontWeight: 700,
  fontSize: '2.5rem',
  background: 'linear-gradient(45deg, #FF6B6B, #4ECDC4)',
  WebkitBackgroundClip: 'text',
  WebkitTextFillColor: 'transparent',
  cursor: 'pointer',
  marginRight: '4rem',
  '@media (max-width: 768px)': {
    marginRight: '0',
    fontSize: '2rem',
  },
});

const NavLinks = styled(Box)({
  display: 'flex',
  gap: '2rem',
  alignItems: 'center',
});

const NavButton = styled(Button)<{ component: React.ElementType } & LinkProps>({
  color: '#2C3E50',
  fontSize: '1.2rem',
  fontWeight: 600,
  textTransform: 'none',
  position: 'relative',
  padding: '0.5rem 1rem',
  '&::after': {
    content: '""',
    position: 'absolute',
    bottom: '-5px',
    left: '0',
    width: '0',
    height: '2px',
    background: 'linear-gradient(45deg, #FF6B6B, #4ECDC4)',
    transition: 'width 0.3s ease',
  },
  '&:hover::after': {
    width: '100%',
  },
  '&:hover': {
    backgroundColor: 'transparent',
  },
});

const Navbar: React.FC = () => {
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawer = (
    <List>
      <ListItem button component={Link} to="/" onClick={handleDrawerToggle}>
        <ListItemText primary="Home" />
      </ListItem>
      <ListItem button component={Link} to="/about" onClick={handleDrawerToggle}>
        <ListItemText primary="About" />
      </ListItem>
      <ListItem button component={Link} to="/experience" onClick={handleDrawerToggle}>
        <ListItemText primary="Experience" />
      </ListItem>
      <ListItem button component={Link} to="/projects" onClick={handleDrawerToggle}>
        <ListItemText primary="Projects" />
      </ListItem>
      <ListItem button component={Link} to="/contact" onClick={handleDrawerToggle}>
        <ListItemText primary="Contact" />
      </ListItem>
    </List>
  );

  return (
    <StyledAppBar position="fixed" elevation={0}>
      <StyledToolbar>
        <Box sx={{ display: 'flex', alignItems: 'center' }}>
          <Logo component={Link} to="/">
            HN
          </Logo>
          <NavLinks sx={{ display: { xs: 'none', md: 'flex' } }}>
            <NavButton component={Link} to="/">
              Home
            </NavButton>
            <NavButton component={Link} to="/about">
              About
            </NavButton>
            <NavButton component={Link} to="/experience">
              Experience
            </NavButton>
            <NavButton component={Link} to="/projects">
              Projects
            </NavButton>
            <NavButton component={Link} to="/contact">
              Contact
            </NavButton>
          </NavLinks>
        </Box>
        <IconButton
          color="inherit"
          aria-label="open drawer"
          edge="end"
          onClick={handleDrawerToggle}
          sx={{ display: { md: 'none' } }}
        >
          <MenuIcon />
        </IconButton>
      </StyledToolbar>
      <Drawer
        variant="temporary"
        anchor="right"
        open={mobileOpen}
        onClose={handleDrawerToggle}
        ModalProps={{
          keepMounted: true,
        }}
        sx={{
          display: { xs: 'block', md: 'none' },
          '& .MuiDrawer-paper': { boxSizing: 'border-box', width: 240 },
        }}
      >
        {drawer}
      </Drawer>
    </StyledAppBar>
  );
};

export default Navbar; 