import './styles/reset.css'
import './styles/index.css'
import {useState} from 'react'
import Store from './Store'
import Cart from './Cart'
import Footer from './Footer'
import Total from './Total'

export default function App() {
  const [cartItems, setCartItems] = useState([])

  const increase = (item) => {
      const updatedCart = cartItems.map((cartItem) => {
        if (item.name === cartItem.name) {
        return {...cartItem, quantity: ++cartItem.quantity }
        }
        return cartItem
      })
      setCartItems(updatedCart)
  }

  const decrease = (item) => {
    if (item.quantity <= 1) {
      const cartWithItemRemoved = cartItems.filter(function(cartItems) {
        return item !== cartItems
          })
        setCartItems(cartWithItemRemoved) 
    } else { 
      const newCart = cartItems.map((itemInUpdatedCart) => {
        if (item.name === itemInUpdatedCart.name) {
        return {...itemInUpdatedCart, quantity: --itemInUpdatedCart.quantity }
        }
        return itemInUpdatedCart
      })
      setCartItems(newCart)
    }
  }
  return (
    <>
      <Store increase={increase} cartItems={cartItems} setCartItems={setCartItems} />
      <Cart cartItems={cartItems} increase={increase} decrease={decrease}/>
      <Total cartItems={cartItems}/>
      <Footer />
    </>
  )
}