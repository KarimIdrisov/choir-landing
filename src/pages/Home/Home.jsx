import React, { useEffect, useRef, useState } from "react";
import { withLayout } from "../../layout/Layout";
import { useAnimation } from "framer-motion";

import styles from "./Home.module.scss";
import {
  Accordion,
  AccordionItem,
  AccordionItemButton,
  AccordionItemHeading,
  AccordionItemPanel,
} from "react-accessible-accordion";
import pdfLogo from "../../assets/icons/pdf.svg";
import prevIcon from "../../assets/icons/right.svg";
import nextIcon from "../../assets/icons/left.svg";
import { VenueCard } from "../../components/VenueCard/VenueCard";
import Slider from "react-slick";
import { useWindowSize } from "../../common/useWindowSize";

import J1 from "../../assets/images/Соловьев.jpg";
import J2 from "../../assets/images/Екимов.jpg";
import J3 from "../../assets/images/Славкин.jpg";
import J4 from "../../assets/images/Синенко.jpg";
import J5 from "../../assets/images/Брызжина.jpg";
import J6 from "../../assets/images/Чао.jpg";
import { ControlledRefModalJury } from "../../components/Modal/JuryModal";

import V1 from "../../assets/images/Синий зал ДВФУ.jpg";
import V2 from "../../assets/images/Средний зал.jpg";
import V3 from "../../assets/images/Мариинка.jpg";
import V4 from "../../assets/images/Приморская краевая филармония.jpg";
import V5 from "../../assets/images/Евангелическо-Лютеранская церковь.jpg";
import V6 from "../../assets/images/Собор.jpg";

import A1 from "../../assets/images/IMG_1354.jpg";
import A2 from "../../assets/images/BA2A8620-min.jpg";
import A3 from "../../assets/images/IMG_2010.jpg";
import A4 from "../../assets/images/IMG_5258-min.jpg";
import A5 from "../../assets/images/BA2A0695-min.jpg";
import A6 from "../../assets/images/IMG_2087-min.jpg";
import A7 from "../../assets/images/IMG_5197-min.jpg";
import A8 from "../../assets/images/IMG_3448-min.jpg";

import S1 from '../../assets/images/Slide1.jpg';
import S2 from '../../assets/images/S2.jpg';
import S3 from '../../assets/images/S3.jpg';
import { useNavigate } from "react-router-dom";
import ReactPlayer from "react-player/youtube";

function FadeInSection(props) {
  const [isVisible, setVisible] = React.useState(false);
  const domRef = React.useRef();
  React.useEffect(() => {
    let observerRefValue = null;
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setVisible(entry.isIntersecting);
        }
      });
    });
    observer.observe(domRef.current);
    observerRefValue = domRef.current;
    return () => {
      if (observerRefValue) observer.unobserve(observerRefValue);
    };
  }, []);
  return (
    <div
      className={`fade-in-section ${isVisible ? "is-visible" : ""}`}
      ref={domRef}
    >
      {props.children}
    </div>
  );
}

// TODO: connect i18n
const Home = () => {

  const width = useWindowSize().width;
  const [settingsNews, setSettingsNews] = useState({
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    swipe: true,
    draggable: true,
    slidesToScroll: 1,
  });

  const [settingsVideos, setSettingsVideos] = useState({
    dots: true,
    infinite: true,
    arrows: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    swipe: true,
    draggable: true,
  });

  const [settingsIntro, setSettingsIntro] = useState({
    dots: true,
    infinite: true,
    arrows: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    swipe: true,
    draggable: true,
    autoplay: true,
    autoplaySpeed: 4000,
  });


  const contentRef = useRef(null);
  const controls = useAnimation();
  const [scrollY, setScrollY] = useState(0);
  const handleScroll = () => {
    if (contentRef.current) {
      const currentScrollY = contentRef.current.scrollTop
      setScrollY(currentScrollY);
    }
  };

  useEffect(() => {
    if (contentRef.current) {
      controls.start({ opacity: scrollY / contentRef.current.scrollHeight });
    }
  }, [scrollY, controls]);

  const scrollToTop = () => {
    if (contentRef.current) {
      contentRef.current.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    }
  };

  useEffect(() => {
    if (width < 1300 && width > 980) {
      setSettingsNews({
        ...settingsNews,
        slidesToShow: 2,
      });
      setSettingsVideos({
        ...settingsVideos,
        slidesToShow: 2,
      });
      return;
    }

    if (width < 980) {
      setSettingsNews({
        ...settingsNews,
        slidesToShow: 1,
      });
      setSettingsVideos({
        ...settingsVideos,
        slidesToShow: 1,
      });
      return;
    }

    setSettingsNews({
      ...settingsNews,
      slidesToShow: 3,
    });
    setSettingsVideos({
      ...settingsVideos,
      slidesToShow: 3,
    });
  }, [width]);

  const navigate = useNavigate();
  const redirect = (path) => {
    navigate(path);
  };


  const nextSlide = () => {
    const container = document.querySelector(`.${styles.photosAlbums}`);
    let scrollAmount = 0;
    const slideTimer = setInterval(function () {
      container.scrollLeft += 20;
      scrollAmount += 10;
      if (scrollAmount >= 320) {
        window.clearInterval(slideTimer);
      }
    }, 25);
  };

  const prevSlide = () => {
    const container = document.querySelector(`.${styles.photosAlbums}`);
    let scrollAmount = 0;
    const slideTimer = setInterval(function () {
      container.scrollLeft -= 20;
      scrollAmount += 10;
      if (scrollAmount >= 320) {
        window.clearInterval(slideTimer);
      }
    }, 25);
  }

  return (
    <div
      style={{ position: 'relative' }}
      ref={contentRef}
      onScroll={handleScroll}
    >
      <div className={styles.introSection} id={"intro"}>
        <div className={styles.intro}>
          <Slider {...settingsIntro}>
            <div className={styles.slideImage}>
              <img
                src={S1}
                width={'100%'}
                height={'100%'}

              />
            </div>
            <div className={styles.slideImage}>
              <img
                src={S2}
                width={'100%'}
                height={'100%'}

              />
            </div>
            <div className={styles.slideImage}>
              <img
                src={S3}
                width={'100%'}
                height={'100%'}

              />
            </div>
          </Slider>
          <div className={styles.introText}>
            <span className={styles.olympTitle}>
              II Дальневосточная <br /> хоровая олимпиада
            </span>
            <span className={styles.olympDate}>
              24–28 октября 2023 <br /> Владивосток
            </span>
          </div>
        </div>
      </div>
      <FadeInSection>
        <div className={styles.wrapper}>
          <div className={styles.about}>
            <div className={styles.title}>
              <span className={styles.aboutTitle}>
                хоровая олимпиада
              </span>
              <span className={styles.aboutTitleBottom}>
                на Дальнем Востоке
              </span>
            </div>

            <div className={styles.aboutDescription}>
              <div className={styles.left}>
                С 24 по 28 октября 2023 года во Владивостоке пройдет
                II Дальневосточная хоровая олимпиада. Вторая хоровая олимпиада –
                это всероссийский фестиваль и конкурс хорового искусства с международным участием.
                Олимпиада включает в себя конкурсные прослушивания в 12 номинациях, фестивальные
                концерты, мастер-классы от членов жюри мирового уровня, торжественные церемонии
                открытия и закрытия, а также незабываемый заряд вдохновения.
              </div>
              <div className={styles.right}>
                Первая хоровая олимпиада собрала более
                2000 участников и стала настоящим праздником хоровой музыки.
                Вместе с вами мы можем сделать Олимпиаду доброй традицией и
                внести небольшой, но значимый вклад в поддержку и развитие
                хорового искусства!
              </div>
            </div>

            <div className={styles.video}>
              <ReactPlayer url='https://www.youtube.com/watch?v=YtvkS0BfCgA&t=9s' width={'100%'} height={460} />
            </div>
          </div>
        </div>
      </FadeInSection>
      <FadeInSection>
        <div className={styles.wrapper}>
          <div className={styles.rules} id={"rules"}>
            <span className={styles.rulesTitle}>ПРОГРАММА</span>
            <div className={styles.rulesContent}>
              <div className={styles.downloadProgram}>
                <a href="/Расписание.pdf" download={"Расписание.pdf"}>
                  <img alt="pdf" src={pdfLogo} width={80} height={100} />
                  СКАЧАТЬ <br /> ПРОГРАММУ
                </a>
              </div>
              <Accordion allowZeroExpanded>
                <AccordionItem>
                  <AccordionItemHeading>
                    <AccordionItemButton>КОНКУРС</AccordionItemButton>
                  </AccordionItemHeading>
                  <AccordionItemPanel>
                    <table border="black">
                      <thead className="tableHead">
                        <th>Обозначение</th>
                        <th>
                          Название <br /> категории
                        </th>
                        <th>
                          Возраст <br />
                          участников
                        </th>
                        <th>
                          Количество <br />
                          участников
                        </th>
                      </thead>
                      <tbody>
                        <tr>
                          <td>А1</td>
                          <td>Младшие детские хоры</td>
                          <td>7–11 лет</td>
                          <td rowSpan={3}>от 16</td>
                        </tr>
                        <tr>
                          <td>А2</td>
                          <td>Старшие детские хоры</td>
                          <td>11-17 лет</td>
                        </tr>
                        <tr>
                          <td>А3</td>
                          <td>Хоры мальчиков и юношей</td>
                          <td>7–17 лет</td>
                        </tr>
                        <tr>
                          <td>А4</td>
                          <td>Детские вокальные ансамбли</td>
                          <td>7–17 лет</td>
                          <td>6–12</td>
                        </tr>
                        <tr>
                          <td>B1</td>
                          <td>Однородные хоры</td>
                          <td rowSpan={4}>без возрастных ограничений</td>
                          <td rowSpan={2}>от 16</td>
                        </tr>
                        <tr>
                          <td>B2</td>
                          <td>Смешанные хоры</td>
                        </tr>
                        <tr>
                          <td>B3</td>
                          <td>Камерные хоры</td>
                          <td>16-28</td>
                        </tr>
                        <tr>
                          <td>B4</td>
                          <td>Взрослые вокальные ансамбли</td>
                          <td>6–12</td>
                        </tr>
                        <tr>
                          <td>С1</td>
                          <td>Духовная музыка</td>
                          <td rowSpan={2}>без возрастных ограничений</td>
                          <td rowSpan={2}>от 6</td>
                        </tr>
                        <tr>
                          <td>С2</td>
                          <td>Современная музыка</td>
                        </tr>
                        <tr>
                          <td>С3</td>
                          <td>Народная музыка: детские хоры и ансамбли</td>
                          <td>7-17 лет</td>
                          <td>от 6</td>
                        </tr>
                        <tr>
                          <td>С4</td>
                          <td>Народная музыка: взрослые хоры и ансамбли</td>
                          <td>от 17 лет</td>
                          <td>от 6</td>
                        </tr>
                      </tbody>
                    </table>
                    Допускается участие коллективов в нескольких категориях (не
                    более трех).
                  </AccordionItemPanel>
                </AccordionItem>
                <AccordionItem>
                  <AccordionItemHeading>
                    <AccordionItemButton>ФЕСТИВАЛЬ</AccordionItemButton>
                  </AccordionItemHeading>
                  <AccordionItemPanel>
                    <p>
                    В рамках Дальневосточной хоровой олимпиады пройдут торжественные церемонии открытия и закрытия, а также фестивальные концерты участников на лучших площадках Владивостока.
                    </p>
                  </AccordionItemPanel>
                </AccordionItem>
                <AccordionItem>
                  <AccordionItemHeading>
                    <AccordionItemButton>МАСТЕР-КЛАССЫ</AccordionItemButton>
                  </AccordionItemHeading>
                  <AccordionItemPanel>
                    <p>
                    В рамках Дальневосточной хоровой олимпиады пройдут торжественные церемонии открытия и закрытия, а также фестивальные концерты участников на лучших площадках Владивостока.
                    </p>
                  </AccordionItemPanel>
                </AccordionItem>
                <AccordionItem>
                  <AccordionItemHeading>
                    <AccordionItemButton>КУРСЫ ПОВЫШЕНИЯ КВАЛИФИКАЦИИ </AccordionItemButton>
                  </AccordionItemHeading>
                  <AccordionItemPanel>
                    <p>
                    Допускается участие в мероприятиях Олимпиады всех желающих в качестве слушателей с получением удостоверения о прохождении курсов повышения квалификации в объеме 36 часов. Участники курсов получат возможность посещения всех конкурсных прослушиваний, фестивальных концертов, мастер-классов, церемоний открытия и закрытия Олимпиады, круглого стола для руководителей.
                    </p>
                  </AccordionItemPanel>
                </AccordionItem>
              </Accordion>
            </div>
          </div>
        </div>
      </FadeInSection>
      <FadeInSection>
        <div className={styles.wrapper}>
          <div className={styles.documents} id={"documents"}>
            <span className={styles.paragraphTitle}>документы</span>
            <div className={styles.documentsContent}>
              <div className={styles.documentsButtons}>
                <div className={styles.documentsButton}>
                  <a href="/ПОЛОЖЕНИЕ 2023.pdf" download={"ПОЛОЖЕНИЕ 2023.pdf"}>
                    <img alt="pdf" src={pdfLogo} width={80} height={100} />
                    ПОЛОЖЕНИЕ ОБ <br /> ОЛИМПИАДЕ
                  </a>
                </div>
                <div className={styles.documentsButton}>
                  <a href="/РЕГЛАМЕНТ УЧАСТИЯ 2023.pdf" download={"РЕГЛАМЕНТ УЧАСТИЯ 2023.pdf"}>
                    <img alt="pdf" src={pdfLogo} width={80} height={100} />
                    Регламент <br /> участия и пребывания
                  </a>
                </div>
                <div className={styles.documentsButton}>
                  <a href="/ФОРМА ЗАЯВКИ 2023.pdf" download={"ФОРМА ЗАЯВКИ 2023.pdf"}>
                    <img alt="pdf" src={pdfLogo} width={80} height={100} />
                    ФОРМА ЗАЯВКИ <br /> УЧАСТНИКА
                  </a>
                </div>

              </div>
              Заявки на участие во II Дальневосточной хоровой олимпиаде принимаются по электронному адресу fareastchoir@gmail.com до <br/><b>10 сентября 2023 года.</b>
            </div>
          </div>
        </div>

      </FadeInSection>
      <FadeInSection>
        <div className={styles.wrapper}>
          <div className={styles.participants} id="participants">
            <div className={styles.paragraphTitle}>участники</div>
            Список участников будет опубликован после окончания приема заявок.
          </div>
        </div>

      </FadeInSection>
      <FadeInSection>
        <div className={styles.wrapper}>
          <div className={styles.jury} id="jury">
            <div className={styles.paragraphTitle}>ЖЮРИ</div>

            <div className={styles.juryList}>
              <ControlledRefModalJury
                trigger={
                  <div className={styles.juryItem}>
                    <img src={J1} width={265} height={345} alt="jury" />
                    <span className={styles.juryName}>
                      АЛЕКСАНДР <br /> СОЛОВЬЕВ
                    </span>
                  </div>
                }
                image={J1}
                bio="Александр Владиславович Соловьёв (г.Москва, Россия)
                Председатель жюри
                
                Художественный руководитель Камерного хора Московской консерватории, Тульского государственного хора, руководитель Ассоциации народных и хоровых коллективов Российского музыкального союза,
                и.о.ректора Академии хорового искусства имени В.С.Попова, лауреат Премий Министерства обороны РФ и Правительства Москвы, профессор.
                
                В 2002 окончил с отличием дирижёрский факультет Московской государственной консерватории имени П. И. Чайковского (класс проф. С.С. Калинина), в 2004 – аспирантуру там же (руководитель – народный артист РФ, профессор Б.Г. Тевлин), участвовал в мастер-классах со многими крупными хоровыми и симфоническими дирижерами, среди них К. Аренг (Эстония), Э. Эриксон (Швеция).
                В 2012 году, после безвременной кончины основателя коллектива, профессора Б.Г. Тевлина, возглавил в качестве художественного руководителя и главного дирижёра Камерный хор Московской консерватории. В качестве хормейстера подготовил ряд программ для Г. Рождественского, Ю. Башмета, В. Гергиева, М. Плетнёва, В. Юровского, А. Лазарева, В. Полянского, А. Сладковского, А. Мустонена. В 2019 – Камерный хор п/у А. Соловьёва принял участие в торжественном концерте в Осаке, посвященном закрытию перекрёcтного года России и Японии в присутствии Президента РФ В.В. Путина в рамках саммита G20.
                Александр Соловьёв выступает в качестве дирижёра специальных проектов на сценах ГАБТа России; за большой вклад в развитие культуры награжден Почетной грамотой Министерства культуры РФ; в 2019 присвоено учёное звание – профессор.
                Член Учёных советов, профессор кафедры хорового дирижирования МГК имени П.И. Чайковского и МГИМ имени А.Г. Шнитке, с 2016 – руководитель Тульского государственного хора.
                Официальный представитель России, член Всемирного хорового совета «World Choir Games» и жюри международной ассоциации «Интеркультур». Председатель жюри Международного открытого фестиваля-конкурса молодых музыкантов «Vivat Musica!», инициатор проведения Международного конкурса хоровых дирижёров имени И.А. Михайловского в Туле.
                Удостоен гранта Президента Российской Федерации в области культуры и искусства; звания лауреата Премии Правительства Москвы, Премии Министерства обороны РФ.
                А.В. Соловьёв – художественный руководитель фестивалей Московской консерватории: «Международный Осенний хоровой имени профессора Б.Г. Тевлина», «Дню Победы посвящается…», «Запечатленный ангел» (в честь 85-летию Родиона Щедрина), «Рождённые Россией».
                Дискография Маэстро Соловьёва: «Антология современной хоровой музыки композиторов России», «Моцарт. Реквием» на фирме «Мелодия»; «А. Шнитке. История Доктора Фауста. Реквием», «Формула успеха», «Многая лета», «Лики Щедрина», «Дорогами Высоцкого», «Партитура будущего» на лейбле «Moscow Conservatory Records» и др.
                Автор научных статей и публикаций по вопросам современного хорового исполнительского искусства.
                В 2019 окончил курсы повышения квалификации по направлению «Эффективный Топ-менеджер» в Высшей школе корпоративного управления РАНХиГС.
                С февраля 2020 года главный хормейстер проектов с участием сводных хоров под управлением Народного артиста СССР, профессора Ю.А. Башмета.
                С ноября 2020 – исполняющий обязанности ректора, председатель Учёного совета Академии хорового искусства имени В.С. Попова; член совета по развитию художественного образования Министерства культуры РФ.
                Ведёт активную просветительскую и общественную деятельность, возглавляя Фонд развития творческих инициатив, Ассоциацию народных и хоровых коллективов Гильдии академического исполнительства Российского музыкального союза, а также являясь членом президиума Московского музыкального общества, Международного союза музыкальных деятелей, членом Совета Союза композиторов России, членом Союза театральных деятелей РФ, Союза журналистов Москвы. 
                "
              />
              <ControlledRefModalJury
                trigger={
                  <div className={styles.juryItem}>
                    <img src={J2} alt="jury" />
                    <span className={styles.juryName}>
                      СЕМЁН <br /> КЛИМАНОВ
                    </span>
                  </div>
                }
                image={J2}
                bio="Семён Михайлович Климанов (Минск, Беларусь)
                С 2022 года заведующий кафедрой хорового дирижирования, выпускник Белорусской государственной академии музыки (класс народного артиста СССР, профессора В.В.Ровдо).
                Постоянно принимает участие в работе жюри республиканских и международных творческих конкурсов, смотров, отборов, проводимых как в Республике Беларусь, так и за ее пределами. Проводит дирижерские мастер-классы, тренинги и открытые лекции. Является сопредседателем Ассоциации руководителей хоров мальчиков и юношей Белорусского союза музыкальных деятелей, членом оргкомитета республиканских конкурсов.
                В качестве художественного руководителя Хора мальчиков и юношей имени Игоря Андреевича Журавленко (с 2020 г.) осуществляет разнообразную концертную деятельность, взаимодействует с видными музыкантами и хоровыми коллективами Беларуси, России и других стран. Хор под руководством С.Климанова является победителем национальных и международных конкурсов, приглашается к участию в ярких творческих фестивалях.
                Ведет активную научную деятельность: является автором ряда научных публикаций, участником международных научно-практических конференций.
                "
              />

              <ControlledRefModalJury
                trigger={
                  <div className={styles.juryItem}>
                    <img src={J3} alt="jury" />
                    <span className={styles.juryName}>
                      МИХАИЛ <br /> СЛАВКИН
                    </span>
                  </div>
                }
                image={J3}
                bio="Михаил Исаакович Славкин (г.Москва, Россия)

                Хормейстер, композитор, дирижёр, член Союза композиторов России, заслуженный работник культуры РФ, лауреат Международных конкурсов, член жюри Международного общества Интеркультур, председатель жюри Международного конкурса хоров им. Яна Сибелиуса в Турку, Финляндия, Президент Фонда развития детского творчества «Преображение», художественный руководитель Молодёжного хора «Богородская капелла».
                На протяжении 35 лет являлся художественным руководителем Детской хоровой студии Союза композиторов России «Преображение». Возглавлял различные коллективы – Камерный хор «Останкино», Детский хоровой театр «Ключ», Детскую оперную студию Московского Государственного Академического Детского музыкального театра им. Н.И.Сац. Как композитор работает в жанре детской песни и хоровой музыки, а также в области музыкального театра. Автор многих сборников песен и хоров для детей и юношества. 
                "
              />
              <ControlledRefModalJury
                trigger={
                  <div className={styles.juryItem}>
                    <img src={J4} alt="jury" />
                    <span className={styles.juryName}>
                      ВЛАДИМИР <br /> СИНЕНКО
                    </span>
                  </div>
                }
                image={J4}
                bio="
Владимир Иванович Синенко – заслуженный работник культуры РФ, преподаватель Приморского краевого колледжа искусств (Владивосток), доцент кафедры вокального искусства и хорового дирижирования Дальневосточного государственного института искусств (Владивосток). <br/>
В.И. Синенко является автором 10 сборников песен и хоров для детей и юношества, сборника романсов, а также сборника для ансамблей скрипачей и фортепиано. На протяжении 20 лет являлся музыкальным руководителем Драматического театра Тихоокеанского флота. Написал музыку и оформил более 30 спектаклей.<br/>
Является членом Союза композиторов России, Союза театральных деятелей РФ, членом Российского музыкального союза. Заслуженный деятель музыкального искусства Приморского края. Награждён Знаком отличия «За заслуги перед Владивостоком» 2 степени.
"
              />
              <ControlledRefModalJury
                trigger={
                  <div className={styles.juryItem}>
                    <img src={J5} alt="jury" />
                    <span className={styles.juryName}>
                      МИЛЯУША <br /> ТАМИНДАРОВА
                    </span>
                  </div>
                }
                image={J5}
                bio="Миляуша Амировна Таминдарова (г.Казань, Россия)

                Народная артистка Республики Татарстан, художественный руководитель Государственного камерного хора Республики Татарстан.
                
                Миляуша Таминдарова - основатель, бессменный руководитель и идейный вдохновитель Государственного камерного хора Республики Татарстан по праву считается одним из ярчайших деятелей в сфере хорового искусства не только в республике, но и в России в целом. Талантливая певица, обладающая прекрасным меццо-сопрано, яркий самобытный дирижёр, она во всех аспектах своей деятельности проявила себя как инициативная творческая личность с индивидуальным оригинальным слышанием исполняемых произведений.
                В течение шести лет Миляуша Таминдарова была хормейстером хора студентов Казанской консерватории под руководством Семёна Абрамовича Казачкова. С 1994 года руководила хором и заведовала отделением хорового дирижирования в Казанском музыкальном училище им. Аухадеева. Более двадцати лет преподавала в Казанской консерватории на кафедре хорового дирижирования. Также она возглавляла хор оперной студии при консерватории. Помимо этого в настоящее время Миляуша Таминдарова возглавляет республиканское отделение Всероссийского хорового общества.
                За годы руководства Миляуши Таминдаровой Государственным камерным хором Татарстана – коллектив стал постоянным участником всех наиболее значимых республиканских культурных мероприятий, включая церемонии открытия и закрытия XXVII Всемирной летней Универсиады 2013 года, культурную программу Чемпионата мира по футболу FIFA 2018, чемпионат мира по профессиональному мастерству международной некоммерческой организации WorldSkills и других масштабных спортивных и культурных мероприятий республики. Хор ежегодно принимает участие в церемонии открытия Казанского международного фестиваля мусульманского кино, является идейным вдохновителем и участником Международного фестиваля «Музыка веры», принимает участие в торжественном параде в честь празднования Дня Победы 9 мая, является одним из организаторов ежегодного праздника Дня славянской письменности и культуры в Казани, пропагандирует хоровое пение на таких популярных и массовых городских пространствах.
                Многочисленные неоспоримые достижения и заслуги Миляуши Таминдаровой неоднократно были отмечены на самом высоком уровне. В 2007 году ей присвоено звание «Заслуженный деятель искусств Республики Татарстан», в 2011 году «Профессионал года», в 2021 году присвоено почётное звание «Народный артист Республики Татарстан»."
              />
              <ControlledRefModalJury
                trigger={
                  <div className={styles.juryItem}>
                    <img src={J6} alt="jury" />
                    <span className={styles.juryName}>
                      ВАН <br /> ЧАО
                    </span>
                  </div>
                }
                image={J6}
                bio="Ван Чао (г.Шанхай, Китай)
                Постоянный генеральный секретарь Хорового комитета китайских университетов, художественный руководитель и член редакционно-творческого комитета Китайского международного хорового фестиваля, исполнительный директор Китайской конференции хорового дирижирования, директор Китайского детского хорового фестиваля, консультант Китайской ассоциации судебных работников литературы и искусства , художественный руководитель хора Шанхайского педагогического университета, профессор педагогического колледжа Цзыбо.
                
                Член 3-го Международного конкурса хорового дирижирования имени Б.Г.Тевлина, член 15-го и 16-го Китайских международных хоровых фестивалей, главный режиссер 15-го Китайского хорового фестиваля, директор Китайско-Российского международного хорового семинара Российско-Китайского фестиваля культуры, член экспертного комитета Венского международного молодежного музыкального фестиваля, директор Форума хорового саммита Китайских университетов.
                
                Дирижерские и творческие работы Ван Чао получили 29 наград международных и 34 награды китайских конкурсов. Репрезентативным работами стали произведения для солистов, хора, а также симфония «Гэн Цзишан», симфоническая поэма «Свет», фортепианная сюита «Сцена детства» и многие другие. Подготовленный им «Сборник выдающихся хоровых произведений для колледжей и университетов» стал ведущим учебником в Китае, несколько альбомов были изданы в китайских звукозаписывающих компаниях."
              />
            </div>
          </div>
        </div>
      </FadeInSection>
      <div className={styles.bgWrapper}>
        <FadeInSection>
          <div className={styles.bgWrapper}>
            <div className={styles.venues} id="venues">
              <div className={styles.venuesTitle}>
                <div className={styles.title}>
                  места <span className={styles.blue}>проведения</span> <br /> олимпиады
                </div>
                <div className={styles.places}>
                  <VenueCard img={V1} place='Концертный зал "Синий" ДВФУ' />
                  <VenueCard img={V2} place="Конференц-зал «Средний» ДВФУ" />
                </div>
              </div>

              <div className={styles.venuesList}>

                <div className={styles.places}>
                  <VenueCard img={V1} place='Концертный зал "Синий" ДВФУ' />
                  <VenueCard img={V2} place="Конференц-зал «Средний» ДВФУ" />
                </div>
                <VenueCard img={V4} place="Приморская краевая филармония" />
                <VenueCard
                  img={V5}
                  place="Евангелическо-Лютеранская <br/> церковь св. Павла"
                />
                <VenueCard
                  img={V6}
                  place="Католический собор <br/> Пресвятой Богородицы"
                />
              </div>
            </div>
          </div>
        </FadeInSection>
        <FadeInSection>
          <div className={styles.bgWrapper}>
            <div className={styles.photos} id="gallery">
              <div className={styles.galleryTitle}>
                <div className={styles.paragraphTitle}>Галерея</div>
                <div className={styles.galleryButtons}>
                  <button className={styles.prev}>
                    <img alt="pdf" id="prev" src={prevIcon} width={36} height={36} onClick={prevSlide} />
                  </button>
                  <button className={styles.next}>
                    <img alt="pdf" id='next' src={nextIcon} width={36} height={36} onClick={nextSlide} />
                  </button>
                </div>
              </div>

              <div className={styles.photosAlbums}>
                <div
                  className={styles.photoMain}
                  onClick={() => redirect("/gallery-album/Церемония открытия Олимпиады")}
                >
                  <img src={A1} className={styles.backPhoto} />
                  <div className={styles.photoMainTitle}>
                    Церемония открытия Олимпиады
                  </div>
                </div>

                <div
                  className={styles.photoMain}
                  onClick={() => redirect("/gallery-album/Конкурсные прослушивания 26.10")}
                >
                  <img src={A2} className={styles.backPhoto} />
                  <div className={styles.photoMainTitle}>
                    Конкурсные прослушивания 26.10
                  </div>
                </div>

                <div
                  className={styles.photoMain}
                  onClick={() => redirect("/gallery-album/Концерт народных хоров в Филармонии 26.10")}
                >
                  <img src={A3} className={styles.backPhoto} />
                  <div className={styles.photoMainTitle}>
                    Концерт народных хоров в Филармонии 26.10
                  </div>
                </div>

                <div
                  className={styles.photoMain}
                  onClick={() => redirect("/gallery-album/Концерт академических хоров в Мариинском театре 26.10")}
                >
                  <img src={A4} className={styles.backPhoto} />
                  <div className={styles.photoMainTitle}>
                    Концерт академических хоров в Мариинском театре 26.10
                  </div>
                </div>

                <div
                  className={styles.photoMain}
                  onClick={() => redirect("/gallery-album/Конкурсные прослушивания 27.10")}
                >
                  <img src={A5} className={styles.backPhoto} />
                  <div className={styles.photoMainTitle}>
                    Конкурсные прослушивания 27.10
                  </div>
                </div>

                <div
                  className={styles.photoMain}
                  onClick={() => redirect("/gallery-album/Дружеский концерт 27.10")}
                >
                  <img src={A6} className={styles.backPhoto} />
                  <div className={styles.photoMainTitle}>
                    Дружеский концерт 27.10
                  </div>
                </div>

                <div
                  className={styles.photoMain}
                  onClick={() => redirect("/gallery-album/Концерт духовной музыки 28.10")}
                >
                  <img src={A7} className={styles.backPhoto} />
                  <div className={styles.photoMainTitle}>
                    Концерт духовной музыки 28.10
                  </div>
                </div>

                <div
                  className={styles.photoMain}
                  onClick={() => redirect("/gallery-album/Церемония закрытия")}
                >
                  <img src={A8} className={styles.backPhoto} />
                  <div className={styles.photoMainTitle}>
                    Церемония закрытия
                  </div>
                </div>
              </div>


              <div className={styles.center}>
                <a className={styles.primaryButton} href="/gallery">
                  перейти в галерею
                </a>
              </div>
            </div>
          </div>
        </FadeInSection>
        <FadeInSection>
          <div id="results" className={styles.resultsWrapper}>
            <div className={styles.resultsTitle}><span className={styles.blue}>СКАЧАТЬ</span> РЕЗУЛЬТАТЫ</div>

            <div className={styles.results}>
              <div className={styles.downloadResult}>
                <a href="/Результаты2.pdf" download={"Результаты.pdf"}>
                  2022
                </a>
              </div>
            </div>
          </div>
        </FadeInSection>
      </div>
    </div>
  );
};

export default withLayout(Home);
