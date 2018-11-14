'use strict'

const assert = require('assert')
const got = require('got')

const collectionUrl = 'https://circleci.com/api/v1.1/project/github/{username}/{project}/envvar?circle-token={token}'
const singleUrl = 'https://circleci.com/api/v1.1/project/github/{username}/{project}/envvar/{name}?circle-token={token}'

module.exports = {
  get: Circle(get),
  set: Circle(set),
  remove: Circle(remove)
}

function get (data) {
  assert(data.name, 'key name is required')

  return got.get(createUrl(singleUrl, data), { json: true })
    .then((response) => response.body)
}

function set (data) {
  assert(data.name, 'key name is required')
  assert(data.value, 'value is required')

  return got.post(createUrl(collectionUrl, data), {
    body: {
      name: data.name,
      value: data.value
    },
    headers: {
      'content-type': 'application/json'
    },
    json: true
  })
    .then((response) => response.body)
}

function remove (data) {
  assert(data.name, 'key name is required')

  return got.delete(createUrl(singleUrl, data), { json: true })
    .then((response) => assert.strictEqual(response.body.message, 'ok'))
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

function createUrl (url, data) {
  return url
    .replace('{username}', data.username)
    .replace('{project}', data.project)
    .replace('{token}', data.circle_token)
    .replace('{name}', data.name)
}
