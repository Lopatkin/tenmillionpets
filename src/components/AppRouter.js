import React, { useContext } from 'react';
import { Route, Routes, Navigate } from 'react-router-dom'

import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import firebase from "firebase/compat/app";
import "firebase/firestore";
import { useCollectionData, useCollectionDataOnce, useDocument } from "react-firebase-hooks/firestore";


import Login from "./Login";
import Chat from "./Chat";
import Register from "./Register";

import { Context } from '../index';
import { fb_users } from '../utils/consts';
import { Container } from '@mui/material';

const AppRouter = () => {

    const db = firebase.firestore();


    const { userData } = useContext(Context);
    const { firestore } = useContext(Context)
    const { doc } = useContext(Context)


    var isUserExist = doc.exists;

    // alert(isUserExist)

    return isUserExist ?
        (
            <Routes>
                <Route path="/chat" element={<Chat />} />
                <Route path="*" element={<Navigate to="/chat" replace />} />
            </Routes>
        )
        :
        (<Routes>
            <Route path="/register" element={<Register />} />
            <Route path="*" element={<Navigate to="/register" replace />} />
        </Routes>
        )

    // const onSuccess = (doc) => {
    //     return !doc.exists ? (
    //         <Routes>
    //             <Route path="/chat" element={<Chat />} />
    //             <Route path="*" element={<Navigate to="/chat" replace />} />
    //         </Routes>
    //     )
    //         :
    //         (
    //             <Routes>
    //                 <Route path="/chat" element={<Chat />} />
    //                 <Route path="*" element={<Navigate to="/chat" replace />} />
    //             </Routes>
    //         )
    // }



    // alert("APp " + isUserExist);
    // return isUserExist ?
    //     (
    // <Routes>
    //     <Route path="/register" element={<Register />} />
    //     <Route path="*" element={<Navigate to="/register" replace />} />
    // </Routes>
    //     )
    //     :
    //     (
    //         <Routes>
    //             <Route path="/chat" element={<Chat />} />
    //             <Route path="*" element={<Navigate to="/chat" replace />} />
    //         </Routes>
    //     )
    return (
        <Routes>
            <Route path="/chat" element={<Chat />} />
            <Route path="*" element={<Navigate to="/chat" replace />} />
        </Routes>
    )
    FFF();
};

const FFF = () => {

}

export default AppRouter;