function draw() {
    const canvas = document.getElementById('canvas');
    var ctx = canvas.getContext('2d');
    ctx.fillStyle = 'green';
    ctx.fillRect(10, 10, 150, 100);
};

function validate() {
    //check all inputs are not empty
    var checkSleepEmpty = document.getElementById("sleep").value;
    var checkStepsEmpty = document.getElementById("steps").value;
    var checkProductivityEmpty = document.getElementById("productivity").value;

    //verify there is a sleep value
    if (checkSleepEmpty === "")
    {
    alert("Please input how long you slept");
    return false;
    }
    //verify there is a steps value
    if (checkStepsEmpty === "")
    {
    alert("Please input how many steps");
    return false;
    }
    //verify there is a productivity value
    if (checkProductivityEmpty === "")
    {
    alert("Please input your productive minutes");
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
    //this function will access local storage and decide which html file to show based on score

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
    totalScore = ((stepScore) + (sleepScore * 60 * 15) + (productivityScore * 35));
    localStorage.setItem("totalScore", totalScore);
    if (localStorage.getItem("sleepKey") === null) {   
        document.getElementById("check_javascript").innerHTML = "<ul><li>Sleep hours: 0</li><li>Steps taken: 0</li><li>Productivity minutes: 0</li><li>Total score: 0</li></ul>"; 
    } else {
        document.getElementById("check_javascript").innerHTML = "<ul><li>Sleep hours: " + localStorage.getItem("sleepKey") + "</li><li>Steps taken: " + localStorage.getItem("stepsKey") + "</li><li>Productivity minutes: " + localStorage.getItem("productivityKey") + "</li><li>Total score: " + totalScore + "</li></ul>";
    };
        //hard code weekly goal for now
    //160,000 points will mean a fully developed forest
    //160000 / 7 is roughly 22850 points to make seven stages of development
    //use totalScore below this comment to determine which version of the forest we see
    if (localStorage.getItem("sleepKey") === null){
        //show forest-0.html
        document.getElementById("forest-link").innerHTML = "<a href = 'forest-0.html' id = 'forest-0'>Click here to view your forest!</a>"
    } else if (totalScore === 0) {
         //show forest-0.html
        document.getElementById("forest-link").innerHTML = "<a href = 'forest-0.html' id = 'forest-0'>Click here to view your forest!</a>"
    } else if (0 < totalScore && totalScore <= 22850){
        //show forest-1.html
        document.getElementById("forest-link").innerHTML = "<a href = 'forest-1.html' id = 'forest-1'>Click here to view your forest!</a>"
    } else if (22851 <= totalScore && totalScore <= 45700){
        //show forest-2.html
        document.getElementById("forest-link").innerHTML = "<a href = 'forest-2.html' id = 'forest-2'>Click here to view your forest!</a>"
    } else if (45701 <= totalScore && totalScore <= 68550){
        //show forest-3.html
        document.getElementById("forest-link").innerHTML = "<a href = 'forest-3.html' id = 'forest-3'>Click here to view your forest!</a>"
    } else if (68551 <= totalScore && totalScore <= 91400){
        //show forest-4.html
        document.getElementById("forest-link").innerHTML = "<a href = 'forest-4.html' id = 'forest-4'>Click here to view your forest!</a>"
    } else if (91401 <= totalScore && totalScore <= 114250){
        //show forest-5.html
        document.getElementById("forest-link").innerHTML = "<a href = 'forest-5.html' id = 'forest-5'>Click here to view your forest!</a>"
    } else if (114251 <= totalScore && totalScore <= 137100){
        //show forest-6.html
        document.getElementById("forest-link").innerHTML = "<a href = 'forest-6.html' id = 'forest-6'>Click here to view your forest!</a>"
    } else {
        //show forest-7.html
        document.getElementById("forest-link").innerHTML = "<a href = 'forest-7.html' id = 'forest-7'>Click here to view your forest!</a>"
    };
};

function reset(){
    //to reset localStorage
    localStorage.clear();
    location.reload();
    document.getElementById("check_javascript").innerHTML = "<ul><li>Sleep hours: 0</li><li>Steps taken: 0</li><li>Productivity minutes: 0</li><li>Total score: 0</li></ul>";
};

function initialise(){
	if (document.getElementById("actual-forest")){ //we are showing the forest, need the functions that get the scores and display
		getResult();
        document.getElementById("reset").addEventListener("click", reset);
	} else if (document.getElementById("feed-forest")){ //forest progress input page
        document.getElementById("feed-forest").onclick=validate; //ensure no empty values entered
    };
};

window.onload = initialise;
