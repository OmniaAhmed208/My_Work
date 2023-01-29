const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const profileSchema = new Schema({
  name:  String,
  image: String,
  github:   String,
  behance: String
});

const Profile = mongoose.model('Profile', profileSchema);
module.exports = Profile;