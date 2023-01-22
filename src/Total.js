import './styles/reset.css'
import './styles/index.css'
export default function Total({cartItems}) {
    const total = () => {
        let sum = 0
        cartItems.forEach((item) => {
          sum += item.price * item.quantity
        })
        const currencyConvert = (x) => {
            return Number.parseFloat(x).toFixed(2);
          }
        return currencyConvert(sum)
      }

    return (
        <div className='total-section'>
            <div>
                <h3>Total</h3>
            </div>
            <div>
                <span className='total-number'>{`£${total()}`}</span>
            </div>
        </div>
    )
}