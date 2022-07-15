import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartPlus } from '@fortawesome/free-solid-svg-icons'
import { faPlus } from '@fortawesome/free-solid-svg-icons'
import { faMinus } from '@fortawesome/free-solid-svg-icons'
import { useDispatch } from 'react-redux'

import { addToCart } from '../../store/features/cart/index'
import { discountProduct } from '../../store/features/products/index'

import { useCounter } from '../hooks/useCounter'
import '../../sass/_components.scss'


export const ItemProduct = ({ product }) => {

    const dispatch = useDispatch()

    const { counter, increment, decrement } = useCounter(0, product.amount)

    const handleAddToCart = () => {
        
        product = {
            ...product,
            amount: counter
        }

        if (counter > 0) {
            dispatch( addToCart(product) )
            dispatch( discountProduct(product) )
        }
    }

    return (
        <div className="card">
            <img src={product.url} height="80" alt="Image product" />
            <div className="content-text-item">
                <h3 className="text-title">{product.name}</h3>
            </div>
            <div className="content-text-item">
                <p className="text-second">${product.price}</p>
            </div>
            {product.amount > 0 ? 
                <div className="actions-item">
                    <div className="actions-item-counter">
                        <button className="button-counter" onClick={ () => decrement() }>
                            <FontAwesomeIcon icon={faMinus} color="#40AA54" />
                        </button>
                        <p>{counter}</p>
                        <button className="button-counter" onClick={ () => increment() }>
                            <FontAwesomeIcon icon={faPlus} color="#40AA54" />
                        </button>
                    </div>
                    <button className="button-rounded" onClick={ () => handleAddToCart() }>
                        <FontAwesomeIcon icon={faCartPlus} color="#FFFFFF" />
                    </button>
                </div>
                :
                <div className="actions-item">
                    <div className="content-text-item">
                        <p className="text-second">Out of Stock</p>
                    </div>
                </div>
            }
        </div>
    )

}
