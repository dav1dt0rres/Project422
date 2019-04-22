

var currentQuestionIndex = 0;
console.log("Entering Main")
var questions = ["wut is 1 + 1?????!!!! ", "What is 2 + 2?", "what is 3 + 3?", "what is 4 + 4?", "what is 5 + 5?", "what is 6 + 6?", "what is 1 + 1? ", "What is 2 + 2?", "what is 3 + 3?", "what is 4 + 4?", "what is 5 + 5?", "what is 6 + 6?"];
var answers = [["1", "2", "3", "4"], ["2", "3", "4", "5"], ["3", "4", "5", "9"], ["4", "8", "6", "7"], ["5", "10", "11", "520"], ["1", "2", "3", "4"], ["1", "2", "3", "4"], ["1", "2", "3", "4"], ["1", "2", "3", "4"], ["1", "2", "3", "4"], ["1", "2", "3", "4"], ["1", "2", "3", "4"]];
var usersSelectedAnswers = {}; //set because hashable... usersSelectedAnswers[x] = answer for question x
var time_length = 60;
var timeInterval;
var practice;
var url_string = window.location.href
var bookmarks = [];
var url = new URL(url_string);
var c = url.searchParams.get("key");


window.onload = function () {
    document.getElementById("answerA").textContent = answers[currentQuestionIndex][0];
    document.getElementById("answerB").textContent = answers[currentQuestionIndex][1];
    document.getElementById("answerC").textContent = answers[currentQuestionIndex][2];
    document.getElementById("answerD").textContent = answers[currentQuestionIndex][3];
    document.getElementById("currentQuestionArea").textContent = questions[currentQuestionIndex];

    document.getElementById("oneBack").style.visibility = 'hidden';
    document.getElementById("twoBack").style.visibility = 'hidden';
    document.getElementById("threeBack").style.visibility = 'hidden';
};


if (c == '0') {
    console.log("practice mode")
    practice = true;
}
else {
    console.log("timed mode")
    practice = false;
}

function startTime() {
    var today = new Date();
    var h = today.getHours();
    var m = today.getMinutes();
    var s = today.getSeconds();
    m = checkTime(m);
    s = checkTime(s);
    document.getElementById("full_clock").innerHTML =
        h + ":" + m + ":" + s;
    var t = setTimeout(startTime, 500);
}
function checkTime(i) {
    if (i < 10) { i = "0" + i };  // add zero in front of numbers < 10
    return i;
}


function startClock() {

    console.log("Inside reset Clock")



    if (practice) {
        console.log("practice mode so no CLock")
        return;
    }
    ////////////////


    /* Need initial run as interval hasn't yet occured... */


    //////////////////*
    /*
    var deleted=document.getElementById("clock");
    if (deleted==null){
       console.log("No Clock exists")
        var newfullClock=document.createElement("div");
        newfullClock.setAttribute('id',"full_clock")
        newfullClock.className="full_clock"
        newfullClock.style.fontSize = "xx-large";
        var parent=document.getElementById("clock_container");
        parent.appendChild(newfullClock)
        startTime()
    }
    else{//adding the main clock
        console.log("Clock exists, now deleting")
        deleted.parentNode.removeChild(deleted);

    }

    var newElement_0=document.createElement("article");
    newElement_0.setAttribute('id',"clock")
    newElement_0.className="clock";
    var parent=document.getElementById("flex-contianer");

    parent.appendChild(newElement_0);

    var newElement = document.createElement("div");

    newElement.setAttribute('id', "seconds-container");
    newElement.className="seconds-container"
    var p = document.getElementById("clock");
    p.appendChild(newElement);


    var newElement_1 = document.createElement("div");
    newElement_1.setAttribute('id', "seconds");
    newElement_1.className="seconds"
    var p = document.getElementById("seconds-container");
    p.appendChild(newElement_1);
    */
}

function checkifEnd(currentIndex) {
    if (currentIndex > 10) {
        window.location.href = "results_view.html"
    }
}

function goToBookmarkedQuestion(bookmarkIndex) {
    console.log("goToBookmarkedQuestion");
    currentQuestionIndex = bookmarkIndex;
    var currentQuestion = document.getElementById("currentQuestion");
    var currentQuestionBox = document.getElementById("currentQuestion");
    currentQuestionBox.innerHTML = "Question" + (bookmarkIndex + 1);
    currentQuestion.innerHTML = currentQuestionIndex + 1;

    if (currentQuestionIndex + 1 - 3 > 0) {
        document.getElementById("threeBack").style.color = "black";
        document.getElementById("threeBack").textContent = currentQuestionIndex + 1 - 3;
        document.getElementById("threeBack").style.visibility = 'visible';
    }
    else {
        document.getElementById("threeBack").style.visibility = 'hidden';
    }

    if (currentQuestionIndex + 1 - 2 > 0) {
        document.getElementById("twoBack").style.color = "black";
        document.getElementById("twoBack").textContent = currentQuestionIndex + 1 - 2;
        document.getElementById("twoBack").style.visibility = 'visible';
    }
    else {
        document.getElementById("twoBack").style.visibility = 'hidden';
    }

    if (currentQuestionIndex + 1 - 1 > 0) {
        document.getElementById("oneBack").style.color = "black";
        document.getElementById("oneBack").textContent = currentQuestionIndex + 1 - 1;
        document.getElementById("oneBack").style.visibility = 'visible';
    }
    else {
        document.getElementById("oneBack").style.visibility = 'hidden';
    }

    document.getElementById("oneForward").textContent = currentQuestionIndex + 2;
    document.getElementById("twoForward").textContent = currentQuestionIndex + 3;
    document.getElementById("threeForward").textContent = currentQuestionIndex + 4;

    //update question and ansers for current question:

    document.getElementById("answerA").textContent = answers[currentQuestionIndex][0];
    document.getElementById("answerB").textContent = answers[currentQuestionIndex][1];
    document.getElementById("answerC").textContent = answers[currentQuestionIndex][2];
    document.getElementById("answerD").textContent = answers[currentQuestionIndex][3];
    document.getElementById("currentQuestionArea").textContent = questions[currentQuestionIndex];

    //put a green box around the answer the user selected

    document.getElementById("ansA").style.outline = "";
    document.getElementById("ansB").style.outline = "";
    document.getElementById("ansC").style.outline = "";
    document.getElementById("ansD").style.outline = "";
    if (usersSelectedAnswers[currentQuestionIndex]) {
        console.log("no answer2");
        var id = "ans" + usersSelectedAnswers[currentQuestionIndex];
        document.getElementById(id).style.outline = "2px solid green";
    }


}

function nextQuestion(buttonOffset, direction) {
    var currentQuestion = document.getElementById("currentQuestion");
    //update question buttons
    if (direction) {
        //clearInterval(timeInterval)
        currentQuestionIndex = currentQuestionIndex + buttonOffset;
        checkifEnd(currentQuestionIndex);
        currentQuestion.innerHTML = currentQuestionIndex + 1;

        if (currentQuestionIndex + 1 - 3 > 0) {
            document.getElementById("threeBack").style.color = "black";
            document.getElementById("threeBack").textContent = currentQuestionIndex + 1 - 3;
            document.getElementById("threeBack").style.visibility = 'visible';
        }
        else {
            document.getElementById("threeBack").style.visibility = 'hidden';
        }

        if (currentQuestionIndex + 1 - 2 > 0) {
            document.getElementById("twoBack").style.color = "black";
            document.getElementById("twoBack").textContent = currentQuestionIndex + 1 - 2;
            document.getElementById("twoBack").style.visibility = 'visible';
        }
        else {
            document.getElementById("twoBack").style.visibility = 'hidden';
        }

        if (currentQuestionIndex + 1 - 1 > 0) {
            document.getElementById("oneBack").style.color = "black";
            document.getElementById("oneBack").textContent = currentQuestionIndex + 1 - 1;
            document.getElementById("oneBack").style.visibility = 'visible';
        }
        else {
            document.getElementById("oneBack").style.visibility = 'hidden';
        }
        document.getElementById("oneForward").textContent = currentQuestionIndex + 2;
        document.getElementById("twoForward").textContent = currentQuestionIndex + 3;
        document.getElementById("threeForward").textContent = currentQuestionIndex + 4;
    }
    else {
        //clearInterval(timeInterval)
        currentQuestionIndex = currentQuestionIndex + buttonOffset;
        currentQuestion.innerHTML = currentQuestionIndex + 1;

        if(currentQuestionIndex - 2 > 0)
        {
            document.getElementById("threeBack").textContent = currentQuestionIndex - 2;
            document.getElementById("threeBack").hidden = false;
            document.getElementById("threeBack").style.visibility = 'visible';
        }
        else
        {
            document.getElementById("threeBack").style.visibility = 'hidden';
        }

        if(currentQuestionIndex - 1 > 0)
        {
            document.getElementById("twoBack").textContent = currentQuestionIndex - 1;
            document.getElementById("twoBack").style.color = "black";
            document.getElementById("twoBack").style.visibility = 'visible';
        }
        else
        {
            document.getElementById("twoBack").style.visibility = 'hidden';
        }
        
        if(currentQuestionIndex > 0)
        {
            document.getElementById("oneBack").textContent = currentQuestionIndex;
            document.getElementById("oneBack").style.visibility = 'visible';
            document.getElementById("oneBack").style.color = "black";
        }
        else
        {
            document.getElementById("oneBack").style.visibility = 'hidden';
        }
        
        document.getElementById("oneForward").textContent = currentQuestionIndex + 2;
        document.getElementById("twoForward").textContent = currentQuestionIndex + 3;
        document.getElementById("threeForward").textContent = currentQuestionIndex + 4;
    }

    startClock();
    //update ansers for current question:
    document.getElementById("answerA").textContent = answers[currentQuestionIndex][0];
    document.getElementById("answerB").textContent = answers[currentQuestionIndex][1];
    document.getElementById("answerC").textContent = answers[currentQuestionIndex][2];
    document.getElementById("answerD").textContent = answers[currentQuestionIndex][3];
    document.getElementById("currentQuestionArea").textContent = questions[currentQuestionIndex];

    //put a green box around the answer the user selected
    document.getElementById("ansA").style.outline = "";
    document.getElementById("ansB").style.outline = "";
    document.getElementById("ansC").style.outline = "";
    document.getElementById("ansD").style.outline = "";
    if (usersSelectedAnswers[currentQuestionIndex]) {
        var id = "ans" + usersSelectedAnswers[currentQuestionIndex];
        document.getElementById(id).style.outline = "2px solid green";
    }
    //startTimer(time_length)
}

function answerQuestion(ans) {
    if (usersSelectedAnswers[currentQuestionIndex]) {
        var id = "ans" + usersSelectedAnswers[currentQuestionIndex];
        document.getElementById(id).style.outline = "";
    }
    usersSelectedAnswers[currentQuestionIndex] = ans;
    var id = "ans" + ans;
    document.getElementById(id).style.outline = "2px solid green";
}


function bookmarkQuestion() {
    bookmarks.push(currentQuestionIndex);
    console.log(bookmarks);
    showBookmarks();
}

function showBookmarks() {
    var bookmarksTable = document.getElementById('BookmarksTable');
    bookmarksTable.innerHTML = "";

    bookmarks.forEach(function (element) {
        console.log(typeof element);
        var bookmarkButton = document.createElement("BUTTON");
        bookmarkButton.innerHTML = element + 1;
        bookmarkButton.setAttribute("onclick", "goToBookmarkedQuestion(" + element + ")");
        bookmarksTable.appendChild(bookmarkButton);
    });
}

//this function and corresponding html tab code taken from:
//https://www.w3schools.com/howto/howto_js_tabs.asp
function switchTab(evt, tabName) {
    var i, tabcontent, tablinks;

    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }

    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "");
    }

    document.getElementById(tabName).style.display = "block";
    evt.currentTarget.className += " active";
}

function goHome() {
    //TODO
    //write code to take you back to the home screen here.............
}
