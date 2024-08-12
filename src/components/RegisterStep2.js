import React, { useState, useEffect } from 'react';
import { Context } from '../index';
import { useContext, Link } from 'react';
import { Avatar, Button, Container, Grid, TextField } from '@mui/material';
import SendIcon from '@mui/icons-material/Send';
import { Route, Routes, useNavigate } from 'react-router-dom'

import RegisterStep1 from './RegisterStep1';
import RegisterStep3 from './RegisterStep1';

const RegisterStep2 = () => {

    const { tg } = useContext(Context);
    tg.expand() // метод позволяет растянуть окно на всю высоту.

    const navigate = useNavigate();

    const navigateToRegisterStep3 = () => {
        navigate('/registerStep3');
    };

    const navigateToRegisterStep1 = () => {
        navigate('/registerStep1');
    };

    return (
        <div>
            <h2>Время выбирать.</h2>

            <div>
                <button onClick={navigateToRegisterStep1}>Назад</button>
                <button onClick={navigateToRegisterStep3}>Далее</button>

                <Routes>
                    <Route path="/registerStep1" element={<RegisterStep1 />} />
                    <Route path="/registerStep3" element={<RegisterStep3 />} />
                </Routes>
            </div>
        </div>
    );
};

// function Register_step1() {
//     return <h2>Register_step1</h2>;
// }

// function Register_step3() {
//     return <h2>Register_step3</h2>;
// }

export default RegisterStep2;