import ProductsGrid from './ProductsGrid'
import SectionTitle from './SectionTitle'

const FeaturedProducts = () => {
  return (
    <div className="pt-12 text-center">
      <SectionTitle text="Featured Products" />
      <ProductsGrid />
    </div>
  )
}
export default FeaturedProducts
