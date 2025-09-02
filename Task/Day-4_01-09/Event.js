// const EventEmitter = require('events');
import EventEmitter  from 'events';
// import { EventEmitter } from 'events';

const myEvents = new EventEmitter();

myEvents.on('greet', (arg) => {
  console.log(`How are you ${arg.username} ? ${arg.mgs}`);

  myEvents.emit('hellow',arg.username)
  myEvents.emit('hi');
  myEvents.emit('hi');
});

myEvents.on('hellow', (username) => {
  console.log(`${username} I am fine !`);
});

myEvents.once('hi', () => {
  console.log(`This Will execute only one time`);
});

myEvents.emit('hi');
myEvents.emit('hi');
myEvents.emit('hi');

export default myEvents;
