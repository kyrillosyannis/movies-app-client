import React, {useEffect, useState} from 'react';
import {AppBar, Button, Toolbar, Typography} from "@mui/material";
import RegistrationLoginModal from "./RegistrationLoginModal";
import {authenticate, registerUser} from "../api/usersApi";

const Header = ({refreshMoviesFlag}) => {

    const [modalMode, setModalMode] = useState('');
    const [registrationModalOpen, setRegistrationModalOpen] = useState(false);
    const [userIsLoggedIn, setUserIsLoggedIn] = useState(false);
    const [refreshFlag, setRefreshFlag] = useState(false);

    useEffect(() => {
        setUserIsLoggedIn(localStorage.getItem('user') !== undefined && localStorage.getItem('user') !== null);
    }, [refreshFlag]);

    // const userIsLoggedIn = () => {
    //     return localStorage.getItem('user') !== undefined && localStorage.getItem('user') !== null;
    // };

    return <>
        <AppBar position="static">
            <Toolbar>
                <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                    MovieRama
                </Typography>
                { userIsLoggedIn ?
                    <Button color="inherit" onClick={() => {
                        localStorage.clear();
                        setRefreshFlag(!refreshFlag);
                        refreshMoviesFlag();
                    }}>Logout</Button> :
                    <>
                        <Button color="inherit" onClick={() => {
                            setModalMode('login')
                            setRegistrationModalOpen(true);
                        }}
                        >
                            Login
                        </Button>
                        <Button color="inherit" onClick={() => {
                            setModalMode('register')
                            setRegistrationModalOpen(true);
                        }}>
                            Sign up
                        </Button>
                    </>
                }
            </Toolbar>
        </AppBar>
        <RegistrationLoginModal
            open={registrationModalOpen}
            onClose={() => setRegistrationModalOpen(false)}
            action={modalMode === 'register' ? registerUser : authenticate}
            label={modalMode === 'register' ? 'Register' : 'Login'}
            refresh={() => {
                setRefreshFlag(!refreshFlag);
                refreshMoviesFlag();
            }}
        />
    </>;
};

export default Header;
