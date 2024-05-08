
let operatorButtons = document.getElementsByClassName('operator'); 
let firstNum = undefined; 
let secondNum = undefined; 
let numberInput = document.getElementById('numberInput'); 
let operator = undefined; 
let resultInput = document.getElementById('result'); 

const calc = (firstNum, secondNum, operator) => {
    switch(operator) {
        case '+':
            return firstNum + secondNum;
        case '-':
            return firstNum - secondNum;
        case '*':
            return firstNum * secondNum;
        case '/':
            return firstNum / secondNum;
    }
}

const operatorBtnClick = (ev) => {
    switch(ev.target.innerText) {
        case '+':
        case '-':
        case '*':
        case '/':
            firstNum = parseInt(numberInput.value);
            numberInput.value = ""; 
            operator = ev.target.innerText; 
            break; 
        default:
            if (firstNum === undefined) {
                alert("Mora se odabrati operacija");
            }
            else {
                secondNum = parseInt(numberInput.value); 
                let result = calc(firstNum, secondNum, operator); 
                resultInput.value = result; 
                firstNum = secondNum = operator = undefined; 
            }
            break;
    }
}

for(let i = 0; i < operatorButtons.length; i++) {
    let currentBtn = operatorButtons[i]; 
    currentBtn.addEventListener('click', operatorBtnClick);
}

