import React, { useEffect, useState } from "react";
import { withLayout } from "../../layout/Layout";

import styles from "./Home.module.scss";
import Timer from "../../components/Timer/Timer";
import {
  Accordion,
  AccordionItem,
  AccordionItemHeading,
  AccordionItemButton,
  AccordionItemPanel,
} from "react-accessible-accordion";
import { MapRU } from "../../components/Map/MapRu";
import choirLogo from "../../assets/images/choirLogo.png";
import vkLogo from "../../assets/icons/vk-logo.svg";
import youtubeLogo from "../../assets/icons/youtube.svg";
import pdfLogo from "../../assets/icons/pdf.svg";
import { VenueCard } from "../../components/VenueCard/VenueCard";
import { FreeMode, Pagination, Navigation } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

// TODO: connect i18n
const Home = () => {
  const [time, setTime] = useState(+new Date(2022, 10, 25) - +new Date());

  useEffect(() => {
    const interval = setInterval(() => {
      setTime(+new Date(2022, 10, 25) - +new Date());
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div>
      <div className={styles.introSection}>
        <div className={styles.intro}>
          <img
            className={styles.choirLogo}
            src={choirLogo}
            alt="хоровая олимпиады"
            width={253}
            height={105}
          />
          <span className={styles.introTitle}>
            ДАЛЬНЕВОСТОЧНАЯ <br />
            ХОРОВАЯ ОЛИМПИАДА
          </span>
          <span className={styles.date}>25 - 29 октября | г. Владивосток</span>

          <img
            className={styles.vk}
            src={vkLogo}
            alt="Группа олимпиады во вконтакте"
            width={84}
            height={84}
          />
          <img
            className={styles.youtube}
            src={youtubeLogo}
            alt="Канал олимпиады на ютубе"
            width={84}
            height={84}
          />
        </div>
        <div className={styles.timer}>
          <div className={styles.text}>
            ДО НАЧАЛА <br />
            ОСТАЛОСЬ
          </div>
          <div className={styles.time}>
            <Timer time={time} />
          </div>
        </div>
      </div>
      <div className={styles.about}>
        <span className={styles.aboutTitle}>
          ПЕРВАЯ ХОРОВАЯ ОЛИМПИАДА НА ДАЛЬНЕМ ВОСТОКЕ
        </span>

        <span className={styles.aboutDescription}>
          Первая Дальневосточная хоровая олимпиада обещает стать <br />
          крупнейшим событием в хоровой жизни Дальнего Востока. <br />
          Мы вместе можем принять участие в формировании нового <br />
          фестиваля, найти новых друзей среди участников хоров со всей <br />
          страны, сделать хоровую музыку ближе и понятнее для зрителей, <br />
          получить массу, ярких впечатлений и открыть для себя что-то новое!
        </span>
      </div>
      <div className={styles.rules}>
        <span className={styles.rulesTitle}>УСЛОВИЯ УЧАСТИЯ</span>

        <Accordion allowZeroExpanded>
          <AccordionItem>
            <AccordionItemHeading>
              <AccordionItemButton>КОНКУРС</AccordionItemButton>
            </AccordionItemHeading>
            <AccordionItemPanel>
              <p>
                Exercitation in fugiat est ut ad ea cupidatat ut in cupidatat
                occaecat ut occaecat consequat est minim minim esse tempor
                laborum consequat esse adipisicing eu reprehenderit enim.
              </p>
            </AccordionItemPanel>
          </AccordionItem>
          <AccordionItem>
            <AccordionItemHeading>
              <AccordionItemButton>ФЕСТИВАЛЬ</AccordionItemButton>
            </AccordionItemHeading>
            <AccordionItemPanel>
              <p>
                In ad velit in ex nostrud dolore cupidatat consectetur ea in ut
                nostrud velit in irure cillum tempor laboris sed adipisicing eu
                esse duis nulla non.
              </p>
            </AccordionItemPanel>
          </AccordionItem>
          <AccordionItem>
            <AccordionItemHeading>
              <AccordionItemButton>МАСТЕР-КЛАССЫ</AccordionItemButton>
            </AccordionItemHeading>
            <AccordionItemPanel>
              <p>
                In ad velit in ex nostrud dolore cupidatat consectetur ea in ut
                nostrud velit in irure cillum tempor laboris sed adipisicing eu
                esse duis nulla non.
              </p>
            </AccordionItemPanel>
          </AccordionItem>
        </Accordion>
      </div>
      <div className={styles.program}>
        <div className={styles.programTitle}>
          ПРОГРАММА <br /> МЕРОПРИЯТИЯ
        </div>
        <div className={styles.programLink}>
          <img alt="календарь" />

          <div className={styles.downloadProgram}>
            <img alt="pdf" src={pdfLogo} width={80} height={100} />
            СКАЧАТЬ ПРОГРАММУ
          </div>
        </div>
      </div>
      <div className={styles.partitcipants}>
        <MapRU />
      </div>
      <div className={styles.jury}>
        <div className={styles.juryTitle}>ЖЮРИ</div>

        <div className={styles.juryList}>
          <div className={styles.juryItem}>
            <img alt="jury" />
            <span className={styles.juryName}>
              СЕРГЕЙ <br /> ЕКИМОВ
            </span>
          </div>
          <div className={styles.juryItem}>
            <img alt="jury" />
            <span className={styles.juryName}>
              АЛЕКСАНДР <br /> СОЛОВЬЕВ
            </span>
          </div>
          <div className={styles.juryItem}>
            <img alt="jury" />
            <span className={styles.juryName}>
              НАТАЛЬЯ <br /> БРЫЗЖИНА
            </span>
          </div>
          <div className={styles.juryItem}>
            <img alt="jury" />
            <span className={styles.juryName}>
              ВЛАДИМЕР <br /> СИНЕНКО
            </span>
          </div>
          <div className={styles.juryItem}>
            <img alt="jury" />
            <span className={styles.juryName}>
              ЛАРИСА <br /> ШВЕЙКОВСКАЯ
            </span>
          </div>
        </div>
      </div>
      <div className={styles.venues}>
        <div className={styles.venuesTitle}>МЕСТА ПРОВЕДЕНИЯ</div>

        <div className={styles.venuesList}>
          <VenueCard
            img={undefined}
            place='Концертный зал <br/> "Синий" ДВФУ'
          />
          <VenueCard
            img={undefined}
            place='Концертный зал <br/> "Синий" ДВФУ'
          />
          <VenueCard
            img={undefined}
            place='Концертный зал <br/> "Синий" ДВФУ'
          />
          <VenueCard
            img={undefined}
            place='Концертный зал <br/> "Синий" ДВФУ'
          />
          <VenueCard
            img={undefined}
            place='Концертный зал <br/> "Синий" ДВФУ'
          />
          <VenueCard
            img={undefined}
            place='Концертный зал <br/> "Синий" ДВФУ'
          />
        </div>
      </div>
      <div className={styles.news}>
        <div className={styles.newsTitle}>НОВОСТИ</div>

        <Swiper
        slidesPerView={3}
        spaceBetween={30}
        freeMode={true}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[FreeMode, Pagination, Navigation]}
        className={styles.newsSwiper}
      >
        <SwiperSlide>Slide 1</SwiperSlide>
        <SwiperSlide>Slide 2</SwiperSlide>
        <SwiperSlide>Slide 3</SwiperSlide>
        <SwiperSlide>Slide 4</SwiperSlide>
        <SwiperSlide>Slide 5</SwiperSlide>
        <SwiperSlide>Slide 6</SwiperSlide>
        <SwiperSlide>Slide 7</SwiperSlide>
        <SwiperSlide>Slide 8</SwiperSlide>
        <SwiperSlide>Slide 9</SwiperSlide>
      </Swiper>
      </div>
      <div className={styles.photos}></div>
      <div className={styles.results}></div>
    </div>
  );
};

export default withLayout(Home);
