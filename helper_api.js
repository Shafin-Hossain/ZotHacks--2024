import fetchImage from './image_api.js';
import fetchQuote from './quote_api.js';

export function getParameters() {
    const chosen = localStorage.getItem("1") + localStorage.getItem("2") + localStorage.getItem("3")
    switch(chosen) {
        case '111':
            return ['casual gamer', 'cool']
        case '112':
            return ['social gamer', 'humour']
        case '121':
            return ['social butterfly', 'friendship']
        case '122':
            return ['avid adventurer', 'funny']
        case '211':
            return ['homebody', 'home']
        case '212':
            return ['nerd', 'intelligence']
        case '221':
            return ['laidback', 'home']
        case '222':
            return ['charmster', 'sucess']
    }
}