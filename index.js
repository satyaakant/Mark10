const billAmount=document.querySelector("#bill-amount");
const cashGiven=document.querySelector("#cash-given");
const checkButton= document.querySelector("#check-button");
const message= document.querySelector("#error-message");
const NoOfnotes=document.querySelector(".no-of-notes")
const availablenotes = [2000, 500, 100, 50, 20, 10, 5, 1]

checkButton.addEventListener("click", function validatebillandcashamount(){
    hideMessage();
    if(billAmount.value>0){
        if(cashGiven.value >= billAmount.value){
          const cashtobereturnde = cashGiven.value - billAmount.value;
            changeCalculator(cashtobereturnde);
        }
        else{
            showMessage("Cash given must be equal to Bill amount");
        }
    }
    else{
        showMessage("invalid bill amount");
    }
});
function changeCalculator(cashtobereturnde){
    for(let i = 0 ; i < availablenotes.length ; i++){
        const numberOfNotes = Math.trunc(
            cashtobereturnde / availablenotes[i]
        );
        cashtobereturnde %= availablenotes[i];
        NoOfnotes[i].innerText = numberOfNotes;
    }
}
function showMessage(msg){
    message.style.display = "block";
    message.innerText = msg;
}
function hideMessage(){
    message.style.display = "none";
}