import { useTranslation } from "react-i18next";
import Button from "../../atoms/Button";
import { item, purse, collection, nfts} from '../../../assets/icons/index'
import HotWorkssCard from "../../molecules/HotWorkssCard";

const HotWorkss = () => {
    const { t } = useTranslation("Hot_Works");
    const cards = [
      {
        icon: purse,
        title: t("wallet_title"),
        text: t("wallet_text"),
      },
      {
        icon: collection,
        title: t("collection_title"),
        text: t("collection_text"),
      },
      {
        icon: nfts,
        title: t("nfts_title"),
        text: t("nfts_text"),
      },
      {
        icon: item,
        title: t("item_title"),
        text: t("item_text"),
      },
    ];
  return (
    <section className="max-w-[1144px] mx-auto w-full md:px-10 px-5 flex md:flex-row flex-col  md:justify-between md:justify-start items-center md:py-[70px] py-[35px] md:gap-0 gap-[40px]">
      {/* block left */}
      <div className="md:w-[331px] w-full flex flex-col gap-[20px]">
        <h3 className="text-[#FFF] text-[40px] font-inter font-semibold">
          {t("title")}
        </h3>
        <p className="text-[#FFF] text-[20px] font-inter font-light">
          {t("text")}
        </p>
        <Button
          text={t("btn")}
          bg="bg-gradient"
        />
      </div>
      {/* block right */}
      <div className="flex flex-wrap md:flex-row flex-col md:w-[60%] w-full md:gap-x-[54px] gap-y-[24px]">
        {cards.map((card, idx) => (
          <HotWorkssCard
            key={idx}
            icon={card.icon}
            title={card.title}
            text={card.text}
          />
        ))}
      </div>
    </section>
  );
};

export default HotWorkss;
