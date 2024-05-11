import axios from 'axios'
import { FeaturedProducts, Hero } from '../Components'
import { customFetch } from '../Utils'

const url = '/products?featured=true'

const featuredProductsQuery = {
  queryKey: ['featuredProducts'],
  queryFn: () => customFetch(url),
}

export const loader = (queryClient) => async () => {
  const response = await queryClient.ensureQueryData(featuredProductsQuery)
  console.log(response)
  const products = response.data.data
  // console.log(products)
  return { products }
}

const Landing = () => {
  return (
    <>
      <Hero />
      <FeaturedProducts />
    </>
  )
}
export default Landing
