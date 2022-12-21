import { NavLink } from 'react-router-dom';
import { useLanguage } from '../../../context/LanguageContext';

import styles from './SaleSection.module.css';
import Swiper from './Swiper';

function SaleSection() {
    const language = useLanguage();
    return (
        <section className={styles.sale}>
            <div className={styles.sale__body}>
                <div className={styles.sale__title}>
                    {language.language === 'EN'
                        ? 'The most comfortable premium quality upwear made by humans'
                        : 'Самая удобная верхняя одежда премиум-класса, сделанная руками человека'}
                </div>
                {/* <div class="sale__mobile"><img src="img/mobile/main%20mobile.png" alt=""></div> */}
                <div className={styles.sale__text}>
                    {language.language === 'EN' ? '2 suits' : '2 костюма'}
                    <br />
                    {language.language === 'EN' ? '-10% off' : '-10% скидка'}
                </div>
                {/* <div class="sale__mobile_text">Buy two suits and get <span>- 10%</span> off!</div> */}
                <button>
                    <NavLink
                        to={
                            language.language === 'EN'
                                ? '/en/catalogue'
                                : '/ru/catalogue'
                        }
                        className={styles.sale__button}
                    >
                        {language.language === 'EN'
                            ? 'Get my -10%'
                            : 'Получить скидку'}
                    </NavLink>
                </button>
            </div>
            <div>
                <Swiper className="swiper-wrapper" />
            </div>
        </section>
    );
}

export default SaleSection;
