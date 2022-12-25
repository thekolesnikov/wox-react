import { Link } from 'react-router-dom';
import { useState } from 'react';
import cn from 'classnames';

import styles from './Footer.module.css';
import blackArrowNext from './img/blackarrow.svg';
import { useLanguage } from '../../context/LanguageContext';
import { sendToServer } from '../../utils/sentToServer';

function Footer() {
    const language = useLanguage();

    const [emailValue, setEmailValue] = useState('');
    const [emailDirty, setEmailDirty] = useState(false);
    const [emailError, setEmailError] = useState('');

    const validateEmail = (e) => {
        const re =
            /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
        if (!re.test(String(e.target.value).toLowerCase())) {
            setEmailError('Некорректный email');
            setEmailDirty(false);
        } else {
            setEmailDirty(true);
            setEmailError('');
        }
    };

    const [isActive, setIsActive] = useState(false);
    return (
        <footer className="_container">
            <div className={styles.footer}>
                <div className={styles.subscribe}>
                    <div className={styles.subscribe__title}>
                        {language.language === 'EN'
                            ? 'Subscribe to Newsletter'
                            : 'Подписаться на рассылку'}
                    </div>
                    <form
                        className={styles.subscribe__email}
                        onSubmit={(e) => {
                            e.preventDefault();
                            setEmailValue('');
                            setIsActive(true);
                            setTimeout(() => setIsActive(false), 3000);
                        }}
                    >
                        <label className={styles.subscribe__email_text}>
                            {language.language === 'EN'
                                ? 'Email:'
                                : 'Ваша почта:'}

                            <input
                                type="email"
                                placeholder={
                                    language.language === 'EN'
                                        ? 'Enter your email'
                                        : 'Ваша электронная почта'
                                }
                                value={emailValue}
                                className={styles.subscribe__email_input}
                                onChange={(e) => {
                                    validateEmail(e);
                                    setEmailValue(e.target.value);
                                }}
                            />
                        </label>
                        <button
                            type="submit"
                            className={
                                !emailDirty
                                    ? styles.subscribe__email_arrow_disabled
                                    : styles.subscribe__email_arrow
                            }
                            disabled={!emailDirty}
                            onClick={() => {
                                sendToServer(emailValue, 'emails.json');
                            }}
                        >
                            <img src={blackArrowNext} alt="next" />
                        </button>
                    </form>
                    <hr className={styles.hr} />
                    {!emailDirty && emailError && (
                        <div className={styles.email__error}>{emailError}</div>
                    )}
                </div>
                <div className={styles.footer__links}>
                    <div className={styles.footer__uls}>
                        <div className={styles.gethelp}>
                            <div className={styles.gethelp__title}>
                                {language.language === 'EN'
                                    ? 'Get Help'
                                    : 'Полезная информация'}
                            </div>
                            <ul className={styles.gethelp__ul}>
                                <li className={styles.gethelp__item}>
                                    <Link
                                        to={
                                            language.language === 'EN'
                                                ? '/wox-react/en/not-made/'
                                                : '/wox-react/ru/not-made/'
                                        }
                                    >
                                        {language.language === 'EN'
                                            ? 'Ordes status'
                                            : 'Статус заказа'}
                                    </Link>
                                </li>
                                <li className={styles.gethelp__item}>
                                    <Link
                                        to={
                                            language.language === 'EN'
                                                ? '/wox-react/en/not-made/'
                                                : '/wox-react/ru/not-made/'
                                        }
                                    >
                                        {language.language === 'EN'
                                            ? 'Shipping & Delivery'
                                            : 'Доставка:'}
                                    </Link>
                                </li>
                                <li className={styles.gethelp__item}>
                                    <Link
                                        to={
                                            language.language === 'EN'
                                                ? '/wox-react/en/not-made/'
                                                : '/wox-react/ru/not-made/'
                                        }
                                    >
                                        {language.language === 'EN'
                                            ? 'Returns'
                                            : 'Возврат'}
                                    </Link>
                                </li>
                                <li className={styles.gethelp__item}>
                                    <Link
                                        to={
                                            language.language === 'EN'
                                                ? '/wox-react/en/not-made/'
                                                : '/wox-react/ru/not-made/'
                                        }
                                    >
                                        {language.language === 'EN'
                                            ? 'Payment Options'
                                            : 'Варианты оплаты:'}
                                    </Link>
                                </li>
                                <li className={styles.gethelp__item}>
                                    <Link
                                        to={
                                            language.language === 'EN'
                                                ? '/wox-react/en/not-made/'
                                                : '/wox-react/ru/not-made/'
                                        }
                                    >
                                        {language.language === 'EN'
                                            ? 'Contact us'
                                            : 'Связаться с нами'}
                                    </Link>
                                </li>
                            </ul>
                        </div>
                        <div className={styles.aboutus}>
                            <div className={styles.aboutus__title}>
                                {language.language === 'EN'
                                    ? 'About Us'
                                    : 'О нас'}
                            </div>
                            <ul className={styles.aboutus__ul}>
                                <li className={styles.aboutus__item}>
                                    <Link
                                        to={
                                            language.language === 'EN'
                                                ? '/wox-react/en/not-made/'
                                                : '/wox-react/ru/not-made/'
                                        }
                                    >
                                        {language.language === 'EN'
                                            ? 'News'
                                            : 'Новости'}
                                    </Link>
                                </li>
                                <li className={styles.aboutus__item}>
                                    <Link
                                        to={
                                            language.language === 'EN'
                                                ? '/wox-react/en/not-made/'
                                                : '/wox-react/ru/not-made/'
                                        }
                                    >
                                        {language.language === 'EN'
                                            ? 'Careers'
                                            : 'Вакансии'}
                                    </Link>
                                </li>
                                <li className={styles.aboutus__item}>
                                    <Link
                                        to={
                                            language.language === 'EN'
                                                ? '/wox-react/en/not-made/'
                                                : '/wox-react/ru/not-made/'
                                        }
                                    >
                                        {language.language === 'EN'
                                            ? 'Investors'
                                            : 'Инвесторы'}
                                    </Link>
                                </li>
                                <li className={styles.aboutus__item}>
                                    <Link
                                        to={
                                            language.language === 'EN'
                                                ? '/wox-react/en/not-made/'
                                                : '/wox-react/ru/not-made/'
                                        }
                                    >
                                        {language.language === 'EN'
                                            ? 'Purpose'
                                            : 'Наша цель'}
                                    </Link>
                                </li>
                                <li className={styles.aboutus__item}>
                                    <Link
                                        to={
                                            language.language === 'EN'
                                                ? '/wox-react/en/not-made/'
                                                : '/wox-react/ru/not-made/'
                                        }
                                    >
                                        {language.language === 'EN'
                                            ? 'Substainability'
                                            : 'Стабильность'}
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            <div className={styles.footer__socials_inline}>
                <div className={styles.subscribe__socials}>
                    <a
                        href="https://www.instagram.com/wox.clothing/"
                        target="_blank"
                        className={styles.subscribe__social_item}
                    >
                        Facebook
                    </a>
                    <a
                        href="https://www.instagram.com/wox.clothing/"
                        target="_blank"
                        className={styles.subscribe__social_item}
                    >
                        Instagram
                    </a>
                </div>
                <div className={styles.footer__allrights}>
                    © 2022 WOX, Inc. All Rights Reserved
                </div>
            </div>
            <div
                className={cn(
                    styles.footer__badge,
                    isActive ? '' : styles.none
                )}
            >
                Спасибо. Теперь вы будете в курсе всех наших новостей!!!
            </div>
        </footer>
    );
}

export default Footer;
