'use strict';

import dom from './dom.js';
import compQuestion from './components/frage.js';
import elements from './elements.js';
import settings from './settings.js';
import score from './components/score.js';
import btnWeiter from './components/btn_weiter.js';
import ajax from './ajax.js';

const render = {
    question(q) {
        elements.main.innerHTML = '';

        let elQuestion = compQuestion({
            q,
            parent: elements.main
        })

        elQuestion.addEventListener('answered', evt => {
            console.log(evt.detail);
            settings.numAnswered++;
            if (evt.detail.isCorrect) settings.score++;

            score.update();

            const elBtnWeiter = btnWeiter();
            elBtnWeiter.addEventListener('click', () => {
                ajax.loadIDs().then(
                    ajax.loadNewQuestion
                ).then(
                    render.question
                ).catch(
                    console.warn
                )
            })
        })
    }
}

export default render;