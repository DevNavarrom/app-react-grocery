import { groceryApi } from "../../../api/groceryApi"
import { setProducts } from "./index"


export const getProducts = () => {
  return async( dispatch, getState ) => {
    const {data} = await groceryApi.get('/v3/1cb39e71-c933-4021-8f0a-30e1bc2c3629')
    dispatch( setProducts(data.data) )
  }
}
