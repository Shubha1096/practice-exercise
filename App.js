var inputNum = document.querySelector("#items");
var inputDate = document.querySelector("#inputField");
var outputDiv = document.querySelector("#result");
var errorMessage = document.querySelector("#errorField");

document.getElementById("birthdate").style.visibility = "hidden";

function inputDateChangeHandler(){
    var birthDate = inputDate.value;
        if (birthDate==="undefined"){
                document.getElementById("birthdate").style.visibility = "hidden";

        }else{
            document.getElementById("birthdate").style.visibility = "visible";
        }
}

function changeHandler() {
    document.getElementById("inputField").disabled = true;
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
    }
}

inputNum.addEventListener("change", changeHandler); 
inputDate.addEventListener("change", inputDateChangeHandler); 