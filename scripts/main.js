//get the values in from the form being input
//called on forest-gate-input.html
function inputData() {
    console.log("inside inputData");
};

//called on forest.html
function getResult() {
    //this code will access local storage and decide which images to show 
    console.log("inside getResult"); 
    var currentUrl = window.location.href;
    let params = (new URL(currentUrl)).searchParams;
    sleep = params.get('sleep');
    steps = params.get('steps');
    productivity = params.get('productivity');

    console.log(sleep);
    console.log(steps);
    console.log(productivity);
};


function initialise(){
	if (document.getElementById("input-to-forest")){ //we are going to run this function when we are on the input page
		inputData();
	}
	else if (document.getElementById("actual-forest")){ //we are showing the forest, need the functions that get the scores and display
		getResult();
	}
}

window.onload = initialise;

/* Try and extend to local storage if have time
//access local storage
window.localStorage;
//key and values need to both be strings
localStorage.setItem("key", "value");
//get items by keys 
localStorage.getItem("key");
localStorage.key("index number of the key")

//get all three inputs for sleep, steps, productivity
const sleepAmt = document.getElementById("sleep");
const stepsAmt = document.getElementById("steps");
const productivityAmt = document.getElementById("productivity");
//form submit button
const feedForest = document.getElementById("feed-forest");
//output to here
const checkJavascript = document.getElementById("check_javascript");

console.log(sleepAmt);
//on submission of form, add data to local storage
feedForest.onclick = function () {
    const sleep = sleepAmt.value;
    const steps = stepsAmt.value;
    const productivity = productivityAmt.value;
};
*/