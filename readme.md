# circleci-env [![Build Status](https://travis-ci.org/bendrucker/circleci-env.svg?branch=master)](https://travis-ci.org/bendrucker/circleci-env) [![Greenkeeper badge](https://badges.greenkeeper.io/bendrucker/circleci-env.svg)](https://greenkeeper.io/)

> Configure CircleCI with an environment variable


## Install

```
$ npm install --save circleci-env
```


## Usage

```js
var env = require('circleci-env')

env.set({
  username: 'bendrucker',
  project: 'circleci-aws',
  circle_token: token,
  name: 'FOO',
  value: 'BAR'
})
.then(console.log)

// #=> {name: 'FOO', value: 'xxxxR'}
```

## API

#### `env.get(data)` -> `promise`
#### `env.set(data)` -> `promise`
#### `env.remove(data)` -> `promise`

Gets, sets, or removes a new environment variable using the provided data.


##### data

*Required*  
Type: `object`

An object that always must contain `username`, `project`, `circle_token`, and `name` (the key name), plus `value` when calling `set`.

## License

MIT © [Ben Drucker](http://bendrucker.me)
