'use strict';

import settings from './settings.js';
import helpers from './helpers.js';

const ajax = {
    loadIDs() {
        console.log('Log IDs');
        
        return fetch('/allids').then(
            response => response.json()
        ).then(
            result => settings.questionIDs = result
        )
    },
    loadNewQuestion() {
        let randomIndex = helpers.createNumber(0, settings.questionIDs.length - 1);
        let randomID = settings.questionIDs.splice(randomIndex, 1)[0];
        
        return fetch(`/newquestion?id=${randomID}`).then(
            result => result.json()
        )
    }
}

export default ajax;