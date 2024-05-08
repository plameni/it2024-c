
const apiUrl = 'https://dummyjson.com/products';

const fillTable = (products) => {
    const productsTable = document.getElementById('products-table'); 

    products.forEach((el, ind, products) => {
        // el - proizvod, odnosno element niza 
        const productTrElem = document.createElement('tr');

        const nameTdElem = document.createElement('td');
        nameTdElem.innerText = el.title; 

        const descriptionTdElem = document.createElement('td'); 
        descriptionTdElem.innerText = el.description; 

        const priceTdElem = document.createElement('td');
        priceTdElem.innerText = el.price; 

        const imageTdElem = document.createElement('td');
        imageTdElem.innerText = el.thumbnail; 
        // imageTdElem.innerHTML = '<img src=... />'

        const buttonsTdElem = document.createElement('td');
        buttonsTdElem.innerText = 'Dugme...'; 

        productTrElem.append(nameTdElem); 
        productTrElem.append(descriptionTdElem);
        productTrElem.append(priceTdElem);
        productTrElem.append(imageTdElem);
        productTrElem.append(buttonsTdElem); 

        productsTable.append(productTrElem); 
    });
}

fetch(apiUrl)
    .then(response => response.json())
    .then(data => {
        fillTable(data.products);  
    })
    .catch(e => {
        // INFO ERROR, EXCEPTION
        console.log(e); 
    })

console.log('PROGRAM ENDING'); 