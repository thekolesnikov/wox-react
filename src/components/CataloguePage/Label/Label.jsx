import styles from './Label.module.css';

function Label({ text }) {
    return (
        <div className={styles.label}>
            <div className={styles.label__body}>
                <p className={styles.label__text}>{text}</p>
                {/* <p className={styles.label__text_mobile}>
                    premium quality upwear
                </p> */}
            </div>
        </div>
    );
}

export default Label;
