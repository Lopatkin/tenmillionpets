import { Box, Button, Container, Grid } from '@mui/material';
import React, { useContext } from 'react';
import { Context } from '..';

const Login = () => {
    const userData = useContext(Context)

    const login = async () => {
        console.log(userData);
    }

    return (
        <Container>
            <Grid container
                style={{ height: window.innerHeight - 50 }}
                alignItems={"center"}
                justify={"center"}
            >
                

                <Grid style={{ width: 400, background: 'lightgray' }}
                    container
                    alignItems={"center"}
                    direction={"column"}
                >
                    <Box p={5}>
                        {/* <Button onClick={login} variant={"outlined"}>Войти</Button> */}
                        <div>Пожалуйста, зайдите через телеграм</div>

                    </Box>
                </Grid>
            </Grid>
        </Container>
    );
};

export default Login;