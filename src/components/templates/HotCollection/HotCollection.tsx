import { useTranslation } from "react-i18next";
import { Swiper, SwiperSlide } from "swiper/react";
import { Grid, Pagination } from "swiper/modules";
import translationEn from "../../../locales/en/translation.json";
import translationRu from "../../../locales/ru/translation.json";

// swiper css
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/grid";
import HotCollectionSwiper from "../../molecules/HotCollectionSwiper";

const HotCollection = () => {
    const { t, i18n } = useTranslation("Hot_Collection");
     const translation = i18n.language === "en" ? translationEn : translationRu;
     const swiperCard = translation.Hot_Collection.swiper_card;
  return (
    <section
      id="discover"
      className="max-w-[1144px] mx-auto w-full md:px-[10px] px-5 md:py-[70px] py-[35px]"
    >
      <h3 className="title">{t("title")}</h3>
      {/* swiper */}
      <Swiper
        breakpoints={{
          0: {
            grid: { rows: 2 },
            slidesPerView: 1,
          },
          480: {
            grid: { rows: 2 },
            slidesPerView: 1,
          },
          640: {
            grid: { rows: 2 },
            slidesPerView: 2,
          },
          768: {
            grid: { rows: 2 },
            spaceBetween: 50,
            slidesPerView: 2.5,
          },
          1024: {
            grid: { rows: 2 },
            spaceBetween: 13,
            slidesPerView: 3,
          },
          1280: {
            grid: { rows: 2 },
            spaceBetween: 13,
            slidesPerView: 3,
          },
          1920: {
            grid: { rows: 2 },
            spaceBetween: 13,
            slidesPerView: 3,
          },
        }}
        slidesPerView={3}
        modules={[Grid, Pagination]}
        pagination={{
          clickable: true,
          el: ".swiper-pagination",
        }}
        grid={{
          rows: 2,
        }}
        className="md:mt-[70px] mt-[35px] grid height-two"
      >
        {swiperCard.map((card) => (
          <SwiperSlide key={card.id}>
            <HotCollectionSwiper
              left={card.one_img}
              center={card.two_img}
              right={card.three_img}
              bottom={card.four_img}
              item={card.item}
              text={card.text}
            />
          </SwiperSlide>
        ))}
        <div className="swiper-pagination-container">
          <div className="swiper-pagination"></div>
        </div>
      </Swiper>
    </section>
  );
}

export default HotCollection
