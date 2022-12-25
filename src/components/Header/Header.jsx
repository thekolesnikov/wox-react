import { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import cn from 'classnames';

import styles from './Header.module.css';
import logo from './Logologo.svg';
import cartIcon from './shop.svg';

import Cart from '../Cart/Cart';
import { useLanguage } from '../../context/LanguageContext';
import { useCart } from '../../context/CartContext';
import { useModal } from '../../context/ModalContext';
import { addToLocalStorage } from '../../utils/addToLocalStorage';
import { getFromLocalStorage } from '../../utils/addToLocalStorage';

function Header() {
    const language = useLanguage();
    const enLanguage = 'EN';
    const ruLanguage = 'RU';
    const cart = useCart();
    const modal = useModal();
    useEffect(() => {
        addToLocalStorage(cart.cartArr);
    }, [cart.cartArr]);

    useEffect(() => {
        const items = getFromLocalStorage();
        if (items) {
            cart.setCartArr(items);
        }
    }, []);

    // Burger
    const [burgerActive, setburgerActive] = useState(false);

    function openMenu() {
        burgerActive ? setburgerActive(false) : setburgerActive(true);
        !burgerActive
            ? document.body.classList.add('hidden')
            : document.body.classList.remove('hidden');
    }

    return (
        <>
            <header className={cn('_container', styles.header)}>
                <div className={styles.header__wox}>
                    <div className={styles.header__leftside}>
                        <NavLink
                            to={
                                language.language === 'EN'
                                    ? '/wox-react/en/'
                                    : '/wox-react/ru/'
                            }
                            className={styles.header__logo}
                        >
                            <img src={logo} alt="WOX logo" />
                        </NavLink>
                        <div className={styles.header__dot}></div>
                        <div className={styles.header__brand}>
                            Ukrainian Clothing brand
                        </div>
                    </div>
                    <nav
                        className={cn(
                            styles.header__center,
                            burgerActive ? styles._active : ''
                        )}
                    >
                        <ul className={styles.header__nav}>
                            <li className={styles.header__item}>
                                <NavLink
                                    onClick={() => {
                                        setburgerActive(false);
                                        document.body.classList.remove(
                                            'hidden'
                                        );
                                    }}
                                    className={({ isActive }) =>
                                        isActive
                                            ? styles.header__nav_item_active
                                            : styles.header__nav_item
                                    }
                                    to={
                                        language.language === 'EN'
                                            ? '/wox-react/en/'
                                            : '/wox-react/ru/'
                                    }
                                >
                                    {language.language === 'EN'
                                        ? 'Home'
                                        : 'Главная'}
                                </NavLink>
                            </li>
                            <li className={styles.header__item}>
                                <NavLink
                                    onClick={() => {
                                        setburgerActive(false);
                                        document.body.classList.remove(
                                            'hidden'
                                        );
                                    }}
                                    className={({ isActive }) =>
                                        isActive
                                            ? styles.header__nav_item_active
                                            : styles.header__nav_item
                                    }
                                    to={
                                        language.language === 'EN'
                                            ? '/wox-react/en/catalogue'
                                            : '/wox-react/ru/catalogue'
                                    }
                                >
                                    {language.language === 'EN'
                                        ? 'Catalogue'
                                        : 'Каталог'}
                                </NavLink>
                            </li>
                            <li className={styles.header__item}>
                                <NavLink
                                    onClick={() => {
                                        setburgerActive(false);
                                        document.body.classList.remove(
                                            'hidden'
                                        );
                                    }}
                                    className={({ isActive }) =>
                                        isActive
                                            ? styles.header__nav_item_active
                                            : styles.header__nav_item
                                    }
                                    to={
                                        language.language === 'EN'
                                            ? '/wox-react/en/about'
                                            : '/wox-react/ru/about'
                                    }
                                >
                                    {language.language === 'EN'
                                        ? 'About'
                                        : 'О нас'}
                                </NavLink>
                            </li>
                            <li className={styles.header__item}>
                                <NavLink
                                    onClick={() => {
                                        setburgerActive(false);
                                        document.body.classList.remove(
                                            'hidden'
                                        );
                                    }}
                                    className={({ isActive }) =>
                                        isActive
                                            ? styles.header__nav_item_active
                                            : styles.header__nav_item
                                    }
                                    to={
                                        language.language === 'EN'
                                            ? '/wox-react/en/contacts'
                                            : '/wox-react/ru/contacts'
                                    }
                                >
                                    {language.language === 'EN'
                                        ? 'Contacts'
                                        : 'Контакты'}
                                </NavLink>
                            </li>
                        </ul>
                    </nav>
                    <div className={styles.header__rightside}>
                        <button
                            onClick={() => {
                                language.setLanguage('EN');
                            }}
                            className={cn(
                                styles.header__language,
                                language.language === enLanguage
                                    ? styles.header__language_active
                                    : ''
                            )}
                        >
                            {enLanguage}
                        </button>
                        <button
                            onClick={() => language.setLanguage('RU')}
                            className={cn(
                                styles.header__language,
                                language.language === ruLanguage
                                    ? styles.header__language_active
                                    : ''
                            )}
                        >
                            {ruLanguage}
                        </button>
                        <button
                            onClick={() => {
                                modal.setModalActive(true);
                                document.body.classList.add('hidden');
                            }}
                            className={styles.header__basket}
                        >
                            <img src={cartIcon} alt="purchase" />
                        </button>
                        <div
                            className={cn(
                                styles.cart__add,
                                cart.cartArr.length === 0 ? styles.none : ''
                            )}
                        >
                            {cart.cartArr.length}
                        </div>
                    </div>
                    <div
                        onClick={openMenu}
                        className={cn(
                            styles.menu__icon,
                            burgerActive ? styles._active : ''
                        )}
                    >
                        <span></span>
                    </div>
                </div>
            </header>
            <hr className={styles.header__hr} />
            <Cart />
        </>
    );
}

export default Header;
