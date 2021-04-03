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

    document.getElementById("check_javascript").innerHTML = "<ul><li>Current sleep hours:" + localStorage.getItem("sleepKey") + "</li><li>Current steps taken:" + localStorage.getItem("stepsKey") + "</li><li>Current productivity minutes:" + localStorage.getItem("productivityKey") + "</li></ul>";

    //hard code weekly goal for now 
    //160,000 points will mean a fully developed forest
    //7619 steps + 8.5 hours sleep + 3.6 hours study to reach
     
    //steps = steps score
    //sleep = sleep score * 60 * 15
    //study = study * 35
    //add the scoring logic here to access certain images and innerHTML them to the forest page? 
    //get count from the local storage
    sleepScore = parseInt(localStorage.getItem("sleepKey"));
    stepScore = parseInt(localStorage.getItem("stepsKey"));
    productivityScore = parseInt(localStorage.getItem("productivityKey"));
    //apply multiplier to score
    totalScore = (stepScore) + (sleepScore * 60 * 15) + (productivityScore * 35)

    //use totalScore below this comment to create logic to determine which version of the forest we see
    // if 0% <= score < 25% 
        //show forest-1.html
    // else 25% <= score < 50%
        //show forest-2.html
    // else 50% <= score 75%
        //show forest-3.html
    // else 75% <= score <= 100%
        //show forest-4.html

};


function initialise(){
	if (document.getElementById("actual-forest")){ //we are showing the forest, need the functions that get the scores and display
		getResult();
	} else if (document.getElementById("feed-forest")){
        document.getElementById("feed-forest").onclick.validate();
    }
}

window.onload = initialise;
