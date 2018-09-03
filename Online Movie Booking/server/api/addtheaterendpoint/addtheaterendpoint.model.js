'use strict';

import mongoose from 'mongoose';

var AddtheaterendpointSchema = new mongoose.Schema({
  Name: String,
  City: String,
  Location: String,
});

export default mongoose.model('Addtheaterendpoint', AddtheaterendpointSchema);
