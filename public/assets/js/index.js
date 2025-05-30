'use strict';

import dom from './dom.js';
import ajax from './ajax.js';
import render from './render.js';

const init = () => {
    dom.mapping();
    dom.appendEventListeners();
    
    ajax.loadIDs().then(
        ajax.loadNewQuestion
    ).then(
        render.question
    ).catch(
        console.warn
    )
}

init();