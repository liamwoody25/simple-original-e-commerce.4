const bagBtn = document.querySelector('.bi-bag')
const bagOffScreen = document.querySelector('.shopping-section');
const productBtn = document.querySelectorAll('.item-btn');
const bagContainer = document.querySelector('.cart-content')
const priceContent = document.querySelector('.bag-price-container')


const bag = []



function sendProductToBag(name, price, image) {
  const bagOutput = document.getElementById('bag-output');
  const displayQuantity = Number(bagOutput.innerText) + 1
 
  if (displayQuantity > 10) {
    displayQuantity = 0
  }

  bagOutput.innerText = displayQuantity

  for (let i = 0; i < bag.length; i+= 1) {
    if (bag[i].name === name) {
      bag[i].qty += 1
      return
    }
  }

  const item = {
      name: name,
      price: price,
      image: image,
      qty: 1
    }
  
  bag.push(item)  
}



function addProduct() {
 
  let product = ''

  for (let i = 0; i < bag.length; i++) {
    product += `
      <article class="bag-product-card">
        <div class="item-card-content">
            <img class="bag-item-image" src="${bag[i].image}">
          <div class="product-content-container">
            <h3>${bag[i].name}</h3>
            <p>$ ${bag[i].price}</p>
          </div>
          <div class="quantity-btn-content">
            <button aria-lable="decrease-btn" class="decrease-btn"><i class="bi bi-dash-square"></i></button>
            <span class="card-output">${bag[i].qty}</span>
            <button aria-lable="increase-btn" class="increase-btn"><i class="bi bi-plus-square"></i></button>
          </div>
        </div>
      </article>
    `
  }

  
  
  

  bagContainer.innerHTML = product
}



// this function code is for when the bag is being updated
function updateBag() {
  const decreaseBtn = document.querySelectorAll('.decrease-btn');
  const increaseBtn = document.querySelector('.increase-btn');

  for (let i = 0; i < bag.length; i+= 1) {
     decreaseBtn[i].addEventListener('click', function(){
      let productOutput = document.querySelectorAll('.card-output')[i]
      let quantityOutput = Number(productOutput.innerText) - 1

      if (quantityOutput < 0) {
        quantityOutput = 0
      }

      productOutput.innerText = quantityOutput
      document.getElementById('bag-output').textContent -= 1
  })
  }

  increaseBtn.addEventListener('click', function(){
    console.log('this button works')
  })
  
  // priceContent.innerHTML = ''


  // priceContent.style.display = 'block'
}




// this function displays the shoppping bag when the bag btn is being clicked
function displayBag() {
  if (bagBtn.classList.toggle('enable')) {
    bagOffScreen.classList.toggle('enable');
  } else {
    bagOffScreen.classList.toggle('enable')
  }
}



// this code is for when the add to bag button is clicked
for (let i = 0; i < productBtn.length; i+= 1) {
  productBtn[i].addEventListener('click', function(){
  const cardImg = document.querySelectorAll('.card-image')[i].src
  const name = productBtn[i].dataset.name
  const price = productBtn[i].dataset.price
  sendProductToBag(name, price, cardImg)
  addProduct()
  updateBag()
})
}







// this event listner is to listen for the user clicks on the bag icon
bagBtn.addEventListener('click', function(){
  displayBag()
})