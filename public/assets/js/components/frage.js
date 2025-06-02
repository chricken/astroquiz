'use strict';

import dom from '../dom.js';
import compAnswer from './antwort.js';

const question = ({
    q = {},
    parent = null
}) => {

    const container = dom.create({
        parent,
        cssClassName: 'container containerFrage',
    })

    dom.create({
        tagName: 'h2',
        content: q.question,
        parent: container
    })

    dom.create({
        content: 'Schwierigkeit',
        parent: container,
        cssClassName: 'legendDifficulty'
    })

    const containerDifficulty = dom.create({
        parent: container,
        cssClassName: 'container containerDifficulty'
    })

    for (let i = 0; i < q.schwierigkeit; i++) {
        dom.create({
            content: '⏺',
            parent: containerDifficulty,
            cssClassName: 'difficultyPointFilled'
        })
    }

    for (let i = 0; i < (10 - q.schwierigkeit); i++) {
        dom.create({
            content: '⭘',
            parent: containerDifficulty,
            cssClassName: 'difficultyPointEmpty'
        })
    }

    const containerHint = dom.create({
        parent: container,
        cssClassName: 'container containerHint',
    })

    const headerHint = dom.create({
        parent: containerHint,
        tagName: 'h3',
        content: 'Hinweis',
        listeners: {
            click() {
                if (containerHint.classList.contains('opened')) {
                    containerHint.classList.remove('opened')
                    innerHint.style.height = '0px';
                } else {
                    containerHint.classList.add('opened');
                    const style = window.getComputedStyle(innerHint.querySelector('div'));
                    const height = style.height;
                    innerHint.style.height = height;
                }
            }
        }
    })

    dom.create({
        parent: headerHint,
        content: '⯈',
        cssClassName: 'indicatorOpened',
        insert: 'prepend',
    })

    const innerHint = dom.create({
        parent: containerHint,
        tagName: 'div',
        cssClassName: 'innerHint'
    })

    dom.create({
        parent: innerHint,
        tagName: 'div',
        content: q.hint
    })

    const containerAnswers = dom.create({
        parent: container,
        cssClassName: 'container containerAnswers'
    })

    q.answers.forEach((answer, index) => {
        const elAnswer = compAnswer({
            answer,
            parent: containerAnswers,
        })

        elAnswer.addEventListener('click', () => {

            if (!q.answered) {
                containerAnswers.classList.add('answered');
                if (q.correct.includes(index)) {
                    elAnswer.classList.add('correct')
                } else {
                    elAnswer.classList.add('wrong')
                }
                q.answered = true;
            }
        })
    })

}

export default question;