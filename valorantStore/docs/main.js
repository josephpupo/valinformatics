document 


let total_amount = document.getElementById('total_amount') //finds this element 
let buttons = document.querySelectorAll('button') //finds all buttons under the parameter

/*let buy = function(){
    total_amount.textContent = 
}*/

for(let button of buttons){
    button.addEventListener("click", bug) 
}



