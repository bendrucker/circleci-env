'use strict'

const test = require('blue-tape')
const env = require('./')

const token = process.env.CIRCLE_TOKEN

test(function (t) {
  return env({
    username: 'bendrucker',
    project: 'circleci-aws',
    circle_token: token,
    name: 'FOO',
    value: 'BAR'
  })
  .then(function (env) {
    t.equal(env.name, 'FOO')
    t.ok(env.value.endsWith('R'))
  })
})
