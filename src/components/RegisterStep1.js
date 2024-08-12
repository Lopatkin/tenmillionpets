import React, { useState, useEffect } from 'react';
import { Context } from '../index';
import { useContext, Link } from 'react';
import { Avatar, Button, Container, Grid, TextField } from '@mui/material';
import { Route, Routes, useNavigate } from 'react-router-dom'

import Register from './Register';
import RegisterStep2 from './RegisterStep2';

const RegisterStep1 = () => {

    const { tg } = useContext(Context);
    tg.expand() // метод позволяет растянуть окно на всю высоту.

    const navigate = useNavigate();

    const navigateToRegisterStep2 = () => {
        navigate('/registerStep2');
    };

    const navigateToRegister = () => {
        navigate('/register');
    };

    return (
        <div>
            <h2>А что если.. по другую сторону экрана будет не виртуальный зверёк, следовавший своим алгоритмам, а настоящий живой человек?..</h2>

            <div>
                <Button style={{
                    display: 'inline-block',
                    width: '20%'

                }} variant={"outlined"} onClick={navigateToRegister}>Назад</Button>
                <Button style={{
                    display: 'inline-block',
                    width: '20%'

                }} variant={"outlined"} onClick={navigateToRegisterStep2}>Далее</Button>

                <Routes>
                    <Route path="/register" element={<Register />} />
                    <Route path="/registerStep2" element={<RegisterStep2 />} />
                </Routes>
            </div>
        </div>
    );

};

// function Register() {
//     return <h2>Register</h2>;
// }

// function Register_step2() {
//     return <h2>Register_step2</h2>;
// }

export default RegisterStep1;