import React, { useContext } from 'react';
import { Route, Routes, Navigate } from 'react-router-dom'

import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import firebase from "firebase/compat/app";
import "firebase/firestore";
import { useCollectionData, useCollectionDataOnce, useDocument } from "react-firebase-hooks/firestore";


import Login from "./Login";
import Chat from "./Chat";
import BufferPage from "./BufferPage";
import Register from "./Register";
import RegisterStep1 from "./RegisterStep1";
import RegisterStep2 from "./RegisterStep2";


import { Context } from '../index';
import { fb_users } from '../utils/consts';
import { Container } from '@mui/material';

const AppRouter = () => {

    const db = firebase.firestore();


    const { userData } = useContext(Context);
    const { firestore } = useContext(Context)
    const { doc } = useContext(Context)


    var isUserExist = doc.exists;
    var isIntroPassed = doc.introPassed;

    // alert('intro passed ' + doc.data().introPassed);

    return isUserExist ?
        (
            <Routes>
                <Route path="/chat" element={<Chat />} />
                <Route path="*" element={<Navigate to="/chat" replace />} />
            </Routes>
        )
        :
        (<Routes>

            <Route path="/bufferPage" element={<BufferPage />} />
            <Route path="*" element={<Navigate to="/bufferPage" replace />} />

            <Route path="/register" element={<Register />} />
            <Route path="*" element={<Navigate to="/register" replace />} />

            <Route path="/registerStep1" element={<RegisterStep1 />} />
            <Route path="*" element={<Navigate to="/registerStep1" replace />} />

            <Route path="/registerStep2" element={<RegisterStep2 />} />
            <Route path="*" element={<Navigate to="/registerStep2" replace />} />

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
    // return (
    //     <Routes>
    //         <Route path="/chat" element={<Chat />} />
    //         <Route path="*" element={<Navigate to="/chat" replace />} />
    //     </Routes>
    // )
    // FFF();
};

const FFF = () => {

}

export default AppRouter;