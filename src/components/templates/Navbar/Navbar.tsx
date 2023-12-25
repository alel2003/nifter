import { useTranslation } from "react-i18next";
import { useState } from "react";
import { Link } from 'react-scroll'
import {AiOutlineAlignRight, AiOutlineClose, AiFillCaretDown, AiFillCaretUp} from 'react-icons/ai'
import logo  from '../../../assets/logo.svg'

const Navbar = () => {
    const { t, i18n } = useTranslation("Navigation");

    const changeLanguage = (language:string) => {
        i18n.changeLanguage(language);
    };
    const [active, setActive] = useState('')
    const [toggle, setToggle] = useState(false)
    const [buttonLng, setButtonLng] = useState(false)
    
    const Links:{label:string, to:string}[] = [
        {
            label: t("home"),
            to: "home"
        },
        {
            label: t("market"),
            to: "market"
        },
        {
            label:t("discover"),
            to: "discover"
        },
        {
            label: t("commonity"),
            to: "commonity"
        },
        {
            label: t("wallet"),
            to: "wallet"
        }
    ]
       
  return (
    <nav
      className="mt-[59px] h-[42px] max-w-[1364px] mx-auto w-full lg:px-[10px] px-5
    flex justify-between items-center flex-row"
    >
      {/* logo */}
      <Link to="/">
        <img
          className="max-w-[122px] h-[34px] object-contain cursor-pointer"
          src={logo}
          alt="logo"
        />
      </Link>
      {/* desktop links */}
      <ul className="gap-[30px] md:flex hidden">
        {Links.map((link, idx) => (
          <li key={idx}>
            <Link
              className={`
                    ${
                      active === link.label
                        ? "border-b-[2px] border-[#A658B3]"
                        : "border-b-transparent"
                    }
                    text-white text-[16px] font-light font-montserrat transition-all
                    pb-[5px] hover:border-b-[2px] hover:border-[#A658B3] cursor-pointer
                    `}
              to={link.to}
              smooth={true}
              duration={500}
              onClick={() => setActive(link.label)}
            >
              {link.label}
            </Link>
          </li>
        ))}
      </ul>
      {/* button languages */}
      <div className="relative font-montserrat md:text-[13px] text-light text-[10px]">
        <button
          className="text-white btn-section bg-gradient flex gap-[5px] items-center"
          onClick={() => setButtonLng(!buttonLng)}
        >
          {t("languages.language")}
          {buttonLng ? <AiFillCaretUp /> : <AiFillCaretDown />}
        </button>
        <div
          className={`${
            buttonLng ? "flex" : "hidden"
          } absolute top-[55px] flex flex-col w-full gap-2 bg-white rounded-[10px] py-[5px] px-[10px]`}
          onClick={() => setButtonLng(!buttonLng)}
        >
          <button onClick={() => changeLanguage("en")}>
            {t("languages.en")}
          </button>
          <hr />
          <button onClick={() => changeLanguage("ru")}>
            {t("languages.ru")}
          </button>
        </div>
      </div>
      {/* hamburger */}
      <div
        className="w-[30px] h-[30px] md:hidden flex"
        onClick={() => setToggle(!toggle)}
      >
        {toggle ? (
          <AiOutlineClose
            size={30}
            color="white"
          />
        ) : (
          <AiOutlineAlignRight
            size={30}
            color="white"
          />
        )}
      </div>
      {/* mobile links */}
      <ul
        className={`${
          toggle ? "flex" : "hidden"
        } flex-col gap-[30px] md:hidden absolute top-24 left-0 w-full h-screen justify-center items-center`}
      >
        {Links.map((link, idx) => (
          <li key={idx}>
            <Link
              className=" text-white text-[30px] font-light font-montserrat cursor-pointer"
              to={link.to}
              smooth={true}
              duration={300}
              onClick={() => setToggle(!toggle)}
            >
              {link.label}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default Navbar
