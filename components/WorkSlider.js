// data
export const workSlider = {
  slides: [
    {
      images: [
        {
          title: "title",
          path: "/thumb1.jpg",
        },
        {
          title: "title",
          path: "/thumb2.jpg",
        },
        {
          title: "title",
          path: "/thumb3.jpg",
        },
        {
          title: "title",
          path: "/thumb4.jpg",
        },
      ],
    },
    {
      images: [
        {
          title: "title",
          path: "/thumb4.jpg",
        },
        {
          title: "title",
          path: "/thumb1.jpg",
        },
        {
          title: "title",
          path: "/thumb2.jpg",
        },
        {
          title: "title",
          path: "/thumb3.jpg",
        },
      ],
    },
  ],
};

//import swiper react components
import { Swiper, SwiperSlide } from "swiper/react";

//import swiper style
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";

//import require module
import { Pagination } from "swiper";

//icon
import { BsArrowRight } from "react-icons/bs";
import Image from 'next/image';
 
const WorkSlider = () => {
  return (
    <Swiper
      spacebetween={10}
      pagination={{
        clickable: true,
      }}
      modules={[Pagination]}
      className="h-[280px] sm:h-[480px]"
    >
      {WorkSlider.slides.map((slide, index) => {
        return <SwiperSlide key={index}>
          <div>
            {slide.images.map((image, index)=> {
              return <div>
                <div>
                  {/* image */}
                  <Image src={image.path} width={500} height={300} alt='' />
                </div>
              </div>
            })}
          </div>
        </SwiperSlide>;
      })}
    </Swiper>
  );
};

export default WorkSlider;
