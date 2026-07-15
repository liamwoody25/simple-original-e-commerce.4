const bagBtn = document.querySelector('.bi-bag')
const bagOffScreen = document.querySelector('.shopping-section');
const productCards = document.querySelector('.product-cards');
const bagContainer = document.querySelector('.cart-content')

const bag = []



function sendProductToBag(name, price, image) {
 
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
            <p>${bag[i].price}</p>
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






// this function displays the shoppping bag when the bag btn is being clicked
function displayBag() {
  if (bagBtn.classList.toggle('enable')) {
    bagOffScreen.classList.toggle('enable');
  } else {
    bagOffScreen.classList.toggle('enable')
  }
}


productCards.addEventListener('click', function(event){
  const cardImg = document.querySelector('.card-image').src
  const name = event.target.dataset.name
  const price = event.target.dataset.price
  sendProductToBag(name, price, cardImg)
  addProduct()
})


bagBtn.addEventListener('click', function(){
  displayBag()
})