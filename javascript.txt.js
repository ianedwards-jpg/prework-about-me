//Button Variables  
var btn1 = document.getElementById("button1"),
    btn2 = document.getElementById("button2"),
    btn3 = document.getElementById("button3"),
    btn4 = document.getElementById("button4"),
    btn5 = document.getElementById("button5"); 

//Grow Element- button1
btn1.addEventListener("click", function(){

            document.getElementById("box").style.height = "250px";;

        });

//Change Element Color (Blue)- button2

btn2.addEventListener("click", function(){

            document.getElementById("box").style.backgroundColor = "blue";

        });

//Fade Element (Opacity) - button3
btn3.addEventListener("click", function(){

            document.getElementById("box").style.opacity = "0";

        });

//Shrink Element- button4
btn4.addEventListener("click", function(){

    document.getElementById("box").style.height = "75px";

        });

//Reset Element- button5
 btn5.addEventListener("click", function(){

            document.getElementById("box").style.height = "150px";
            document.getElementById("box").style.backgroundColor = "orange";
            document.getElementById("box").style.opacity = "1"; 

        });