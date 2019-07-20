window.addEventListener("keydown", function (e) {
    var keycode = e.which || e.code;
    console.log(e);
    if(keycode === 37) {
        var x = document.getElementById('triangle');
        console.log(x);
        var y = parseInt(getComputedStyle(x).left);
        console.log(y);
        e.preventDefault();
        y -= 5;
        x.style.left = y + 'px';
    }
    else if(keycode === 38) {
        
        var x = document.getElementById('triangle');
        console.log(x);
        var y = parseInt(getComputedStyle(x).top);
        console.log(y);
        e.preventDefault();
        y -= 5;
        x.style.top = y + 'px';
    }
    else if(keycode === 39) {
        var x = document.getElementById('triangle');
        console.log(x);
        var y = parseInt(getComputedStyle(x).left);
        console.log(y);
        e.preventDefault();
        y += 5;
        x.style.left = y + 'px';
    }
    else if( keycode === 40) {
        var x = document.getElementById('triangle');
        console.log(x);
        var y = parseInt(getComputedStyle(x).top);
        console.log(y);
        e.preventDefault();
        y += 5;
        x.style.top = y + 'px';
    }
    else if (keycode === 83) {  // S keyboard key 
        console.log("fire button is working");
    }
});

    //we need lvl opponents to appear
    //make ship super responsive
    //create opponents for 1 levels worth of game
    //have opponents fire back 
    //create shot fire bonuses.

function spaceshipTurret() {
    window.addEventListener("keydown",function (e) {
    var newkey = e.which || e.code;
    if (newkey === 83) {  // S keyboard key 
    console.log("fire button is working");
    // second part of the code which will fire the laser when the s key is pressed. 
        var x = setInterval(function() {
       
       
        
        //---------------------------------------------------------------------------------------------------------------------
    var bool = true;
    if(bool === true) {
       var shape = document.getElementById("triangle");
       var laser = document.createElement("div");
       var lazerBeam = document.getElementById("laser"); 
       console.log(shape);
       shape.appendChild(laser);
       laser.id ="laser";
       console.log(laser);
       lazerBeam.style.background = "red";
       lazerBeam.style.border="1px solid red";
       lazerBeam.style.height ="30px";
       lazerBeam.style.width="2px";
       lazerBeam.style.position = "absolute";
      

       
       var z =  parseInt(getComputedStyle(lazerBeam).top);
        console.log(z);
        e.preventDefault();
        z -= 5;
        lazerBeam.style.top = z + 'px';
       
       
       
    }
    },1000);
    }
    });
}
spaceshipTurret();