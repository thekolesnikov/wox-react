import { Link } from 'react-router-dom';
import { useParams } from 'react-router-dom';

import styles from './PurchaseAnythingElse.module.css';
import newItemLabel from '../../../CataloguePage/CollectionSection/img/newItemLabel.svg';
import { clothesArr } from '../../PurchasePage';
import { useLanguage } from '../../../../context/LanguageContext';

function PurchaseAnythingElse() {
    const language = useLanguage();
    const params = useParams();

    return (
        <div className={styles.catalogue__items}>
            {clothesArr.map((item) => {
                if (item.id == params.id) {
                    return;
                } else {
                    return (
                        <div key={item.id} className={styles.catalogue__item}>
                            <Link
                                to={
                                    language.language === 'EN'
                                        ? `/wox-react/en/purchase/${item.id}/`
                                        : `/wox-react/ru/purchase/${item.id}/`
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
                                                ${item.oldPrice}
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
                                            ${item.newPrice}
                                        </div>
                                    </div>
                                ) : (
                                    <div className={styles.newcatalogue__price}>
                                        ${item.newPrice}
                                    </div>
                                )}

                                <Link
                                    to={
                                        language.language === 'EN'
                                            ? `/wox-react/en/purchase/${item.id}/`
                                            : `/wox-react/ru/purchase/${item.id}/`
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
                }
            })}
        </div>
    );
}

export default PurchaseAnythingElse;
