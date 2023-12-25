import { useTranslation, i18n } from "react-i18next";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import { useState } from "react";
import translationEn from "../../../locales/en/translation.json";
import translationRu from "../../../locales/ru/translation.json";
import ExplreArtworksCard from "../../molecules/ExplreArtworksCard";
import Button from "../../atoms/Button";


const ExplreArtworks = () => {
    const { t, i18n } = useTranslation("Explre_Artworks");
    const translation = i18n.language === "en" ? translationEn : translationRu;
    const tabsTitile = translation.Explre_Artworks.title_tabs;
    const tabsContentOne = translation.Explre_Artworks.content_one;
    const tabsContentTwo = translation.Explre_Artworks.content_two;

    const [ active, setActive ] = useState(0)
  return (
    <section className="max-w-[1158px] mx-auto w-full md:px-[10px] px-5 md:py-[70px] py-[35px]">
      <h4 className="title">{t("title")}</h4>
      {/* tabs */}
      <Tabs className="flex flex-col gap-[70px] md:mt-[70px] mt-[50px]">
        <TabList className="grid md:grid-cols-5 grid-cols-3 text-center border-b-[1px] border-white">
          {tabsTitile.map((title, idx) => (
            <Tab
              className={`${
                active === idx
                  ? "bg-[#D9D9D9] opacity-[0.7] rounded-t-lg text-black"
                  : "bg-transparent text-white"
              } cursor-pointer md:text-[20px] text-[12px] font-light font-montserrat hover:bg-[#D9D9D9]
              hover:opacity-[0.7] hover:rounded-t-lg hover:bg-[#A658B3] hover:text-white py-[15px] outline-none`}
              key={idx}
              onClick={() => setActive(idx)}
            >
              {title}
            </Tab>
          ))}
        </TabList>

        <div>
          <TabPanel className="grid lg:grid-cols-4 md:grid-cols-3 grid-cols-1 md:gap-[26px] gap-[40px]">
            {tabsContentOne.map((content) => (
              <ExplreArtworksCard
                key={content.id}
                title={content.title}
                text={content.text}
                img={content.img}
                price={content.price}
                available={content.available}
              />
            ))}
          </TabPanel>
          <TabPanel className="grid lg:grid-cols-4 md:grid-cols-3 grid-cols-1 md:gap-[26px] gap-[40px]">
            {tabsContentTwo.map((content) => (
              <ExplreArtworksCard
                key={content.id}
                title={content.title}
                text={content.text}
                img={content.img}
                price={content.price}
                available={content.available}
              />
            ))}
          </TabPanel>
          <TabPanel className="grid lg:grid-cols-4 md:grid-cols-3 grid-cols-1 md:gap-[26px] gap-[40px]">
            {tabsContentOne.map((content) => (
              <ExplreArtworksCard
                key={content.id}
                title={content.title}
                text={content.text}
                img={content.img}
                price={content.price}
                available={content.available}
              />
            ))}
          </TabPanel>
          <TabPanel className="grid lg:grid-cols-4 md:grid-cols-3 grid-cols-1 md:gap-[26px] gap-[40px]">
            {tabsContentOne.map((content) => (
              <ExplreArtworksCard
                key={content.id}
                title={content.title}
                text={content.text}
                img={content.img}
                price={content.price}
                available={content.available}
              />
            ))}
          </TabPanel>
          <TabPanel className="grid lg:grid-cols-4 md:grid-cols-3 grid-cols-1 md:gap-[26px] gap-[40px]">
            {tabsContentTwo.map((content) => (
              <ExplreArtworksCard
                key={content.id}
                title={content.title}
                text={content.text}
                img={content.img}
                price={content.price}
                available={content.available}
              />
            ))}
          </TabPanel>
        </div>
      </Tabs>
      {/* btn */}
      <div className="md:mt-[70px] mt-[40px] flex justify-center items-center">
        <Button
          text={t("btn")}
          bg="bg-gradient"
        />
      </div>
    </section>
  );
};

export default ExplreArtworks;
