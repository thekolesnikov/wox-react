import { Link } from 'react-router-dom';
import { useLanguage } from '../../../context/LanguageContext';

import styles from './CollectionSection.module.css';
import blueArrow from './img/idea_arrow_left.svg';
import newItemLabel from './img/newItemLabel.svg';

function CollectionSection({ arrClothes, title, subtitle }) {
    const language = useLanguage();

    return (
        <section className={styles.collection}>
            <div className={styles.wox2020}>
                <div className={styles.wox2020__text}>{subtitle}</div>
                <div className={styles.wox2020__title}>{title}</div>
                <div className={styles.wox2020__link}>
                    <Link
                        to={
                            language.language === 'EN'
                                ? '/en/not-made/'
                                : '/ru/not-made/'
                        }
                        className={styles.wox2020__link_text}
                    >
                        {language.language === 'EN'
                            ? 'View All'
                            : 'Посмотреть больше'}
                    </Link>
                    <Link
                        to={
                            language.language === 'EN'
                                ? '/en/not-made/'
                                : '/ru/not-made/'
                        }
                        className={styles.wox2020__link_arrow}
                    >
                        <img src={blueArrow} alt="View all" />
                    </Link>
                </div>
            </div>
            <div className={styles.catalogue__items}>
                {arrClothes.map((item) => {
                    return (
                        <div key={item.id} className={styles.catalogue__item}>
                            <Link
                                to={
                                    language.language === 'EN'
                                        ? `/en/purchase/${item.id}/`
                                        : `/ru/purchase/${item.id}/`
                                }
                                className={styles.newcatalogue__image}
                            >
                                <img src={item.img} alt={item.description} />
                            </Link>
                            {item.label && (
                                <img
                                    className={styles.nwcatalogue__svg}
                                    src={newItemLabel}
                                    alt=""
                                />
                            )}

                            <div className={styles.nwcatalogue__description}>
                                {language.language === 'EN'
                                    ? item.description
                                    : item.descriptionRu}
                            </div>
                            <div className={styles.newcatalogue__item_footer}>
                                {item.oldPrice ? (
                                    <div
                                        className={styles.newcatalogue__prices}
                                    >
                                        <div
                                            className={
                                                styles.newcatalogue__sale
                                            }
                                        >
                                            <div
                                                className={
                                                    styles.newcatalogue__oldprice
                                                }
                                            >
                                                {item.oldPrice}
                                            </div>
                                            <hr
                                                className={
                                                    styles.newcatalogue__line
                                                }
                                            />
                                        </div>
                                        <div
                                            className={
                                                styles.newcatalogue__newprice
                                            }
                                        >
                                            {item.newPrice}
                                        </div>
                                    </div>
                                ) : (
                                    <div className={styles.newcatalogue__price}>
                                        {item.newPrice}
                                    </div>
                                )}

                                <Link
                                    to={
                                        language.language === 'EN'
                                            ? `/en/purchase/${item.id}/`
                                            : `/ru/purchase/${item.id}/`
                                    }
                                    className={styles.newcatalogue__link}
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
        </section>
    );
}

export default CollectionSection;
