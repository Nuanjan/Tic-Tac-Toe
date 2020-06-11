
const store = require('./../store')

const createSuccess = function (response) {
  console.log(response)
  // Messaging:
  $('#message').text('Create Game success!')
  $('#message').show()
  $('#message').removeClass()
  $('#message').addClass('success')
  store.game = response.game
  console.log(store.game._id)
  $('.hidden-game').show()
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
  $('#message').text('Show Index Game success!')
  $('#message').show()
  $('#message').removeClass()
  $('#message').addClass('success')
  store.game = response.game
  console.log(store.game)
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
  $('#message').text('Show letter success')
  $('#message').show()
  $('#message').removeClass()
  $('#message').addClass('success')
  console.log(response)
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

const newGameSuccess = function (response) {
  console.log(response)
  // Messaging:
  $('#message').text('Create Game success!')
  $('#message').show()
  $('#message').removeClass()
  $('#message').addClass('success')
  store.game = response.game
  console.log(store.game._id)
  $('.box').text('')
  $('.hidden-game').show()
}
const newGameFailure = function () {
  // Show a error message
  // Select the message element, change its text, and display it
  // Change the text:
  $('#message').text('Create Game failed!')
  // Show the element:
  $('#message').show()
  // Remove all the classes, then a
}

module.exports = {
  createSuccess,
  createFailure,
  indexSuccess,
  indexFailure,
  updateSuccess,
  updateFailure,
  newGameSuccess,
  newGameFailure
}
