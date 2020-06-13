'use strict'

const store = require('./../store')

const signupSuccess = function (response) {
  // Form reset:
  $('form').trigger('reset')

  // Messaging:
  $('#message').text('Welcome! ' + response.user.email)
  $('#message').show()
  $('#message').removeClass()
  $('#message').addClass('success')
  $('.hidden').removeClass()
  $('#show-signup').hide()
  $('#hid').hide()
}

const signupFailure = function () {
  // Show a error message
  // Select the message element, change its text, and display it
  // Change the text:
  $('#message').text('Sorry sign up failed! Try again')
  // Show the element:
  $('#message').show()
  // Remove all the classes, then add the failure class
  $('#message').removeClass()
  $('#message').addClass('failure')
  $('#sign-up')[0].reset()
}
const signinSuccess = function (response) {
  // Form reset:
  store.user = response.user
  $('form').trigger('reset')
  // Messaging:
  $('#message').text('Welcome back! ' + response.user.email)
  $('#message').show()
  $('#message').removeClass()
  $('#message').addClass('success')
  $('#hidden').show()
  $('.column').hide()
  $('#hidden').show()
  $('#sign-out').show()
  $('.hide-sign-out').show()
}

const signinFailure = function () {
  // Show a error message
  // Select the message element, change its text, and display it
  // Change the text:
  $('#message').text('Sorry sign in failed! Try again')
  // Show the element:
  $('#message').show()
  // Remove all the classes, then add the failure class
  $('#message').removeClass()
  $('#message').addClass('failure')
  $('#auth-section').hide()
  $('#sign-in')[0].reset()
}

const chPwSuccess = function () {
  // Form reset:
  $('form').trigger('reset')

  // Messaging:
  $('#ch-msg').text('Password changed! ')
  $('#ch-msg').removeClass()
  $('#ch-msg').addClass('success').css('text-align', 'center')
}

const chPwFailure = function () {
  // Show a error message
  $('#change-pw')[0].reset()
  $('#ch-msg').text('Password Change Failed, Try agin!')
  $('#ch-msg').removeClass()
  $('#ch-msg').addClass('success').css('text-align', 'center')
}

const signoutSuccess = function () {
  // Form reset:
  $('form').trigger('reset')

  // Messaging:
  $('#message').text('Good Bye! ')
  $('#message').show()
  $('#message').removeClass()
  $('#message').addClass('good-bye')
  $('#hid').addClass('hidden')
  $('#sign-out').addClass('hidden')
  $('#show-signin').show()
  $('#show-signup').show()
  store.user = null
  $('#hid').hide()
  $('#sign-out').hide()
  $('.hide-sign-out').hide()
}

const signoutFailure = function () {
  // Show a error message
  // Select the message element, change its text, and display it
  // Change the text:
  $('#message').text('Sign Out Failed, You still here!')
  // Show the element:
  $('#message').show()
  // Remove all the classes, then add the failure class
  $('#message').removeClass()
  $('#message').addClass('failure')
}

module.exports = {
  signupSuccess: signupSuccess,
  signupFailure: signupFailure,
  signinSuccess: signinSuccess,
  signinFailure: signinFailure,
  chPwSuccess: chPwSuccess,
  chPwFailure: chPwFailure,
  signoutSuccess: signoutSuccess,
  signoutFailure: signoutFailure
}
