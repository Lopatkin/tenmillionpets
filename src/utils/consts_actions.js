import { role_pet } from '../utils/consts';




//Формат
// 0: ID для firecloud
// 1: название на закладке "Действия"
// 2: отображение запроса в чате
// 3: отображение последствий в чате
//
export const action_play_id = 'play'
export const action_play_req = 'Попросить поиграть со мной'
export const action_play_ask = 'хочет поиграть!'
export const action_play_for = role_pet

// export const action_play_do = 'играет!'

export const action_food_id = 'food'
export const action_food_req = 'Попросить еды'
export const action_food_ask = 'хочет есть!'
export const action_food_for = role_pet

// export const action_food_do = 'ест..'

export const action_sad_id = 'sad'
export const action_sad_req = 'Вам грустно :('
export const action_sad_ask = 'грустит :('
export const action_sad_for = role_pet

// export const action_food_do = 'ест..'



//Общие действия
export const action_for_food = [
    action_food_id,
    action_food_req,
    action_food_ask,
    action_food_for

    // action_food_do
]

export const action_for_play = [
    action_play_id,
    action_play_req,
    action_play_ask,
    action_play_for

    // action_play_do
]

export const action_for_sad = [
    action_sad_id,
    action_sad_req,
    action_sad_ask,
    action_sad_for

    // action_play_do
]

//Кошка



//Собака


//Для first_init
export const init_all_actions = [
    action_for_food,
    action_for_play,
    action_for_sad
]