import { Navigate, Route, Routes } from "react-router-dom"
import { CartPage, HomePage, ProductsPage } from "../pages"

export const GroceryRoutes = () => {
  return (
    <Routes>
        <Route path="home" element={ <HomePage /> } />
        <Route path="products" element={ <ProductsPage /> } />
        <Route path="cart" element={ <CartPage /> } />

        <Route path="/*" element={ <Navigate to="/home" /> } />
    </Routes>
  )
}
