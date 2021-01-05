var inputNum = document.querySelector("#items");
var inputDate = document.querySelector("#inputField");
var outputDiv = document.querySelector("#result");
var sum1 = 0;

function changeHandler() {
    var birthDate = inputDate.value;
    var array = birthDate.split("-");

    for (var j in array) {

        for (var i = 0; i < array[j].length; i++) {
            sum1 = parseInt(array[j][i]);

        }
    }

    var luckyNum = inputNum.value;
    if (birthDate === "") {
        var commentx = "Please input correct Birthdate"
        outputDiv.innerText = commentx;
        inputDate.addEventListener("change", changeHandler);
    } else if (sum1 % luckyNum === 0) {
        var comment1 = "Your lucky number is divisible by sum of all the digits of your birthdate"
        outputDiv.innerText = comment1;
    } else {
        var comment2 = "Your lucky number is not divisible by sum of all the digits of your birthdate"
        outputDiv.innerText = comment2;
    }
}

inputNum.addEventListener("change", changeHandler);