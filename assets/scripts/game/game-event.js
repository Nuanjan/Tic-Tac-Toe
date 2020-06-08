'use strict'

const api = require('./game-api')
const ui = require('./game-ui')

const getFormFields = require('../../../lib/get-form-fields.js')
const onGamesCreate = function (event) {
  event.preventDefault()
  const form = event.target
  const data = getFormFields(form)
  api.gamesCreate(data)
    .then(ui.createSuccess)
    .catch(ui.createFailure)
}

const onGamesIndex = function (event) {
  api.gamesIndex()
    .then(ui.indexSuccess)
    .catch(ui.indexFailure)
}

const onGameUpdate = function (index, value) {
  event.preventDefault()
  const form = event.target
  const data = getFormFields(form)
  api.gameUpdate()
}
module.exports = {
  onGamesCreate,
  onGamesIndex
}
