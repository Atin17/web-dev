/**
 * Addtheaterendpoint model events
 */

'use strict';

import {EventEmitter} from 'events';
import Addtheaterendpoint from './addtheaterendpoint.model';
var AddtheaterendpointEvents = new EventEmitter();

// Set max event listeners (0 == unlimited)
AddtheaterendpointEvents.setMaxListeners(0);

// Model events
var events = {
  'save': 'save',
  'remove': 'remove'
};

// Register the event emitter to the model events
for (var e in events) {
  var event = events[e];
  Addtheaterendpoint.schema.post(e, emitEvent(event));
}

function emitEvent(event) {
  return function(doc) {
    AddtheaterendpointEvents.emit(event + ':' + doc._id, doc);
    AddtheaterendpointEvents.emit(event, doc);
  }
}

export default AddtheaterendpointEvents;
