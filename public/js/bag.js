const productCards = document.querySelector('.product-cards')
const bagBtn = document.querySelector('.bi-bag')
const bagOffScreen = document.querySelector('.shopping-section')
const bagContainer = document.querySelector('.cart-content')



const bag = []

const cardItems = [
  {
    name: 'Macbook',
    price: 899,
    image: './public/assets/imagespexels-dlxmedia-hu-maccbook.png',
    qty: 1
  },
  {
    name:'Android',
    price: 399,
    image: './public/assets/images/andrey-matveev-msartwatch-unsplash.png',
    qty: 1
  }
]


function sendProductToBag(event) {
  const item = cardItems
  for (let i = 0; i < bag.length; i++) {
    if (bag[i].name === name){
      bag[i].qty += 1
      return
    }
  }

  
  
  // const item = {
  //   name: name,
  //   price: price,
  //   image: cardImg,
  //   qty: 1
  // }
  bag.push(item)
  console.log(item)
}



function addProduct(event) {


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
              <button aria-label="decrease-btn" class="decrease-btn"><i class="bi bi-dash-square"></i></button>
              <pan class="card-output">${bag[i].qty}</span>
              <button aria-label="increase-btn" class="increase-btn"><i class="bi bi-plus-square"></i></button>
            </div>
        </div>
      </article>
    `
  }

  bagContainer.innerHTML = product

}


function displayBag() {
  if (bagBtn.classList.toggle('enable')) {
    bagOffScreen.classList.toggle('enable')
  } else {
    bagOffScreen.classList.toggle('enable')
  }
}



// this event listener listens for when a product card is being clicked on by the item button
  productCards.addEventListener('click', function(event){
  // for (let i = 0; i < cardImg.length; i++) {
  //   const cardImg = document.getElementsByClassName('card-image')[0].src  
  // }
  

  // const name = event.target.dataset.name
  // const price = event.target.dataset.price
  sendProductToBag(event)
  addProduct(event)
})



// this event listener listens for when the bag button is being clicks
bagBtn.addEventListener('click', function(){
  displayBag()
})
