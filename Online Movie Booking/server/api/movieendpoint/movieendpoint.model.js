'use strict';

import mongoose from 'mongoose';

var MovieendpointSchema = new mongoose.Schema({
  Title: String,
  Year: String,
  Genre: String,
  Runtime: String,
  Actors: String,
  Poster: String,
  Status: Boolean
  
});

export default mongoose.model('Movieendpoint', MovieendpointSchema);
