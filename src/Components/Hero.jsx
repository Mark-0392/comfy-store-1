import { Link } from 'react-router-dom'

import hero1 from '../assets/hero1.webp'
import hero2 from '../assets/hero2.webp'
import hero3 from '../assets/hero3.webp'
import hero4 from '../assets/hero4.webp'

const carouselImages = [hero1, hero2, hero3, hero4]

const Hero = () => {
  return (
    <div className="grid lg:grid-cols-2 gap-24 items-center">
      {/* info */}
      <div>
        <h1 className="max-w-2xl text-2xl font-bold tracking-tighter sm:text-6xl">
          We are here to change the traditional shopping
        </h1>
        <p className="mt-8 max-w-xl text-lg leading-10">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Blanditiis
          fugit magnam fugiat ipsa totam. Maiores corrupti ad impedit, totam
          ipsa qui illum, odio esse harum dolorem eum expedita suscipit!
          Aliquid, laboriosam? Ullam vero, reiciendis doloremque quia nulla cum
          repellat officia.
        </p>
        <div className="mt-10">
          <Link to="/products" className="btn btn-primary">
            Our Products
          </Link>
        </div>
      </div>
      {/* carousel */}

      <div className="hidden h-[28rem] lg:carousel carousel-center p-4 space-x-4 bg-neutral rounded-box">
        {carouselImages.map((img, index) => {
          return (
            <div key={img} id={index} className="carousel-item">
              <img
                src={img}
                className="rounded-box h-full w-80  object-cover"
              />
            </div>
          )
        })}
      </div>
    </div>
  )
}
export default Hero
