'use strict';

import dom from '../dom.js';
import elements from '../elements.js';

const btnWeiter = () => {
    const container = dom.create({
        parent: elements.main,
        cssClassName: 'containerZentrieren'
    })

    dom.create({
        parent: container,
        cssClassName: 'btnWeiter',
        content: 'Weiter',
    })

    return container;
}

export default btnWeiter;