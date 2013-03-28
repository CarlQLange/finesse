finesse
====================
fit 2: the fittening
--------------------

finesse is the successor to my natural-language-ish iTunes controller.

fit looked like this:

	fit "play I wanna be sedated by the ramones"
	fit "play the next song"
	fit "who is this?" #=> "The Ramones"

That is, it was a CLI controller that took a string, parsed it into some command, and ran that command.

That's pretty much what finesse is going to be, except finesse has some important differences.

# DISCLAIMER: Most of this is bullshit

####Strict backend-frontend seperation
finesse's frontend(s) ask or tell the backend to do something, and the backend returns a bunch of data. The frontends all use the same interface. This way, it's possible to test finesse on the command-line, although the main frontend will be a web page. However, the frontends are allowed have different functionality.

####Bottom-up extensibility
When I first wrote fit, I only had one intention: iTunes controlling. Eventually I wrote a plugin system, but it sucked. This time, the backend will be extensible from the start, and plugins will be able to use data from other plugins. This will involve 'namespaced' data stores and other fun things.

####JavaScript
I wrote fit because I wanted to use python for something real. I almost wrote finesse in Ruby, because I want to use Ruby for something real. However, I decided to write it all in javascript because of two reasons: 1. I know javascript. 2. The backend will have a standard interface, and as such can be replaced with one written in a different language. Similarly, there may be multiple frontends.

####Show and tell
An interface for humans.

####Also it's batman
Yeah
