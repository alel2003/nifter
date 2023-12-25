import { useTranslation } from "react-i18next";
import { useRef } from "react";
import { Navigation} from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import translationEn from '../../../locales/en/translation.json';
import translationRu from '../../../locales/ru/translation.json';
import  SwiperBtn  from '../../atoms/SwiperBtn'


// swiper css
import 'swiper/css';
import 'swiper/css/navigation';
import LiveAuctionSwiper from "../../molecules/LiveAuctionSwiper";


const LiveAuction = () => {
    const { t, i18n } = useTranslation("Live_Auction");
    const translation = i18n.language === 'en' ? translationEn : translationRu
    const swiperCards = translation.Live_Auction.swiper_card;
    const navigationPrevRef = useRef(null)
    const navigationNextRef = useRef(null)
  return (
    <section id="market" className="max-w-[1400px] mx-auto md:px-[10px] px-5 md:py-[65px] py-[35px]">
      <h1 className="title text-center">{t("title")}</h1>
      {/* swiper */}
      <div className="relative md:px-[50px] px-[40px]">
        <Swiper
          breakpoints={{
            0: {
              slidesPerView: 1,
              centeredSlides: false,
            },
            768: {
              spaceBetween: 30,
              slidesPerView: 2,
              centeredSlides: true,
            },
            1024: {
              spaceBetween: 20,
              centeredSlides: true,
            },
            1920: {
              spaceBetween: 30,
              slidesPerView: 3,
              centeredSlides: true,
            },
          }}
          modules={[Navigation]}
          spaceBetween={30}
          slidesPerView={3}
          autoHeight={true}
          navigation={{
            prevEl: ".prevTwo",
            nextEl: ".nextTwo",
          }}
          className="md:mt-[80px] mt-[40px] py-[30px]"
        >
          {swiperCards.map((card) => (
            <SwiperSlide key={card.id}>
              <LiveAuctionSwiper
                title={card.title}
                text={card.text}
                highest={card.highest}
                stock={card.stock}
                button_one={card.button_one}
                button_two={card.button_two}
                price={card.price}
                img={card.bg}
                photo={card.photo}
              />
            </SwiperSlide>
          ))}
        </Swiper>
        <div className="absolute top-[50%] w-full right-0 left-0 flex justify-between">
          <SwiperBtn
            className="prevTwo swiper-two_btn"
            ref={navigationPrevRef}
            type={"left"}
          />
          <SwiperBtn
            className="nextTwo swiper-two_btn"
            ref={navigationNextRef}
            type={"right"}
          />
        </div>
      </div>
    </section>
  );
}

export default LiveAuction
