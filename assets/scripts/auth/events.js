'use strict'
const api = require('./api')
const ui = require('./ui')
const store = require('./../store')
const getFormFields = require('../../../lib/get-form-fields.js')

const onCredSignUp = function (event) {
  event.preventDefault()
  const form = event.target
  const data = getFormFields(form)
  console.log(data)
  api.credSignUp(data)
    .then(ui.signupSuccess)
    .catch(ui.signupFailure)
}

const onCredSignIn = function (event) {
  event.preventDefault()
  const form = event.target
  const data = getFormFields(form)
  console.log(data)
  api.credSignIn(data)
    .then(ui.signinSuccess)
    .catch(ui.signinFailure)
}

const onCredChPw = function (event) {
  event.preventDefault()
  const form = event.target
  const data = getFormFields(form)
  console.log(data)
  api.credChPw(data)
    .then(ui.chPwSuccess)
    .catch(ui.chPwFailure)
}

const onCredSignOut = function (event) {
  api.credSignOut()
    .then(ui.signoutSuccess)
    .catch(ui.signoutFailure)
}
module.exports = {
  onCredSignUp: onCredSignUp,
  onCredSignIn: onCredSignIn,
  onCredChPw: onCredChPw,
  onCredSignOut: onCredSignOut
}
