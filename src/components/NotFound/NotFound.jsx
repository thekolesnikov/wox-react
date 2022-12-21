import { useNavigate } from 'react-router-dom';
import { useLanguage } from '../../context/LanguageContext';

import styles from './NotFound.module.css';

function NotFound() {
    const language = useLanguage();

    const navigate = useNavigate();
    const goBack = () => navigate(-1);

    return (
        <div className={styles.notfound__container}>
            <h1 className={styles.notfound__title}>
                {language.language === 'EN' ? '' : 'Упс...'}
                <br />
                {language.language === 'EN'
                    ? 'Page not found..'
                    : 'Кажется вы ввели неверный адрес страницы...'}
            </h1>
            <button className={styles.notfound__button} onClick={goBack}>
                {language.language === 'EN' ? 'Go Back' : 'Назад'}
            </button>
        </div>
    );
}

export default NotFound;
