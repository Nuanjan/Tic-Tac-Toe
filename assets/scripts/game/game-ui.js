
const store = require('./../store')

const createSuccess = function (response) {
  // Messaging:
  store.game = response.game
  store.games = response.games
  $('.box').text('')
  $('#head-board').show()
  $('#hid').show()
  $('#warning').text('')
  $('.letter-x').css('background-color', '#1d7d9e').text('X TURN!')
  $('ul').hide()
}
const createFailure = function () {
  // Show a error message
  // Select the message element, change its text, and display it
  // Change the text:
  $('#message').text('Create Game failed!')
  // Show the element:
  $('#message').show()
  // Remove all the classes, then a
}

const indexSuccess = function (response) {
  $('#totalGame').show().text(`You have been play: ${response.games.length} times!`).delay(2000).fadeOut(800)
  $('#warning').text('')
}

const indexFailure = function () {
  $('#message').text('Show Index Game failed!')
  // Show the element:
  $('#message').show()
  // Remove all the classes, then add the failure class
  $('#message').removeClass()
  $('#message').addClass('failure')
  $('#warning').text('')
}
const updateSuccess = function (response) {
  $('.hidden-newGame').show()
  if (store.game.over === true) {
    $('#hid-warning').hide()
  }
}

const updateFailure = function () {
  // Show a error message
  // Select the message element, change its text, and display it
  // Change the text:
  // Show the element:
  // Remove all the classes, then add the failure class
  $('#warning').text('Someone There!')
  $('#hid-warning').show()
}

const showSuccess = function (response) {
  for (let i = 0; i < response.games.length; i++) {
    if (store.game.over === true) {
      console.log(response.games[i])
      $('ul').show().append(`<li>${response.games[i].cells}</li>`)
    }
  }
  $('#hid').hide()
}
const showFailure = function () {
  $('#message').text('Show Previous Game failed!')
  // Show the element:
  $('#message').show()
  // Remove all the classes, then add the failure class
  $('#message').removeClass()
  $('#message').addClass('failure')
  $('#warning').text('')
}

module.exports = {
  createSuccess,
  createFailure,
  indexSuccess,
  indexFailure,
  updateSuccess,
  updateFailure,
  showSuccess,
  showFailure
}
