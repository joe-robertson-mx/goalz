import React from 'react';
import {BottomNavigation, BottomNavigationAction, Box, AppBar, Typography, Toolbar, IconButton,  Menu, MenuItem} from '@mui/material';
import {Home, FitnessCenter, Settings, Api, AccountCircle} from '@mui/icons-material';

export interface PageLayoutProps {
    children: React.ReactNode;
}

export default function PageLayout({children}: PageLayoutProps) {

    const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  
    const handleMenu = (event: React.MouseEvent<HTMLElement>) => {
      setAnchorEl(event.currentTarget);
    };
  
    const handleClose = () => {
      setAnchorEl(null);
    };
  

    return (
        <React.Fragment>
            <AppBar position="static">
                <Toolbar>
                    <Api sx={{ mr: 3 }}/>
                <Typography variant="h6" 
                sx={{
                    mr: 2,
                    fontFamily: 'monospace',
                    fontWeight: 700,
                    letterSpacing: '.2rem',
                    color: 'inherit',
                    textDecoration: 'none',
                    flexGrow: 1
                    }}>
                    GOALZ
                </Typography>
                <div>
                    <IconButton
                        size="large"
                        aria-label="account of current user"
                        aria-controls="menu-appbar"
                        aria-haspopup="true"
                        onClick={handleMenu}
                        color="inherit"
                    >
                        <AccountCircle />
                    </IconButton>
                    <Menu
                        id="menu-appbar"
                        anchorEl={anchorEl}
                        anchorOrigin={{
                        vertical: 'top',
                        horizontal: 'right',
                        }}
                        keepMounted
                        transformOrigin={{
                        vertical: 'top',
                        horizontal: 'right',
                        }}
                        open={Boolean(anchorEl)}
                        onClose={handleClose}
                    >
                        <MenuItem onClick={handleClose}>Joe</MenuItem>
                        <MenuItem onClick={handleClose}>Profile</MenuItem>
                        <MenuItem onClick={handleClose}>Sign Out</MenuItem>
                    </Menu>
                    </div>
                </Toolbar>
            </AppBar>
            <Box>
                {children}
            </Box>
            {/* <BottomNavigation showLabels>
                <BottomNavigationAction label="Home" href="/" icon={<Home />} />
                <BottomNavigationAction label="New Task Template" href="/workoutedit" icon={<FitnessCenter />} />
                <BottomNavigationAction label="Settings" icon={<Settings />} />
            </BottomNavigation> */}
        </React.Fragment>
    )
}