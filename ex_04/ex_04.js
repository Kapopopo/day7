document.addEventListener('DOMContentLoaded', () => {
    const cartItems = document.querySelectorAll(".item");

    cartItems.forEach(item => {
        const quantityInput = item.querySelector("input[type='text']");
        const increaseButton = item.querySelector(".plus-btn");
        const decreaseButton = item.querySelector(".minus-btn");
        const deleteButton = item.querySelector(".delete-btn");
        const likeButton = item.querySelector(".like-btn");

        increaseButton.addEventListener("click", () => {
            let currentQuantity = parseInt(quantityInput.value);
            quantityInput.value = currentQuantity + 1;
        });

        decreaseButton.addEventListener("click", () => {
            let currentQuantity = parseInt(quantityInput.value);
            if (currentQuantity > 1) {
                quantityInput.value = currentQuantity - 1;
            }
        });
        deleteButton.addEventListener("click", () => {
            item.remove();
        });
        likeButton.addEventListener("click", () => {
            likeButton.classList.toggle("is-active");
            likeButton.classList.add("animated");
            setTimeout(() => {
                likeButton.classList.remove("animated");
            }, 300);
        });
    });
});
