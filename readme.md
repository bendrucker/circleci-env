# circleci-env [![Build Status](https://travis-ci.org/bendrucker/circleci-env.svg?branch=master)](https://travis-ci.org/bendrucker/circleci-env)

> Configure CircleCI with an environment variable


## Install

```
$ npm install --save circleci-env
```


## Usage

```js
var env = require('circleci-env')

env({
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

#### `env(data)` -> `promise`

Set a new environment variable using the provided data.


##### data

*Required*  
Type: `object`

An object that always must contain `username`, `project`, `circle_token`, plus `name` and `value` for the key and value to be added.

## License

MIT © [Ben Drucker](http://bendrucker.me)
