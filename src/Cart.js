import './styles/reset.css'
import './styles/index.css'
export default function Cart({cartItems, increase, decrease}) {
    return (
        <main id='cart'>
            <h2>Your Cart</h2>
            <div className='cart--item-list-container'>
                <ul className='item-list cart--item-list'>
                    {cartItems.map((item, index) => {
                        return (
                            <li key={index}>
                            <img
                            className='cart--item-icon'
                            src={`/assets/icons/${item.id}.svg`}
                            alt={item.name}
                            />
                            <p>{item.name}</p>
                            <button className='quantity-btn remove-btn center' onClick={() => decrease(item)}>-</button>
                            <span className='quantity-text center'>{item.quantity}</span>
                            <button className='quantity-btn add-btn center' onClick={() => increase(item)}>+</button>
                        </li>)
                    })}
                </ul>
            </div>
        </main>
    )
}