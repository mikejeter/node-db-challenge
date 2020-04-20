const db = require('../data/db-config.js');

function find() {
    return db('resource');
}


function findById(id) {
    return db('resource')
    .where({id})
    .first();
}


function add(resourceData) {
    return db('resource')
    .insert(resourceData);
}


function update(changes, id) {
    return db('resource')
    .where({id})
    .update(changes);
}

function remove(id) {
    return db('resource')
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