import { Navigation, Pagination, Autoplay } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

import styles from './SaleSection.module.css';
import caruselImg1 from './img/carusel1.png';
import caruselImg2 from './img/carusel2.jpg';
import caruselImg3 from './img/carusel3.jpg';
import caruselImg4 from './img/carusel4.jpg';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

export default () => {
    return (
        <Swiper
            loop
            modules={[Navigation, Pagination, Autoplay]}
            autoplay={{
                delay: 5000,
            }}
            spaceBetween={50}
            slidesPerView={1}
            navigation
            pagination={{ clickable: true }}
            scrollbar={{ draggable: true }}
            effect={'fade'}
            className={styles.swiper__container}
        >
            <SwiperSlide className={styles.swiper__slide}>
                <img className={styles.swiper__img} src={caruselImg1} alt="" />
            </SwiperSlide>
            <SwiperSlide className={styles.swiper__slide}>
                <img className={styles.swiper__img} src={caruselImg2} alt="" />
            </SwiperSlide>
            <SwiperSlide className={styles.swiper__slide}>
                <img className={styles.swiper__img} src={caruselImg3} alt="" />
            </SwiperSlide>
            <SwiperSlide className={styles.swiper__slide}>
                <img className={styles.swiper__img} src={caruselImg4} alt="" />
            </SwiperSlide>
        </Swiper>
    );
};
