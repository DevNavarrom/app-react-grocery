import { Route, Routes } from "react-router-dom"
import { GroceryRoutes } from "../grocery/routes/GroceryRoutes"

export const AppRouter = () => {
  return (
    <Routes>
        <Route path="/*" element={ <GroceryRoutes /> } />
    </Routes>
  )
}
