'use strict';

import cr from './credentials.json' with {type: 'json'};
import questions from './prefill/questions.json' with {type: 'json'};
import views from './prefill/views.json' with {type: 'json'};
import nano from 'nano';

const conn = nano(`http://${cr.dbUser}:${cr.dbPW}@${cr.dbURL}`).db;
const dbName = 'quiz_questions';

const db = {
    questionIDs: [],
    init() {
        return conn.list().then(
            res => {
                if (!res.includes(dbName))
                    return conn.create(dbName)
            }
        ).then(
            res => {
                // console.log(res);
                if (res?.ok)
                    return db.prefill()
            }
        ).then(
            () => db.getIDs()
        )
    },
    loadQuestion(id){
        let myDB = conn.use(dbName);

        return myDB.get(id);
    },
    prefill() {
        const dbQuestions = conn.use(dbName);

        return Promise.all(questions.map(
            question => dbQuestions.insert(question)
        ))

    },
    getIDs() {
        const dbQuestions = conn.use(dbName);
        return dbQuestions.list().then(
            res => res.rows.map(row => row.id)
        ).then(
            list => {
                db.questionIDs = list
                return db.questionIDs
            }
        )
    }
}

export default db;