document.addEventListener("DOMContentLoaded", () => {
    //selecting html elements

    const cartCount = document.getElementById("cart-counts");

    var cartItems = 0; //variable to change the amount of items

    const addButton = document.querySelectorAll("#add-cart"); //selecting all the add buttons from HTML doc
    const removeButton = document.querySelectorAll("#remove-cart");


    //add button functionality

    if (addButton instanceof NodeList) {
        addButton.forEach(button => {

            button.addEventListener("click", () => {
                cartItems++; //adding/increasing the value of cartItems by 1
                updateCart();

            });

        });
    };


    //remove button functionality

    if (removeButton instanceof NodeList) {
        removeButton.forEach(button => {

            button.addEventListener("click", () => {

                if (cartItems > 0) {

                    cartItems--;
                    updateCart();

                };

            });

        });
    };


    function updateCart() {

    }

});