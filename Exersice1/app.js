var ft = require('./sportsteam');
var ds = require('./Calculator');
var ds1 = require('./Comparer');
var events = require('events');
var eventEmitter = new events.EventEmitter();



//setting module property
ft.teamname = 'Canada';

//calling the module 
ft.Cheer();

a = 10;
b = 10;


 if(a == b)
{
    console.log("Numbers are equal so adding them!");
    console.log(ds.add(a,b));
}
else
{
    console.log("Numbers are not equal so subtracting them!");
    console.log(ds.subtract(a,b));
}
var fn = function() {
    console.log('alarm has been triggered!');
}


eventEmitter.on('alarm', fn);
eventEmitter.emit('alarm');

    