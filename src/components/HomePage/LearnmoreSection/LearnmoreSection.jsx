import { Link } from 'react-router-dom';
import { useLanguage } from '../../../context/LanguageContext';
import cn from 'classnames';

import styles from './LearnmoreSection.module.css';
import learnmoreImg1 from './img/learnmore1.png';
import learnmoreImg2 from './img/learnmore2.png';
import ideaArrow from './img/idea_arrow_left.svg';

function LearnmoreSection() {
    const language = useLanguage();

    return (
        <section className={styles.learnmore}>
            <div className={styles.learnmore__body}>
                <div className={styles.learnmore__title}>Body positivity</div>
                <p className={styles.learnmore__title_text}>
                    {language.language === 'EN'
                        ? 'We believe in a world where you have total freedom to be you, without judgement. To experiment.'
                        : 'Мы верим в мир, в котором у вас есть полная свобода быть самим собой, без осуждения. Экспериментировать.'}
                </p>
                <p
                    className={cn(
                        styles.learnmore__title_text,
                        styles.learnmore__text_mobile
                    )}
                >
                    {language.language === 'EN'
                        ? 'To express yourself. To be brave and grab life as the extraordinary adventure it is.'
                        : 'Чтобы самовыражаться. Быть смелым и хвататься за жизнь как за необыкновенное приключение.'}
                </p>
                <p
                    className={cn(
                        styles.learnmore__title_text,
                        styles.learnmore__text_none
                    )}
                >
                    {language.language === 'EN'
                        ? 'So we make sure everyone has an equal chance to discover all the amazing things they’re capable of – no matter who they are, where they’re from or what looks they like to boss. We exist to give you the confidence to be whoever you want to be.'
                        : 'Поэтому мы заботимся о том, чтобы у всех были равные шансы открывать для себя удивительные вещи, на которые они способны – неважно кто они, откуда они или как они выглядят. Мы существуем, чтобы дать вам уверенность в том, что вы явяляетесь тем, кем хотите.'}
                </p>
                <div className={styles.learnmore__link}>
                    <Link
                        to={
                            language.language === 'EN'
                                ? '/wox-react/en/catalogue'
                                : '/wox-react/ru/catalogue'
                        }
                        className={styles.learnmore__link_text}
                    >
                        {language.language === 'EN'
                            ? 'learn more'
                            : 'узнать больше'}
                    </Link>
                    <Link
                        to={
                            language.language === 'EN'
                                ? '/wox-react/en/catalogue'
                                : '/wox-react/ru/catalogue'
                        }
                    >
                        <img src={ideaArrow} alt="Go to catalogue" />
                    </Link>
                </div>
            </div>
            <div className={styles.learnmore__image1}>
                <img src={learnmoreImg1} alt="Wox" />
            </div>
            <div className={styles.learnmore__image2}>
                <img src={learnmoreImg2} alt="Wox" />
            </div>
        </section>
    );
}

export default LearnmoreSection;
