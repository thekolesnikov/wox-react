import { Swiper, SwiperSlide } from 'swiper/react';
import { Link } from 'react-router-dom';

import { useLanguage } from '../../../context/LanguageContext';

import styles from './CatalogueSection.module.css';
import { catalogueItems } from './CatalogueSection';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

export default function SwiperCatalogue() {
    const language = useLanguage();

    return (
        <Swiper
            spaceBetween={0}
            slidesPerView={'auto'}
            scrollbar={{ draggable: true, el: styles.swiper_scrollbar }}
            effect={'fade'}
            className={styles.swiper__container}
        >
            {catalogueItems.map((item) => {
                return (
                    <SwiperSlide key={item.id} className={styles.swiper__slide}>
                        <div className={styles.catalogue__item}>
                            <Link
                                to={
                                    language.language === 'EN'
                                        ? `/en/purchase/${item.id}/`
                                        : `/ru/purchase/${item.id}/`
                                }
                                className={styles.catalogue__image}
                            >
                                <img src={item.img} alt={item.img} />
                            </Link>
                            <div className={styles.catalogue__description}>
                                {language.language === 'EN'
                                    ? item.descriptionEn
                                    : item.descriptionRu}
                            </div>
                            <div className={styles.catalogue__item_footer}>
                                <div className={styles.catalogue__price}>
                                    {item.price}
                                </div>
                                <Link
                                    to={
                                        language.language === 'EN'
                                            ? `/en/purchase/${item.id}/`
                                            : `/ru/purchase/${item.id}/`
                                    }
                                    className={styles.catalogue__link}
                                    data-buynow
                                >
                                    {language.language === 'EN'
                                        ? 'Buy now'
                                        : 'Купить'}
                                </Link>
                            </div>
                        </div>
                    </SwiperSlide>
                );
            })}
        </Swiper>
    );
}
