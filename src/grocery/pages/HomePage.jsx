import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"

import { GroceryLayout } from "../layout/GroceryLayout"
import { ItemProduct } from "../components/ItemProduct"
import { getProducts } from "../../store/features/products"

import '../../sass/_components.scss'


export const HomePage = () => {

  const dispatch = useDispatch()
  const { products = [] } = useSelector(state => state.products)

  useEffect(() => {
    dispatch( getProducts() )
  }, [])
  
  return (
    <GroceryLayout>
      <div className="container-img">
        <img src='https://img.freepik.com/free-photo/concept-food-grocery-space-text_185193-84593.jpg?t=st=1657119470~exp=1657120070~hmac=1829ddb21eacad5a6a612cb65aea621e40c5fa9b0d2d19df8cf388e8b9ff9a34&w=740' alt="vegetables" />
        <p className="text">Order your Daily Groceries</p>
      </div>

      <div className="container-items">
        {
          products.map((product) => (
            <ItemProduct 
              key={product.id} 
              product={product}
            />
          ))
        }
      </div>
    </GroceryLayout>
  )
}
