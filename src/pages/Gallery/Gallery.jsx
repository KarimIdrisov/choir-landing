import { withLayout } from '../../layout/Layout';
import styles from './Gallery.module.scss';

import A1 from "../../assets/images/IMG_1354.jpg";
import A2 from "../../assets/images/BA2A8620-min.jpg";
import A3 from "../../assets/images/IMG_2010.jpg";
import A4 from "../../assets/images/IMG_5258-min.jpg";
import A5 from "../../assets/images/BA2A0695-min.jpg";
import A6 from "../../assets/images/IMG_2087-min.jpg";
import A7 from "../../assets/images/IMG_5197-min.jpg";
import A8 from "../../assets/images/IMG_3448-min.jpg";
import { useNavigate } from 'react-router-dom';
import Icons from '../../common/icons';

const Gallery = () => {

    const navigate = useNavigate();
    const redirect = (path) => {
        navigate(path);
    };

    return (
        <div className={styles.wrapper}>
            <div className={styles.breadcumbWrapper}>
                <div className={styles.breadcumb}>
                    <a href='/' className={styles.notActive}>Главная</a> / <span className={styles.active}>Галерея</span>
                </div>
                <div className={styles.back} onClick={() => {
                    navigate(-1);
                }}>
                    <Icons type='back' /> Назад
                </div>
            </div>

            <div className={styles.title}>
                Галерея
            </div>


            <div className={styles.photosAlbums}>
                <div
                    className={styles.photoMain}
                    onClick={() => redirect("/photo-album-1")}
                >
                    <img src={A1} className={styles.backPhoto} />
                    <div className={styles.photoMainTitle}>
                        Церемония открытия Олимпиады
                    </div>
                </div>

                <div
                    className={styles.photoMain}
                    onClick={() => redirect("/photo-album-2")}
                >
                    <img src={A2} className={styles.backPhoto} />
                    <div className={styles.photoMainTitle}>
                        Конкурсные прослушивания 26.10
                    </div>
                </div>

                <div
                    className={styles.photoMain}
                    onClick={() => redirect("/photo-album-3")}
                >
                    <img src={A3} className={styles.backPhoto} />
                    <div className={styles.photoMainTitle}>
                        Концерт народных хоров в Филармонии 26.10
                    </div>
                </div>

                <div
                    className={styles.photoMain}
                    onClick={() => redirect("/photo-album-4")}
                >
                    <img src={A4} className={styles.backPhoto} />
                    <div className={styles.photoMainTitle}>
                        Концерт академических хоров в Мариинском театре 26.10
                    </div>
                </div>

                <div
                    className={styles.photoMain}
                    onClick={() => redirect("/photo-album-5")}
                >
                    <img src={A5} className={styles.backPhoto} />
                    <div className={styles.photoMainTitle}>
                        Конкурсные прослушивания 27.10
                    </div>
                </div>

                <div
                    className={styles.photoMain}
                    onClick={() => redirect("/photo-album-6")}
                >
                    <img src={A6} className={styles.backPhoto} />
                    <div className={styles.photoMainTitle}>
                        Дружеский концерт 27.10
                    </div>
                </div>

                <div
                    className={styles.photoMain}
                    onClick={() => redirect("/photo-album-7")}
                >
                    <img src={A7} className={styles.backPhoto} />
                    <div className={styles.photoMainTitle}>
                        Концерт духовной музыки 28.10
                    </div>
                </div>

                <div
                    className={styles.photoMain}
                    onClick={() => redirect("/photo-album-8")}
                >
                    <img src={A8} className={styles.backPhoto} />
                    <div className={styles.photoMainTitle}>
                        Церемония закрытия
                    </div>
                </div>
            </div>
        </div>
    )
}

export default withLayout(Gallery);