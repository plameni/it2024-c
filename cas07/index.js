console.log('Hello World'); 

let btnCount = document.getElementById('btnCount');
let count = 0; 
let noOfClicksDiv = document.querySelector('.no-of-clicks'); 

btnCount.addEventListener('click', (ev) => {
    console.log(ev); 
    count++; 
    noOfClicksDiv.innerHTML = `<b>${count}</b>`;
}) 
