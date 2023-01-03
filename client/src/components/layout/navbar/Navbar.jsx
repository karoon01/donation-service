import React from 'react';
import {
    AppBar,
    Button,
    CssBaseline,
    Link as MuiLink,
    Stack,
    Toolbar,
    Typography,
} from '@mui/material';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { logout, selectIsAuth } from '../../../redux/slices/authSlice';

function Navbar() {
    const dispatch = useDispatch();
    const isAuthenticated = useSelector(selectIsAuth);

    const onClickLogout = () => {
        if (window.confirm('Are you sure to logout?')) {
            dispatch(logout());
        }
        window.localStorage.removeItem('accessToken');
        window.localStorage.removeItem('refreshToken');
    };

    return (
        <AppBar position="relative">
            <CssBaseline />
            <Toolbar>
                <MuiLink
                    color="inherit"
                    underline="none"
                    component={Link}
                    to="/"
                >
                    <Typography variant="h6">DonationService</Typography>
                </MuiLink>
                <Stack
                    direction="row"
                    spacing={2}
                    sx={{
                        position: 'absolute',
                        top: '25%',
                        right: '1%',
                    }}
                >
                    {isAuthenticated ? (
                        <>
                            <MuiLink
                                color="inherit"
                                underline="none"
                                component={Link}
                                to="/collections"
                            >
                                <Typography variant="h6">
                                    Collections
                                </Typography>
                            </MuiLink>
                            <MuiLink
                                color="inherit"
                                underline="none"
                                component={Link}
                                to="/about"
                            >
                                <Typography variant="h6">About Us</Typography>
                            </MuiLink>
                            <MuiLink
                                color="inherit"
                                underline="none"
                                component={Link}
                                to="/settings"
                            >
                                <Typography variant="h6">Settings</Typography>
                            </MuiLink>
                            <Button
                                variant="text"
                                color="inherit"
                                onClick={onClickLogout}
                            >
                                <Typography variant="h6">Logout</Typography>
                            </Button>
                        </>
                    ) : (
                        <>
                            <MuiLink
                                color="inherit"
                                underline="none"
                                component={Link}
                                to="/collections"
                            >
                                <Typography variant="h6">
                                    Collections
                                </Typography>
                            </MuiLink>
                            <MuiLink
                                color="inherit"
                                underline="none"
                                component={Link}
                                to="/about"
                            >
                                <Typography variant="h6">About Us</Typography>
                            </MuiLink>
                            <MuiLink
                                color="inherit"
                                underline="none"
                                component={Link}
                                to="/login"
                            >
                                <Typography variant="h6">Login</Typography>
                            </MuiLink>
                        </>
                    )}
                </Stack>
            </Toolbar>
        </AppBar>
    );
}

export default Navbar;
