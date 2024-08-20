let quantity = 0;
const basePrice = 400000;


const quantityElement = document.querySelector('.cantidad');
const resultElement = document.getElementById('result');
const incrementBtn = document.getElementById('incrementBtn');
const decrementBtn = document.getElementById('decrementBtn');


function updateTotal() {
    const total = basePrice * quantity;
    resultElement.textContent = total.toLocaleString();
    console.log("total en: ", total)
}


function incrementQuantity() {
    quantity += 1;
    quantityElement.textContent = quantity;
    console.log("contador en: ", quantity)
    updateTotal();
}


function decrementQuantity() {
    if (quantity > 0) {
        quantity -= 1;
        quantityElement.textContent = quantity;
        console.log("contador en: ", quantity)
        updateTotal();
    }
}


incrementBtn.addEventListener('click', incrementQuantity);
decrementBtn.addEventListener('click', decrementQuantity);

updateTotal();