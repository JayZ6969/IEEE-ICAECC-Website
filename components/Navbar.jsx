'use client'

import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import MenuIcon from '@mui/icons-material/Menu';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import ListItemIcon from '@mui/material/ListItemIcon';
import Button from '@mui/material/Button';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';
import Collapse from '@mui/material/Collapse';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Image from "next/image";
import REVA from "../public/REVA_1.png";
import IEEE from "../public/IEEE.png";
import { fabClasses } from '@mui/material';

const classes = {
    container: "flex justify-between items-center lg:py-5 md:py-4 sm:py-3",
    mininavbar: "flex flex-row w-full justify-between items-center bg-black h-8 px-4",
    minilogo: "h-4 w-auto",
    logo: "lg:h-12 md:h-11 md:h-10 xs:h-9 h-8 w-auto",
}

const pages = ['Home', 'Author Information', 'Program', 'Registration', 'Travel & Accomodation', 'Contact Us'];

const ieee_pages = ['IEEE.org', 'IEEE Xplore Digital Library', 'IEEE Standards', 'IEEE Spectrum', 'More Sites'];
const drawerWidth = 240;

export default function Navbar() {
    const [anchorElNav, setAnchorElNav] = React.useState(null);
     
    const [open, setOpen] = React.useState({
        home: false,
        authorInformation: false,
        program: false,
        registration: false,
        travel: false,
        sponsors: false,
    });

    const [mobileOpen, setMobileOpen] = React.useState(false);

    const handleCloseNavMenu = () => {
        setAnchorElNav(null);
        setOpen(false);
    }

    const handleDrawerToggle = () => {
        setMobileOpen((prevState) => !prevState);
    };
    
    const handleClick = (menu) => {
        setOpen((prevState) => ({
            ...prevState,
            [menu]: !prevState[menu],
        }));
        setAnchorElNav((prevState) => (prevState ? null : menu));
    }; 

    const drawer = (
        <Box sx={{ textAlign: 'center' }}>
            <Typography variant="h6" sx={{ my: 2 }}>
                ICAECC - 2025
            </Typography>
            <Divider />
            <List>
                <ListItem sx={{flexDirection: 'column'}}  disablePadding>
                    <ListItemButton sx={{ textAlign: 'left', alignItems: 'space-between', width: '100%' }} onClick={() => handleClick('home')}>
                        <ListItemText primary="Home" />
                        {open.home ? <ExpandLess /> : <ExpandMore />}
                    </ListItemButton> 
                    <Collapse in={open.home} timeout="auto" unmountOnExit>
                        <List component="div" disablePadding>
                            <ListItemButton component="a" href="/home/about" sx={{ pl: 4 }}>
                                <ListItemText primary="About ICAECC" />
                            </ListItemButton>
                            <ListItemButton component="a" href="/home/organizers" sx={{ pl: 4 }}>
                                <ListItemText primary="Organizers" />
                            </ListItemButton>
                            <ListItemButton component="a" href="/home/past-conferences" sx={{ pl: 4 }}>
                                <ListItemText primary="Past Conferences" />
                            </ListItemButton>
                            <ListItemButton component="a" href="/home/general-faq" sx={{ pl: 4 }}>
                                <ListItemText primary="General FAQ" />
                            </ListItemButton>
                        </List>
                    </Collapse>
                </ListItem>

                <ListItem sx={{flexDirection: 'column'}}  disablePadding>
                    <ListItemButton sx={{ textAlign: 'left', alignItems: 'space-between', width: '100%' }} onClick={() => handleClick('authorInformation')}>
                        <ListItemText primary="Author Information" />
                        {open.authorInformation ? <ExpandLess /> : <ExpandMore />}
                    </ListItemButton> 
                    <Collapse in={open.authorInformation} timeout="auto" unmountOnExit>
                        <List component="div" disablePadding>
                            <ListItemButton component="a" href="/author-information/topics" sx={{ pl: 4 }}>
                                <ListItemText primary="Topics" />
                            </ListItemButton>
                            <ListItemButton component="a" href="/author-information/author-submission" sx={{ pl: 4 }}>
                                <ListItemText primary="Author Submission" />
                            </ListItemButton>
                            <ListItemButton component="a" href="/author-information/cfp" sx={{ pl: 4 }}>
                                <ListItemText primary="CFP" />
                            </ListItemButton>
                            <ListItemButton component="a" href="/author-information/tutorials" sx={{ pl: 4 }}>
                                <ListItemText primary="Tutorials" />
                            </ListItemButton>
                            <ListItemButton component="a" href="/author-information/student-research-forum" sx={{ pl: 4 }}>
                                <ListItemText primary="Student Research Forum" />
                            </ListItemButton>
                        </List>
                    </Collapse>
                </ListItem>

                <ListItem sx={{flexDirection: 'column'}}  disablePadding>
                    <ListItemButton sx={{ textAlign: 'left', alignItems: 'space-between', width: '100%' }} onClick={() => handleClick('program')}>
                        <ListItemText primary="Program" />
                        {open.program ? <ExpandLess /> : <ExpandMore />}
                    </ListItemButton> 
                    <Collapse in={open.program} timeout="auto" unmountOnExit>
                        <List component="div" disablePadding>
                            <ListItemButton component="a" href="/program/keynote-sessions" sx={{ pl: 4 }}>
                                <ListItemText primary="Keynote Sessions" />
                            </ListItemButton>
                            <ListItemButton component="a" href="/program/workshops" sx={{ pl: 4 }}>
                                <ListItemText primary="Workshops" />
                            </ListItemButton>
                            <ListItemButton component="a" href="/program/invited-speakers" sx={{ pl: 4 }}>
                                <ListItemText primary="Invted Speakers" />
                            </ListItemButton>
                        </List>
                    </Collapse>
                </ListItem>

                <ListItem sx={{flexDirection: 'column'}}  disablePadding>
                    <ListItemButton sx={{ textAlign: 'left', alignItems: 'space-between', width: '100%' }} onClick={handleClick}>
                        <ListItemText primary="Registration" />
                    </ListItemButton> 
                </ListItem>

                <ListItem sx={{flexDirection: 'column'}}  disablePadding>
                    <ListItemButton sx={{ textAlign: 'left', alignItems: 'space-between', width: '100%' }} onClick={handleClick}>
                        <ListItemText primary="Travel & Accomodation" />
                    </ListItemButton> 
                </ListItem>

                <ListItem sx={{flexDirection: 'column'}}  disablePadding>
                    <ListItemButton sx={{ textAlign: 'left', alignItems: 'space-between', width: '100%' }} onClick={handleClick}>
                        <ListItemText primary="Sponsors" />
                    </ListItemButton> 
                </ListItem>
            </List>
        </Box>
    );

    return (
        <nav>
            <AppBar position='static' className={classes.mininavbar} sx={{backgroundColor: '#000', display: {md: 'flex', xs: 'none'}}}>
                <div className={classes.mininavbar}>    
                <Box sx={{ flexGrow: 0 , display: 'flex'}}>
                        {ieee_pages.map((page) => (
                        <Button
                            key={page}
                            onClick={handleCloseNavMenu}
                            sx={{ color: 'white', display: 'block', paddingX: '0.75rem' }}
                        >
                            {page}
                        </Button>
                        ))}
                </Box>
                <Image className={classes.minilogo} src={IEEE} alt="" />
                </div>
            </AppBar>
            <AppBar position="static">
                <Toolbar className={classes.container} sx={{backgroundColor: '#fff'}}>
                    <Image className={classes.logo} src={REVA} alt="" />
                    <Box sx={{ flexGrow: 0, display: { xs: 'flex', lg: 'none' } }}>
                        <IconButton
                        size="large"
                        aria-label="menu"
                        aria-controls="menu-appbar"
                        aria-haspopup="true"
                        onClick={handleDrawerToggle}
                        color="black"
                        sx={{padding: '0.25rem'}}
                        >
                            <MenuIcon />
                        </IconButton>
                        <Drawer
                        anchor='right'
                            variant="temporary"
                            open={mobileOpen}
                            onClose={handleDrawerToggle}
                            ModalProps={{
                                keepMounted: true,
                            }}
                            sx={{
                                display: { sm: 'block', lg: 'none' },
                                '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
                            }}
                            >
                            {drawer}
                        </Drawer>
                    </Box>
                    <Box sx={{ flexGrow: 0, display: { xs: 'none', lg: 'flex'} }}>
                        <div>
                            <Button
                                id="basic-button-home"
                                aria-controls={open.home ? 'home-menu' : undefined}
                                aria-haspopup="true"
                                aria-expanded={open.home ? 'true' : undefined}   
                                onClick={() => handleClick('home')}
                                sx={{ color: 'black', display: 'flex', paddingX: '0.75rem' }}
                                endIcon={<KeyboardArrowDownIcon />}
                            >
                                Home      
                            </Button>
                            <Menu
                                id={`${open.home ? 'home-menu' : ''}`}
                                anchorEl={anchorElNav ? document.querySelector(`#basic-button-${anchorElNav}`) : null}
                                open={!!anchorElNav && open.home}
                                onClose={handleCloseNavMenu}
                                MenuListProps={{
                                    'aria-labelledby': 'basic-button',
                                }}
                                sx={{display: {lg: 'flex', xs: 'none'}}}
                            >
                                <MenuItem component="a" href="#" onClick={handleCloseNavMenu}>About ICAECC</MenuItem>
                                <MenuItem component="a" href="#" onClick={handleCloseNavMenu}>Organizers</MenuItem>
                                <MenuItem component="a" href="#" onClick={handleCloseNavMenu}>Past Conferences</MenuItem>
                                <MenuItem component="a" href="#" onClick={handleCloseNavMenu}>General FAQ  </MenuItem>
                            </Menu>
                        </div>

                        <div>
                            <Button
                                id="basic-button-authorInformation"
                                aria-controls={open.authorInformation ? 'author-information' : undefined}
                                aria-haspopup="true"
                                aria-expanded={open.authorInformation ? 'true' : undefined}   
                                onClick={() => handleClick('authorInformation')}
                                sx={{ color: 'black', display: 'flex', paddingX: '0.75rem' }}
                                endIcon={<KeyboardArrowDownIcon />}
                            >
                                Author Information     
                            </Button>
                            <Menu
                                id={`${open.authorInformation ? 'author-information' : ''}`}
                                anchorEl={anchorElNav ? document.querySelector(`#basic-button-${anchorElNav}`) : null}
                                open={!!anchorElNav && open.authorInformation}
                                onClose={handleCloseNavMenu}
                                MenuListProps={{
                                    'aria-labelledby': 'basic-button',
                                }}
                                sx={{display: {lg: 'flex', xs: 'none'}}}
                            >
                                <MenuItem component="a" href="#" onClick={handleCloseNavMenu}>Topics</MenuItem>
                                <MenuItem component="a" href="#" onClick={handleCloseNavMenu}>Author Submission</MenuItem>
                                <MenuItem component="a" href="#" onClick={handleCloseNavMenu}>CFP</MenuItem>
                                <MenuItem component="a" href="#" onClick={handleCloseNavMenu}>Tutorials</MenuItem>
                                <MenuItem component="a" href="#" onClick={handleCloseNavMenu}>Student Research Forum</MenuItem>
                            </Menu>
                        </div>

                        <div>
                            <Button
                                id="basic-button-program"
                                aria-controls={open.program ? 'program' : undefined}
                                aria-haspopup="true"
                                aria-expanded={open.program ? 'true' : undefined}   
                                onClick={() => handleClick('program')}
                                sx={{ color: 'black', display: 'flex', paddingX: '0.75rem' }}
                                endIcon={<KeyboardArrowDownIcon />}
                            >
                                Program     
                            </Button>
                            <Menu
                                id={`${open.program ? 'program' : ''}`}
                                anchorEl={anchorElNav ? document.querySelector(`#basic-button-${anchorElNav}`) : null}
                                open={!!anchorElNav && open.program}
                                onClose={handleCloseNavMenu}
                                MenuListProps={{
                                    'aria-labelledby': 'basic-button',
                                }}
                                sx={{display: {lg: 'flex', xs: 'none'}}}
                            >
                                <MenuItem component="a" href="#" onClick={handleCloseNavMenu}>Keynote Sessions</MenuItem>
                                <MenuItem component="a" href="#" onClick={handleCloseNavMenu}>Workshop</MenuItem>
                                <MenuItem component="a" href="#" onClick={handleCloseNavMenu}>Invited Speakers</MenuItem>
                            </Menu>
                        </div>
                        
                        <div>
                            <Button
                                id="basic-button-registration"
                                aria-controls={open.registration ? 'registration' : undefined}
                                aria-haspopup="true"
                                aria-expanded={open.registration ? 'true' : undefined}   
                                onClick={() => handleClick('registration')}
                                sx={{ color: 'black', display: 'flex', paddingX: '0.75rem' }}
                                endIcon={<KeyboardArrowDownIcon />}
                            >
                                Registration    
                            </Button>
                        </div>

                        <div>
                            <Button
                                id="basic-button-travel"
                                aria-controls={open.travel ? 'travel' : undefined}
                                aria-haspopup="true"
                                aria-expanded={open.travel ? 'true' : undefined}   
                                onClick={() => handleClick('travel')}
                                sx={{ color: 'black', display: 'flex', paddingX: '0.75rem' }}
                                endIcon={<KeyboardArrowDownIcon />}
                            >
                                Travel & Accomodation   
                            </Button>
                        </div>

                        <div>
                            <Button
                                id="basic-button-sponsors"
                                aria-controls={open.sponsors ? 'sponsors' : undefined}
                                aria-haspopup="true"
                                aria-expanded={open.sponsors ? 'true' : undefined}   
                                onClick={() => handleClick('sponsors')}
                                sx={{ color: 'black', display: 'flex', paddingX: '0.75rem' }}
                                endIcon={<KeyboardArrowDownIcon />}
                            >
                                Sponsors  
                            </Button>
                        </div>
                    </Box>
                </Toolbar>
            </AppBar>
        </nav>
    )
}