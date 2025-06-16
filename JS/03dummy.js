document.addEventListener("DOMContentLoaded", function () {
    const products = document.querySelectorAll(".product");

    products.forEach(product => {
        const name = product.querySelector("h3").innerText;
        const priceText = product.querySelector(".price").innerText;
        const price = parseFloat(priceText.replace(/[^0-9.]/g, ""));
        const quantityInput = product.querySelector("input[type='number']");
        const addToCartBtn = product.querySelectorAll("button")[0];
        const buyNowBtn = product.querySelectorAll("button")[1];

        addToCartBtn.addEventListener("click", () => {
            const quantity = parseInt(quantityInput.value);
            const total = (price * quantity).toFixed(2);
            alert(`🛒 Added to cart:\n${name} - ${quantity}kg\nTotal: $${total}`);
        });

        buyNowBtn.addEventListener("click", () => {
            const quantity = parseInt(quantityInput.value);
            const total = (price * quantity).toFixed(2);
            alert(`✅ Buying now:\n${name} - ${quantity}kg\nTotal: $${total}\nThank you for your purchase!`);
        });
    });
});
