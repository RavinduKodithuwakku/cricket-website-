
function startQuiz(){
    q1();
    timer();
    interval =setInterval(timer, 1000);
    flag = 1;
    document.getElementById("marks").style.display="none";
    document.getElementById("qDuration").style.display="none";
    document.getElementById("qTimer").style.display="block";
    
    
}
function playAgain(){ // if user click play again
    document.getElementById("marks").style.display="none";
    document.getElementById("qDuration").style.display="none";
    location.reload(score); //reloading the function score
    givenTime = 3;// 3 minutes are given to end the game 
    timeInSecond = givenTime * 60;
    interval ; 
    flag;
    startQuiz();
    
}
//timer
var givenTime = 3;//in minutes
var timeInSecond = givenTime * 60;
var interval ; 
var flag;
var seconds;
var minutes;
var duMinutes;
var duSeconds;


function timer(){
    minutes =Math.floor(timeInSecond / 60);
    seconds =timeInSecond % 60;
    leftSeconds= seconds<10 ?'0'+seconds :seconds;
    leftMinutes= minutes<10 ?'0'+minutes :minutes;
    if (flag==1){
        document.getElementById("qTimer").innerHTML="Time left: "+(leftMinutes)+":"+(leftSeconds);
        timeInSecond--;
    }
    

    if (minutes=="0"+0 && seconds=="0"+0){ // aftre ending the time game will be end 
        score();
        document.getElementById("marks").style.display="block";
        document.getElementById("question1").style.display ="none";
        document.getElementById("question2").style.display ="none";
        document.getElementById("question3").style.display ="none";
        document.getElementById("question4").style.display ="none";
        document.getElementById("question5").style.display ="none";
        document.getElementById("question6").style.display ="none";
        document.getElementById("question7").style.display ="none";
        document.getElementById("question8").style.display ="none";
        document.getElementById("question9").style.display ="none";
        document.getElementById("question10").style.display ="none";

        duMinutes = givenTime - minutes; // countion the duration user takes to end the game
        duSeconds = 60 - seconds;
        duSeconds = duSeconds >59 ?"00":duSeconds;
        document.getElementById("qDuration").innerHTML="duration: "+(duMinutes)+":"+(duSeconds);
        
    }


}

//================================================ fom function q1() to function q10() all are in same pattern ====================


function q1(){
  
    document.getElementById("startBtn").style.display ="none";//hide the stat button and relative div tag
    document.getElementById("question1").style.display="block";//question 1 is displayed
    document.getElementById("qnavi").style.display ="block";//navigation buttons in quiz is displayed
    
    document.getElementById("question2").style.display ="none"; // all other questions are not displayed at the moment
    document.getElementById("question3").style.display ="none";
    document.getElementById("question4").style.display ="none";
    document.getElementById("question5").style.display ="none";
    document.getElementById("question6").style.display ="none";
    document.getElementById("question7").style.display ="none";
    document.getElementById("question8").style.display ="none";
    document.getElementById("question9").style.display ="none";
    document.getElementById("question10").style.display ="none";

    document.getElementById("navi_btn_1").style.backgroundColor = "blue"; // the relative navigation button will be colored and others remain same
    document.getElementById("navi_btn_2").style.backgroundColor = "white";
    document.getElementById("navi_btn_3").style.backgroundColor = "white";
    document.getElementById("navi_btn_4").style.backgroundColor = "white";
    document.getElementById("navi_btn_5").style.backgroundColor = "white";
    document.getElementById("navi_btn_6").style.backgroundColor = "white";
    document.getElementById("navi_btn_7").style.backgroundColor = "white";
    document.getElementById("navi_btn_8").style.backgroundColor = "white";
    document.getElementById("navi_btn_9").style.backgroundColor = "white";
    document.getElementById("navi_btn_10").style.backgroundColor = "white";
}

function q2(){
    document.getElementById("question2").style.display ="block";
    document.getElementById("question1").style.display ="none";
   //2
    document.getElementById("question3").style.display ="none";
    document.getElementById("question4").style.display ="none";
    document.getElementById("question5").style.display ="none";
    document.getElementById("question6").style.display ="none";
    document.getElementById("question7").style.display ="none";
    document.getElementById("question8").style.display ="none";
    document.getElementById("question9").style.display ="none";
    document.getElementById("question10").style.display ="none";

    document.getElementById("navi_btn_2").style.backgroundColor = "blue";
    document.getElementById("navi_btn_1").style.backgroundColor = "white";
    document.getElementById("navi_btn_3").style.backgroundColor = "white";
    document.getElementById("navi_btn_4").style.backgroundColor = "white";
    document.getElementById("navi_btn_5").style.backgroundColor = "white";
    document.getElementById("navi_btn_6").style.backgroundColor = "white";
    document.getElementById("navi_btn_7").style.backgroundColor = "white";
    document.getElementById("navi_btn_8").style.backgroundColor = "white";
    document.getElementById("navi_btn_9").style.backgroundColor = "white";
    document.getElementById("navi_btn_10").style.backgroundColor = "white";
    
}

function q3(){
    document.getElementById("question3").style.display ="block";
    document.getElementById("question1").style.display ="none";
    document.getElementById("question2").style.display ="none";
   
    document.getElementById("question4").style.display ="none";
    document.getElementById("question5").style.display ="none";
    document.getElementById("question6").style.display ="none";
    document.getElementById("question7").style.display ="none";
    document.getElementById("question8").style.display ="none";
    document.getElementById("question9").style.display ="none";
    document.getElementById("question10").style.display ="none";
    
    document.getElementById("navi_btn_3").style.backgroundColor = "blue";
    document.getElementById("navi_btn_1").style.backgroundColor = "white";
    document.getElementById("navi_btn_2").style.backgroundColor = "white";
    document.getElementById("navi_btn_4").style.backgroundColor = "white";
    document.getElementById("navi_btn_5").style.backgroundColor = "white";
    document.getElementById("navi_btn_6").style.backgroundColor = "white";
    document.getElementById("navi_btn_7").style.backgroundColor = "white";
    document.getElementById("navi_btn_8").style.backgroundColor = "white";
    document.getElementById("navi_btn_9").style.backgroundColor = "white";
    document.getElementById("navi_btn_10").style.backgroundColor = "white";
}

function q4(){
    document.getElementById("question4").style.display ="block";
    document.getElementById("question1").style.display ="none";
    document.getElementById("question2").style.display ="none";
    document.getElementById("question3").style.display ="none";
   
    document.getElementById("question5").style.display ="none";
    document.getElementById("question6").style.display ="none";
    document.getElementById("question7").style.display ="none";
    document.getElementById("question8").style.display ="none";
    document.getElementById("question9").style.display ="none";
    document.getElementById("question10").style.display ="none";  
    
    document.getElementById("navi_btn_4").style.backgroundColor = "blue";
    document.getElementById("navi_btn_1").style.backgroundColor = "white";
    document.getElementById("navi_btn_2").style.backgroundColor = "white";
    document.getElementById("navi_btn_3").style.backgroundColor = "white";
    document.getElementById("navi_btn_5").style.backgroundColor = "white";
    document.getElementById("navi_btn_6").style.backgroundColor = "white";
    document.getElementById("navi_btn_7").style.backgroundColor = "white";
    document.getElementById("navi_btn_8").style.backgroundColor = "white";
    document.getElementById("navi_btn_9").style.backgroundColor = "white";
    document.getElementById("navi_btn_10").style.backgroundColor = "white";
}

function q5(){
    document.getElementById("question5").style.display ="block";
    document.getElementById("question1").style.display ="none";
    document.getElementById("question2").style.display ="none";
    document.getElementById("question3").style.display ="none";
    document.getElementById("question4").style.display ="none";
    
    document.getElementById("question6").style.display ="none";
    document.getElementById("question7").style.display ="none";
    document.getElementById("question8").style.display ="none";
    document.getElementById("question9").style.display ="none";
    document.getElementById("question10").style.display ="none";  
    
    document.getElementById("navi_btn_5").style.backgroundColor = "blue";
    document.getElementById("navi_btn_1").style.backgroundColor = "white";
    document.getElementById("navi_btn_2").style.backgroundColor = "white";
    document.getElementById("navi_btn_3").style.backgroundColor = "white";
    document.getElementById("navi_btn_4").style.backgroundColor = "white";
    document.getElementById("navi_btn_6").style.backgroundColor = "white";
    document.getElementById("navi_btn_7").style.backgroundColor = "white";
    document.getElementById("navi_btn_8").style.backgroundColor = "white";
    document.getElementById("navi_btn_9").style.backgroundColor = "white";
    document.getElementById("navi_btn_10").style.backgroundColor = "white";
}

function q6(){
    document.getElementById("question6").style.display ="block";
    document.getElementById("question1").style.display ="none";
    document.getElementById("question2").style.display ="none";
    document.getElementById("question3").style.display ="none";
    document.getElementById("question4").style.display ="none";
    document.getElementById("question5").style.display ="none";
    
    document.getElementById("question7").style.display ="none";
    document.getElementById("question8").style.display ="none";
    document.getElementById("question9").style.display ="none";
    document.getElementById("question10").style.display ="none";   

    document.getElementById("navi_btn_6").style.backgroundColor = "blue";
    document.getElementById("navi_btn_1").style.backgroundColor = "white";
    document.getElementById("navi_btn_2").style.backgroundColor = "white";
    document.getElementById("navi_btn_3").style.backgroundColor = "white";
    document.getElementById("navi_btn_4").style.backgroundColor = "white";
    document.getElementById("navi_btn_5").style.backgroundColor = "white";
    document.getElementById("navi_btn_7").style.backgroundColor = "white";
    document.getElementById("navi_btn_8").style.backgroundColor = "white";
    document.getElementById("navi_btn_9").style.backgroundColor = "white";
    document.getElementById("navi_btn_10").style.backgroundColor = "white";
}

function q7(){
    document.getElementById("question7").style.display ="block";
    document.getElementById("question1").style.display ="none";
    document.getElementById("question2").style.display ="none";
    document.getElementById("question3").style.display ="none";
    document.getElementById("question4").style.display ="none";
    document.getElementById("question5").style.display ="none";
    document.getElementById("question6").style.display ="none";
    
    document.getElementById("question8").style.display ="none";
    document.getElementById("question9").style.display ="none";
    document.getElementById("question10").style.display ="none";   

    document.getElementById("navi_btn_7").style.backgroundColor = "blue";
    document.getElementById("navi_btn_1").style.backgroundColor = "white";
    document.getElementById("navi_btn_2").style.backgroundColor = "white";
    document.getElementById("navi_btn_3").style.backgroundColor = "white";
    document.getElementById("navi_btn_4").style.backgroundColor = "white";
    document.getElementById("navi_btn_5").style.backgroundColor = "white";
    document.getElementById("navi_btn_6").style.backgroundColor = "white";
    document.getElementById("navi_btn_8").style.backgroundColor = "white";
    document.getElementById("navi_btn_9").style.backgroundColor = "white";
    document.getElementById("navi_btn_10").style.backgroundColor = "white";
}

function q8(){
    document.getElementById("question8").style.display ="block";
    document.getElementById("question1").style.display ="none";
    document.getElementById("question2").style.display ="none";
    document.getElementById("question3").style.display ="none";
    document.getElementById("question4").style.display ="none";
    document.getElementById("question5").style.display ="none";
    document.getElementById("question6").style.display ="none";
    document.getElementById("question7").style.display ="none";
   
    document.getElementById("question9").style.display ="none";
    document.getElementById("question10").style.display ="none";  
    
    document.getElementById("navi_btn_8").style.backgroundColor = "blue";
    document.getElementById("navi_btn_1").style.backgroundColor = "white";
    document.getElementById("navi_btn_2").style.backgroundColor = "white";
    document.getElementById("navi_btn_3").style.backgroundColor = "white";
    document.getElementById("navi_btn_4").style.backgroundColor = "white";
    document.getElementById("navi_btn_5").style.backgroundColor = "white";
    document.getElementById("navi_btn_6").style.backgroundColor = "white";
    document.getElementById("navi_btn_7").style.backgroundColor = "white";
    document.getElementById("navi_btn_9").style.backgroundColor = "white";
    document.getElementById("navi_btn_10").style.backgroundColor = "white";
}

function q9(){
    document.getElementById("question9").style.display ="block";
    document.getElementById("question1").style.display ="none";
    document.getElementById("question2").style.display ="none";
    document.getElementById("question3").style.display ="none";
    document.getElementById("question4").style.display ="none";
    document.getElementById("question5").style.display ="none";
    document.getElementById("question6").style.display ="none";
    document.getElementById("question7").style.display ="none";
    document.getElementById("question8").style.display ="none";
    
    document.getElementById("question10").style.display ="none";   

    document.getElementById("navi_btn_9").style.backgroundColor = "blue";
    document.getElementById("navi_btn_1").style.backgroundColor = "white";
    document.getElementById("navi_btn_2").style.backgroundColor = "white";
    document.getElementById("navi_btn_3").style.backgroundColor = "white";
    document.getElementById("navi_btn_4").style.backgroundColor = "white";
    document.getElementById("navi_btn_5").style.backgroundColor = "white";
    document.getElementById("navi_btn_6").style.backgroundColor = "white";
    document.getElementById("navi_btn_7").style.backgroundColor = "white";
    document.getElementById("navi_btn_8").style.backgroundColor = "white";
    document.getElementById("navi_btn_10").style.backgroundColor = "white";
}

function q10(){
    document.getElementById("question10").style.display ="block";
    document.getElementById("question1").style.display ="none";
    document.getElementById("question2").style.display ="none";
    document.getElementById("question3").style.display ="none";
    document.getElementById("question4").style.display ="none";
    document.getElementById("question5").style.display ="none";
    document.getElementById("question6").style.display ="none";
    document.getElementById("question7").style.display ="none";
    document.getElementById("question8").style.display ="none";
    document.getElementById("question9").style.display ="none";

    document.getElementById("navi_btn_10").style.backgroundColor = "blue";
    document.getElementById("navi_btn_1").style.backgroundColor = "white";
    document.getElementById("navi_btn_2").style.backgroundColor = "white";
    document.getElementById("navi_btn_3").style.backgroundColor = "white";
    document.getElementById("navi_btn_4").style.backgroundColor = "white";
    document.getElementById("navi_btn_5").style.backgroundColor = "white";
    document.getElementById("navi_btn_6").style.backgroundColor = "white";
    document.getElementById("navi_btn_7").style.backgroundColor = "white";
    document.getElementById("navi_btn_8").style.backgroundColor = "white";
    document.getElementById("navi_btn_9").style.backgroundColor = "white";
  
     
}


function score(){

    document.getElementById("qDuration").style.display="block";
    document.getElementById("qTimer").style.display="none";

    document.getElementById("marks").style.display ="block";
    document.getElementById("question10").style.display ="none"; //hiding the questions
    document.getElementById("qnavi").style.display ="none";//hiding the quiz navigation buttons
    
    //pause the timer
    clearTimeout(interval);
    flag=0;
   
    duSeconds = 60 - seconds;
    duSeconds = duSeconds >59 ?"00":duSeconds;
    duSeconds = duSeconds <10 ?"0"+duSeconds:duSeconds;
    duMinutes = minutes =='0'+ 0? "00": (givenTime-1) - minutes;

    document.getElementById("qDuration").innerHTML="Duration: "+(duMinutes)+":"+(duSeconds);
    
     
    //correct anwsers for questons
    var corretq1ans ="2";
    var corretq2ans ="3";
    var corretq3ans ="1";
    var corretq4ans ="1";
    var corretq5ans ="2";
    var corretq6ans ="3";
    var corretq7ans ="2";
    var corretq8ans ="1";
    var corretq9ans ="2";
    var corretq10ans ="2";
    //getting the anwsers from user inputs
    document.getElementById("resultq1").innerHTML = ""; 
    var useransq1 = document.getElementsByName('q1ans');
    var finalMarks = 0;
  
    //========================= from q1 to q10 will be in same pattern =========================

    //for q1
    for(i = 0; i < useransq1.length; i++) { 
        
        if(!useransq1[0].checked && !useransq1[1].checked && !useransq1[2].checked ){  //if any anwser is not selected
            document.getElementById("resultq1").innerHTML ="Q 01. skipped &#128065  Correct anwser: Brain Lara ";
            finalMarks-=1; // -1 point
            break;       
        }
       
        else if(useransq1[i].checked &&corretq1ans ==useransq1[i].value) {  // if correct anwser is clicked
            if(corretq1ans ==useransq1[i].value){
                document.getElementById("resultq1").innerHTML ="Q 01. &#x2713 ";
                finalMarks+=2; // adding +2 points
                break;  
            }
        }else if (useransq1[i].checked &&corretq1ans !=useransq1[i].value){ //if anwser is wrong
            document.getElementById("resultq1").innerHTML ="Q 01. &#x274C Correct anwser: Brain Lara " ;   
            finalMarks-=1; // -1 point
            break;  
        }
        
    };
        
    //for q2
    document.getElementById("resultq2").innerHTML = ""; 
    window.useransq2 = document.getElementsByName('q2ans'); 
    for(i = 0; i < useransq2.length; i++) { 
        if(!useransq2[0].checked && !useransq2[1].checked && !useransq2[2].checked ){
            document.getElementById("resultq2").innerHTML ="Q 02. skipped &#128065 Correct anwser: Rohit Sharma ";
            finalMarks-=1;
            break;           
        }
       
        else if(useransq2[i].checked &&corretq2ans ==useransq2[i].value) {  
            if(corretq2ans ==useransq2[i].value){
                document.getElementById("resultq2").innerHTML ="Q 01. &#x2713 ";
                finalMarks+=2;
                break;  
            }
        }else if (useransq2[i].checked &&corretq2ans !=useransq2[i].value){
            document.getElementById("resultq2").innerHTML ="Q 02. &#x274C Correct anwser: Rohit Sharma " ;
            finalMarks-=1;
            break;     
        }
        
    };
    //forq3
    document.getElementById("resultq3").innerHTML = ""; 
    window.useransq3 = document.getElementsByName('q3ans'); 
    for(i = 0; i < useransq3.length; i++) { 
        if(!useransq3[0].checked && !useransq3[1].checked && !useransq3[2].checked ){
            document.getElementById("resultq3").innerHTML ="Q 03. skipped &#128065 Correct anwser: Jack Hobbs ";
            finalMarks-=1;
            break;           
        }
       
        else if(useransq3[i].checked &&corretq3ans ==useransq3[i].value) {  
            if(corretq3ans ==useransq3[i].value){
                document.getElementById("resultq3").innerHTML ="Q 03. &#x2713";
                finalMarks+=2;
                break;  
            }
        }else if (useransq3[i].checked &&corretq3ans !=useransq3[i].value){
            document.getElementById("resultq3").innerHTML ="Q 03. &#x274C Correct anwser: Jack Hobbs" ;
            finalMarks-=1;
            break;      
        }
    };
    //forq4
    document.getElementById("resultq4").innerHTML = ""; 
    window.useransq4 = document.getElementsByName('q4ans'); 
    for(i = 0; i < useransq4.length; i++) { 
        if(!useransq4[0].checked && !useransq4[1].checked && !useransq4[2].checked ){
            document.getElementById("resultq4").innerHTML ="Q 04. skipped &#128065 Correct anwser: AB de Villiers";
            finalMarks-=1;
            break;           
        }
       
        else if(useransq4[i].checked &&corretq4ans ==useransq4[i].value) {  
            if(corretq4ans ==useransq4[i].value){
                document.getElementById("resultq4").innerHTML ="Q 04. &#x2713";
                finalMarks+=2;
                break;  
            }
        }else if (useransq4[i].checked &&corretq4ans !=useransq4[i].value){
            document.getElementById("resultq4").innerHTML ="Q 04. &#x274C Correct anwser: AB de Villiers" ;
            finalMarks-=1;
            break;      
        }
    };
    //forq5
    document.getElementById("resultq5").innerHTML = ""; 
    window.useransq5 = document.getElementsByName('q5ans'); 
    for(i = 0; i < useransq5.length; i++) { 
        if(!useransq5[0].checked && !useransq5[1].checked && !useransq5[2].checked ){
            document.getElementById("resultq5").innerHTML ="Q 05. skipped &#128065 Correct anwser: Mahela Jayawardene";
            finalMarks-=1;
            break;           
        }
       
        else if(useransq5[i].checked &&corretq5ans ==useransq5[i].value) {  
            if(corretq5ans ==useransq5[i].value){
                document.getElementById("resultq5").innerHTML ="Q 05. &#x2713 ";
                finalMarks+=2;
                break;  
            }
        }else if (useransq5[i].checked &&corretq5ans !=useransq5[i].value){
            document.getElementById("resultq5").innerHTML ="Q 01. &#x274C Correct anwser:  Mahela Jayawardene" ;
            finalMarks-=1;
            break;      
        }
    };
    //forq6
    document.getElementById("resultq6").innerHTML = ""; 
    window.useransq6 = document.getElementsByName('q6ans'); 
    for(i = 0; i < useransq6.length; i++) { 
        if(!useransq6[0].checked && !useransq6[1].checked && !useransq6[2].checked ){
            document.getElementById("resultq6").innerHTML ="Q 06. skipped &#128065 Correct anwser: Brain Larax";
            finalMarks-=1;
            break;           
        }
       
        else if(useransq6[i].checked &&corretq6ans ==useransq6[i].value) {  
            if(corretq6ans ==useransq6[i].value){
                document.getElementById("resultq6").innerHTML ="Q 06. &#x2713 ";
                finalMarks+=2;
                break;  
            }
        }else if (useransq6[i].checked &&corretq6ans !=useransq6[i].value){
            document.getElementById("resultq6").innerHTML ="Q 06. &#x274C Correct anwser: Brain Lara" ;
            finalMarks-=1;
            break;      
        }
    };
    //forq7
    document.getElementById("resultq7").innerHTML = ""; 
    window.useransq7 = document.getElementsByName('q7ans'); 
    for(i = 0; i < useransq7.length; i++) { 
        if(!useransq7[0].checked && !useransq7[1].checked && !useransq7[2].checked ){
            document.getElementById("resultq7").innerHTML ="Q 07. skipped &#128065 Correct anwser: Brendon McCullum";
            finalMarks-=1;
            break;           
        }
       
        else if(useransq7[i].checked &&corretq7ans ==useransq7[i].value) {  
            if(corretq7ans ==useransq7[i].value){
                document.getElementById("resultq7").innerHTML ="Q 07. &#x2713";
                finalMarks+=2;
                break;  
            }
        }else if (useransq7[i].checked &&corretq7ans !=useransq7[i].value){
            document.getElementById("resultq7").innerHTML ="Q 07. &#x274C Correct anwser: Brendon McCullum" ;
            finalMarks-=1;
            break;      
        }
    };
    //forq8
    document.getElementById("resultq8").innerHTML = ""; 
    window.useransq8 = document.getElementsByName('q8ans'); 
    for(i = 0; i < useransq8.length; i++) { 
        if(!useransq8[0].checked && !useransq8[1].checked && !useransq8[2].checked ){
            document.getElementById("resultq8").innerHTML ="Q 08. skipped &#128065 Correct anwser: Graham Gooch ";
            finalMarks-=1;
            break;           
        }
       
        else if(useransq8[i].checked &&corretq8ans ==useransq8[i].value) {  
            if(corretq8ans ==useransq8[i].value){
                document.getElementById("resultq8").innerHTML ="Q 08. &#x2713";
                finalMarks+=2;
                break;  
            }
        }else if (useransq8[i].checked &&corretq8ans !=useransq8[i].value){
            document.getElementById("resultq8").innerHTML ="Q 08. &#x274C Correct anwser: Graham Gooch" ;
            finalMarks-=1;
            break;      
        }
    };
    //forq9
    document.getElementById("resultq9").innerHTML = ""; 
    window.useransq9 = document.getElementsByName('q9ans'); 
    for(i = 0; i < useransq9.length; i++) { 
        if(!useransq9[0].checked && !useransq9[1].checked && !useransq9[2].checked ){
            document.getElementById("resultq9").innerHTML ="Q 09. skipped &#128065 Correct anwser: Don Bradman";
            finalMarks-=1;
            break;           
        }
       
        else if(useransq9[i].checked &&corretq9ans ==useransq9[i].value) {  
            if(corretq9ans ==useransq9[i].value){
                document.getElementById("resultq9").innerHTML ="Q 09. &#x2713";
                finalMarks+=2;
                break;  
            }
        }else if (useransq9[i].checked &&corretq9ans !=useransq9[i].value){
            document.getElementById("resultq9").innerHTML ="Q 09. &#x274C Correct anwser: Don Bradman" ;
            finalMarks-=1;
            break;      
        }
    };
    //forq10
    document.getElementById("resultq10").innerHTML = ""; 
    window.useransq10 = document.getElementsByName('q10ans'); 
    for(i = 0; i < useransq10.length; i++) { 
        if(!useransq10[0].checked && !useransq10[1].checked && !useransq10[2].checked ){
            document.getElementById("resultq10").innerHTML ="Q 10. skipped &#128065 Correct anwser: Mohamed Yusuf ";
            finalMarks-=1;
            break;           
        }
       
        else if(useransq10[i].checked &&corretq10ans ==useransq10[i].value) {  
            if(corretq10ans ==useransq10[i].value){
                document.getElementById("resultq10").innerHTML ="Q 10. &#x2713";
                finalMarks+=2;
                break;  
            }
        }else if (useransq10[i].checked &&corretq10ans !=useransq10[i].value){
            document.getElementById("resultq10").innerHTML ="Q 10. &#x274C Correct anwser: Mohamed Yusuf " ;
            finalMarks-=1;
            break;      
        }

    };
    
    document.getElementById("score").innerHTML= "score : "+finalMarks; // changing the background color according to the score
    if(finalMarks<=5){
        document.getElementById("background").style.backgroundColor ="rgb(255, 153, 0)";
    }
    else{
        document.getElementById("background").style.backgroundColor ="blue";
    }
    
}
