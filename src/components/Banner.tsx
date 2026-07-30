import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";


export default function Banner() {

    const slides = [
        {
            title: "Technology Consulting",
            text: "Build scalable systems",
        image: "https://ombe.dexignzone.com/xhtml/img/products/featured/pic1.png",
            width: "150px"
        },
        {
          title: "Technology Consulting",
          text: "Build scalable systems",
      image: "https://ombe.dexignzone.com/xhtml/img/products/featured/pic2.png",
          width: "150px"
        },
        {
          title: "Technology Consulting",
          text: "Build scalable systems",
      image: "https://ombe.dexignzone.com/xhtml/img/products/featured/pic1.png",
          width: "150px"
        }, {
          title: "Technology Consulting",
          text: "Build scalable systems",
      image: "https://ombe.dexignzone.com/xhtml/img/products/featured/pic2.png",
          width: "150px"
        }
    ];



    return (

        <Swiper
            spaceBetween={20}
            slidesPerView={2}
            loop={true}

        >

            {
                slides.map((item, index)=>(

                    <SwiperSlide key={index}>

                        <article className="card border borderInput round blue-gray transparent">

                      <div className="center-align"><img src={item.image} /></div>

                            <text className="small right-align transparent">
                                محصول
                            </text>

                        </article>

                    </SwiperSlide>

                ))
            }


        </Swiper>

    );
}
