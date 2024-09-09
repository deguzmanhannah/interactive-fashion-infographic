/* jslint browser: true */
/* global $, gsap, window */

// set initial screen number
var screenNum = 1;

// total number of screens
var totalScreens = $("section").length;

// transition duration
var duration = 1;

// delay for starting screen animations
// make equal to duration... The time it takes content to transition off screen
// add more time to delay the build on a little more
var delay = duration + 0.5;

// disables nav when transitioning from screen to screen
var navActive = true;

// vars used for nav
var currentScreen,
    prevScreen,
    nextScreen;

// hides all screens except for screen 1
$("section:gt(0)").hide();

// set up main div on paused timeline until begin button clicked
var main = gsap.from("main", {
    duration: duration,
    y: $(window).height(),
    ease: "back.out",
    onComplete: function() {
        // set volume of BG music to zero
        
        // play BG music
        
        // fade in BG music to 20% volume
    }
}).pause();

// set up begin button on paused timeline until page load
var begin = gsap.from("#btnContainer", {
    duration: duration,
    y: $(window).height(),
    ease: "back.out",
    onReverseComplete: function() {
        
        // animate on first screen
        loadScreen1();
        
        // show main div
        $("main").show();
        
        // animate on main container
        main.play();
        
    }
}).pause();

// preload all content and then reveal begin button
$(window).on("load", function() {
    
    // fade out preloader GIF
    gsap.to("#loading", {
        duration: duration,
        opacity: 0,
        onComplete: function() {
            
            // when done show begin button
            begin.play();
            
        }
    });
    
});

// begin button click function
$("#begin").click(function() {
    
    // reverse begin button timeline and then play main timeline
    begin.reverse();
    
});

// next and previous navigation functions
function showNextScreen() {
    
    // check if nav is active
    if (navActive) {
        
        // disable nav
        navActive = false;
        
        // targets the current screen
        currentScreen = "#screen" + screenNum;

        // sets next screen number
        screenNum++;

        // show/hide nav
        showHideNav(screenNum);

        // targets the next screen
        nextScreen = "#screen" + screenNum;

        // transitions current screen out
        gsap.fromTo(currentScreen, {
            x: 0
        }, {
            duration: duration,
            delay: 0.5,
            x: -960,
            ease: "power2.inOut"
        });

        // shows next screen
        $(nextScreen).show();

        // transitions next screen in
        gsap.fromTo(nextScreen, {
            x: 960
        }, {
            duration: duration,
            delay: 0.5,
            x: 0,
            ease: "power2.inOut",
            onComplete: function() {

                // hide current screen
                $(currentScreen).hide();
                
                // enable nav
                navActive = true;
            }
        });

        // load function to animate on contents of screen
        window["loadScreen" + screenNum]();

        // stop voiceover from playing
        
        
    }
}

function showPrevScreen() {
    
    // check if nav is active
    if (navActive) {
        
        // disable nav
        navActive = false;
        
        // targets the current screen
        currentScreen = "#screen" + screenNum;

        // sets next screen number
        screenNum--;

        // show/hide nav
        showHideNav(screenNum);

        // targets the next screen
        prevScreen = "#screen" + screenNum;

        // transitions current screen out
        gsap.fromTo(currentScreen, {
            x: 0
        }, {
            duration: duration,
            delay: 0.5,
            x: 960,
            ease: "power4.inOut"
        });

        // shows previous screen
        $(prevScreen).show();

        // transitions next screen in
        gsap.fromTo(prevScreen, {
            x: -960
        }, {
            duration: duration,
            delay: 0.5,
            x: 0,
            ease: "power2.inOut",
            onComplete: function() {

                // hide current screen
                $(currentScreen).hide();

                // enable nav
                navActive = true;
            }
        });

        // load function to animate on contents of screen
        window["loadScreen" + screenNum]();

        
        
    }
}

// next and previous button clicks
$("#next").click(showNextScreen);
$("#prev").click(showPrevScreen);

// show/hide next/prev buttons
function showHideNav(currentScreen) {
    
    if (currentScreen == 1) {
        $("#prev").fadeOut(1000);
    } else if (currentScreen == totalScreens) {
        $("#next").fadeOut(1000);
    } else {
        $("#prev").fadeIn(1000);
        $("#next").fadeIn(1000);
    }
    
}

// set up nav on page load
showHideNav(1);

// LOAD SCREEN AUDIO ///////////////////////////////////////////


// CONTROL BACKGROUND AUDIO ////////////////////////////////////


// functions for loading on content of each screen
// LOAD SCREEN 1 ///////////////////////////////////////////////
function loadScreen1() {

    
    // animate content on with delays
    gsap.from("#screen1 h1", {
        duration: duration,
        delay: delay,
        opacity: 0,
        ease: "back.out(1.7)",
        x: 200
    });

    gsap.from("#screen1 h2", {
        duration: duration,
        delay: 2.5,
        opacity: 0,
        ease: "back.out(1.7)",
        x: 200
    });

    gsap.from("#model1", {
        duration: duration,
        rotation: 5,
        yoyo: true,
        repeat: -1,
        ease: "sine",
    });

    gsap.from("#smoke", {
        duration: 3,
        opacity: .5,
        yoyo: true,
        repeat: -1,
        ease: "sine",
    });

    $(document).ready(function() {
        $("#introAudio").get(0).play();
    });
}

// LOAD SCREEN 2 ///////////////////////////////////////////////
function loadScreen2() {


    gsap.from("#screen2", {
        duration: duration,
        delay: delay,
        opacity: 0
    });

    // animate content on with delays

    gsap.from("#screen2 h1", {
        duration: duration,
        delay: delay + 0.5,
        opacity: 0
    });
    
    gsap.from("#screen2 h2", {
        duration: duration,
        delay: delay + 1,
        opacity: 0
    });

    // hovers for t-shirt

    const text = document.getElementById("hover1");
    const textTwo = document.getElementById("hover2");
    const textThree = document.getElementById("hover3");

    text.onmouseover = function () {
        text.innerHTML = "ZARA";
    }

    text.onmouseout = function () {
        text.innerHTML = "HOVER"
    }

    textTwo.onmouseover = function () {
        textTwo.innerHTML = "H&M";
    }
    textTwo.onmouseout = function () {
        textTwo.innerHTML = "HOVER"
    }

    textThree.onmouseover = function () {
        textThree.innerHTML = "NIKE";
    }

    textThree.onmouseout = function () {
        textThree.innerHTML = "HOVER"
    }

    gsap.from("#moneyFact", {
        duration: duration,
        delay: delay + 0.5,
        opacity: 0,
        x: 200
    });

    gsap.from("#hand", {
        duration: duration,
        yoyo: true,
        repeat: -1,
        y: -5,
        ease: "sine"
    });
    
    $(document).ready(function(){
        $("#moneyIcon").click(function(){
          $("#moneyFact").show();
        });
      });

    
    // start voiceover
    $(document).ready(function() {
        $("#screen2Audio").get(0).play();
    });


    

}

// LOAD SCREEN 3 ///////////////////////////////////////////////
function loadScreen3() {
    
    // animate content on with delays
    gsap.from("#screen3 h1", {
        duration: duration,
        delay: delay,
        opacity: 0,
        y: 200,
        ease: "expo.inOut"
    });

    gsap.from("#screen3 h2", {
        duration: duration,
        delay: delay,
        opacity: 0,
        x: 200,
        ease: "expo.inOut"

    });

    // animations for toggling timeline buttons to reveal text

    $( "#point1" ).click(function() {
        $( "#timeline1" ).toggle( "slow", function() {
          // Animation complete.
        });
      });

      $( "#point2" ).click(function() {
        $( "#timeline2" ).toggle( "slow", function() {
          // Animation complete.
        });
      });

      $( "#point3" ).click(function() {
        $( "#timeline3" ).toggle( "slow", function() {
          // Animation complete.
        });
      });
    
      $( "#point4" ).click(function() {
        $( "#timeline4" ).toggle( "slow", function() {
          // Animation complete.
        });
      });

      $( "#point5" ).click(function() {
        $( "#timeline5" ).toggle( "slow", function() {
          // Animation complete.
        });
      });
    

      gsap.fromTo("#model3", {
        rotation: -10
    }, {
        duration: 1,
        delay: delay,
        rotation: 10,
        yoyo: true,
        repeat: -1,
        ease: "power2.inOut"
    });
    
    gsap.from("#model3", {
        duration: duration,
        delay: delay + 0.25,
        opacity: 0
    });

    gsap.fromTo("#model2", {
        rotation: -10
    }, {
        duration: 1,
        delay: delay,
        rotation: 10,
        yoyo: true,
        repeat: -1,
        ease: "power2.inOut"
    });
    
    gsap.from("#model2", {
        duration: duration,
        delay: delay + 0.5,
        opacity: 0
    });

    gsap.fromTo("#model4", {
        rotation: -5
    }, {
        duration: 1,
        delay: delay + 0.75,
        rotation: 5,
        yoyo: true,
        repeat: -1,
        ease: "power2.inOut"
    });
    
    gsap.from("#model4", {
        duration: duration,
        delay: delay + 0.25,
        opacity: 0
    });
    
    
    // start voiceover
    
    $(document).ready(function() {
        $("#screen3Audio").get(0).play();
    });
    
   
    
    
}

// LOAD SCREEN 4 ///////////////////////////////////////////////
function loadScreen4() {
    
    // animate content on with delays
    gsap.from("#screen4 h1", {
        duration: duration,
        delay: delay,
        opacity: 0,
        y: 200,
        ease: "power3.inOut"
    });

    gsap.from("#screen4 h2", {
        duration: duration,
        delay: delay,
        opacity: 0,
        y: -200,
        ease: "power3.inOut"
    });


    gsap.from("#arrow", {
        duration: duration,
        delay: delay,
        opacity: 0,
        x: -200,
        ease: "sine.out"
    });

    gsap.from("#garbage", {
        duration: 3,
        delay: delay,
        x: -400,
        ease: "sine.out",
        width: 70
    });

    gsap.fromTo("#arrow", {
        rotation: -5
    }, {
        duration: 1,
        delay: delay,
        rotation: 5,
        yoyo: true,
        repeat: -1,
        ease: "power2.inOut"
    });
    
    gsap.from("#arrow", {
        duration: duration,
        delay: delay + 0.5,
    });

    // audio

    $(document).ready(function() {
        $("#screen4Audio").get(0).play();
    });

    // circle hovers

    $("#hoverCircle").hover(function() {
        
        gsap.to("#hoverCircle", {
            duration: 0.1,
            opacity: 0
        });

        gsap.to("#imgDiv", {
            duration: 0.1,
            opacity: 1
        });
        
    }, function() {
        
        gsap.to("#imgDiv", {
            duration: 0.1,
            opacity: 0
        });

        gsap.to("#hoverCircle", {
            duration: 0.1,
            opacity: 1
        });
        
    });

    $("#hoverCircle1").hover(function() {
        
        gsap.to("#hoverCircle1", {
            duration: 0.1,
            opacity: 0
        });

        gsap.to("#imgDiv1", {
            duration: 0.1,
            opacity: 1
        });
        
    }, function() {
        
        gsap.to("#imgDiv1", {
            duration: 0.1,
            opacity: 0
        });

        gsap.to("#hoverCircle1", {
            duration: 0.1,
            opacity: 1
        });
        
    });

    $("#hoverCircle2").hover(function() {
        
        gsap.to("#hoverCircle2", {
            duration: 0.1,
            opacity: 0
        });

        gsap.to("#imgDiv2", {
            duration: 0.1,
            opacity: 1
        });
        
    }, function() {
        
        gsap.to("#imgDiv2", {
            duration: 0.1,
            opacity: 0
        });

        gsap.to("#hoverCircle2", {
            duration: 0.1,
            opacity: 1
        });
        
    });

    $("#hoverCircle3").hover(function() {
        
        gsap.to("#hoverCircle3", {
            duration: 0.1,
            opacity: 0
        });

        gsap.to("#imgDiv3", {
            duration: 0.1,
            opacity: 1
        });
        
    }, function() {
        
        gsap.to("#imgDiv3", {
            duration: 0.1,
            opacity: 0
        });

        gsap.to("#hoverCircle3", {
            duration: 0.1,
            opacity: 1
        });
        
    });


 
  

 
    
}

// LOAD SCREEN 5 ///////////////////////////////////////////////
function loadScreen5() {
    
    // animate content on with delays
    gsap.from("#screen5 h1", {
        duration: duration,
        delay: delay,
        opacity: 0,
        x: -300,
        ease: "power4.in"
    });
    
    gsap.from("#screen5 h2", {
        duration: duration,
        delay: delay,
        opacity: 0,
        x: 300,
        ease: "power4.in"
    });


    $(document).ready(function(){
        $("#one").click(function(){
          $("#solOne").slideToggle(300);
        });
      });
    
      $(document).ready(function(){
        $("#two").click(function(){
          $("#solTwo").slideToggle(300);
        });
      });

      $(document).ready(function(){
        $("#three").click(function(){
          $("#solThree").slideToggle(300);
        });
      });

      $(document).ready(function(){
        $("#four").click(function(){
          $("#solFour").slideToggle(300);
        });
      });

      $(document).ready(function(){
        $("#five").click(function(){
          $("#solFive").slideToggle(300);
        });
      });

      $(document).ready(function(){
        $("#six").click(function(){
          $("#solSix").slideToggle(300);
        });
      });

      $(document).ready(function(){
        $("#seven").click(function(){
          $("#solSeven").slideToggle(300);
        });
      });
 

      gsap.fromTo("#spool", {
        rotation: -5
    }, {
        duration: 1,
        delay: delay,
        rotation: 5,
        yoyo: true,
        repeat: -1,
        ease: "power2.inOut"
    });
    
    gsap.from("#spool", {
        duration: duration,
        delay: delay + 0.5,
    });

    $(document).ready(function() {
        $("#screen5Audio").get(0).play();
    });
    
}

// LOAD SCREEN 6 ///////////////////////////////////////////////
function loadScreen6() {
    
    // animate content on with delays
    gsap.from("#screen6 h1", {
        duration: 2,
        delay: delay,
        opacity: 0,
        y: -400,
        scaleX:0.1,
        ease: "sine.inOut"

    });
    
 
    // start voiceover
    
    
}