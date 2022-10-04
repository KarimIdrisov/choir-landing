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
import Slider from "react-slick";
import {useWindowSize} from "../../common/useWindowSize";

// TODO: connect i18n
const Home = () => {
  const [time, setTime] = useState(+new Date(2022, 10, 25) - +new Date());

  useEffect(() => {
    const interval = setInterval(() => {
      setTime(+new Date(2022, 10, 25) - +new Date());
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const width = useWindowSize().width;
  const [settingsNews, setSettingsNews] = useState({
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1
  })

  const [settingsVideos, setSettingsVideos] = useState({
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1
  })

  useEffect(() => {
    if (width < 1300 && width > 980) {
      setSettingsNews({
        ...settingsNews,
        slidesToShow: 2
      })
      setSettingsVideos({
        ...settingsVideos,
        slidesToShow: 2
      })
      return;
    }

    if (width < 980) {
      setSettingsNews({
        ...settingsNews,
        slidesToShow: 1
      })
      setSettingsVideos({
        ...settingsVideos,
        slidesToShow: 1
      })
      return;
    }

    setSettingsNews({
      ...settingsNews,
      slidesToShow: 3
    })
    setSettingsVideos({
      ...settingsVideos,
      slidesToShow: 3
    })
  }, [width])

  return (
    <div>
      <div className={styles.introSection}>
        <div className={styles.intro}>
          <img
            className={styles.choirLogo}
            src={choirLogo}
            alt="хоровая олимпиады"
            width={260}
            height={120}
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
          Первая Дальневосточная хоровая олимпиада обещает стать
          крупнейшим событием в хоровой жизни Дальнего Востока. 
          Мы вместе можем принять участие в формировании нового 
          фестиваля, найти новых друзей среди участников хоров со всей 
          страны, сделать хоровую музыку ближе и понятнее для зрителей, 
          получить массу, ярких впечатлений и открыть для себя что-то новое!
        </span>
      </div>
      <div className={styles.rules} id={'rules'}>
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
      <div className={styles.program} id='program'>
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
      <div className={styles.participants} id='participants'>
        <MapRU />
        <div className={styles.participantsCount}>
          <span className={styles.count}>
            30
          </span>
          УЧАСТНИКОВ
        </div>
      </div>
      <div className={styles.jury} id='jury'>
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
      <div className={styles.venues} id='venues'>
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
      <div className={styles.news} id='news'>
        <div className={styles.newsTitle}>НОВОСТИ</div>

        <Slider {...settingsNews} className={styles.newsSwiper}>
          <div className={styles.newsItem}>
            <div>
              <img width={365} height={380} className={styles.newsImage} />
              <div className={styles.newsItemTitle}>
                Название новости
              </div>
              <div className={styles.newsDate}>
                Октябрь 25, 2022
              </div>
            </div>
          </div>
          <div className={styles.newsItem}>
            <div>
              <img width={365} height={380} className={styles.newsImage} />
              <div className={styles.newsItemTitle}>
                Название новости
              </div>
              <div className={styles.newsDate}>
                Октябрь 25, 2022
              </div>
            </div>
          </div>
          <div className={styles.newsItem}>
            <div>
              <img width={365} height={380} className={styles.newsImage} />
              <div className={styles.newsItemTitle}>
                Название новости
              </div>
              <div className={styles.newsDate}>
                Октябрь 25, 2022
              </div>
            </div>
          </div>
          <div className={styles.newsItem}>
            <div>
              <img width={365} height={380} className={styles.newsImage} />
              <div className={styles.newsItemTitle}>
                Название новости
              </div>
              <div className={styles.newsDate}>
                Октябрь 25, 2022
              </div>
            </div>
          </div>

        </Slider>
      </div>
      <div className={styles.photos} id='photos'>
        <div className={styles.newsTitle}>ФОТО</div>

        <div className={styles.photoMain}>
          <div className={styles.photoMainTitle}>НАЗВАНИЕ ФОТОАЛЬБОМА</div>
        </div>

        <div className={styles.photosAlbums}>
          <div className={styles.album}>

          </div>
          <div className={styles.album}>

          </div>
          <div className={styles.album}>

          </div>
          <div className={styles.album}>

          </div>
        </div>
      </div>
      <div className={styles.videos} id='videos'>
        <div className={styles.newsTitle}>ВИДЕО</div>

        <Slider {...settingsVideos} className={styles.videoSwiper}>
          <div className={styles.newsItem}>
            <div>
              <img width={365} height={380} className={styles.newsImage} />
              <div className={styles.videoTitle}>
                Название видео
              </div>
            </div>
          </div>
          <div className={styles.newsItem}>
            <div>
              <img width={365} height={380} className={styles.newsImage} />
              <div className={styles.videoTitle}>
                Название видео
              </div>
            </div>
          </div>
          <div className={styles.newsItem}>
            <div>
              <img width={365} height={380} className={styles.newsImage} />
              <div className={styles.videoTitle}>
                Название видео
              </div>
            </div>
          </div>
          <div className={styles.newsItem}>
            <div>
              <img width={365} height={380} className={styles.newsImage} />
              <div className={styles.videoTitle}>
                Название видео
              </div>
            </div>
          </div>
        </Slider>
      </div>
      <div id='results'>
        <div className={styles.resultsTitle}>
            РЕЗУЛЬТАТЫ
        </div>

        <div className={styles.results}>
          <div className={styles.downloadResult}>
            <img alt="pdf" src={pdfLogo} width={100} height={125} />
            Скачать программу
          </div>
        </div>
      </div>
    </div>
  );
};

export default withLayout(Home);
