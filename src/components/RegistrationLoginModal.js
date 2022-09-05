import React, {useState} from 'react';
import {Box, Button, Grid, Modal, TextField, Typography} from "@mui/material";
import {registerUser} from "../api/usersApi";

const RegistrationLoginModal = ({
    open,
    onClose,
    action,
    label,
    refresh,
                           }) => {

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [messageModalOpen, setMessageModalOpen] = useState(false);

    const style = {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: 400,
        bgcolor: 'background.paper',
        border: '2px solid #000',
        boxShadow: 24,
        p: 4,
    };

    const onSubmit = () => {
        action({ username, password })
            .then(response => {
                onClose();
                refresh();
                //popup informational message for successful registration
                if (label === 'Login') {
                    localStorage.setItem('user', JSON.stringify({ username: response.username, id: response.id }));
                }
            })
    };

    return (
        <Modal
            open={open}
            onClose={onClose}>
            <Box sx={style}>
                <Grid container
                      direction="column"
                      justifyContent="center"
                      alignItems="center"
                      spacing={2}>
                    <Grid item>
                        <Typography sx={{ fontSize: 18 }} color="text.secondary" gutterBottom>
                            {label}
                        </Typography>
                    </Grid>
                    <Grid item>
                        <TextField id="username"
                                   value={username}
                                   onChange={event => setUsername(event.target.value)}
                                   label="Username"
                                   variant="outlined"
                        />
                    </Grid>
                    <Grid item>
                        <TextField id="password"
                                   value={password}
                                   onChange={event => setPassword(event.target.value)}
                                   label="Password"
                                   variant="outlined"
                                   onKeyUp={(event) => {
                                       if (event.key === 'Enter') {
                                           onSubmit();
                                       }
                                   }}
                        />
                    </Grid>
                    <Grid item>
                        <Button onClick={onSubmit}>Submit</Button>
                    </Grid>
                </Grid>
            </Box>
        </Modal>
    );
};

export default RegistrationLoginModal;
