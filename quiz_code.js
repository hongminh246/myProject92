player1_name = localStorage.getItem("player1_name");
player2_name = localStorage.getItem("player2_name");
player1_score = 0;
player2_score = 0;
document.getElementById("player1Name").innerHTML = player1_name + " : ";
document.getElementById("player2Name").innerHTML = player2_name + " : ";
document.getElementById("player1Score").innerHTML = player1_score;
document.getElementById("player2Score").innerHTML = player2_score;
document.getElementById("questionTurnLabel").innerHTML = "Question turn - " + player1_name;
document.getElementById("answerTurnLabel").innerHTML = "Answer turn - " + player2_name;

function send() {
    number1 = document.getElementById("numberInput1").value;
    number2 = document.getElementById("numberInput2").value;
    question_answer = parseInt(number1) * parseInt(number2);
    answer_container = "<div class='answerContainer'>";
    answer_container_end = "</div>";
    quiz_question = "<span id='questionLabel'>" + number1 + " X " + number2 + " = </span>";
    answer_input = " <input id='answerInput' placeholder='Answer' type='text'>";
    quiz_button = " <button id='answerButton' onclick='answerCheck()'>Check</button>";
    quiz_question_output = answer_container + quiz_question + answer_input + quiz_button + answer_container_end;
    document.getElementById("quizOutput").innerHTML = quiz_question_output;
    document.getElementById("numberInput1").value = "";
    document.getElementById("numberInput2").value = "";
}
question_turn = "player1";
answer_turn = "player2";

function answerCheck() {
    get_answer = document.getElementById("answerInput").value;
    if (get_answer == question_answer) {
        if (answer_turn == "player1") {
            new_player1_score = player1_score + 1;
            document.getElementById("player1Score").innerHTML = new_player1_score;
            answer_turn = "player2";
            document.getElementById("answerTurnLabel").innerHTML = "Answer Turn - " + player2_name;
        } else {
            new_player2_score = player2_score + 1;
            document.getElementById("player2Score").innerHTML = new_player2_score;
            answer_turn = "player1";
            document.getElementById("answerTurnLabel").innerHTML = "Answer Turn - " + player1_name;
        }

        if (question_turn == "player1") {
            question_turn = "player2";
            document.getElementById("questionTurnLabel").innerHTML = "Question Turn - " + player2_name;
        } else {
            question_turn = "player1";
            document.getElementById("questionTurnLabel").innerHTML = "Question Turn - " + player1_name;
        }
    }
}