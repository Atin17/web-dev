'use strict';

import mongoose from 'mongoose';

var MoviemappingendpointSchema = new mongoose.Schema({
  Title: String,
  City: String,
  Theaters: Array,
  showdate: Array,
  showtime: Array
});

export default mongoose.model('Moviemappingendpoint', MoviemappingendpointSchema);

  