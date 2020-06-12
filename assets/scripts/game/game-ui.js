
const store = require('./../store')

const createSuccess = function (response) {
  // Messaging:
  store.game = response.game
  console.log('store in create game is ', store)
  $('.box').text('')
  $('#head-board').show()
  $('#hid').show()
  $('.letter-x').css('background-color', '#1d7d9e').text('X TURN!')
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
  console.log(response.games.length)
}

const indexFailure = function () {
  $('#message').text('Show Index Game failed!')
  // Show the element:
  $('#message').show()
  // Remove all the classes, then add the failure class
  $('#message').removeClass()
  $('#message').addClass('failure')
}
const updateSuccess = function (response) {
  // Put book on the page
  // Messaging:
  if (store.game.over === true) {
    $('.hidden-newGame').show()
    $('.box').off('click')
    console.log(store.game.over)
  }
}

const updateFailure = function () {
  // Show a error message
  // Select the message element, change its text, and display it
  // Change the text:
  $('#message').text('Show letter failed!')
  // Show the element:
  $('#message').show()
  // Remove all the classes, then add the failure class
  $('#message').removeClass()
  $('#message').addClass('failure')
}

module.exports = {
  createSuccess,
  createFailure,
  indexSuccess,
  indexFailure,
  updateSuccess,
  updateFailure
}
