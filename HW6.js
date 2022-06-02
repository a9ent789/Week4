//Tecumseh McMullin
//these are all the global variables

//adds the music to the js file
const music = new Audio("Pump.mp3");

//variables for the table in case any of the data needs to be changes or if another input for the data is added
var timerID;
var elapseTime = 0;
var latitude = 0;
var longitude = 0;
var altitude = 0;
var sensorAltitude = 30383.04;
var sensorPressure = 2.34;
var sensorTemp = 0;
var digitalTemp = 24.12;
var cssTemp = 25;
var csseC02 = 400;
var cssTV0C = 0;
var uv = 0;
var accelX = -0.87;
var accelY = -0.02;
var accelZ = 9.61;
var magneticX = 0.13;
var magneticY = 0.57;
var magneticZ = -0.24;
var gyroX = 4.66;
var gyroY = 0.01;
var gyroZ = -0.4;

//variables to allow the disabling of the buttons
var startButton = true;
var stopButton = false;

//this sets the table's data points so that they are there when the web oage opens
function setVariables()
{
    document.getElementById("R1").innerHTML = elapseTime;
    document.getElementById("R2").innerHTML = latitude;
    document.getElementById("R3").innerHTML = longitude;
    document.getElementById("R4").innerHTML = altitude;
    document.getElementById("R5").innerHTML = sensorAltitude;
    document.getElementById("R6").innerHTML = sensorPressure;
    document.getElementById("R7").innerHTML = sensorTemp;
    document.getElementById("R8").innerHTML = digitalTemp;
    document.getElementById("R9").innerHTML = cssTemp;
    document.getElementById("R10").innerHTML = csseC02;
    document.getElementById("R11").innerHTML = cssTV0C;
    document.getElementById("R12").innerHTML = uv;
    document.getElementById("R13").innerHTML = accelX;
    document.getElementById("R14").innerHTML = accelY;
    document.getElementById("R15").innerHTML = accelZ;
    document.getElementById("R16").innerHTML = magneticX;
    document.getElementById("R17").innerHTML = magneticY;
    document.getElementById("R18").innerHTML = magneticZ;
    document.getElementById("R19").innerHTML = gyroX;
    document.getElementById("R20").innerHTML = gyroY;
    document.getElementById("R21").innerHTML = gyroZ;
}

//this function checks to see if the inputs from the user are correct and if they are continue to the next page
function login(){
    
    //created variables for the inputs that will be used by this function only
    var firstNameL = document.getElementById("firstName").value;
    var lastNameL = document.getElementById("lastName").value;
    var badgeNumberL = document.getElementById("badgeNumber").value;

    //an if, else if, else statement that keeps the webpage from changing in case the inputs are wrong
    if ((firstNameL.length + lastNameL.length) > 19 || (firstNameL.length + lastNameL.length) == 0){
        document.getElementById("message").innerHTML="invalid name";
    }
    else if (badgeNumberL > 999){
        document.getElementById("message").innerHTML="invalid badge number";
    }
    else {
        //posts an alert so they know that they have entered their info correctly and changes the web page
        alert("Acess Granted, Welcome " + firstNameL + " " + lastNameL);
        location.replace("HW6.html");
    }
}

//this function enables the stop button, disables the start button, starts the timer and music.
function startButtonf(){
    if(startButton==true){
        stopButton = true;
        music.play();
        music.loop=true;
        startButton = false;
        timerID = setInterval(timer , 1000);
        setVariables();
    }

    
}

//this function enables the start button, disables he stop button, stops the timer and music.
function stopButtonf(){
    if(stopButton==true){
        startButton = true;
        stopButton = false;
        music.pause();
        clearInterval(timerID);
    }
}

//this increases and displays the ammount of seconds
function timer(){
    elapseTime = elapseTime + 1;
    document.getElementById("R1").innerHTML = elapseTime + " seconds";
}
