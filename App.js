var inputNum = document.querySelector("#items");
var inputDate = document.querySelector("#inputField");
var outputDiv = document.querySelector("#result");
var errorMessage = document.querySelector("#errorField");

function changeHandler() {
    var sum1
    var birthDate = inputDate.value;
    var array = birthDate.split("-");

    for (var j in array) {

        for (var i = 0; i < array[j].length; i++) {
            sum1 = parseInt(array[j][i]);

        }
    }
   
    var luckyNum = inputNum.value;
    if (sum1 !== undefined && luckyNum !== null) {
        if (sum1 % luckyNum === 0) {
            var comment1 = "Your lucky number is divisible by sum of all the digits of your birthdate"
            outputDiv.innerText = comment1;
        } else {
            var comment2 = "Your lucky number is not divisible by sum of all the digits of your birthdate"
            outputDiv.innerText = comment2;
        }
    } else if (sum1 === undefined){
        var comment3 = "*Please input correct DOB"
        errorMessage.innerText = comment3;
    } else{
        var comment4 = "Please input correct number"
        errorMessage.innerText = comment4;
    }
}

inputNum.addEventListener("change", changeHandler); 