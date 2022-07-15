import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { useNavigate } from "react-router-dom"

import { cleanCart } from "../../store/features/cart"
import { ItemCart } from "../components/ItemCart"
import { GroceryLayout } from "../layout/GroceryLayout"

export const CartPage = () => {

  const navigate = useNavigate()

  const dispatch = useDispatch()
  const { products = [] } = useSelector(state => state.cart)

  const [ total, setTotal ] = useState(0)

  const totalAmount = () => {
    
    let totalA = 0

    for (const product of products) {
      totalA += (product.amount * product.price)
    }

    setTotal(totalA)

  }


  const handleCleanCart = () => {
    dispatch( cleanCart() )

    navigate('/home')
  }


  useEffect(() => {

    totalAmount()

  }, [products])
  

  return (
    <GroceryLayout>

      <div className="child">
        <div className="container-items color-green-200 rounded w-80">
          <header className="header-order w-100 h-20">
            <h2>My Order</h2>
          </header>
        </div>
        <div className="container-items w-80">
          {
            products.map((product) =>(
              <ItemCart key={product.id} product={product} />
            ))
          }
        </div>
        <div className="dotted w-80 my-1"></div>
        <div className="justify-evenly w-80">
          <p className="text-title">Total Amount:</p>
          <p className="text-title text-end">${total}</p>
        </div>
        <div className="w-80 my-1 justify-between gap-1">
          <button className="button-fill">CHECKOUT</button>
          <button className="button-outlined" onClick={ () => handleCleanCart() }>CANCEL</button>
        </div>
      </div>

    </GroceryLayout>
  )
}
