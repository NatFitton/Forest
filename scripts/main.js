function validate() {
    //check all inputs are not empty
    var checkSleepEmpty = document.getElementById("sleep").value;
    var checkStepsEmpty = document.getElementById("steps").value;
    var checkProductivityEmpty = document.getElementById("productivity").value;
    
    //verify there is a sleep value
    if (checkSleepEmpty === "")
    {
    alert("Please input a Value");
    return false;
    }
    //verify there is a steps value
    if (checkStepsEmpty === "")
    {
    alert("Please input a Value");
    return false;
    }
    //verify there is a productivity value
    if (checkProductivityEmpty === "")
    {
    alert("Please input a Value");
    return false;
    }
};

//get the values in from the form being input
//called on forest-gate-input.html
function inputData() {
    inpSleep = parseInt(document.getElementById("sleep").value);
    inpSteps = parseInt(document.getElementById("steps").value);
    inpProductivity = parseInt(document.getElementById("productivity").value);

     //if local storage is empty, set the values initially
     if (localStorage.getItem("sleepKey") === null) {
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
};

//called on forest.html
function getResult() {
    //this function will access local storage and decide which images to show based on scores

    document.getElementById("check_javascript").innerHTML = "<ul><li>Current sleep score:" + localStorage.getItem("sleepKey") + "</li><li>Current steps score:" + localStorage.getItem("stepsKey") + "</li><li>Current productivity score:" + localStorage.getItem("productivityKey") + "</li></ul>";
    
    //add the scoring logic here to access certain images and innerHTML them to the forest page? 
    sleepScore = localStorage.getItem("sleepKey");
    stepScore = localStorage.getItem("stepsKey");
    productivityScore = localStorage.getItem("productivityKey");

    //hard code weekly goal 
    //160,000 points will mean a fully developed forest

};


function initialise(){
	if (document.getElementById("actual-forest")){ //we are showing the forest, need the functions that get the scores and display
		getResult();
	} else if (document.getElementById("feed-forest")){
        document.getElementById("feed-forest").onclick.validate();
    }
}

window.onload = initialise;
