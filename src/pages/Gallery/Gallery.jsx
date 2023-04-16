import { withLayout } from '../../layout/Layout';
import styles from './Gallery.module.scss';

const Gallery = () => {
    
    return (
        <div className={styles.wrapper}>
            <div className={styles.breadcumb}>
                <a href='/' className={styles.notActive}>Главная</a> / <span className={styles.active}>Галерея</span>
            </div>
        </div>
    )
}

export default withLayout(Gallery);