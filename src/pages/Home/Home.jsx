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
                          <td>6–16</td>
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
                          <td>от 12</td>
                        </tr>
                        <tr>
                          <td>B4</td>
                          <td>Взрослые вокальные ансамбли</td>
                          <td>6–16</td>
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
                      </tbody>
                    </table>
                    Допускается участие коллективов в нескольких категориях (не
                    более трех).
                  </AccordionItemPanel>
                </AccordionItem>
                <AccordionItem>
                  <AccordionItemHeading>
                    <AccordionItemButton>Фестиваль</AccordionItemButton>
                  </AccordionItemHeading>
                  <AccordionItemPanel>
                    <p>
                    В рамках Дальневосточной хоровой олимпиады пройдут торжественные церемонии открытия и закрытия, а также фестивальные концерты участников на лучших площадках Владивостока.
                    </p>
                  </AccordionItemPanel>
                </AccordionItem>
                <AccordionItem>
                  <AccordionItemHeading>
                    <AccordionItemButton>Мастер-классы</AccordionItemButton>
                  </AccordionItemHeading>
                  <AccordionItemPanel>
                    <p>
                    В рамках Дальневосточной хоровой олимпиады пройдут торжественные церемонии открытия и закрытия, а также фестивальные концерты участников на лучших площадках Владивостока.
                    </p>
                  </AccordionItemPanel>
                </AccordionItem>
                <AccordionItem>
                  <AccordionItemHeading>
                    <AccordionItemButton>Курсы повышения квалификации </AccordionItemButton>
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
                  <a href="/Расписание.pdf" download={"Расписание.pdf"}>
                    <img alt="pdf" src={pdfLogo} width={80} height={100} />
                    ПОЛОЖЕНИЕ ОБ <br /> ОЛИМПИАДЕ
                  </a>
                </div>
                <div className={styles.documentsButton}>
                  <a href="/Расписание.pdf" download={"Расписание.pdf"}>
                    <img alt="pdf" src={pdfLogo} width={80} height={100} />
                    ФОРМА ЗАЯВКИ <br /> УЧАСТНИКА
                  </a>
                </div>

              </div>
              Заявки на участие во II Дальневосточной хоровой олимпиаде принимаются по электронному адресу fareastchoir@gmail.com до <b>10 сентября 2023 года.</b>
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
          {/* <div className={styles.jury} id="jury">
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
                bio="Председатель жюри Первой Дальневосточной хоровой олимпиады. <br/>
Александр Владиславович Соловьёв – профессор кафедры хорового дирижирования Московской государственной консерватории имени П.И. Чайковского и Московского государственного института музыки имени А.Г. Шнитке, и.о. ректора Академии хорового искусства имени В.С. Попова. Художественный руководитель Камерного хора Московской консерватории, Тульского государственного хора. <br/>
А.В. Соловьёв является официальным представителем России и членом Всемирного хорового совета World Choir Games и членом жюри международной ассоциации Interkultur. Председатель жюри Международного открытого фестиваля-конкурса молодых музыкантов «Vivat Musica!». Инициатор проведения Международного конкурса хоровых дирижёров имени И.А. Михайловского в Туле. Художественный руководитель фестивалей Московской консерватории.<br/>
В качестве хормейстера подготовил ряд программ для Г. Рождественского, Ю. Башмета, В. Гергиева, М. Плетнёва, В. Юровского, А. Лазарева, В. Полянского, А. Сладковского, А. Мустонена. Главный хормейстер проектов с участием сводных хоров под управлением Народного артиста СССР, профессора Ю. Башмета. Выступает в качестве дирижёра специальных проектов на сценах Государственного академического Большого театра России.<br/>
Автор научных статей и публикаций по вопросам современного хорового исполнительского искусства. В 2019 г. присвоено учёное звание профессор.
Ведёт активную просветительскую и общественную деятельность. Возглавляет Фонд развития творческих инициатив и Ассоциацию народных и хоровых коллективов Гильдии академического исполнительства Российского музыкального союза. Является членом президиума Московского музыкального общества, Международного союза музыкальных деятелей, членом Совета Союза композиторов России, членом Союза театральных деятелей РФ, Союза журналистов Москвы.
"
              />
              <ControlledRefModalJury
                trigger={
                  <div className={styles.juryItem}>
                    <img src={J2} alt="jury" />
                    <span className={styles.juryName}>
                      СЕРГЕЙ <br /> ЕКИМОВ
                    </span>
                  </div>
                }
                image={J2}
                bio="Сергей Викторович Екимов – декан факультета композиции и дирижирования Санкт-Петербургской государственной консерватории им. Н. А. Римского-Корсакова, профессор Российского государственного педагогического университета им. А.И. Герцена и Санкт-Петербургского государственного института культуры. Художественный руководитель Хора Санкт-Петербургской государственной консерватории, Концертного хора Санкт-Петербургского государственного института культуры и Женского хора Санкт-Петербургского музыкального училища им. Н.А. Римского-Корсакова. <br/>
Является художественным директор Международного фестиваля хорового искусства «Поющий мир» (Санкт-Петербург). Автор идеи и художественный директор Международного конкурса молодых хоровых дирижёров и дирижёров оркестров народных инструментов (Санкт-Петербург), Международного конкурса хоровых дирижёров им. профессора Валерия Успенского (Санкт-Петербург). Является членом и председателем жюри различных хоровых и композиторских фестивалей и конкурсов.<br/>
С.В. Екимов – автор хоровых и оркестровых сочинений, сочинений для инструментальных и вокальных ансамблей, автор духовной и светской музыки a cappella, вокальных циклов, фортепианных и хоровых пьес для детей, музыки к спектаклям, обработок для хора русских народных песен, популярных мелодий, романсов и эстрадных песен. Многие хоровые сочинения С. Екимова входят в репертуар ведущих хоровых коллективов России, записаны на CD, звучат по радио и ТВ, издаются в России и за рубежом.<br/>
Является членом Союза композиторов России, Союза концертных деятелей Российской Федерации, Межрегионального союза концертных деятелей и Ассоциации народных и хоровых коллективов Гильдии академического исполнительства Российского Музыкального Союза, Совета по культуре Санкт-Петербургской епархии, Совета директоров издательства «Композитор. Санкт- Петербург», член Правления Союза композиторов Санкт-Петербурга.
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
                bio="Михаил Исаакович Славкин – хормейстер, композитор, дирижёр, член Союза композиторов России, заслуженный работник культуры РФ, лауреат Международных конкурсов.<br/>
Художественный руководитель Молодёжного хора «Богородская капелла» (Москва). На протяжении 35 лет являлся художественным руководителем Детской хоровой студии Союза композиторов России «Преображение». Возглавлял Камерный хор «Останкино», Детский хоровой театр «Ключ», Детскую оперную студию Московского Государственного Академического Детского музыкального театра им. Н.И. Сац.<br/>
Является членом жюри международной ассоциации «Интеркультур», председателем жюри Международного конкурса хоров им. Яна Сибелиуса (Турку, Финляндия). Президент Фонда развития детского творчества «Преображение».<br/>
Как композитор работает в жанре детской песни и хоровой музыки, а также в области музыкального театра. Автор многих сборников песен и хоров для детей и юношества.
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
                      НАТАЛЬЯ <br /> БРЫЗЖИНА
                    </span>
                  </div>
                }
                image={J5}
                bio="Наталья Анатольевна Брызжина – преподаватель Хабаровского краевого колледжа искусств, председатель предметно-цикловой комиссии отделения сольного и хорового народного пения Хабаровского краевого колледжа искусств, член жюри и лауреат Всероссийских конкурсов. Организатор и бессменный руководитель ансамбля народной песни «Елань» (Хабаровск). В 2000 году на базе ансамбля «Елань» основана студия народного творчества, в 2007 – Хабаровская краевая общественная организация народного творчества «Елань», членами которой являются творческие коллективы детей и молодежи не равнодушные к вокальному искусству и народному творчеству.<br/>
Н.А. Брызжина является членом совета по межнациональным отношениям при губернаторе Хабаровского края, работала в качестве члена общественной палаты Хабаровского края 3 и 4 созывов. Общественная организация «Елань» под её руководством является представителем русской национальной культуры в рамках Ассамблеи народов Хабаровского края и ежегодно проводит тематические мероприятия и концерты, направленные на популяризацию и продвижение русской национальной культуры, сохранение и развитие взаимодействия культур народов проживающих на территории Хабаровского края.<br/>
Вместе со студентами и выпускниками Хабаровского краевого колледжа искусств проводит исследовательскую работу в области стилистики, обрядовой традиционности и жанровой региональной направленности русского песенного творчества.
"
              />
            </div>
          </div> */}
          <div className={styles.participants} id="jury">
            <div className={styles.paragraphTitle}>жюри</div>
            Состав жюри II Дальневосточной хоровой олимпиады будет объявлен позже.
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
                <VenueCard
                  img={V3}
                  place="Большой зал <br/> Приморской сцены Мариинского театра"
                />
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
