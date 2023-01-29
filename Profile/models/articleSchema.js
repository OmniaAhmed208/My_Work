const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const articleSchema = new Schema({
  title:  String, // String is shorthand for {type: String}
  author: String,
  body:   String,
});

const Article = mongoose.model('Article', articleSchema);
module.exports = Article;