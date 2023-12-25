import { useTranslation } from "react-i18next";
import  CountUp   from 'react-countup';
import Button  from '../../atoms/Button'
import { rombus } from "../../../assets/icons";
import UI from '../../../assets/UIBg.png';
import Countdown from 'react-countdown';


interface IHome {
  start:number
  end:number
  text:string
}

const Home = () => {
  const { t } = useTranslation("Home");
  const Info:IHome[] = [
    {
      start: 25,
      end: 42,
      text:t("user_active")
    },
    {
      start: 2,
      end: 8,
      text:t("artworks")
    },
    {
      start: 0,
      end: 2,
      text:t("artist")
    }
  ]

const now = Date.now();
const hours = 18;
const minutes = 25;
const seconds = 32;

const targetTime = now + hours * 60 * 60 * 1000 + minutes * 60 * 1000 + seconds * 1000;
const renderer = ({ hours, minutes, seconds }) => {
  return (
    <div className="flex md:justify-between justify-around">
      <span>{hours}</span>
      <span>{minutes}</span>
      <span>{seconds}</span>   
    </div>
  );
};
const DateText = [
  {
    id:1, 
    label:t("hours")
  },
  {
    id:2, 
    label:t("mins")
  },
  {
    id:3, 
    label:t("secs")
  },
]
  return (
    <section id="home"
      className="max-w-[1364px] mx-auto w-full lg:px-[10px] px-5
    grid md:grid-cols-2 grid-cols-1 md:pt-[42px] pt-[21px] md:pb-[70px] pb-[35px]"
    >
      {/* left block */}
      <div className="flex flex-col pl-[10%] pt-[55px]">
        <h1 className="title mb-[30px] md:max-w-[40%px] w-full">
          {t("title")}
        </h1>
        <p className="font-montserrat text-[16px] font-light  mb-[30px] text-[#FFF]">
          {t("text")}
        </p>
        <div className="flex md:flex-row flex-col items-center gap-[20px]">
          <Button
            bg="bg-gradient"
            text={t("button_one")}
          />
          <Button
            bg="bg-border"
            text={t("button_two")}
          />
        </div>
        <div className="mt-[70px]">
          {Info.map((item, idx) => (
            <div
              className="flex gap-[14px] items-center"
              key={idx}
            >
              <div>
                <img
                  src={rombus}
                  alt="rombus"
                />
              </div>
              <div className="flex flex-col gap-[4px]">
                <div className="text-[#FFF] text-[20px] font-montserrat font-medium">
                  <CountUp
                    start={item.start}
                    end={item.end}
                    duration={5.1}
                  />
                  <span>k+</span>
                </div>
                <p className="font-montserrat text-[16px] font-extralight text-[#FFF]">
                  {item.text}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
      {/* block right */}
      <div className="flex flex-col items-center">
        <img
          className="w-[390px] md:h-[569px] h-[350px] object-contain"
          src={UI}
          alt="UI"
        />
        {/* block bottom */}
        <div
          className="rounded-[10px] bg-data w-full py-[19px] px-[42px] flex justify-between lg:flex-row flex-col 
          lg:gap-[0px] gap-[10px] lg:items-start items-center lg:text-start text-center mt-[-80px] lg:ml-[-70px] ml-0"
        >
          {/* left */}
          <div className="flex flex-col">
            <p className="font-montserrat text-[16px] font-light gap-[5px] text-[#FFF]" >
              {t("current")}
            </p>
            <div className="text-[#CB66DB] text-[36px] font-montserrat font-semibold flex gap-[5px]">
              5.00<span>ETH</span>
            </div>
            <p className="font-montserrat text-[16px] font-extralight text-[#FFF]">
              $11,373.55
            </p>
          </div>
          {/* center */}
          <div className="lg:w-[30%] w-full text-[#CB66DB] text-[36px] font-montserrat font-semibold">
            <p className="font-montserrat text-[16px] font-light text-[#FFF]">
              Auction ends in
            </p>
            <Countdown
              date={targetTime}
              renderer={renderer}
            />
            <div className="flex md:justify-between justify-around">
              {DateText.map((date) => (
                <p
                  className="text-[#FFF] text-[16px] font-montserrat font-extralight"
                  key={date.id}
                >
                  {date.label}
                </p>
              ))}
            </div>
          </div>
          {/* right */}
          <div className="flex flex-col gap-[14px] lg:w-fit w-full">
            <Button
              bg="button-border"
              text={t("bid_now")}
            />
            <Button
              bg="bg-border"
              text={t("see_item")}
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Home
