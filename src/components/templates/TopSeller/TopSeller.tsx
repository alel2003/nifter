import { useTranslation } from "react-i18next";
import { useRef } from "react";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Grid,Navigation} from 'swiper/modules';
import { useState } from "react";

// swiper css
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/grid';

import { One, Two, Three, Four, Five, Six, Seven, Eight} from '../../../assets/seller/index'
import TopSellerSwiper from "../../molecules/TopSellerSwiper";
import SwiperBtn from "../../atoms/SwiperBtn";


const TopSeller:React.FC = () => {
    const { t } = useTranslation("Top_Seller");
    const [swiper, setSwiper] = useState(null);
    const navigationPrevRef = useRef(null)
    const navigationNextRef = useRef(null)
    const swiperData = [
        {
            id:1,
            photo: One,
            name:t("swiper_sliders.name_one"),
            price: 885.6,
        },
        {
            id:2,
            photo: Two,
            name:t("swiper_sliders.name_two"),
            price: 100.1,
        },
        {
            id:3,
            photo: Three,
            name:t("swiper_sliders.name_three"),
            price: 500.2,
        },
        {
            id:4,
            photo: Four,
            name:t("swiper_sliders.name_four"),
            price: 45.6,
        },
        {
            id:5,
            photo: Five,
            name:t("swiper_sliders.name_five"),
            price: 42.4,
        },
        {
            id:6,
            photo: Six,
            name:t("swiper_sliders.name_six"),
            price: 34.5,
        },
        {
            id:7,
            photo: Seven,
            name:t("swiper_sliders.name_seven"),
            price: 21.4,
        },
        {
            id:8,
            photo: Eight,
            name:t("swiper_sliders.name_eight"),
            price: 18.4,
        },
        {
            id:9,
            photo: One,
            name:t("swiper_sliders.name_nine"),
            price: 12.3,
        },
        {
            id:10,
            photo: Two,
            name:t("swiper_sliders.name_ten"),
            price: 10.3,
        }
    ]
  return (
    <section className="max-w-[1270px] w-full mx-auto md:px-[10px] px-5 md:py-[70px] py-[35px]">
      <div>
        <h2 className="title">{t("title")}</h2>
      </div>
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
            spaceBetween: 20,
            slidesPerView: 2.5,
          },
          1024: {
            grid: { rows: 2 },
            spaceBetween: 30,
            slidesPerView: 3,
          },
          1280: {
            grid: { rows: 2 },
            spaceBetween: 40,
            slidesPerView: 3,
          },
          1920: {
            grid: { rows: 2 },
            spaceBetween: 50,
            slidesPerView: 3.3,
          },
        }}
        slidesPerView={3.3}
        navigation={{
          prevEl: ".prevOne",
          nextEl: ".nextOne",
        }}
        modules={[Grid, Navigation]}
        grid={{
          rows: 2,
        }}
        onSwiper={(swiper) => {
          setSwiper(swiper);
        }}
        className="md:mt-[83px] mt-[42px] grid height-one"
      >
        {swiperData.map((swiper) => (
          <SwiperSlide key={swiper.id}>
            <TopSellerSwiper
              photo={swiper.photo}
              name={swiper.name}
              price={swiper.price}
              currency="Eth"
            />
          </SwiperSlide>
        ))}
        <div className="flex gap-[20px] md:mt-[5px] mt-[20px]">
          <SwiperBtn
            className="prevOne swiper-btn"
            ref={navigationPrevRef}
            type={"left"}
          />
          <SwiperBtn
            className="nextOne swiper-btn"
            ref={navigationNextRef}
            type={"right"}
          />
        </div>
      </Swiper>
    </section>
  );
}

export default TopSeller
