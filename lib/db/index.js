var knex = require('knex')({
  client: 'pg',
  connection: {
    host: '127.0.0.1',
    user: '',
    password: '',
    database: '',
    charset: ''
  }
});

var bookshelf = require('bookshelf')(knex);