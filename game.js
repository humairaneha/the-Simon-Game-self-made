var gamePattern =[];
var userClickedPattern=[];
var buttonColours=["red","blue","green","yellow"];

function nextSequence(){
  var randomNumber = Math.floor(Math.random()*4);
  var randomChosenColour = buttonColours[randomNumber];
  gamePattern.push(randomChosenColour);

  $("#"+randomChosenColour).fadeIn(100).fadeOut(100).fadeIn(100);
    animatePress(randomChosenColour);
    playSound(randomChosenColour);
  console.log(gamePattern);
  level++;
  $("h1").text("Level "+level);



  }
   var level=0;
    $("body").keydown(function(){
      if(level===0)
    {  nextSequence();
    }

    });
 
    $(document).click(function(){
      if(level===0)
    {  nextSequence();
    }

    });



  function checkAnswer(currentLevel){
      if(userClickedPattern[currentLevel]===gamePattern[currentLevel])
      {

         if(userClickedPattern.length===gamePattern.length)
          {
            setTimeout(function(){
            nextSequence();

             } ,1000);
             userClickedPattern=[];}



        }
      else{
        
        level=0;
        startOver();
        var audio =new Audio("wrong.mp3");
        audio.play();
        $("h1").text("Game Over,Press Any Key to Restart");
        $("body").addClass("game-over");
        setTimeout(function(){
          $("body").removeClass("game-over");
        },100);
      }
    }
function startOver(){
  userClickedPattern=[];
  gamePattern=[];
}
function playSound(name)
    {
      var soundOnClicked = new Audio("sounds/"+name+".mp3");
      soundOnClicked.play();
    }

  var userChosenColour;
  $(".btn").click(function(){

  userChosenColour = $(this).attr("id");
  animatePress(userChosenColour);
  playSound(userChosenColour);
  userClickedPattern.push(userChosenColour);
  console.log(userClickedPattern);
  checkAnswer(userClickedPattern.length-1);


  });


function animatePress(currentColour)
{  $("#"+currentColour).addClass("pressed");
setTimeout(function(){
  $("#"+currentColour).removeClass("pressed");
},100);
}

  // for playing sound

 function playSound(name)
  {
    var soundOnClicked = new Audio("sounds/"+name+".mp3");
    soundOnClicked.play();
  }
