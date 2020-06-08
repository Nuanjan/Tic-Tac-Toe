
const store = require('./../store')

const createSuccess = function (response) {
  console.log(response)
  // Messaging:
  $('#message').text('Create Game success!' + response.game.cells)
  $('#message').show()
  $('#message').removeClass()
  $('#message').addClass('success')
  console.log(response.game.cells)
  store.game = response.game
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
  console.log(response)

}
const indexFailure = function () {
  $('#message').text('Show Index Game failed!')
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
  indexFailure
}
