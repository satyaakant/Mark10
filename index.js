const billAmount=document.querySelector("#bill-amount");
const cashGiven=document.querySelector("#cash-given");
const checkButton= document.querySelector("#check-button");
const message= document.querySelector("#error-message");

const NoOfnotes= document.querySelectorAll(".no-of-notes");
const availablenotes = [2000, 500, 100, 10, 5, 1];

checkButton.addEventListener("click", function validatebillandcashamount(){

    hideMessage();
    table.style.display=   "table";
tableheading.style.display="block";
    if(Number(billAmount.value)>0){
        if(Number(cashGiven.value) >= Number(billAmount.value)){
          const cashtobereturnde = Number(cashGiven.value) - Number(billAmount.value);
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


var nextbtn =document.querySelector("#next-btn");
var lablecashgiven =document.querySelector("#lable-cash-given");
var table =document.querySelector(".change-table");
var tableheading =document.querySelector("#table-heading");

cashGiven.style.display ="none";
lablecashgiven.style.display="none";
checkButton.style.display="none";
table.style.display="none";
tableheading.style.display="none";

nextbtn.addEventListener("click", ()=>{
    cashGiven.style.display = "block";
lablecashgiven.style.display= "block";
checkButton.style.display=    "block";
})

