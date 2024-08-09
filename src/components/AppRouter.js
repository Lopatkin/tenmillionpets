import React, { useContext } from 'react';
import { Route, Routes, Navigate } from 'react-router-dom'

import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import firebase from "firebase/compat/app";
import "firebase/firestore";
import { useCollectionData } from "react-firebase-hooks/firestore";


import Login from "./Login";
import Chat from "./Chat";
import { Context } from '..';
import { fb_users } from '../utils/consts';

const AppRouter = () => {



    const { userData } = useContext(Context);
    const { firestore } = useContext(Context)

    const [isUserExist] = useCollectionData(
        firestore.collection(fb_users).doc(userData.id)
    )

    console.log(isUserExist);

    <script>
        < button id="openModal" > Нажми меня!</button>

        <div id="modal" class="modal">
            <div class="modal-content">
                <button class="close">close</button>
                <p>Привет, я всплывающее окно!</p>
            </div>
        </div>
    </script>

    const modal = document.querySelector('#modal');
    const btn = document.querySelector('#openModal');
    const close = document.querySelector('.close');

    btn.onclick = function () {
        modal.style.display = 'block';
    };

    close.onclick = function () {
        modal.style.display = 'none';
    };

    window.onclick = function (event) {
        if (event.target == modal) {
            modal.style.display = 'none';
        }
    };

    return userData ?

        (
            <Routes>
                <Route path="/chat" element={<Chat />} />
                <Route path="*" element={<Navigate to="/chat" replace />} />
            </Routes>
        )
        :
        (
            <Routes>
                {/* <Route path="/login" element={<Login />} />
                <Route path="*" element={<Navigate to="/login" replace />} /> */}
                <Route path="/chat" element={<Chat />} />
                <Route path="*" element={<Navigate to="/chat" replace />} />
            </Routes>
        )
};

export default AppRouter;