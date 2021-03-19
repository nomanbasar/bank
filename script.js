//login
const loginBtn = document.getElementById("login");
loginBtn.addEventListener("click", function(){
 const loginArea = document.getElementById("login-area");
 loginArea.style.display = "none";
 const transactionArea = document.getElementById("transaction-area");
 transactionArea.style.display = "block";
 })

 //deposit
const depositBtn = document.getElementById("addDeposit");
depositBtn.addEventListener("click", function(){
    const depositAmount = document.getElementById("depositAmount").value;
    const depositNumber = parseFloat(depositAmount);

    
    updateSpanText("currentDeposit", depositNumber);

    updateSpanText("currentBalance", depositNumber);
    
    document.getElementById("depositAmount").value = "";


    
})

// withdraw

const withdrawBtn = document.getElementById("addWithdraw");
withdrawBtn.addEventListener("click", function(){
    const withdrawNumber = getInputNumber("WithdrawAmount");
    console.log(withdrawNumber);
})

function getInputNumber(id){
    const amount = document.getElementById.value;
    const amountNumber = parseFloat(amount);
    return withdrawNumber;
}

function updateSpanText(id, depositNumber){
    const current = document.getElementById(id).innerText;
    const currentNumber = parseFloat(current);
    const totalAmount = depositNumber + currentNumber;
    document.getElementById(id).innerText = totalAmount;
}
 