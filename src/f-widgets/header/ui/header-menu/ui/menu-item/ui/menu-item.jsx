import styles from './menu-item.module.scss';

export default function MenuItem({func, text, Icon}) {
    return (
        <button className={styles.button} onClick={func}>
            <Icon/>
            <span>{text}</span>
        </button>
    );
}

