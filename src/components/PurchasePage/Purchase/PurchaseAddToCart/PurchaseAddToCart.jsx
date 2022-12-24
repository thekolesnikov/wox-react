import cn from 'classnames';
import { useState } from 'react';
import { useParams } from 'react-router-dom';

import styles from './PurchaseAddToCart.module.css';
import purchaseMinus from './img/Minuspurchase_minus.svg';
import purchasePlus from './img/Pluspurchase_plus.svg';
import blackArrow from './img/blackarrow.svg';

import { useCart } from '../../../../context/CartContext';
import { useModal } from '../../../../context/ModalContext';

import { clothesArr } from '../../PurchasePage';
import { useLanguage } from '../../../../context/LanguageContext';

function PurchaseAddToCart() {
    const language = useLanguage();

    const params = useParams();
    const arr = clothesArr.find((item) => item.id == params.id);

    const [count, setCount] = useState(1);
    function plusItem(prev) {
        setCount(prev + 1);
    }
    function minusItem(prev) {
        if (prev > 1) {
            setCount(prev - 1);
        }
    }

    const [selectedSize, setSelectedSize] = useState('M');

    const [size, setSize] = useState([
        {
            size: 'XS',
        },
        {
            size: 'S',
        },
        {
            size: 'M',
        },
        {
            size: 'L',
        },
        {
            size: 'XL',
        },
    ]);

    const cart = useCart();
    function addToCart() {
        cart.cartArr.length > 0
            ? cart.cartArr.find((item) => item.id == params.id)
                ? cart.setCartArr(
                      cart.cartArr.map((i) => {
                          if (i.id === params.id) {
                              return { ...i, count: i.count + count };
                          } else {
                              return i;
                          }
                      })
                  )
                : cart.setCartArr([
                      ...cart.cartArr,
                      {
                          id: params.id,
                          name: arr.description,
                          nameRu: arr.descriptionRu,
                          img: arr.img,
                          size: selectedSize,
                          price: arr.newPrice,
                          count: count,
                      },
                  ])
            : cart.setCartArr([
                  {
                      id: params.id,
                      name: arr.description,
                      nameRu: arr.descriptionRu,
                      img: arr.img,
                      size: selectedSize,
                      price: arr.newPrice,
                      count: count,
                  },
              ]);
        setCount(1);
    }

    const modal = useModal();

    const [badgeActive, setBadgeActive] = useState(false);
    function displayCartBadge() {
        setBadgeActive(true);
        setTimeout(() => setBadgeActive(false), 3000);
    }

    return (
        <section className={styles.purchase}>
            <div className={styles.purchase__body}>
                <div className={styles.purchase__title}>
                    {language.language === 'EN'
                        ? arr.description
                        : arr.descriptionRu}
                </div>
                <div className={styles.purchase__image_mobile}>
                    <img src={arr.img} alt={arr.description} />
                </div>
                <div className={styles.purchase__subtitle}>
                    {language.language === 'EN'
                        ? 'Select Size'
                        : 'Выберите размер'}
                </div>
                <div className={styles.purchase__size}>
                    {size.map((item) => {
                        return (
                            <button
                                key={item.size}
                                className={cn(
                                    styles.purchase__size_item,
                                    selectedSize === item.size
                                        ? styles.purchase__size_item_bold
                                        : ''
                                )}
                                onClick={() => setSelectedSize(item.size)}
                            >
                                {item.size}
                            </button>
                        );
                    })}
                </div>

                <div className={styles.purchase__price}>
                    <span className={styles.purchase__price_span}>
                        ${arr.newPrice * count}
                    </span>
                </div>
                <div className={styles.purchase__quantity}>
                    <button
                        onClick={() => minusItem(count)}
                        className={styles.purchase_minus}
                    >
                        <img src={purchaseMinus} alt="Minus" />
                    </button>
                    <div className={styles.purchase__quantity_item}>
                        {count}
                    </div>
                    <button
                        onClick={() => plusItem(count)}
                        className={styles.purchase_plus}
                    >
                        <img src={purchasePlus} alt="Plus" />
                    </button>
                </div>
                <div className={styles.choose}>
                    <p className={styles.choose__text_red}>
                        {language.language === 'EN'
                            ? 'Add to Cart'
                            : 'Добавить в корзину'}
                    </p>
                    <button
                        onClick={() => {
                            addToCart();
                            displayCartBadge();
                        }}
                        className={styles.choose__arrow}
                    >
                        <img src={blackArrow} alt="next" />
                    </button>
                    <div
                        className={cn(
                            styles.addtocart__badge,
                            badgeActive ? '' : styles.none
                        )}
                    >
                        Товар добавлен в корзину
                    </div>
                </div>
                <div className={styles.choose}>
                    <p className={styles.choose__text_red}>
                        {language.language === 'EN'
                            ? 'Buy Now'
                            : 'Купить сейчас'}
                    </p>
                    <button
                        onClick={() => {
                            addToCart();
                            modal.setModalActive(true);
                            document.body.classList.add('hidden');
                        }}
                        className={styles.choose__arrow}
                    >
                        <img src={blackArrow} alt="" />
                    </button>
                </div>
            </div>
            <div className={styles.purchase__photos}>
                <div className={styles.purchase__image}>
                    <img src={arr.img} alt={arr.description} />
                </div>
            </div>
        </section>
    );
}

export default PurchaseAddToCart;
