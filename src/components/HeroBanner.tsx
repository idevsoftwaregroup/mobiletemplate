import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";


function HeroBanner() {

    const banners = [
        {
            id: 1,
            title: "Build Modern Software",
            description: "Architecture, Security and Cloud Solutions",
            image: "/images/banner1.jpg"
        },
        {
            id: 2,
            title: "Technology Consulting",
            description: "Design scalable enterprise systems",
            image: "/images/banner2.jpg"
        },
        {
            id: 3,
            title: "Learn Engineering",
            description: "Advanced programming and architecture",
            image: "/images/banner3.jpg"
        }
    ];


    return (

        <Swiper
            modules={[Navigation, Pagination, Autoplay]}
            navigation
            pagination={{ clickable: true }}
            autoplay={{
                delay: 4000
            }}
            loop={true}
        >

            {
                banners.map((banner)=> (

                    <SwiperSlide key={banner.id}>

                        <article
                            className="hero-banner"
                            style={{
                                backgroundImage:
                                `url(${banner.image})`
                            }}
                        >

                            <div className="overlay">

                                <h1>
                                    {banner.title}
                                </h1>

                                <p>
                                    {banner.description}
                                </p>


                                <button className="primary">
                                    Start Project
                                </button>

                            </div>

                        </article>

                    </SwiperSlide>

                ))
            }


        </Swiper>

    );
}


export default HeroBanner;
