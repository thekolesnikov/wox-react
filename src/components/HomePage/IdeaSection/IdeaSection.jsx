import { Link } from 'react-router-dom';

import styles from './IdeaSection.module.css';
import ideaBigImage from './img/idea1.png';
import ideaSmallImage from './img/idea2.png';
import ideaArrow from './img/idea_arrow_left.svg';

import { useLanguage } from '../../../context/LanguageContext';

function IdeaSection() {
    const language = useLanguage();

    return (
        <section className={styles.idea}>
            <div className={styles.idea__image_big}>
                <img src={ideaBigImage} alt="wox" />
            </div>
            <div className={styles.idea__body}>
                <div className={styles.idea__title}>
                    {language.language === 'EN' ? 'Idea,' : 'Идея,'}
                    <br />
                    {language.language === 'EN'
                        ? 'first things'
                        : 'прежде всего'}
                </div>
                {/* <div class="idea__title_mobile">Idea, first things</div> */}
                <div className={styles.idea__text}>
                    <p>
                        {language.language === 'EN'
                            ? 'We believe in a world where you have total freedom to be you, without judgement. To experiment.'
                            : 'Мы верим в мир, в котором у вас есть полная свобода быть самим собой, без осуждения. Экспериментировать.'}
                    </p>
                    <p>
                        {language.language === 'EN'
                            ? 'To express yourself. To be brave and grab life as the extraordinary adventure it is.'
                            : 'Чтобы самовыражаться. Быть смелым и хвататься за жизнь как за необыкновенное приключение.'}
                    </p>
                    <p className={styles.idea__display_none_mobile}>
                        {language.language === 'EN'
                            ? 'So we make sure everyone has an equal chance to discover all the amazing things they’re capable of – no matter who they are, where they’re from or what looks they like to boss. We exist to give you the confidence to be whoever you want to be.'
                            : 'Поэтому мы заботимся о том, чтобы у всех были равные шансы открывать для себя удивительные вещи, на которые они способны – неважно кто они, откуда они или как они выглядят. Мы существуем, чтобы дать вам уверенность в том, что вы явяляетесь тем, кем хотите.'}
                    </p>
                    <p className={styles.idea__display_none}>
                        {language.language === 'EN'
                            ? 'It’s super-important for us to promote a healthy bodyimage – we’re not about conforming to any stereotypes – so we work with more than 200 models to represent our audience.'
                            : 'Для нас очень важно продвигать выражение индивидуальности – мы не стремимся соответствовать каким-либо стереотипам – поэтому мы работаем с более чем 200 моделями, чтобы показать нашу аудиторию.'}
                    </p>
                </div>
                <div className={styles.idea__link}>
                    <Link
                        to={
                            language.language === 'EN'
                                ? '/en/about'
                                : '/ru/about'
                        }
                        className={styles.idea__link_text}
                    >
                        {language.language === 'EN'
                            ? 'learn more'
                            : 'узнать больше'}
                    </Link>
                    <Link
                        to={
                            language.language === 'EN'
                                ? '/en/about'
                                : '/ru/about'
                        }
                    >
                        <img src={ideaArrow} alt="about" />
                    </Link>
                </div>
            </div>
            <div className={styles.idea__article}>
                <div className={styles.idea__article_body}>
                    <div className={styles.idea__article_title}>
                        {language.language === 'EN'
                            ? 'Choice for everyone'
                            : 'Выбор каждого'}
                    </div>
                    <div className={styles.idea__article_text}>
                        {language.language === 'EN'
                            ? "Our audience (AKA you) is wonderfully unique. And we do everything we can to help you find your fit, offering our ASOS Brands in more than 30 sizes – and we're committed to providing all sizes at the same price."
                            : 'Наша аудитория удивительно уникальна. И мы делаем все, что мы можем, чтобы помочь вам найти свою индивидуальность, предлагая нашу одежду в более чем 30 моделях.'}
                    </div>
                </div>
                <div className={styles.idea__article_image}>
                    <img src={ideaSmallImage} alt="wox" />
                </div>
            </div>
        </section>
    );
}

export default IdeaSection;
