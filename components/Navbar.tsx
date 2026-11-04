import { Mail, Sparkles } from "lucide-react";
import { AppBar, Toolbar, Typography, Box, Button } from "@mui/material";

export default function Navbar() {
  return (
    <AppBar 
      position="sticky" 
      elevation={0}
      sx={{ 
        backgroundColor: 'rgba(2, 6, 23, 0.75)', 
        backdropFilter: 'blur(16px)',
        WebkitBackdropFilter: 'blur(16px)', // Safari support
        borderBottom: '1px solid rgba(30, 41, 59, 0.8)',
        color: '#f8fafc',
        boxShadow: '0 4px 30px rgba(0, 0, 0, 0.3)',
        transition: 'all 0.3s ease-in-out'
      }}
    >
      <Toolbar 
        sx={{ 
          maxWidth: '72rem', 
          width: '100%', 
          mx: 'auto', 
          px: { xs: 3, md: 4 }, 
          py: 1.5, 
          display: 'flex', 
          justifyContent: 'space-between',
          alignItems: 'center' 
        }}
      >
        
        {/* Brand / Logo with Live Status Animation */}
        <Box 
          component="a" 
          href="#about"
          sx={{ 
            display: 'flex', 
            alignItems: 'center', 
            gap: 1.5,
            textDecoration: 'none',
            '&:hover .brand-text': {
              color: '#38bdf8'
            }
          }}
        >
          <Box sx={{ position: 'relative', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <Box 
              sx={{ 
                position: 'absolute',
                width: 10,
                height: 10,
                borderRadius: '50%',
                backgroundColor: '#22d3ee',
                animation: 'ping 2s cubic-bezier(0, 0, 0.2, 1) infinite',
                '@keyframes ping': {
                  '75%, 100%': {
                    transform: 'scale(2)',
                    opacity: 0,
                  },
                }
              }} 
            />
            <Box 
              sx={{ 
                width: 8, 
                height: 8, 
                borderRadius: '50%', 
                backgroundColor: '#06b6d4' 
              }} 
            />
          </Box>
          <Typography 
            variant="subtitle1" 
            className="brand-text"
            sx={{ 
              fontWeight: 800, 
              letterSpacing: '0.08em', 
              color: '#22d3ee', 
              fontSize: '1.05rem',
              transition: 'color 0.2s ease',
              background: 'linear-gradient(90deg, #22d3ee, #3b82f6)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent'
            }}
          >
            RAHUL BRAHMA
          </Typography>
        </Box>

        {/* Navigation Links with Smooth Underline Hover Effect */}
        <Box sx={{ display: { xs: 'none', md: 'flex' }, gap: 3.5, alignItems: 'center' }}>
          {['About', 'Experience', 'Projects', 'Skills', 'Education'].map((item) => (
            <Typography 
              key={item}
              component="a" 
              href={`#${item.toLowerCase()}`}
              sx={{ 
                fontSize: '0.875rem', 
                fontWeight: 500, 
                color: '#94a3b8', 
                textDecoration: 'none',
                position: 'relative',
                transition: 'color 0.25s ease',
                '&:hover': { 
                  color: '#22d3ee' 
                },
                '&::after': {
                  content: '""',
                  position: 'absolute',
                  width: '0%',
                  height: '2px',
                  bottom: '-4px',
                  left: '0',
                  backgroundColor: '#22d3ee',
                  transition: 'width 0.3s ease-in-out',
                  borderRadius: '2px'
                },
                '&:hover::after': {
                  width: '100%'
                }
              }}
            >
              {item}
            </Typography>
          ))}
        </Box>

        {/* Contact Action Button with Glowing Pulse Effect */}
        <Button 
          variant="contained"
          href="#contact"
          startIcon={<Mail size={16} />}
          sx={{ 
            backgroundColor: '#06b6d4', 
            color: '#020617', 
            fontWeight: 700,
            fontSize: '0.875rem',
            textTransform: 'none',
            px: 3,
            py: 1,
            borderRadius: '10px',
            boxShadow: '0 0 20px rgba(6, 182, 212, 0.35)',
            transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
            '&:hover': { 
              backgroundColor: '#38bdf8',
              boxShadow: '0 0 30px rgba(56, 189, 248, 0.6)',
              transform: 'translateY(-2px)'
            },
            '&:active': {
              transform: 'translateY(0)'
            }
          }}
        >
          Contact
        </Button>

      </Toolbar>
    </AppBar>
  );
}