import './styles/reset.css'
import './styles/index.css'
import initialStoreItems from './store-items'
import {useState} from 'react'

let index = 0
let itemAlreadyInCart = false

export default function Store({increase, cartItems, setCartItems}) {
    const [storeItems, setStoreItems] = useState(initialStoreItems)

    const addItemToCart = (item) => {
        checkIfItemIsInCart(item)
        if (itemAlreadyInCart) {
        increase(item)
        }else {
            addItemToCartList(item)
        } }

    const addItemToCartList = (item) => {
        item.quantity = 1
        const newList = [...cartItems]
        newList.push(item)
        setCartItems(newList)
    }

    function checkIfItemIsInCart(item) {
        for (let i = 0; i < cartItems.length; i++) {
        if (cartItems[i].name === item.name) {
            itemAlreadyInCart = true;
            index = i;
            break
        } else {itemAlreadyInCart = false}
        }}

    return (
        <header id='store'>
        <h1>Greengrocers</h1>
        <ul className='item-list store--item-list'>
          {storeItems.map((item, index) => {
            return (
                <li key={index}>
                    <div className='store--item-icon'>
                        <img src={`/assets/icons/${item.id}.svg`} alt={item.name} />
                    </div>
                    <button onClick={() => addItemToCart(item)}>Add to cart</button>
                </li>)
          })}
        </ul>
      </header>
    )}