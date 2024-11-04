import { Link } from 'react-router-dom'

import hero1 from '../assets/hero1.webp'
import hero2 from '../assets/hero2.webp'
import hero3 from '../assets/hero3.webp'
import hero4 from '../assets/hero4.webp'
import Carousel from './Carousel'

const carouselImages = [hero1, hero2, hero3, hero4]

const Hero = () => {
  return (
    <div className="grid lg:grid-cols-2 gap-20 items-center">
      <div className=" h-[420px] w-[500px] mx-auto hidden lg:block ">
        <Carousel autoSlideInterval={3000} />
      </div>
      <div className="h-full grid gap-1 lg:gap-1 md:text-center lg:text-left">
        <p className="   mb-4 text-lg leading-8 md:mx-auto lg:mx-0 ">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tempore
          repellat explicabo enim soluta temporibus asperiores aut obcaecati
          perferendis porro nobis. Lorem ipsum dolor sit amet consectetur
          adipisicing elit. Ad quidem modi vero beatae, rerum eum iusto maxime
          excepturi neque blanditiis maiores tenetur! Possimus.
        </p>
        <h1 className="max-w-2xl   lg:text-left  text-2xl font-bold tracking-wide  md:text-3xl lg:text-4xl mb-4 lg:mb-0 md:mt-4 lg:mt-0 ml-0 md:ml-3 lg:ml-0">
          <strong className="text-red-500">S</strong>hop
          <strong className="text-red-500"> F</strong>ast, and
          <strong className="text-red-500"> S</strong>ave more
          <br />
          <strong className="text-red-500"> T</strong>ime and
          <strong className="text-green-600"> M</strong>
          <span className="text-3xl">&#128176;</span>ney!
        </h1>
        <div className="md:mt-10 lg:mt-8  ">
          <Link to="/products" className="btn btn-primary">
            Shop Now
          </Link>
        </div>
      </div>
    </div>
  )
}
export default Hero

{
  /* <p className="mt-8 max-w-xl text-lg leading-8">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tempore
          repellat explicabo enim soluta temporibus asperiores aut obcaecati
          perferendis porro nobis.;
        </p> */
}

//  <div className="grid lg:grid-cols-2 gap-4 items-center">
//       <div className="mt-6 h-[420px] w-[500px] mx-auto mb-2 md:hidden ">
//         <Carousel autoSlideInterval={3000} />
//       </div>
//       <div>
//         <p className="mt-8 text-center text-lg leading-8 mb-8">
//           Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tempore
//           repellat explicabo enim soluta temporibus asperiores aut obcaecati
//           perferendis porro nobis.
//         </p>
//         <h1 className="text-center text-4xl font-bold tracking-tight sm:text-6xl">
//           We are changing the way people shop
//         </h1>
//         <div className="mt-11 justify-self-center">
//           <Link to="/products" className="btn btn-primary">
//             Click here to see more Products
//           </Link>
//         </div>
//       </div>

{
  /* <div className="hidden h-[28rem] lg:carousel carousel-center p-4 space-x-4 bg-neutral rounded-box ">
        {carouselImages.map((image) => {
          return (
            <div key={image} className="carousel-item">
              <img
                src={image}
                className="rounded-box h-full w-80 object-cover"
              />
            </div>
          )
        })}
      </div> */
}
{
  /* </div> */
}
