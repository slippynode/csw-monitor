module.exports = {

  host: {
    id: {type: 'increments', nullable: false, primary: true},
    name: {type: 'string', maxlength: 254, nullable: true},
    description: {type: 'string', maxlength: 1000, nullable: true},
    url: {type: 'string', maxlength: 1000, nullable: true},
    linkage_count: {type: 'integer', nullable: true, unsigned: true},
    ping_count: {type: 'integer', nullable: true},
    user_id: {type: 'integer', nullable: true, unsigned: true},
    created_at: {type: 'dateTime', nullable: false},
    updated_at: {type: 'dateTime', nullable: false}
  },

  institution: {
    id: {type: 'increments', nullable: false, primary: true},
    name: {type: 'string', maxlength: 254, nullable: true},
    host_id: {type: 'integer', nullable: true, unsigned: true},
    user_id: {type: 'integer', nullable: true, unsigned: true},
    created_at: {type: 'dateTime', nullable: false},
    updated_at: {type: 'dateTime', nullable: false}
  },

  linkage: {
    id: {type: 'increments', nullable: false, primary: true},
    name: {type: 'string', maxlength: 254, nullable: true},
    description: {type: 'string', maxlength: 1000, nullable: true},
    url: {type: 'string', maxlength: 1000, nullable: true},
    format: {type: 'string', maxlength: 100, nullable: true},
    host_id: {type: 'integer', nullable: true, unsigned: true},
    user_id: {type: 'integer', nullable: true, unsigned: true},
    status: {type: 'integer', nullable: true, unsigned: true},
    status_count: {type: 'integer', nullable: true, unsigned: true},
    created_at: {type: 'dateTime', nullable: false},
    updated_at: {type: 'dateTime', nullable: false}
  },

  ping: {
    id: {type: 'increments', nullable: false, primary: true},
    status: {type: 'integer', nullable: true, unsigned: true},
    latest: {type: 'dateTime', nullable: false},
    host_id: {type: 'integer', nullable: true, unsigned: true},
    user_id: {type: 'integer', nullable: true, unsigned: true},
    created_at: {type: 'dateTime', nullable: false},
    updated_at: {type: 'dateTime', nullable: false}
  },

  status: {
    id: {type: 'increments', nullable: false, primary: true},
    res_code: {type: 'integer', nullable: true, unsigned: true},
    res_message: {type: 'string', maxlength: 1000, nullable: true},
    res_time: {type: 'dateTime', nullable: false},
    status_message: {type: 'string', maxlength: 1000, nullable: true},
    latest: {type: 'dateTime', nullable: false},
    host_id: {type: 'integer', nullable: true, unsigned: true},
    linkage_id: {type: 'integer', nullable: true, unsigned: true},
    user_id: {type: 'integer', nullable: true, unsigned: true},
    created_at: {type: 'dateTime', nullable: false},
    updated_at: {type: 'dateTime', nullable: false}
  },

  user: {
    id: {type: 'increments', nullable: false, primary: true},
    username: {type: 'string', maxlength: 50, nullable: true},
    email: {type: 'string', maxlength: 150, nullable: true},
    password: {type: 'string', maxlength: 20, nullable: true}
  }

};