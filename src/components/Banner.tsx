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

  const style = {
    margin: "margin",
    top: "top5",
    bottom: "bottom5",
    centerAlign: "center-align"
  }

    return (

        <Swiper
            spaceBetween={20}
            slidesPerView={2}
            loop={true}
            className={`${style.margin} ${style.top} ${style.bottom}`}
        >

            {
                slides.map((item, index)=>(

                    <SwiperSlide key={index}>

                        <article className="card no-border blue-gray">

                      <div className={style.centerAlign}><img src={item.image} /></div>

                            <text className="gray small right-align">
                                محصول
                            </text>

                        </article>

                    </SwiperSlide>

                ))
            }


        </Swiper>

    );
}
