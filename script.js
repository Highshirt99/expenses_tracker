


function displayCon() {
     document.querySelector(".con2").style.display = "none"
     document.querySelector(".walletfund").style.display = "block"

 
    

}



function displayCon2(){
   

    let balance = document.getElementById("balance")
    let fund = document.getElementById("fund").value;

    if(fund === ""){
        alert("Enter an amount.")
           
}

else if(fund <= 0){
           alert("Amount must be greater than 0.")
        
       }
      
  
 else{
      document.querySelector(".con2").style.display = "block"
       document.querySelector(".walletfund").style.display = "none";

       
    }

    totalBalance = (+(balance.innerHTML) + (+(fund)))
    balance.textContent =  totalBalance

    
    

     
}


function getBudget() {

    let balance = document.getElementById("balance");
    let budget = document.getElementById("budget").value;
    
  let newBalance = balance.innerText
  let totalBalance2  = +(newBalance - (+(budget)))

  if(+(balance.innerText) > 0 &&  totalBalance2 >= 0 && budget > 0 ) {

balance.textContent = totalBalance2

let budgetInfo = document.getElementById("budget-info")
 let totalBudget = (+(budgetInfo.innerHTML) + (+(budget)))
budgetInfo.innerText = totalBudget


  } 

  else if (+(balance.innerText) < 0 || totalBalance2 < 0){
      alert("Insufficient balance. Please, fund your wallet.")
  }


}


function showExpenses(){
let expenses = document.getElementById("expenses").value;
let narration = document.getElementById("details").value;
let expensesInfo =  document.getElementById("expenses-info");
let budget = document.getElementById("budget").value;
let budgetInfo = document.getElementById("budget-info")
let newBudget = (+(budgetInfo.innerHTML) - (+(expenses)))

if(expenses <=  +(budgetInfo.innerHTML) && expenses > 0 ) {
expensesInfo.innerHTML += `<li> ${narration} : $${expenses} </li>`
expensesInfo.style.color = "red"
let percentage = (newBudget/(+(budget)) * 100).toFixed(2)

budgetInfo.innerText = newBudget

let bar = document.getElementById("bar")
bar.value = percentage

document.getElementById("per").innerHTML = `You have ${percentage}%  of your budget left.`

}

else if(narration === "") {
  alert("Fill out the fields.")
}

else if(expenses > +(budgetInfo.innerHTML)) {
  alert("Budget exhausted.")
}

}