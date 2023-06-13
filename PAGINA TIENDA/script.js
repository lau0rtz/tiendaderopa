const addToCartButtons = document.querySelectorAll('.add-to-cart');
const removeButtons = document.querySelectorAll('.remove-item');
const clearCartButton = document.getElementById('clear-cart');
const cartItemsContainer = document.getElementById('cart-items');
const cartTotal = document.getElementById('cart-total');
let total = 0;
let cartItems = [];


addToCartButtons.forEach(button => {
  button.addEventListener('click', addToCart);
});

removeButtons.forEach(button => {
  button.addEventListener('click', removeItem);
});

clearCartButton.addEventListener('click', clearCart);

function addToCart(event) {
  const button = event.target;
  const price = parseFloat(button.getAttribute('data-price'));
  const productName = button.previousElementSibling.previousElementSibling.textContent;

  const item = document.createElement('li');
  item.textContent = `${productName} - $${price.toFixed(2)}`;
  cartItemsContainer.appendChild(item);

  total += price;
  cartTotal.textContent = `$${total.toFixed(2)}`;
}

function removeItem(event) {
  const item = event.target.parentElement;
  const price = parseFloat(item.textContent.split('-')[1].trim().substring(1));

  item.remove();

  total -= price;
  cartTotal.textContent = `$${total.toFixed(2)}`;
}

function clearCart() {
  cartItemsContainer.innerHTML = '';
  total = 0;
  cartTotal.textContent = '$0.00';
}

function payCart() {
  if (cartItems.length === 0) {
   
    // Aquí puedes agregar la lógica para procesar el pago, como realizar una llamada a una API de pago, enviar datos a un servidor, etc.

    // Una vez que se ha procesado el pago correctamente, puedes mostrar un mensaje de confirmación
    alert('¡Gracias por tu compra! El pago ha sido procesado correctamente.');

    // Limpia el carrito
    clearCart();
  }
}

document.getElementById('pay-cart').addEventListener('click', payCart);
