import { useState, useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import { PRODUCT } from '../../my-config'
import axios from 'axios'
import ProductCard from './components/ProductCard'

function ProductList() {
  const [productCard, setProductCard] = useState([])

  // const location = useLocation()
  // console.log(location)

  async function getProductCard() {
    const response = await axios.get(
      'http://localhost:3002/product_list?shop_list_sid=3'
    )
    console.log(response)
    setProductCard(response.data)
  }
  useEffect(() => {
    getProductCard()
  }, [])
  // console.log(' productcard ' + productCard)
  const CardList = productCard.map((product) => {
    return (
      <ProductCard
        // key={product.food_product.sid}
        productId={product.sid}
        shopId={product.shop_list_sid}
        img={product.picture_url}
        name={product.product_name}
        price={product.unit_price}
        discount={product.sale_price}
        quantity={product.inventory_qty}
        residual={product.inventory_qty}
      />
    )
  })
  // console.log('CardList - ' + CardList)
  return <>{CardList}</>
}
export default ProductList
