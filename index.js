const billAmount=document.querySelector("#bill-amount");
const cashGiven=document.querySelector("#cash-given");
const checkButton= document.querySelector("#check-button");
const message= document.querySelector("#error-message");

checkButton.addEventListener("click", function validatebillandcashamount(){
    message.style.display = "none";
    if(billAmount.value>0){

    }
    else{
        showMessage("invalid bill amount");
    }
});
function showMessage(message){
    message.style.display = "block";
    message.innerText = message;
}