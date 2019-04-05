
var answers = [["Toronto", "Paris", "Shanghai", "Chicago"], ["Bulls", "Bears", "Cubs", "Blackhawks"], ["hola", "nachos", "plaza", "taco"], ["outfit", "capone", "gangsters", "Mob"], ["5", "10", "11", "520"], ["1", "2", "3", "4"], ["1", "2", "3", "4"], ["1", "2", "3", "4"], ["1", "2", "3", "4"], ["1", "2", "3", "4"], ["1", "2", "3", "4"], ["1", "2", "3", "4"]];
var currentQuestionIndex = 0;

function previousQuestion(){

    var currentQuestion = document.getElementById("currentQuestion");

        //clearInterval(timeInterval)
    currentQuestionIndex = currentQuestionIndex - 1;
    console.log(currentQuestionIndex + 1);
    currentQuestion.innerHTML ="Question"+currentQuestionIndex;
    document.getElementById("answerA").textContent = answers[currentQuestionIndex][0];
    document.getElementById("answerB").textContent = answers[currentQuestionIndex][1];
    document.getElementById("answerC").textContent = answers[currentQuestionIndex][2];
    document.getElementById("answerD").textContent = answers[currentQuestionIndex][3];


}
function nextQuestion() {
    var currentQuestion = document.getElementById("currentQuestion");
    console.log("Inside next Question");
    //update question buttons



        //clearInterval(timeInterval)

    currentQuestionIndex = currentQuestionIndex + 1;

    currentQuestion.innerHTML ="Question"+currentQuestionIndex;




    //update ansers for current question:
    document.getElementById("answerA").textContent = answers[currentQuestionIndex][0];
    document.getElementById("answerB").textContent = answers[currentQuestionIndex][1];
    document.getElementById("answerC").textContent = answers[currentQuestionIndex][2];
    document.getElementById("answerD").textContent = answers[currentQuestionIndex][3];
    //startTimer(time_length)
}