import { fb_init, fb_data, fb_homes } from '../utils/consts';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import firebase from "firebase/compat/app";
import "firebase/firestore";

import { city_name, district_dachniy, district_Sfera } from '../utils/consts_housing';

import { district_dachniy_streets_arr, district_dachniy_houses_per_street_count } from '../utils/consts_housing';
import { sfera_streets_arr, district_Sfera_houses_per_street_count, district_Sfera_apartments_per_house_count } from '../utils/consts_housing';

import { professionsArr } from '../utils/consts_professions';

firebase.initializeApp({
    apiKey: "AIzaSyDKdcVmzzvFu_7lTiI-rMASUsT8qjchMr8",
    authDomain: "tenmillionpets.firebaseapp.com",
    projectId: "tenmillionpets",
    storageBucket: "tenmillionpets.appspot.com",
    messagingSenderId: "105880127070",
    appId: "1:105880127070:web:430221607b4b3de026d6cf",
    measurementId: "G-J4VZXFD0FS"
}
);

const firestore = firebase.firestore()

const FirstInit = () => {

};

export const getRandomAddress = () => {

    const all_dachniy_rooms_count = district_dachniy_streets_arr.length * district_dachniy_houses_per_street_count;
    const all_sfera_rooms_count = sfera_streets_arr.length * district_Sfera_houses_per_street_count * district_Sfera_apartments_per_house_count;
    const all_rooms_count = all_dachniy_rooms_count + all_sfera_rooms_count;

    const randomRoomID = randomNumber(1, all_rooms_count);

    var myAddress = "Автобусная остановка";
    if (randomRoomID <= all_dachniy_rooms_count) {
        //район ДАЧНЫЙ
        const randomStreet = randomNumber(0, district_dachniy_streets_arr.length - 1);
        const randomHouse = randomNumber(1, district_dachniy_houses_per_street_count);
        const dachniy_address = district_dachniy_streets_arr[randomStreet] + ", дом " + randomHouse;
        myAddress = dachniy_address;
    } else {
        //ЖК СФЕРА
        const randomStreet = randomNumber(0, sfera_streets_arr.length - 1);
        const randomHouse = randomNumber(1, district_Sfera_houses_per_street_count);
        const randomApartment = randomNumber(1, district_Sfera_apartments_per_house_count);
        const sfera_address = sfera_streets_arr[randomStreet] + ", дом " + randomHouse + ", кв. " + randomApartment;
        myAddress = sfera_address;
    }
    return myAddress;
}

function randomNumber(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

export const get_random_apartment = () => {
    const all_apartments_count = 10110;
    var randomApartment = Math.floor(Math.random() * (all_apartments_count - 1 + 1)) + 1;

    console.log(randomApartment);
}

export const get_random_profession = () => {
    const all_professions_count = professionsArr.length;
    var randomprofession = Math.floor(Math.random() * all_professions_count);

    // console.log(professionsArr[randomprofession]);
    return professionsArr[randomprofession];
}

export default FirstInit;
