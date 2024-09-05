import { fb_init, fb_data, fb_homes } from '../utils/consts';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import firebase from "firebase/compat/app";
import "firebase/firestore";

import { city_name, district_dachniy, district_Sfera } from '../utils/consts';
import { district_dachniy_streets_count, district_dachniy_houses_per_street_count } from '../utils/consts';
import { district_Sfera_streets_count, district_Sfera_houses_per_street_count, district_Sfera_apartments_per_house_count } from '../utils/consts';

import { street_vishnevaya, street_abrikosovaya, street_vinogradnaya, street_cvetochnaya, street_solnechnaya, street_druzhnaya, street_udachnaya, street_letnyaya, street_arbuznaya, street_persikovaya, street_sadovaya, street_sirenevaya, street_desertnaya, street_buketnaya, street_prazdnichnaya, street_rozhdestvenskaya, street_plyazhnaya } from '../utils/consts';
import { street_pryamaya, street_uglovaya, street_kosvennaya, street_orkuzhnaya, street_modulnaya, street_mediannaya, street_kubicheskaya, street_centrobezhnaya } from '../utils/consts';

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

export const first_alert = () => {

    //инитим Дачный район
    let streetsArrDacha = [street_vishnevaya, street_abrikosovaya, street_vinogradnaya, street_cvetochnaya, street_solnechnaya, street_druzhnaya, street_udachnaya, street_letnyaya, street_arbuznaya, street_persikovaya, street_sadovaya, street_sirenevaya, street_desertnaya, street_buketnaya, street_prazdnichnaya, street_rozhdestvenskaya, street_plyazhnaya];

    let sID = 1;
    let i = 0;
    while (i <= district_dachniy_streets_count - 1) {

        let j = 1;
        while (j <= district_dachniy_houses_per_street_count) {
            firestore.collection(fb_init).doc(fb_data).collection(fb_homes).doc(sID.toString()).set({
                homeID: sID,
                homeCity: city_name,
                districtName: district_dachniy,
                homeStreet: streetsArrDacha[i],
                homeHumber: j,
                homeApartment: "",
                isBusy: false,
                ownerID: "",
                ownerName: ""
            })
            j++;
            sID++;
        }
        i++;
    }

    //инитим ЖК Сферу
    let streetsArrSfera = [street_pryamaya, street_uglovaya, street_kosvennaya, street_orkuzhnaya, street_modulnaya, street_mediannaya, street_kubicheskaya, street_centrobezhnaya];

    let r = 0;
    while (r <= district_Sfera_streets_count - 1) {

        let w = 1;
        while (w <= district_Sfera_houses_per_street_count) {
            let k = 1;
            while (k <= district_Sfera_apartments_per_house_count) {
                firestore.collection(fb_init).doc(fb_data).collection(fb_homes).doc(sID.toString()).set({
                    homeID: sID,
                    homeCity: city_name,
                    districtName: district_Sfera,
                    homeStreet: streetsArrSfera[r],
                    homeHumber: w,
                    homeApartment: k,
                    isBusy: false,
                    ownerID: "",
                    ownerName: ""
                })
                k++;
                sID++;
            }
            w++;
        }
        r++;
    }
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
