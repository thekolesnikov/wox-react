import { useEffect, useState } from 'react';
import cn from 'classnames';
import styles from './Cart.module.css';

import applePay from './img/applepay.svg';
import cardPay from './img/Card.svg';
import paypalPay from './img/paypal.svg';
import minus from './img/Minuspurchase_minus.svg';
import plus from './img/Pluspurchase_plus.svg';

import { useCart } from '../../context/CartContext';
import { useModal } from '../../context/ModalContext';
import { useLanguage } from '../../context/LanguageContext';

function Cart() {
    const language = useLanguage();
    const cart = useCart();
    const modal = useModal();
    const [count, setCount] = useState();

    //Payment methhod
    const paymentMethods = [
        { name: applePay, id: 1, alt: 'applePay' },
        { name: cardPay, id: 2, alt: 'cardPay' },
        { name: paypalPay, id: 3, alt: 'paypalPay' },
    ];
    const [paymentActive, setPaymentActive] = useState('');

    //Calc total prie
    const [totalPrice, setTotalPrice] = useState(0);
    let totalPriceArr = 0;

    useEffect(() => {
        cart.cartArr.forEach((item) => {
            if (item.hasOwnProperty('id')) {
                totalPriceArr += item.count * item.price;
            }
        });
        setTotalPrice(totalPriceArr);
    }, [cart.cartArr]);

    //Minus and Plus
    const [removedBadge, setRemovedBadge] = useState(false);
    function plusQty(item) {
        cart.cartArr.length > 0
            ? cart.setCartArr(
                  cart.cartArr.map((i) => {
                      if (i.id === item.id) {
                          return { ...i, count: ++i.count };
                      } else {
                          return i;
                      }
                  })
              )
            : cart.setCartArr({ ...item, count: ++item.count });
    }
    function minusQty(item) {
        if (item.count > 1) {
            cart.cartArr.length > 0
                ? cart.setCartArr(
                      cart.cartArr.map((i) => {
                          if (i.id === item.id) {
                              return { ...i, count: --i.count };
                          } else {
                              return i;
                          }
                      })
                  )
                : cart.setCartArr({ ...item, count: --item.count });
        } else {
            cart.cartArr.map((i) => {
                if (i.id === item.id) {
                    cart.cartArr.splice(
                        cart.cartArr.findIndex((elem) => i.id === elem.id),
                        1
                    );
                    setRemovedBadge(true);
                    setTimeout(() => setRemovedBadge(false), 2000);
                    return cart.setCartArr([...cart.cartArr]);
                }
            });
        }
    }
    //Form Inputs
    const [nameValue, setNameValue] = useState('');
    const [phoneValue, setPhoneValue] = useState('');

    //Form Submit
    const [nameError, setNameError] = useState(false);
    const [phoneError, setPhoneError] = useState(false);
    const [paymentError, setPaymentError] = useState(false);
    const [cartEmptyError, setCartEmptyError] = useState(false);

    let submitArr;
    const [badgeActive, setBadgeActive] = useState(false);
    function submitForm(e) {
        e.preventDefault();
        if (
            nameValue.trim() !== '' &&
            phoneValue.trim() !== '' &&
            paymentActive !== '' &&
            cart.cartArr.length > 0
        ) {
            submitArr = {
                items: cart.cartArr,
                totalPrice: totalPrice,
                name: nameValue,
                phone: phoneValue,
                paymentMethod: paymentActive,
            };
            cart.setCartArr([]);
            setPhoneValue('');
            setNameValue('');
            setPaymentActive('');
            modal.setModalActive(false);
            document.body.classList.remove('hidden');
            setBadgeActive(true);
            setTimeout(() => setBadgeActive(false), 3000);
        } else {
            nameValue.trim() === '' ? setNameError(true) : setNameError(false);
            phoneValue.trim() === ''
                ? setPhoneError(true)
                : setPhoneError(false);
            paymentActive === ''
                ? setPaymentError(true)
                : setPaymentError(false);
            cart.cartArr.length == 0
                ? setCartEmptyError(true)
                : setCartEmptyError(false);
        }
    }

    return (
        <>
            <div
                className={cn(
                    styles.cart__background,
                    modal.modalActive ? styles.active : ''
                )}
                onClick={() => {
                    modal.setModalActive(false);
                    document.body.classList.remove('hidden');
                }}
            >
                <div
                    className={styles.cart__content}
                    onClick={(e) => e.stopPropagation()}
                >
                    <button
                        className={styles.cart__exit}
                        onClick={() => {
                            modal.setModalActive(false);
                            document.body.classList.remove('hidden');
                        }}
                    >
                        <img src={plus} alt="Close" />
                    </button>
                    <h2 className={styles.cart__name}>
                        {language.language === 'EN' ? 'CART' : 'Корзина'}
                    </h2>
                    <div className={styles.item__boxes_row}>
                        {cart.cartArr.length > 0 ? (
                            cart.cartArr.map((item) => {
                                if (item.hasOwnProperty('id')) {
                                    return (
                                        <div
                                            key={item.id}
                                            className={styles.item__box}
                                        >
                                            <img
                                                className={styles.img_size}
                                                src={item.img}
                                                alt={item.name}
                                            />
                                            <div
                                                className={
                                                    styles.cart_item__title
                                                }
                                            >
                                                {language.language === 'EN'
                                                    ? item.name
                                                    : item.nameRu}
                                            </div>
                                            <div
                                                className={
                                                    styles.cart_item__footer
                                                }
                                            >
                                                <div
                                                    className={
                                                        styles.purchase__price_cart
                                                    }
                                                >
                                                    ${item.price}
                                                </div>
                                                <div
                                                    className={
                                                        styles.purchase__quantity_cart
                                                    }
                                                >
                                                    <button
                                                        className={
                                                            styles.purchase_minus
                                                        }
                                                        onClick={() =>
                                                            minusQty(item)
                                                        }
                                                    >
                                                        <img
                                                            src={minus}
                                                            alt="Minus"
                                                        />
                                                    </button>
                                                    <div
                                                        className={
                                                            styles.purchase__quantity_item_cart
                                                        }
                                                    >
                                                        {item.count}
                                                    </div>
                                                    <button
                                                        className={
                                                            styles.purchase_plus
                                                        }
                                                        onClick={() =>
                                                            plusQty(item)
                                                        }
                                                    >
                                                        <img
                                                            src={plus}
                                                            alt="Plus"
                                                        />
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                    );
                                }
                            })
                        ) : (
                            <h2 className={styles.cart__empty}>
                                {language.language === 'EN'
                                    ? 'Cart is empty...'
                                    : 'Корзина пуста...'}
                            </h2>
                        )}
                    </div>
                    <div className={styles.cart__total}>
                        {language.language === 'EN' ? 'Total:' : 'Всего:'}
                        <span className={styles.cart__total_price}>
                            $
                            <span className={styles.total__cart_price}>
                                {totalPrice}
                            </span>
                        </span>
                    </div>
                    <form onSubmit={(e) => submitForm(e)}>
                        <div className={styles.cart__label}>
                            <label>
                                {language.language === 'EN' ? 'Name:' : 'Имя:'}

                                <input
                                    placeholder="Enter your name"
                                    className={styles.cart_input}
                                    value={nameValue}
                                    onChange={(e) => {
                                        setNameValue(e.target.value);
                                        setNameError(false);
                                    }}
                                ></input>
                            </label>
                        </div>
                        {nameError && (
                            <div className={styles.cart__error}>
                                {language.language === 'EN'
                                    ? "This field can't be empty"
                                    : 'Это поле не может быть пустым'}
                            </div>
                        )}
                        <div className={styles.cart__label}>
                            <label>
                                {language.language === 'EN'
                                    ? 'Phone:'
                                    : 'Телефон:'}
                                <input
                                    placeholder="Enter your phone"
                                    className={styles.cart_input}
                                    value={phoneValue}
                                    onChange={(e) => {
                                        setPhoneValue(e.target.value);
                                        setPhoneError(false);
                                    }}
                                ></input>
                            </label>
                        </div>
                        {phoneError && (
                            <div className={styles.cart__error}>
                                {language.language === 'EN'
                                    ? "This field can't be empty"
                                    : 'Это поле не может быть пустым'}
                            </div>
                        )}
                        <div className={styles.cart__payment}>
                            <div className={styles.cart__payment_text}>
                                {language.language === 'EN'
                                    ? 'Payment method:'
                                    : 'Способ оплаты:'}
                            </div>
                            <div className={styles.cart__payment_methods}>
                                {paymentMethods.map((item) => {
                                    return (
                                        <div
                                            key={item.id}
                                            className={cn(
                                                styles.cart__payment_method,
                                                paymentActive == item.alt
                                                    ? styles.active
                                                    : ''
                                            )}
                                            onClick={(e) => {
                                                e.stopPropagation();
                                                setPaymentActive(item.alt);
                                                setPaymentError(false);
                                            }}
                                        >
                                            <img
                                                src={item.name}
                                                alt={item.alt}
                                            />
                                        </div>
                                    );
                                })}
                            </div>
                        </div>
                        {paymentError && (
                            <div className={styles.cart__error}>
                                {language.language === 'EN'
                                    ? 'Select the payment method'
                                    : 'Выберите способ оплаты'}
                            </div>
                        )}
                        <button type="submit" className={styles.cart__button}>
                            {language.language === 'EN'
                                ? 'Order now'
                                : 'Заказать'}
                        </button>
                        {cartEmptyError && (
                            <div className={styles.cart__error}>
                                {language.language === 'EN'
                                    ? "You haven't added anything yet"
                                    : 'Вы ещё ничего не добавили в корзину'}
                            </div>
                        )}
                    </form>

                    <div
                        className={cn(
                            styles.formsubmit__badge,
                            badgeActive ? '' : styles.none
                        )}
                    >
                        Спасибо за заказ. Мы с вами скоро свяжемся!
                    </div>
                </div>
            </div>
            <div
                className={cn(
                    styles.removed__badge,
                    removedBadge ? '' : styles.none
                )}
            >
                Товар был удалён из корзины!
            </div>
        </>
    );
}

export default Cart;
