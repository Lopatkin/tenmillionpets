import { fb_init, fb_data, fb_homes } from '../utils/consts';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import firebase from "firebase/compat/app";
import "firebase/firestore";

import { city_name, district_dachniy, district_Sfera } from '../utils/consts_housing';

import { district_dachniy_streets_arr, district_dachniy_houses_per_street_count } from '../utils/consts_housing';
import { sfera_streets_arr, district_Sfera_houses_per_street_count, district_Sfera_apartments_per_house_count } from '../utils/consts_housing';

import { petStartLocation } from '../utils/consts_housing';

import { professionsArr } from '../utils/consts_professions';

import { locationsList } from '../utils/consts_housing';

import { fb_locations } from '../utils/consts';





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

export const FirstInit = () => {
    // alert('унс');
    initLocations()
};

export const initLocations = () => {
    var i = 0;
    for (i = 0, locationsList.length; i < locationsList.length; ++i) {
        console.log(locationsList[i])


        firestore.collection(fb_locations).doc(locationsList[i]).set({
            //Для всех
            locationName: locationsList[i],
            locationID: (i + 1),
            currentUsers: ['Наблюдатель'],
            locationOwner: '',
            locationPublic: true
        }).then(() => {
            console.log("Document successfully written!");
            // alert('Зарегились');
        }).catch((error) => {
            console.error("Error writing document: ", error);
        });



    }








}

export const getRandomAddress = () => {

    const all_dachniy_rooms_count = district_dachniy_streets_arr.length * district_dachniy_houses_per_street_count;
    const all_sfera_rooms_count = sfera_streets_arr.length * district_Sfera_houses_per_street_count * district_Sfera_apartments_per_house_count;
    const all_rooms_count = all_dachniy_rooms_count + all_sfera_rooms_count;

    const randomRoomID = randomNumber(1, all_rooms_count);

    var myAddress = "Автобусная остановка";
    var myAddressArr = [];
    if (randomRoomID <= all_dachniy_rooms_count) {
        //район ДАЧНЫЙ
        const randomStreet = randomNumber(0, district_dachniy_streets_arr.length - 1);
        const randomHouse = randomNumber(1, district_dachniy_houses_per_street_count);
        const dachniy_address = district_dachniy_streets_arr[randomStreet] + ", дом " + randomHouse;
        myAddress = dachniy_address;

        myAddressArr[0] = city_name;
        myAddressArr[1] = district_dachniy;
        myAddressArr[2] = district_dachniy_streets_arr[randomStreet];
        myAddressArr[3] = randomHouse;
        myAddressArr[4] = 0;

    } else {
        //ЖК СФЕРА
        const randomStreet = randomNumber(0, sfera_streets_arr.length - 1);
        const randomHouse = randomNumber(1, district_Sfera_houses_per_street_count);
        const randomApartment = randomNumber(1, district_Sfera_apartments_per_house_count);
        const sfera_address = sfera_streets_arr[randomStreet] + ", дом " + randomHouse + ", кв. " + randomApartment;
        myAddress = sfera_address;

        myAddressArr[0] = city_name;
        myAddressArr[1] = district_Sfera;
        myAddressArr[2] = sfera_streets_arr[randomStreet];
        myAddressArr[3] = randomHouse;
        myAddressArr[4] = randomApartment;
    }

    return myAddressArr;
}

export const getRandomLocation = () => {
    var getRndm;
    var rndmNum;
    rndmNum = randomNumber(0, petStartLocation.length - 1);

    return petStartLocation[rndmNum]
}
function findIndex(array, value) {
    return array.findIndex(([v]) => v === value);
}

export const getLocationID = (curLocationName) => {
    return findIndex(petStartLocation, curLocationName)
    // var getRndm;
    // var rndmNum;
    // rndmNum = randomNumber(0, petStartLocation.length - 1);

    // return petStartLocation[rndmNum]
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
