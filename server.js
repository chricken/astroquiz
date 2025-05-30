'use strict';

import express from 'express';
import db from './db.js';
const server = express();
import router from './routen.js';

server.use(express.static('public', {
    extensions: ['html']
}));

server.use(router);

const init = () => {
    db.init().then(
        () => {
            return new Promise((resolve, reject) => {
                server.listen(80, err => {
                    if (err) reject(err);
                    else resolve('Server läuft');
                });
            })
        }
    ).then(
        console.log
    ).catch(
        console.warn
    )

}

init();