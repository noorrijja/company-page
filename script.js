const menuButton = document.querySelector(".hamburger-menu-icon");

const expandedMenu = document.querySelector(".expanded-menu-icon");

const closeMenu = document.querySelector(".close-icon");

menuButton.addEventListener("click", function () {
  if (expandedMenu.style.display === "flex") {
    expandedMenu.style.display = "none";
  } else {
    expandedMenu.style.display = "flex";
  }
});
closeMenu.addEventListener("click", function () {
  if (expandedMenu.style.display === "flex") {
    expandedMenu.style.display = "none";
  } else {
    expandedMenu.style.display = "flex";
  }
});

const previousBtn = document.querySelector(".prev");
const nextBtn = document.querySelector(".next");

var displayImage = document.querySelector(".img-1");

var imgTwo = document.querySelector(".img-2");

var imgThree = document.querySelector(".img-3");

var imgFour = document.querySelector(".img-4");

nextImage = () => {
  if (displayImage.style.display === "block" || imgTwo.style.display === "") {
    imgTwo.style.display = "block";
    displayImage.style.display = "none";
    imgThree.style.display = "none";
    imgFour.style.display = "none";
  } else if (imgTwo.style.display === "block") {
    imgTwo.style.display = "none";
    imgThree.style.display = "block";
    displayImage.style.display = "none";
    imgFour.style.display = "none";
  } else if (imgThree.style.display === "block") {
    imgThree.style.display = "none";
    imgFour.style.display = "block";
    imgTwo.style.display = "none";
    displayImage.style.display = "none";
    nextBtn.style.display = "none";
    previousBtn.style.display = "block";
  } else {
    displayImage.style.display = "block";
    imgFour.style.display = "none";
    imgTwo.style.display = "none";
    imgThree.style.display = "none";
  }
};

prevImage = () => {
  if (imgFour.style.display === "block") {
    imgThree.style.display = "block";
    displayImage.style.display = "none";
    imgTwo.style.display = "none";
    imgFour.style.display = "none";
  } else if (imgThree.style.display === "block") {
    imgTwo.style.display = "block";
    imgThree.style.display = "none";
    displayImage.style.display = "none";
    imgFour.style.display = "none";
  } else if (imgTwo.style.display === "block") {
    displayImage.style.display = "block";
    imgTwo.style.display = "none";
    imgThree.style.display = "none";
    imgFour.style.display = "none";
    nextBtn.style.display = "block";
    previousBtn.style.display = "none";
  } else {
    imgFour.style.display = "block";
    displayImage.style.display = "none";
    imgTwo.style.display = "none";
    imgThree.style.display = "none";
  }
};

nextBtn.addEventListener("click", nextImage);

previousBtn.addEventListener("click", prevImage);

const minusBtn = document.querySelector(".minus");
const plusBtn = document.querySelector(".plus");

plusItem = () => {
  const number = document.querySelector(".total-items").innerHTML++;

  const cartItems = document.querySelector(".total-cart-items");
  cartItems.innerHTML = number + 1;
};

minusItem = () => {
  const number = document.querySelector(".total-items").innerHTML;
  const cartItems = document.querySelector(".total-cart-items");
  if (number > 0) {
    document.querySelector(".total-items").innerHTML = number - 1;
    cartItems.innerHTML = number - 1;
  } else {
    number = "0";
    cartItems.innerHTML = number;
  }
};

plusBtn.addEventListener("click", plusItem);
minusBtn.addEventListener("click", minusItem);

const addToCart = document.querySelector(".add-to-cart");

const saleElement = document.querySelector(".sale");

const itemPrice = parseFloat(saleElement.innerHTML.replace("$", ""));

const bill = document.querySelector(".total-price");

const cartItems = document.querySelector(".total-cart-items");

addToCart.addEventListener("click", function () {
  var quantity = cartItems.innerHTML;
  const totalPrice = quantity * itemPrice;
  bill.innerHTML =
    "$" + itemPrice + " " + "x" + " " + " " + quantity + " " + "$" + totalPrice;
});

const cartIcon = document.querySelector(".cart");

const emptyCart = document.querySelector(".cart-empty");

const fullCart = document.querySelector(".cart-full");
cartIcon.addEventListener("click", function () {
  const cartItems = document.querySelector(".total-cart-items");
  if (cartItems.innerHTML === "0") {
    emptyCart.style.display =
      emptyCart.style.display === "block" ? "none" : "block";
  } else if (cartItems.innerHTML > 0) {
    fullCart.style.display =
      fullCart.style.display === "block" ? "none" : "block";
  } else {
    emptyCart.style.display = "none";
    fullCart.style.display = "none";
  }
});
