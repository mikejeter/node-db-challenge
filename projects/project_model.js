const db = require('../data/db-config.js');

function find() {
    return db('project');
}


function findById(id) {
    return db('project')
    .where({id})
    .first();
}


function add(projectData) {
    return db('project')
    .insert(projectData);
}


function update(changes, id) {
    return db('project')
    .where({id})
    .update(changes);
}

function remove(id) {
    return db('project')
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