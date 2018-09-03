'use strict';

import mongoose from 'mongoose';
import { SSL_OP_CISCO_ANYCONNECT } from 'constants';

var PaymentendpointSchema = new mongoose.Schema({
      Name: String,
      Contact: Number,
      City: String,
      Theater: String,
      movieName: String,
      NOT: Number,
      Date: String,
      Time: String,
      seatN: String,
      total: Number
});

export default mongoose.model('Paymentendpoint', PaymentendpointSchema);
