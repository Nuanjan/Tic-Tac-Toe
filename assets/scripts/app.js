'use strict'

// use require with a reference to bundle the file and use it in this file
// const example = require('./example')
const credEvent = require('./auth/events')
const gameEvent = require('./game/game-event')
// use require without a reference to ensure a file is bundled
// require('./example')

$(() => {
  // your JS code goes here
  $('#sign-up').on('submit', credEvent.onCredSignUp)
  $('#sign-in').on('submit', credEvent.onCredSignIn)
  $('#change-pw').on('submit', credEvent.onCredChPw)
  $('#sign-out').on('click', credEvent.onCredSignOut)
  $('#games-create').on('click', gameEvent.onGamesCreate)
  $('#games-index').on('click', gameEvent.onGamesIndex)
  $('.box').on('click', gameEvent.onGamesUpdate)
  $('#games-show').on('click', gameEvent.onGamesShow)
  //  $('.box').unbind('click').one('click', gameEvent.onGamesUpdate)
})
