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
  $('#auth-section').hide()
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
  $('#auth-section').hide()

}

const signinSuccess = function (response) {
  // Form reset:
  $('form').trigger('reset')

  // Messaging:
  $('#message').text('Welcome back! ' + response.user.email)
  $('#message').show()
  $('#message').removeClass()
  $('#message').addClass('success')
  $('#auth-section').hide()
  store.user = response.user
  console.log('token is = ' + response.user.token)
  console.log('id is = '+ response.user)
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
}

const chPwSuccess = function () {
  // Form reset:
  $('form').trigger('reset')

  // Messaging:
  $('#message').text('Password changed! ')
  $('#message').show()
  $('#message').removeClass()
  $('#message').addClass('success')
}

const chPwFailure = function () {
  // Show a error message
  // Select the message element, change its text, and display it
  // Change the text:
  $('#message').text('Change Password failed! Try again')
  // Show the element:
  $('#message').show()
  // Remove all the classes, then add the failure class
  $('#message').removeClass()
  $('#message').addClass('failure')
}

const signoutSuccess = function () {
  // Form reset:
  $('form').trigger('reset')

  // Messaging:
  $('#message').text('Good Bye! ')
  $('#message').show()
  $('#message').removeClass()
  $('#message').addClass('success')
  store.user.token = null
  console.log('token is = ' + store.user)
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
