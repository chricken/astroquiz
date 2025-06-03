'use strict';

import dom from './dom.js';
import ajax from './ajax.js';
import render from './render.js';
import settings from './settings.js';
import compScore from './components/score.js';

const init = () => {
    dom.mapping();
    dom.appendEventListeners();

    ajax.loadIDs().then(
        ajax.loadNewQuestion
    ).then(
        render.question
    ).then(
        compScore.init
    ).catch(
        console.warn
    )
}

init();