'use strict';

import dom from '../dom.js';
import elements from '../elements.js';
import settings from '../settings.js';

const score = {
    container: null,
    elScore: null,
    elNumAnswered: null,

    init() {
        const container = dom.create({
            parent: elements.header,
            cssClassName: 'containerZentrieren'
        })

        score.container = dom.create({
            parent: container,
            cssClassName: 'containerScore'
        })

        dom.create({
            parent: score.container,
            content: 'Score'
        })

        const containerScore = dom.create({
            parent: score.container,
            cssClassName: 'containerScoreInner'
        })

        score.elScore = dom.create({
            cssClassName: 'score',
            parent: containerScore,
            content: settings.score || '0'
        })

        score.elNumAnswered = dom.create({
            cssClassName: 'count',
            parent: containerScore,
            content: settings.numAnswered || '0'
        })

    },
    update() {
        score.elScore.innerHTML = settings.score;
        score.elNumAnswered.innerHTML = settings.numAnswered;
    },
}

export default score;