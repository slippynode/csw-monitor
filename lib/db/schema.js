module.exports = {

  host: {
    id: {type: 'increments', nullable: false, primary: true},
    name: {type: 'string', maxlength: 254, nullable: false},
    description: {type: 'string', maxlength: 1000, nullable: false},
    url: {},
    linkage_count: {},
    ping_count: {},
    created_at: {},
    updated_at: {}
  },

  institution: {
    id: {},
    name: {},
    created_at: {},
    updated_at: {}
  },

  linkage: {
    id: {},
    name: {},
    description: {},
    url: {},
    format: {},
    host_id: {},
    status: {},
    status_count: {},
    created_at: {},
    updated_at: {}
  },

  ping: {
    id: {},
    status: {},
    latest: {},
    host_id: {},
    created_at: {},
    updated_at: {}
  },

  status: {
    id: {},
    res_code: {},
    res_message: {},
    res_time: {},
    status_message: {},
    latest: {},
    host_id: {},
    linkage_id: {},
    created_at: {},
    updated_at: {}
  },

  user: {
    id: {},
    username: {},
    email: {},
    password: {}
  }

};