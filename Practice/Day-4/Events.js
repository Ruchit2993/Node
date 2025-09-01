// const EventEmitter = require('events');
import EventEmitter  from 'events';
// import { EventEmitter } from 'events';

const myEvents = new EventEmitter();

myEvents.on('greet', (arg) => {
  console.log(`Kaise ho ${arg.username}? ${arg.mgs}`);
});

export default myEvents;


// myEvents.on('greet',()=>{
//     console.log("Bhav Bahv----")
// });

// myEvents.emit('greet');
// myEvents.on('greet', (arg) => {
//     console.log(`"Kaise ho ${arg.username} ?  ${arg.mgs} "`)
// });

// myEvents.emit('greet','dogesh','badhiya na ?');
// myEvents.emit('greet', { username: "Monkesh", mgs: "thik thak bhai" });
// eve.emit('greet', { username: "Monkesh", mgs: "thik thak bhai" });

// module.exports = myEvents;
// export default myEvents;
