var hr = 0;
var min = 0;
var sec = 0;

var timer = false ;

function start() {    
    timer = true ;
 stopwatch() ;

 }
 // disable button after click
 // Step 1: Select the button using querySelector
var button = document.querySelector('#start');

// Step 2: Attach a click event listener to the button
button.addEventListener('click', function() {
 // Disable the button after it is clicked
 this.disabled = true;
});
        

function stop() {
    timer = false;
}
function reset(){
 timer= false;
    sec=0;
    min=0;
    hr=0;
    

}

function stopwatch() {
    if (timer == true){
        sec++;
    }

    if (sec == 60){
        min= min+1;
        sec=0;
    }
    if ( min== 60){
        hr= hr+1;
        min=0;
    }
    document.getElementById("sec").innerHTML=sec;
    document.getElementById("min").innerHTML=min;
    document.getElementById("hr").innerHTML=hr;
    setTimeout("stopwatch()",1000)
}