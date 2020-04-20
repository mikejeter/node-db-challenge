const db = require('../data/db-config.js');

function find() {
    return db('task');
}


function findById(id) {
    return db('task')
    .where({id})
    .first();
}


function add(taskData) {
    return db('task')
    .insert(taskData);
}


function update(changes, id) {
    return db('task')
    .where({id})
    .update(changes);
}

function remove(id) {
    return db('task')
        .where({id})
        .del();
}



module.exports = {
    find,
    findById,
    add,
    update,
    remove
};