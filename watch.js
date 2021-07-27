
    var seconds=00;
    var tens=00;
    //click effects on buttons
    for(var i=0;i<document.querySelectorAll("button").length;i++){
        document.querySelectorAll("button")[i].addEventListener("click",function(){
            var buttonPress = this.innerHTML;
           document.querySelector("."+buttonPress).classList.add("pressed");
           setTimeout(function(){
            document.querySelector("."+buttonPress).classList.remove("pressed");
           },500);
        });
    }
    
    var startButton=document.querySelector(".start");
    
    var stopButton=document.querySelector(".stop");
    
    var resetButton=document.querySelector(".reset");
    var interval;
    var stop=1;
    startButton.onclick=function(){
        clearInterval(interval);
        
            interval=setInterval(startTimer,10);
        
        
    };
    
    stopButton.onclick=function(){
        stop=0;
        clearInterval(interval);
    };
    
    resetButton.onclick=function(){
        clearInterval(interval);
        tens="00";
        seconds="00";
        document.getElementById("tens").innerHTML=tens;
        document.getElementById("seconds").innerHTML=seconds;
    };
    
    function startTimer(){
        tens++;
        if(tens<=9){
            document.getElementById("tens").innerHTML="0"+tens;
        }
        if(tens>9){
            document.getElementById("tens").innerHTML=tens;
        }
        if(tens>99){
            seconds++;
            document.getElementById("seconds").innerHTML="0"+seconds;
            tens=0;
            document.getElementById("tens").innerHTML="0"+0;
        }
        if(seconds>9){
            document.getElementById("seconds").innerHTML=seconds;
        }
    }



    



