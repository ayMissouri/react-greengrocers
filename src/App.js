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
    const newCart = [...cartItems]
    const newProduct = {
      id: product.id,
      name: product.name,
      price: product.price,
      img: `assets/icons/${product.id}.svg`,
      quantity: 1
    }
    newCart.push(newProduct)
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
            {cartItems.map((cartItem) => {
              return(
                <li key={cartItem.id}>
                  <img className='cart--item-icon' src={cartItem.img} alt={cartItem.name} />
                  <p>{cartItem.name}</p>
                  <button onClick={() => {
                    let indexOfTheItemToRemove = cartItems.indexOf(cartItem)
                    if (cartItem.quantity === 1) {
                      const newCart = [...cartItems]
                      newCart.splice(indexOfTheItemToRemove, 1)
                      setCartItems(newCart)
                      // sumOfCart()
                    } else {
                      cartItem.quantity--
                      const newCart = [...cartItems]
                      setCartItems(newCart)
                      // sumOfCart()
                    }
                  }} className='quantity-btn remove-btn center'>-</button>
                  <span className='quantity-text center'>{cartItem.quantity}</span>
                  <button onClick={()=>{
                    cartItem.quantity++
                    const newCart = [...cartItems]
                    setCartItems(newCart)
                  }} className='quantity-btn add-btn center'>+</button>
                </li>
              )
            })}
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
