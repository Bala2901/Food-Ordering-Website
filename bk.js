let totalBill = 0;

function addToCart(price) {
    // Add the price to the total bill
    totalBill += price;

    // Update the total bill display
    document.getElementById('billAmount').textContent = totalBill;

    // Show the cart animation
    const cartAnim = document.getElementById('cartAnim');
    cartAnim.style.display = 'block';
    setTimeout(() => {
        cartAnim.style.display = 'none';
    }, 2000);

    // Store the total bill in localStorage (optional)
    localStorage.setItem('totalBill', totalBill);
}

// Initialize the total bill from localStorage (optional)
window.onload = function() {
    const storedBill = localStorage.getItem('totalBill');
    if (storedBill) {
        totalBill = parseFloat(storedBill);
        document.getElementById('billAmount').textContent = totalBill;
    }
};