const basePrice = 499.99;
let quantity = 1;

const priceElement = document.getElementById("price");
const quantityElement = document.getElementById("quantity");

document.getElementById("increase").addEventListener("click", () => {
    quantity++;
    update();
});

document.getElementById("decrease").addEventListener("click", () => {
    if (quantity > 1) {
        quantity--;
        update();
    }
});

function update() {
    priceElement.innerText = (basePrice * quantity).toFixed(2);
    quantityElement.innerText = quantity;
}