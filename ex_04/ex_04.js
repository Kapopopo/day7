document.addEventListener('DOMContentLoaded', () => {
    const items = document.querySelectorAll(".item");

    items.forEach(item => {
        const quantity = item.querySelector("input[type='text']");
        const button_up = item.querySelector(".plus-btn");
        const button_down = item.querySelector(".minus-btn");
        const finito_button = item.querySelector(".delete-btn");
        const heart_button = item.querySelector(".like-btn");

        button_up.addEventListener("click", () => {
            let currentQuantity = parseInt(quantity.value);
            quantity.value = currentQuantity + 1;
        });

        button_down.addEventListener("click", () => {
            let currentQuantity = parseInt(quantity.value);
            if (currentQuantity > 1) {
                quantity.value = currentQuantity - 1;
            }
        });
        finito_button.addEventListener("click", () => {
            item.remove();
        });
        heart_button.addEventListener("click", () => {
            heart_button.classList.toggle("is-active");
            heart_button.classList.add("animated");
            setTimeout(() => {
                heart_button.classList.remove("animated");
            }, 300);
        });
    });
});
