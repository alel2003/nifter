import { useTranslation } from "react-i18next";
import { useState } from "react";
import coin from '../../../assets/coin.svg'

const DigitalCreator = () => {
    const { t } = useTranslation("Digital_Creator");
    const [value, setValue] = useState('')

    const handleFormSubmit = (e: React.SyntheticEvent) => {
      e.preventDefault();
      setValue('')
    };
    const handleInputValue = (e: React.FormEvent<HTMLInputElement>) => {
      const newValue = e.currentTarget.value;
      if(newValue.trim().length) {
        setValue(newValue);
      }
    };

    return (
      <section
        className="max-w-[1144px] mx-auto w-full md:px-[69px] px-[30px] rounded-[27px] bg-[#A658B3] py-[30px]
    grid md:grid-cols-2 grid-cols-1"
      >
        {/* block left */}
        <div className="flex flex-col gap-[22px]">
          <h5 className="text-[24px] text-[#FFF] font-montserrat font-semibold">
            {t("title")}
          </h5>
          <p className="text-[16px] text-[#FFF] font-montserrat font-light">
            {t("text")}
          </p>
          <form
            onSubmit={handleFormSubmit}
            className="flex"
          >
            <input
              type="text"
              value={value}
              onChange={handleInputValue}
              placeholder={t("placeholder")}
              className=" pt-[14px] w-full pr-[125px] pl-[14px] pb-[14px] rounded-[27px] outline-none border-none text-[16px] font-inter
            font-extralight text-[#FFF]"
            />
            <button
              className="py-[8px] px-[15px] rounded-[27px] bg-[#D9D9D9] border-none text-[#A658B3]
          font-inter text-[14px] font-normal text-center ml-[-110px] h-[35px] mt-[8px]"
              type="submit"
            >
              {t("btn")}
            </button>
          </form>
        </div>
        {/* block right */}
        <div className="flex justify-center md:flex hidden">
          <img
            className="w-[217px] h-[202px] object-contain"
            src={coin}
            alt="coin"
          />
        </div>
      </section>
    );
};

export default DigitalCreator
