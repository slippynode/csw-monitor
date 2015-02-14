var Schema = {

  user: {
    username: {},
    email: {},
    password: {}
  },

  hosts: {
    name: {},
    description: {},
    url: {},
    linkage_count: {},
    ping_count: {},
    created_at: {},
    updated_at: {}
  },

  institutions: {
    name: {},
    created_at: {},
    updated_at: {}
  },

  linkages: {
    name: {},
    description: {},
    url: {},
    format: {},
    host_id: {},
    status: {},
    statuses_count: {},
    created_at: {},
    updated_at: {}
  },

  pings: {
    status: {},
    latest: {},
    host_id: {},
    created_at: {},
    updated_at: {}
  },

  statuses: {
    res_code: {},
    res_message: {},
    res_time: {},
    status: {},
    status_message: {},
    latest: {},
    host_id: {},
    linkage_id: {},
    created_at: {},
    updated_at: {}
  }

};

module.exports = Schema;