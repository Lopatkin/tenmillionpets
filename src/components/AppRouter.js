import React, { useContext } from 'react';
import { Route, Routes, Navigate } from 'react-router-dom'

import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import firebase from "firebase/compat/app";
import "firebase/firestore";
import { useCollectionData, useCollectionDataOnce } from "react-firebase-hooks/firestore";


import Login from "./Login";
import Chat from "./Chat";
import Register from "./Register";

import { Context } from '../index';
import { fb_users } from '../utils/consts';
import { Container } from '@mui/material';

const AppRouter = () => {



    const { userData } = useContext(Context);
    const { firestore } = useContext(Context)

    const [isUserExist] = useCollectionData(
        firestore.collection(fb_users).doc('300')
    )

    alert("appRoutes 300 " + isUserExist)

    return isUserExist ?
        (
            <Routes>
                <Route path="/register" element={<Register />} />
                <Route path="*" element={<Navigate to="/register" replace />} />
            </Routes>
        )
        :
        (
            <Routes>
                <Route path="/chat" element={<Chat />} />
                <Route path="*" element={<Navigate to="/chat" replace />} />
            </Routes>
        )
};

export default AppRouter;