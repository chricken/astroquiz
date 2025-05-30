'use strict';

import express from 'express';
const router = express.Router();
import db from './db.js';

router.get('/allids', (request, response) => {
    // console.log('get All IDs');
    db.getIDs().then(
        result => {
            // console.log(result);
            response.json(result)
        }
    ).catch(
        console.warn
    )
})

router.get('/newquestion', (request, response) => {
    let id = request.query.id;

    db.loadQuestion(id).then(
        q => response.json(q)
    ).catch(
        console.warn
    )

})

export default router;