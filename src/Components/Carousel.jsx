import { useEffect, useState } from 'react'
import hero1 from '../assets/hero1.webp'
import hero2 from '../assets/hero2.webp'
import hero3 from '../assets/hero3.webp'
import hero4 from '../assets/hero4.webp'
import hero5 from '../assets/hero5.webp'
import hero6 from '../assets/hero6.webp'
import { FaCaretLeft } from 'react-icons/fa6'
import { FaCaretRight } from 'react-icons/fa6'

const carouselImages = [hero1, hero2, hero3, hero4, hero5, hero6]

const Carousel = ({ autoSlideInterval }) => {
  const [currentIndex, setCurrentIndex] = useState(0)

  const prevButton = () => {
    const isFirstSlide = currentIndex === 0
    const newIndex = isFirstSlide ? carouselImages.length - 1 : currentIndex - 1
    return setCurrentIndex(newIndex)
  }
  const nextButton = () => {
    const isLastSlide = currentIndex === carouselImages.length - 1
    const newIndex = isLastSlide ? 0 : currentIndex + 1
    return setCurrentIndex(newIndex)
  }
  const goToSlide = (imageIndex) => {
    return setCurrentIndex(imageIndex)
  }

  useEffect(() => {
    const slideInterval = setInterval(nextButton, autoSlideInterval)
    return () => {
      clearInterval(slideInterval)
    }
  }, [currentIndex])

  return (
    <div className=" h-[350px]  ">
      {/* Images required for sliding */}
      <div
        className=" w-full h-full rounded-xl transition-all ease-in duration-700"
        style={{
          backgroundImage: `url(${carouselImages[currentIndex]})`,
          backgroundPosition: 'center',
          backgroundSize: 'cover',
        }}
      ></div>

      {/* Previous and Next Button */}

      <div className=" flex justify-between items-end p-4  ">
        {/* Previous Button to slide the images  */}
        <button
          className="rounded-full bg-slate-700 hover:bg-orange-300"
          onClick={prevButton}
        >
          <FaCaretLeft size={40} color="white" className="" />
        </button>

        {/* The Rounded buttons for slide(click slide) */}

        <div className="flex self-center gap-5 ">
          {carouselImages.map((images, imageIndex) => (
            // <span className="text-4xl text-red-400 ">&#8226;</span>
            <div
              key={imageIndex}
              className={`rounded-full h-3 w-3 bg-black cursor-pointer  ${
                currentIndex === imageIndex ? 'scale-125  ' : 'bg-opacity-50'
              }`}
              onClick={() => goToSlide(imageIndex)}
            ></div>
          ))}
        </div>

        {/* Next Button to slide the images  */}

        <button
          type="button"
          className="rounded-full bg-slate-700 hover:bg-orange-300"
          onClick={nextButton}
        >
          <FaCaretRight size={40} color="white" />
        </button>
      </div>
    </div>
  )
}
export default Carousel

// <>
// transform translate-x-1 scale-125
//   <div className="overflow-hidden relative w-[40rem] h-[25rem] mx-auto">
//     <div
//       className="flex gap-1 transition-transform ease-out duration-500  "
//       style={{ transform: `translateX(-${currentSlide * 101}%)` }}
//     >
//       {carouselImages.map((img, index) => {
//         return (
//           <img
//             src={img}
//             key={index}
//             alt="items carousel"
//             className=" rounded-sm object-cover"
//           />
//         )
//       })}
//     </div>
//     <div className="absolute inset-0 flex justify-between items-center ">
//       <button
//         type="button"
//         className="bg-white rounded-lg w-10 h-16 "
//         onClick={prevBtn}
//       >
//         <FaCaretLeft size={40} />
//       </button>
//       <button
//         type="button"
//         className="bg-white rounded-lg w-10 h-16"
//         onClick={nextBtn}
//       >
//         <FaCaretRight size={40} />
//       </button>
//     </div>
//   </div>
// </>

//   const prevBtn = () => {
//     const decreaseAction =
//       currentSlide === 0 ? carouselImages.length - 1 : currentSlide - 1
//     return setCurrentSlide(decreaseAction)
//   }
//   const nextBtn = () => {
//     const increaseAction = currentSlide + 1
//     if (increaseAction > carouselImages.length - 1) {
//       return 0
//     }
//     return setCurrentSlide(increaseAction)
//   }
//   const nextBtn = () => {
//     setCurrentSlide((currentSlide) => {
//       const newIndex = currentSlide + 1
//       if (newIndex > carouselImages.length - 1) {
//         return 0
//       }
//       return newIndex
//     })
//   }
//   const prevBtn = () => {
//     setCurrentSlide((currentSlide) => {
//       const newIndex = currentSlide - 1
//       if (newIndex < 0) {
//         return carouselImages.length - 1
//       }
//       return newIndex
//     })
//   }
