'use strict';

import dom from '../dom.js';

const antwort = ({
    answer = {},
    parent = null
}) => {
    const containerAnswer = dom.create({
        parent,
        content: answer,
        cssClassName: 'containerAnswer',
    })

    dom.create({
        cssClassName: 'answer',
        parent: containerAnswer
    })

    return containerAnswer;
}

export default antwort;