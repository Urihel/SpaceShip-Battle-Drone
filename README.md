# SpaceShip-Battle-Drone

# Purpose of Project
to utilize web development technologies to develop games.

# project description
So like many, i too have played the metroids atari game or spaceship galaxtica and i wanted to build a game similar to those but rendering a bit different. While most games like metroids, in html a game of that magnitude is usually handled using canvas which i have used in the past to design a pixel art maker. This time around i wanted to play around with html using div's to design the layout and pretty much the entirety of the game. the first div i installed into the html doc is the img-container div. I took a different approach in designing this div because i felt it was much easier to add a image to css using the background property and then assining it a value of url(" "); for those that are new to web dev. another method for adding images to a web page without having to use the <img> tag all you have to do is create a div and pass it an id with a name of preference for that id. next you want to access that id with css and use the background property. the backgound property allows you to manipulate the background of elements in html. after that you want to pass the background a value of url(" "); the url (" "); prop-value allows you to copy an image address and paste it inside the quotation marks. do this will copy the image. and immediately place in as the background of the div considering you pass in height and width properties with values. I later created a spaceship drone using a div. This can be a bit tricky since were using a div rather than svg and using x,y coordinates to push the spaceship around in the img-container. in order for me to make the ship or triangle in this case. i had to create div and pass it border properties for top,bottom, left, right. i also had to pass into a triangle using a div. i had to create border properties for the top,bottom,left,right. In those properties i had to include a 40px sized border all around with some border being transparent. This allowed some border to become transparent to the background and leaving one green to show that a triangle was present when the other borders became transparent. The js section basically uses the dom, to access the html elements i want. In js i also created an eventlistener that allows you to press your arrows keys on your computer or laptop to move the spaceship around. i also was able to create the laser that would be shot out of the spaceship but right now, the code i wrote is replicating the lazer in all the wrong ways but its something i know how to debug. 

# languages 
html, css, javascript

# known bugs
there is a bug in the setInterval function which continues to increase the size of the laser div when it should be pushing it towards the top the window rather than down.

# to be added to the game 
1. the enemies that will fire back at me and who i will be shooting the lazers too. 
2. some music to keep the levels fun. 
3. i need to set true and false values to the img-container so that the ship never goes beyond where it's supposed too. 
4. fix the lazer bug
