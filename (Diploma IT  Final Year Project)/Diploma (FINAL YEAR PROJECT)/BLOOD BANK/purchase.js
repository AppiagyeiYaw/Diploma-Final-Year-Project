document.addEventListener('DOMContentLoaded', () => {
    const cart = [];
    
    // Sample data for blood products
    const bloodProducts = {
        'A': 100,
        'B': 80,
        'O': 120,
        'AB': 60
    };

    // Update quantity in the UI
    function updateProductQuantities() {
        document.querySelectorAll('.product-card').forEach(card => {
            const bloodType = card.getAttribute('data-blood-type');
            card.querySelector('.quantity').textContent = `${bloodProducts[bloodType]} units`;
        });
    }

    updateProductQuantities();

    // Add to Cart functionality
    document.querySelectorAll('.add-to-cart').forEach(button => {
        button.addEventListener('click', () => {
            const card = button.closest('.product-card');
            const bloodType = card.getAttribute('data-blood-type');
            const quantity = prompt(`Enter quantity for Blood Type ${bloodType}:`);

            if (quantity && !isNaN(quantity) && quantity > 0 && quantity <= bloodProducts[bloodType]) {
                cart.push({ type: bloodType, quantity: Number(quantity) });
                bloodProducts[bloodType] -= Number(quantity);
                updateProductQuantities();
                updateCartDisplay();
            } else {
                alert('Invalid quantity or not enough stock.');
            }
        });
    });

    // Update cart display
    function updateCartDisplay() {
        const cartItems = document.getElementById('cart-items');
        cartItems.innerHTML = '';
        
        cart.forEach(item => {
            const li = document.createElement('li');
            li.textContent = `Blood Type ${item.type} - Quantity: ${item.quantity}`;
            cartItems.appendChild(li);
        });
    }

    // Checkout button functionality
    document.querySelector('.checkout-btn').addEventListener('click', () => {
        if (cart.length > 0) {
            alert('Proceeding to checkout...');
            // Add checkout logic here
        } else {
            alert('Your cart is empty.');
        }
    });
});
