const bagBtn = document.querySelector('.bi-bag')
const bagOffScreen = document.querySelector('.shopping-section');
const productBtn = document.querySelectorAll('.item-btn');
const bagContainer = document.querySelector('.cart-content')
const priceContent = document.querySelector('.bag-price-container')
const bagTextPlaceholder = document.querySelector('.bag-placeholder-content');




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


  const increaseBtn = document.querySelectorAll('.increase-btn');


    // this code is to loop through each increase button 
    for (let i = 0; i < increaseBtn.length; i+= 1) {
      increaseBtn[i].addEventListener('click', function(){
        const productOutput = document.querySelectorAll('.card-output')[i]
        let quantityOutput = Number(productOutput.innerText) + 1

   
      // this code is for when the user wants to increase the product quantity
        if (quantityOutput = bag[i].qty ++ ) {
          quantityOutput = bag[i].qty
        }
      


      productOutput.innerText = quantityOutput
      document.getElementById('bag-output').textContent = quantityOutput
      
     updateBag()
    })
   
  }
   
 updateBag()
  
}




// this function code is for when the bag is being updated
function updateBag() {

    let total = 0

    for (let i = 0; i < bag.length; i+= 1) {
    total += bag[i].price * bag[i].qty
    }





  for (let i = 0; i < bag.length; i+= 1) {
   
    priceContent.innerHTML = ''
    
    // this code is creates the content of the sub total price
    const totalContent = document.createElement('div');
    totalContent.classList.add('bag-price-content');

    const subContent = document.createElement('div');
    subContent.classList.add('sub-text-container');

    const subTotalPrice = document.createElement('h4');
    subTotalPrice.textContent = 'sub Total'

    const subPrice = document.createElement('p');
    subPrice.textContent = `$${bag[i].price} x ${bag[i].qty}`



    // this code creates the shipping content for shipping text
    const shipContent = document.createElement('div');
    shipContent.classList.add('shipping-content');

    const priceHd = document.createElement('h4');
    priceHd.textContent = 'delivery'

    const shipText = document.createElement('p');
    shipText.textContent = 'Free'
    

  
    // these codes create the total container for the total text
    const fullContent = document.createElement('div');
    fullContent.classList.add('total-container');

    const totalPriceHd = document.createElement('h4');
    totalPriceHd.textContent = 'Total'

    const priceTotal = document.createElement('p');
    priceTotal.innerHTML = `$${total}`



    // these code displays the price content inside the price container
    fullContent.append(totalPriceHd, priceTotal)
    shipContent.append(priceHd, shipText)
    subContent.append(subTotalPrice, subPrice)
    totalContent.append(subContent, shipContent, fullContent)
    priceContent.appendChild(totalContent)
   }

    // this code hides an displays the price container and the bag text placeholder
    if (total === 0) {
      priceContent.style.display = 'none'
      bagTextPlaceholder.style.display = 'block'
      bagTextPlaceholder.style.display = 'flex'
    } else {
      bagTextPlaceholder.style.display = 'none'
      
      priceContent.style.display = 'block'
    }
   
  

}



// this function removes a product from the bag 
function removeProductFromBag() { 
    const decreaseBtn = document.querySelectorAll('.decrease-btn');

  // this code is to loop through every decrease button
    for (let i = 0; i < decreaseBtn.length; i+= 1) {
       decreaseBtn[i].addEventListener('click', function(){
        const productOutput = document.querySelectorAll('.card-output')[i]
        let quantityOutput  = Number(productOutput.innerText) - 1

    // this code is for when the user wants to remove a product quantity
      if (quantityOutput = bag[i].qty -- ) {
        quantityOutput = bag[i].qty 
      }


        productOutput.innerText = quantityOutput

        document.getElementById('bag-output').textContent = quantityOutput

        
      updateBag()
    })
  }
  updateBag()
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
    removeProductFromBag()
  })
}

 




// this event listner is to listen for the user clicks on the bag icon
bagBtn.addEventListener('click', function(){
  displayBag()
})









//  




