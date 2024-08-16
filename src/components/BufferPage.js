import React, { useState, useEffect, Redirect } from 'react';
import { Context } from '../index';
import { useContext, Link } from 'react';
import { Avatar, Button, Container, Grid, TextField } from '@mui/material';
import { Route, Routes, useNavigate } from 'react-router-dom'

import RegisterStep1 from "./RegisterStep1";

const BufferPage = () => {
    const { tg } = useContext(Context);
    tg.expand() // метод позволяет растянуть окно на всю высоту.

    alert('это буффер')


    const navigate = useNavigate();

    const navigateToRegisterStep1 = () => {
        navigate('/registerStep1');
    };

    return (
        <div>
            <h2>У многих из нас в детстве был Тамагочи - виртуальный зверёк, за которым нужно было ухаживать, кормить, убирать, играть с ним. А если он вдруг заболевал или умирал - это было трагедией.</h2>
            <div>
                {/* <button onClick={navigateHome}>Home</button> */}
                <Button style={{
                    display: 'inline-block',
                    width: '20%'

                }} variant={"outlined"} onClick={navigateToRegisterStep1}>Далее</Button>

                <Routes>
                    <Route path="/registerStep1" element={<RegisterStep1 />} />
                    <Route path="/" element={<Home />} />
                </Routes>
            </div>
        </div>
    );
};

function Home() {
    // return <h2>Home</h2>;
}

export default BufferPage;