'use strict'

const test = require('blue-tape')
const env = require('./')

const token = process.env.CIRCLE_TOKEN

test(function (t) {
  return env.set({
    username: 'bendrucker',
    project: 'circleci-aws',
    circle_token: token,
    name: 'FOO',
    value: 'BAR'
  })
    .then(() => env.get({
      username: 'bendrucker',
      project: 'circleci-aws',
      circle_token: token,
      name: 'FOO'
    }))
    .then(function (data) {
      t.equal(data.name, 'FOO')
      t.ok(data.value.endsWith('R'))

      return env.remove({
        username: 'bendrucker',
        project: 'circleci-aws',
        circle_token: token,
        name: 'FOO'
      })
    })
    .then(function () {
      return env.get({
        username: 'bendrucker',
        project: 'circleci-aws',
        circle_token: token,
        name: 'FOO'
      })
        .catch((err) => t.equal(err.statusCode, 404))
    })
})
