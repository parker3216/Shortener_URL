const mongoose = require('mongoose')
const Schema = mongoose.Schema
const urlSchema = new Schema({
  initialURL: {
    type: String,
    required: true,
  },
  shortURL: {
    type: String,
    required: true,
  }
})

module.exports = mongoose.model( 'url', urlSchema ) //匯出資料