

var currentQuestionIndex = 0;
console.log("Entering Main")
var questions = ["wut is 1 + 1?????!!!! ", "What is 2 + 2?", "what is 3 + 3?", "what is 4 + 4?", "what is 5 + 5?", "what is 6 + 6?", "what is 1 + 1? ", "What is 2 + 2?", "what is 3 + 3?", "what is 4 + 4?", "what is 5 + 5?", "what is 6 + 6?"];
var answers = [["1", "2", "3", "4"], ["2", "3", "4", "5"], ["3", "4", "5", "9"], ["4", "8", "6", "7"], ["5", "10", "11", "520"], ["1", "2", "3", "4"], ["1", "2", "3", "4"], ["1", "2", "3", "4"], ["1", "2", "3", "4"], ["1", "2", "3", "4"], ["1", "2", "3", "4"], ["1", "2", "3", "4"]];
var usersSelectedAnswers = {}; //set because hashable... usersSelectedAnswers[x] = answer for question x
var time_length = 60 ;
var timeInterval;
var practice=false;

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
    if (i < 10) {i = "0" + i};  // add zero in front of numbers < 10
    return i;
}


function startClock(){

    console.log("Inside reset Clock")

    if(practice){
        console.log("practice mode so no CLock")
        return;
    }



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
}

function nextQuestion(buttonOffset, direction) {
    var currentQuestion = document.getElementById("currentQuestion");
    console.log("Inside next Question");
    //update question buttons

    if(direction)
    {

        //clearInterval(timeInterval)

        currentQuestionIndex = currentQuestionIndex + buttonOffset;
        currentQuestion.innerHTML =currentQuestionIndex+1;

        console.log(currentQuestionIndex + 1);
        document.getElementById("threeBack").textContent = currentQuestionIndex + 1 - 3;
        document.getElementById("twoBack").textContent = currentQuestionIndex + 1 - 2;
        document.getElementById("oneBack").textContent = currentQuestionIndex + 1 - 1;
        document.getElementById("oneForward").textContent = currentQuestionIndex + 2;
        document.getElementById("twoForward").textContent = currentQuestionIndex + 3;
        document.getElementById("threeForward").textContent = currentQuestionIndex + 4;
    }
    else
    {

        //clearInterval(timeInterval)
        currentQuestionIndex = currentQuestionIndex + buttonOffset;
        console.log(currentQuestionIndex + 1);
        currentQuestion.innerHTML = currentQuestionIndex+1;

        document.getElementById("threeBack").textContent = currentQuestionIndex - 2;
        document.getElementById("twoBack").textContent = currentQuestionIndex - 1;
        document.getElementById("oneBack").textContent = currentQuestionIndex;
        document.getElementById("oneForward").textContent = currentQuestionIndex + 2;
        document.getElementById("twoForward").textContent = currentQuestionIndex + 3;
        document.getElementById("threeForward").textContent = currentQuestionIndex + 4;
    }
    startClock()
    //update ansers for current question:
    document.getElementById("answerA").textContent = answers[currentQuestionIndex][0];
    document.getElementById("answerB").textContent = answers[currentQuestionIndex][1];
    document.getElementById("answerC").textContent = answers[currentQuestionIndex][2];
    document.getElementById("answerD").textContent = answers[currentQuestionIndex][3];
    //startTimer(time_length)
}

function answerQuestion(ans) {
    usersSelectedAnswers[currentQuestionIndex] = ans;
}
function bookmarkQuestion() {
    bookmarks.push(currentQuestionIndex);
    console.log(bookmarks);
    console.log("inside bookmark")
    var Bookmarks = document.getElementById("BookmarksTable");

    var tbl = document.createElement("table");
    tbl.setAttribute("id", "gameBoard");

    var tblBody = document.createElement("tbody");

    var boardColors = board.getAllCandies();
    var columnIndecies = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h'];
    for (var i = 0; i < 8; i++) {
        var row = document.createElement("tr");

        for (var j = 0; j < 8; j++) {
            var cell = document.createElement("td");
            cell.textContent = i + columnIndecies[j];
            row.appendChild(cell);
        }
        tblBody.appendChild(row);
    }

    tbl.appendChild(tblBody);
    Bookmarks.appendChild(tbl);
    tbl.setAttribute("border", "1");

}

function switchTab(evt, tabName) {
    // Declare all variables
    var i, tabcontent, tablinks;
    console.log("inside switchtab")
    // Get all elements with class="tabcontent" and hide them
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }

    // Get all elements with class="tablinks" and remove the class "active"
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "");
    }

    // Show the current tab, and add an "active" class to the button that opened the tab
    document.getElementById(tabName).style.display = "block";
    evt.currentTarget.className += " active";
}