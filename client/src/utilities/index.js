const CART_KEY = 'cart';

export function totalCartCount(cart) {
  let total = 0; 
  cart.forEach(item => {
    total = item.quantity + total
  });
  return total
};

export function calculatePrice(items) {
  return `$${items
    .reduce((acc, item) => acc + item.quantity * item.price, 0)
    .toFixed(2)}`;
};

export function setLocalStorageCart(value, cartKey = CART_KEY) {
  if (localStorage) {
      localStorage.setItem(cartKey, JSON.stringify(value));
  }
};

export function getLocalCart(cartKey = CART_KEY) {
  if (localStorage && localStorage.getItem(cartKey)) {
      return JSON.parse(localStorage.getItem(cartKey));
  }
  return [];
};

export function setLogInStatus(status: Boolean) {
  window.localStorage.setItem('loggedIn', status);  
};

export function loggedIn() {
  return window.localStorage.loggedIn;
};

export function simplifiedCart() {
  return getLocalCart().map((item) => {
    return { id: item.id, size: item.size, quantity: item.quantity }
  });
};

export function nameTooLong(name, limit) {
  let shortenedName
  function nameEdit(letter, index) {
    if (index < limit) {
      return letter
    } else if(index === limit) {
      return '...'
    }
  }
  (name.length > limit) ? shortenedName = [...name].map(nameEdit) : shortenedName = name;
  return shortenedName;
};