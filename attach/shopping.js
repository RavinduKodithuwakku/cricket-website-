/**************************************************functions cart**********************************************/

if (document.readyState == 'loading') {
    document.addEventListener('DOMContentLoaded', ready)
} else {
    ready()
}

function ready() {
	
    var removeCartItemButtons = document.getElementsByClassName('btn-rmve')
    for (var i = 0; i < removeCartItemButtons.length; i++) {
        var button = removeCartItemButtons[i]
        button.addEventListener('click', removeCartItem)
    }

    var Inputs = document.getElementsByClassName('quantity-input')
    for (var i = 0; i < Inputs.length; i++) {
        var input = Inputs[i]
        input.addEventListener('change', quantityChanged)
    }

    var addToCartButtons = document.getElementsByClassName('item-button')
    for (var i = 0; i < addToCartButtons.length; i++) {
        var button = addToCartButtons[i]
        button.addEventListener('click', addToCartClicked)
    }
 
}

function removeCartItem(event) {
    var buttonClicked = event.target
    buttonClicked.parentElement.parentElement.remove()
    updateCartTotal()
}

function quantityChanged(event) {
    var input = event.target
    if (isNaN(input.value) || input.value <= 0) {
        input.value = 1
    }
    updateCartTotal()
}

function addToCartClicked(event) {
	
    var button = event.target
    var shopItem = button.parentElement.parentElement
    var title = shopItem.getElementsByClassName('item-title')[0].innerText
    var price = shopItem.getElementsByClassName('item-price')[0].innerText
    var imageSrc = shopItem.getElementsByClassName('item-image')[0].src
    addItemToCart(title, price, imageSrc)
    updateCartTotal()
}

function addItemToCart(title, price, imageSrc) {
    var cartRow = document.createElement('div')
    cartRow.classList.add('cart-row')
    var cartItems = document.getElementsByClassName('cart-items')[0]
    var cartItemNames = cartItems.getElementsByClassName('cart-item-title')
    for (var i = 0; i < cartItemNames.length; i++) {
        if (cartItemNames[i].innerText == title) {
            alert('Already added to the cart')
            return
        }
    }
    var cartRowContents = `
        <div class="cart-item cart-column">
            <img class="cart-item-image" src="${imageSrc}" width="100" height="100">
            <span class="cart-item-title">${title}</span>
        </div>
        <span class="cart-price cart-column">${price}</span>
        <div class="cart-quantity cart-column">
            <input class="quantity-input" type="number" value="1">
            <button class="btn btn-rmve" type="button">Remove</button>
        </div>`
    cartRow.innerHTML = cartRowContents
    cartItems.append(cartRow)
    cartRow.getElementsByClassName('btn-rmve')[0].addEventListener('click', removeCartItem)
    cartRow.getElementsByClassName('quantity-input')[0].addEventListener('change', quantityChanged)
}

function updateCartTotal() {
    var cartItemContainer = document.getElementsByClassName('cart-items')[0]
    var cartRows = cartItemContainer.getElementsByClassName('cart-row')
    var total = 0
    for (var i = 0; i < cartRows.length; i++) {
        var cartRow = cartRows[i]
        var priceElement = cartRow.getElementsByClassName('cart-price')[0]
        var quantityElement = cartRow.getElementsByClassName('quantity-input')[0]
        var price = parseFloat(priceElement.innerText.replace('$', ''))
        var quantity = quantityElement.value
        total = total + (price * quantity)
    }
    total = Math.round(total * 100) / 100
    document.getElementsByClassName('cart-total-price')[0].innerText = '$' + total
}

/**************************************************function for overlay**********************************************/

function on() {
  document.getElementById("overlay").style.display = "block";
}

function off() {
	var a=document.getElementsByClassName("overlay-text");
	var n;
	for (n = 0; n < a.length; ++n) {
    a[n].value="";
    } 
  document.getElementById("overlay").style.display = "none";
}

/**************************************************font-size change function**********************************************/

function increaseFontSize()
{
    txt = document.getElementById('text');
    style = window.getComputedStyle(txt, null).getPropertyValue('font-size');
    currentSize = parseFloat(style);
    txt.style.fontSize = (currentSize + 1) + 'px';
	
    txt = document.getElementById('head');
    style = window.getComputedStyle(txt, null).getPropertyValue('font-size');
    currentSize = parseFloat(style);
    txt.style.fontSize = (currentSize + 1) + 'px';
	
	txt = document.getElementById('info');
    style = window.getComputedStyle(txt, null).getPropertyValue('font-size');
    currentSize = parseFloat(style);
    txt.style.fontSize = (currentSize + 1) + 'px';
	
	txt = document.getElementById('title');
    style = window.getComputedStyle(txt, null).getPropertyValue('font-size');
    currentSize = parseFloat(style);
    txt.style.fontSize = (currentSize + 1) + 'px';
	
	txt = document.getElementById('crt');
    style = window.getComputedStyle(txt, null).getPropertyValue('font-size');
    currentSize = parseFloat(style);
    txt.style.fontSize = (currentSize + 1) + 'px';
	
	txt = document.getElementById('itm');
    style = window.getComputedStyle(txt, null).getPropertyValue('font-size');
    currentSize = parseFloat(style);
    txt.style.fontSize = (currentSize + 1) + 'px';
	
	txt = document.getElementById('prc');
    style = window.getComputedStyle(txt, null).getPropertyValue('font-size');
    currentSize = parseFloat(style);
    txt.style.fontSize = (currentSize + 1) + 'px';
	
	txt = document.getElementById('qun');
    style = window.getComputedStyle(txt, null).getPropertyValue('font-size');
    currentSize = parseFloat(style);
    txt.style.fontSize = (currentSize + 1) + 'px';
	
    txt = document.getElementById('totl');
    style = window.getComputedStyle(txt, null).getPropertyValue('font-size');
    currentSize = parseFloat(style);
    txt.style.fontSize = (currentSize + 1) + 'px';
	
	txt = document.getElementById('price');
    style = window.getComputedStyle(txt, null).getPropertyValue('font-size');
    currentSize = parseFloat(style);
    txt.style.fontSize = (currentSize + 1) + 'px';	
}

function decreaseFontSize()
{
    txt = document.getElementById('text');
    style = window.getComputedStyle(txt, null).getPropertyValue('font-size');
    currentSize = parseFloat(style);
    txt.style.fontSize = (currentSize - 1) + 'px';
	
    txt = document.getElementById('head');
    style = window.getComputedStyle(txt, null).getPropertyValue('font-size');
    currentSize = parseFloat(style);
    txt.style.fontSize = (currentSize - 1) + 'px';
	
    txt = document.getElementById('info');
    style = window.getComputedStyle(txt, null).getPropertyValue('font-size');
    currentSize = parseFloat(style);
    txt.style.fontSize = (currentSize - 1) + 'px';
	
	txt = document.getElementById('title');
    style = window.getComputedStyle(txt, null).getPropertyValue('font-size');
    currentSize = parseFloat(style);
    txt.style.fontSize = (currentSize - 1) + 'px';
	
	txt = document.getElementById('crt');
    style = window.getComputedStyle(txt, null).getPropertyValue('font-size');
    currentSize = parseFloat(style);
    txt.style.fontSize = (currentSize - 1) + 'px';
	
	txt = document.getElementById('itm');
    style = window.getComputedStyle(txt, null).getPropertyValue('font-size');
    currentSize = parseFloat(style);
    txt.style.fontSize = (currentSize - 1) + 'px';
	
	txt = document.getElementById('prc');
    style = window.getComputedStyle(txt, null).getPropertyValue('font-size');
    currentSize = parseFloat(style);
    txt.style.fontSize = (currentSize - 1) + 'px';
	
	txt = document.getElementById('qun');
    style = window.getComputedStyle(txt, null).getPropertyValue('font-size');
    currentSize = parseFloat(style);
    txt.style.fontSize = (currentSize - 1) + 'px';
	
	txt = document.getElementById('totl');
    style = window.getComputedStyle(txt, null).getPropertyValue('font-size');
    currentSize = parseFloat(style);
    txt.style.fontSize = (currentSize - 1) + 'px';
	
	txt = document.getElementById('price');
    style = window.getComputedStyle(txt, null).getPropertyValue('font-size');
    currentSize = parseFloat(style);
    txt.style.fontSize = (currentSize - 1) + 'px';
}


/**************************************************validation function**********************************************/

function validation(){

  var fname = document.getElementById("fname").value;
  var lname = document.getElementById("lname").value;
  var email = document.getElementById("email").value;
  var cntact = document.getElementById("cntact").value;
  var address = document.getElementById("address").value;
  var ppl = document.getElementById("ppl").checked;
  var crc = document.getElementById("crc").checked;
  var dbc = document.getElementById("dbc").checked;
  var crdhld = document.getElementById("crdhld").value;
  var crdnum = document.getElementById("crdnum").value;
  
 
  if(fname=="null" || fname=="" ){
    alert("Please Provide Your First Name!");
  }
  
  else if(lname=="null" || lname==""){
	alert("Please Provide Your Last Name!");
  }
  else if(email=="null" || email==""){
	alert("Please Provide the email address!"); 
  }
  else if(email.length < 8 || email.indexOf("@") == -1 || email.indexOf(".") == -1){
	  alert("You have entered an invalid email address");
  }
  else if(cntact=="null" || cntact==""){
	alert("Please Provide a phone number!");
  }
  
  else if(cntact.length != 10){
	   alert("You have entered an invalid phone number");
  }
  else if(address=="null" || address==""){
	  alert("Please Provide your address!");
  }
  else if(address.indexOf(",") == -1 || address.length < 7){
	  alert("You have entered an invalid address");
  } 
  else if(ppl=="" && crc=="" && dbc ==""){
	  alert("Please select a payment method");
  }
  else if(crdhld=="null" || crdhld==""){
	  alert("Please provide the card holder's name!!");
  }
  else if(crdnum=="null" || crdnum==""){
	  alert("Please provide the card number!!");
  }
  else{
  alert("Dear " +fname+lname+ ", Your order has been requested successfully!! You will recieve an confirmation email to " +email+ " shortly.\n\n\n Thank You for shopping with us!!" );
  }
}

/**************************************************reset function**********************************************/

function reSet(){
	var a=document.getElementsByClassName("overlay-text");
	var n;
	for (n = 0; n < a.length; ++n) {
    a[n].value="";
    } 
	
}









