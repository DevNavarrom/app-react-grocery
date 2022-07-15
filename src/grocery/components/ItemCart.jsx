import { useDispatch } from 'react-redux'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrash } from '@fortawesome/free-solid-svg-icons'

import '../../sass/_components.scss'
import { deleteProduct } from '../../store/features/cart'
import { editProducts } from '../../store/features/products'


export const ItemCart = ({ product }) => {

    const dispatch = useDispatch()
    
    const handleDelete = () => {
        dispatch( deleteProduct(product.id) )
        dispatch( editProducts(product) )
    }

    return (
        <div className="card-large w-100 relative">
            <div className="content-text-item content-img-item radius-25">
                <img src={product.url} height="75" alt="Image product" />
            </div>
            <div className="content-text-item">
                <h3 className="text-second">{product.name}</h3>
            </div>
            <div className="content-text-item">
                <h3 className="text-second text-center">{product.amount}</h3>
            </div>
            <div className="content-text-item">
                <h3 className="text-second text-center">X</h3>
            </div>
            <div className="content-text-item">
                <p className="text-second text-end">${product.price}</p>
            </div>
            <button className="button-delete absolute -r-1 -t-1" onClick={() => handleDelete()}>
                <FontAwesomeIcon icon={faTrash} color="#FFF" />
            </button>
        </div>
    )
}