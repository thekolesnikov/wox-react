import { Link } from 'react-router-dom';
import { useLanguage } from '../../../context/LanguageContext';

import styles from './CatalogueSection.module.css';
import catalogueImg1 from './img/catalogueImg1.png';
import catalogueImg2 from './img/catalogueImg2.png';
import catalogueImg3 from './img/catalogueImg3.png';
import catalogueImg4 from './img/catalogueImg4.png';
import catalogueImg5 from './img/catalogueImg5.png';

function CatalogueSection() {
    const language = useLanguage();
    const catalogueItems = [
        {
            img: catalogueImg1,
            descriptionEn: 'Man`s suit purple',
            descriptionRu: 'Мужской костюм - фиолетовый',
            price: '$75',
            id: 3,
        },
        {
            img: catalogueImg2,
            descriptionEn: 'Woman`s suit coffee',
            descriptionRu: 'Женский костюм - кофейный',
            price: '$75',
            id: 1,
        },
        {
            img: catalogueImg3,
            descriptionEn: 'Woman`s suit lemon',
            descriptionRu: 'Женский костюм - жёлтый',
            price: '$75',
            id: 4,
        },
        {
            img: catalogueImg4,
            descriptionEn: 'Man`s longsleeve white',
            descriptionRu: 'Мужской лонгслив - белый',
            price: '$55',
            id: 10,
        },
        {
            img: catalogueImg5,
            descriptionEn: 'Woman`s suit purple',
            descriptionRu: 'Женский костюм - фиолетовый',
            price: '$75',
            id: 2,
        },
    ];
    return (
        <section className={styles.catalogue}>
            <div className={styles.catalogue__slider}>
                <div className={styles.catalogue__slider_line}>
                    {catalogueItems.map((item) => {
                        return (
                            <div
                                key={item.id}
                                className={styles.catalogue__item}
                            >
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
                        );
                    })}
                </div>
            </div>
            <button>
                <Link
                    to={
                        language.language === 'EN'
                            ? '/en/catalogue'
                            : '/ru/catalogue'
                    }
                    className={styles.catalogue__button}
                >
                    {language.language === 'EN' ? 'catalogue' : 'каталог'}
                </Link>
            </button>
        </section>
    );
}

export default CatalogueSection;
