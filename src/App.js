import './styles/reset.css'
import './styles/index.css'

import initialStoreItems from './store-items'
import { useState } from 'react'

const storeItemList = document.querySelector('.store--item-list')
const cartItemList = document.querySelector('.cart--item-list')
const totalNumber = document.querySelector('.total-number')

let alreadyInCart = false

const clearStorePage = () => {
  storeItemList.innerHTML = ""
}

const clearCart = () => {
  cartItemList.innerHTML = ""
}




export default function App() {
const [storeItems, setStoreItems] = useState(initialStoreItems)
const [cartItems, setCartItems] = useState([])

const checkIfItemIsInCart = (item) => {
  for (let i = 0; i < cartItems.length; i++) {
    if (cartItems[i].name === item.name) {
      alreadyInCart = true
      cartItems[i].quantity += 1
      break
    } else {alreadyInCart = false}
  }
}

const addItemToCart = (product) => {
  checkIfItemIsInCart(product)
  if (!alreadyInCart) {
    product.quantity = 1
    const newCart = [...cartItems]
    newCart.push(product)
    setCartItems(newCart)
  }
}

  return (
    <>
      <header id="store">
        <h1>Greengrocers</h1>
        <ul className="item-list store--item-list">
          {storeItems.map((currentItem) => {
            return(
              <li key={currentItem.id}>
                <div className='store--item-icon'>
                  <img src={`assets/icons/${currentItem.id}.svg`} alt={currentItem.name} />
                </div>
                <button onClick={()=>{
                  addItemToCart(currentItem)
                  console.log(currentItem)
                  // sumOfCart()
                }}>Add to cart</button>
              </li>
            )
          })}
        </ul>
      </header>
      <main id="cart">
        <h2>Your Cart</h2>
        <div className="cart--item-list-container">
          <ul className="item-list cart--item-list">
            {/* Wrtite some code here... */}
          </ul>
        </div>
        <div className="total-section">
          <div>
            <h3>Total</h3>
          </div>
          <div>
            <span className="total-number">£0.00</span>
          </div>
        </div>
      </main>
      <div>
        Icons made by
        <a
          href="https://www.flaticon.com/authors/icongeek26"
          title="Icongeek26"
        >
          Icongeek26
        </a>
        from
        <a href="https://www.flaticon.com/" title="Flaticon">
          www.flaticon.com
        </a>
      </div>
    </>
  )
}
