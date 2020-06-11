'use strict'

const store = require('./../store')

const signupSuccess = function (response) {
  // Form reset:
  $('form').trigger('reset')

  // Messaging:
  $('#message').text('Welcome! ' + response.user.email)
  console.log(response)
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
}
const signinSuccess = function (response) {
  // Form reset:
  $('form').trigger('reset')

  // Messaging:
  $('#message').text('Welcome back! ' + response.user.email)
  $('#message').show()
  $('#message').removeClass()
  $('#message').addClass('success')
  $('.hidden').removeClass()
  $('.column').hide()
  $('#games-index').show()
  $('#hid').show()
  store.user = response.user
  console.log('token is = ' + response.user.token)
  console.log('id is = ' + response.user)
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
  $('#ch-msg').text('Password changed! ')
  $('#ch-msg').show().css('text-align', 'center')
  $('#ch-msg').removeClass()
  $('#ch-msg').addClass('success')
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
  $('#message').addClass('good-bye')
  $('#hid').addClass('hidden')
  $('#sign-out').addClass('hidden')
  $('#show-signin').show()
  $('#show-signup').show()
  store.user.token = null
  console.log('token is = ' + store.user)
  window.location.reload()
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
