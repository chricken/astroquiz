'use strict';

import dom from './dom.js';
import compQuestion from './components/frage.js';
import elements from './elements.js';

const render = {
    question(q) {
        compQuestion({
            q,
            parent:elements.main
        })
    }
}

export default render;