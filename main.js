function send() {
    number1=document.getElementById("number1").value;
    number2=document.getElementById("number2").value;
    actual_answer= parseInt(number1) * parseInt(number2);

    question_number = "<h4>" + number1 + "X" + number2 + "</h4>";
    input_box = "<br>Answer: <input id='input_check_box' type='text'>";
    check_button = "<br><br><button class='btn btn-info' onclick='check()'>Check</button>";
    row = question_number + input_box + check_button;
    document.getElementById("Output").innerHTML = row;

    document.getElementById("number1").value = "";
    document.getElementById("number2").value = "";
}
question_turn="player1";
answer_turn="player2";
player1 = 0;
player2 = 0;

function check() {
    get_answer=document.getElementById('input_check_box').value;
    player1_name=localStorage.getItem("player1_name");
    player2_name=localStorage.getItem("player2_name");
    if (get_answer == actual_answer) {
        if (answer_turn == "player1") {
        player1=player1 + 1;
        document.getElementById("player1:score").innerHTML = player1_name + ": " + player1;
        document.getElementById("player2:score").innerHTML = player2_name + ": " + player2;
        }
    }
    else {
        player2=player2 + 1;
        document.getElementById("player2:score").innerHTML = player2_name + ": " + player2;
        document.getElementById("player1:score").innerHTML = player1_name + ": " + player1;   
    }
    if (question_turn == "player1") {
        question_turn="player2"
        answer_turn="player1"
        document.getElementById("player_question").innerHTML = "Question Turn- " + player2_name;
        document.getElementById("player_answer").innerHTML = "Answer Turn- " + player1_name;
        if (get_answer == actual_answer) {
            if (answer_turn == "player1") {
            player1=player1 + 1;
            document.getElementById("player1:score").innerHTML = player1_name + ": " + player1;
            document.getElementById("player2:score").innerHTML = player2_name + ": " + player2;
            }
        }
        
    }
    else {
        question_turn="player1"
        answer_turn="player2"
        document.getElementById("player_question").innerHTML = "Question Turn- " + player1_name;
        document.getElementById("player_answer").innerHTML = "Answer- " + player2_name;
        if (get_answer == actual_answer) {
            if (answer_turn == "player1") {
            player1=player1 + 1;
            document.getElementById("player1:score").innerHTML = player1_name + ": " + player1;
            document.getElementById("player2:score").innerHTML = player2_name + ": " + player2;
            }
        }
        else {
            player2=player2 + 1;
            document.getElementById("player2:score").innerHTML = player2_name + ": " + player2;
            document.getElementById("player1:score").innerHTML = player1_name + ": " + player1;   
        }
    }
}