player1_score = 0;
player2_score = 0;

function send(){
    number1 = Number(document.getElementById("num1").value);
    number2 = Number(document.getElementById("num2").value);
    actual_number = number1*number2;
    console.log(number1);
    console.log(number2);
    console.log(actual_number);
    question_number = "<h4>"+number1+" "+"X"+" "+number2+"</h4>";
    input_box = "<br> Answer: <input type='text' placeholder='Answer' id='inputbox'>";
    check_button= "<br><br> <button class='btn btn-info' onlick='check()'>Check</button>";
    row = question_number + input_box + check_button;
    document.getElementById("output").innerHTML=row;
    document.getElementById("num1").value="";
    document.getElementById("num2").value="";
}

question_turn="player1";
answer_turn="player2";

function check(){
    get_answer = document.getElementById("inputbox").value;

    if(get_answer == actual_number)
        {
        if(answer_turn=="player1")
        {
            player1_score = player1_score+1;
            console.log(player1_score);
            document.getElementById("player1_score").innerHTML=player1_score;
        }
        else
        {
            player2_score = player2_score+1;
            console.log(player2_score);
            document.getElementById("player2_score").innerHTML=player2_score;
        }
    }
    else{
        console.log("Wrong Answer");
    }
}