exports.up = function(knex) {
    return knex.schema
        .createTable('project', tbl => {
            tbl.increments();

            tbl
                .string('project_name', 255)
                .notNullable()
                .unique();
            tbl
                .text('description');
            tbl
                .boolean('complete').defaultTo(false);

        })
        .createTable('task', tbl => {
            tbl.increments();

            tbl
                .string('task_name', 255)
                .notNullable()
                .unique();
            tbl
                .text('description');
            tbl
                .integer('project_id')
                .unsigned()
                .notNullable()
                .references('id')
                .inTable('project')
                .onUpdate('CASCADE')
                .onDelete('CASCADE');
            tbl
                .text('notes');
            tbl
                .boolean('complete').defaultTo(false);

        })
        .createTable('resource', tbl => {
            tbl.increments();

            tbl
                .string('resource_name', 255)
                .notNullable()
                .unique();
            tbl
                .text('description');
            tbl
                .integer('project_id')
                .unsigned()
                .notNullable()
                .references('id')
                .inTable('project')
                .onUpdate('CASCADE')
                .onDelete('CASCADE');
        });
};

exports.down = function(knex) {
    return knex.schema
        .dropTableIfExists('project')
        .dropTableIfExists('task')
        .dropTableIfExists('resource');
};