const say = require('say')

//Use default system voice and speed
//say.speak('Hello!')

//stop the text currently being spoken
say.stop()

//More complex example
//say.speak("Hello",'Darshan',0.5)

function sorryDave()
{
    say.speak("Hey Siri");
}
sorryDave()
