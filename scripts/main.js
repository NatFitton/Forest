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
    inpSleep = parseInt(params.get('sleep'));
    inpSteps = parseInt(params.get('steps'));
    inpProductivity = parseInt(params.get('productivity'));

    //if local storage is empty, set the values initially
    if (localStorage.getItem("sleepKey") === null){
        localStorage.setItem("sleepKey", inpSleep);
        localStorage.setItem("stepsKey", inpSteps);
        localStorage.setItem("productivityKey", inpProductivity);
    } else { //add recent input to previously stored scores for each
        //get previous score
        previousSleep = parseInt(localStorage.getItem("sleepKey"));
        previousSteps = parseInt(localStorage.getItem("stepsKey"));
        previousProductivity = parseInt(localStorage.getItem("productivityKey"));
        //add new score 
        newSleep = previousSleep + inpSleep
        newSteps = previousSteps + inpSteps
        newProductivity = previousProductivity + inpProductivity
        //save new score to the local storage
        localStorage.setItem("sleepKey", newSleep);
        localStorage.setItem("stepsKey", newSteps);
        localStorage.setItem("productivityKey", newProductivity);
    };

    console.log(localStorage)
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
