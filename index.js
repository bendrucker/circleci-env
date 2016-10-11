'use strict'

const assert = require('assert')
const got = require('got')

const url = 'https://circleci.com/api/v1.1/project/github/{username}/{project}/envvar?circle-token={token}'

module.exports = Circle(set)

function set (data) {
  assert(data.name, 'key name is required')
  assert(data.value, 'value is required')

  return got.post(createUrl(data), {
    body: JSON.stringify({
      name: data.name,
      value: data.value
    }),
    headers: {
      'content-type': 'application/json'
    },
    json: true
  })
  .then((response) => response.body)
}

function Circle (fn) {
  return function circle (data) {
    assert(data, 'data is required')
    assert(data.username, 'username is required')
    assert(data.project, 'project is required')
    assert(data.circle_token, 'circle_token is required')

    return fn.apply(null, arguments)
  }
}

function createUrl (data) {
  return url
    .replace('{username}', data.username)
    .replace('{project}', data.project)
    .replace('{token}', data.circle_token)
}
