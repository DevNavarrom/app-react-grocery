import { NavBar } from "../components/NavBar"

import '../../sass/_layout.scss'

export const GroceryLayout = ({ children }) => {
  
  return (
    <div className="container">
      <NavBar />
      <div id="children">{children}</div>
    </div>
  )
}
