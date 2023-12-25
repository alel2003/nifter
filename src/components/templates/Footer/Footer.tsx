import { useTranslation } from "react-i18next";
import logo from '../../../assets/logo.svg'
import {vk, fc, di, inst, tw} from '../../../assets/icons/index.ts'
import translationEn from '../../../locales/en/translation.json';
import translationRu from '../../../locales/ru/translation.json';

const Footer = () => {
  const { t, i18n } = useTranslation("Footer");
  const Icons:{img:string, to:string}[] = [
    {
      img:vk,
      to:"vk"
    },
    {
      img:fc,
      to:"fc"
    },
    {
      img:di,
      to:"di"
    },
    {
      img:inst,
      to:"inst"
    },
    {
      img:tw,
      to:"tw"
    },
  ]
  const translation = i18n.language === 'en' ? translationEn : translationRu;
  const footerLinks = translation.Footer.footer__links;
  return (
    <footer className="max-w-[1364px] w-full mx-auto lg:px-[10px] px-5 md:py-[130px] py-[65px] lg:flex gap-[40px]">
      {/* block left */}
      <div className='flex flex-col lg:items-start items-center'>
         {/* logo */}
         <a href="/">
            <img className="max-w-[171px] h-[74px] object-contain mb-[27px]" src={logo} alt="logo" />
        </a>
        {/* platform text */}
        <p className='text-[#FFF] font-montserrat text-[18px] font-extralight mb-[25px] md:max-w-[315px] w-full'>
          {t('platform')}
        </p>
        {/* block icons */}
        <div className='flex gap-[10px] items-center'>
           {Icons.map((icon, idx) => (
            <a 
            href={`#${icon.to}`}
            key={idx}>
              <img className='w-[24px] h-[21px] object-contain' src={icon.img} alt={icon.to} />
            </a>
           ))}
        </div>
      </div>
      {/* block right */}
      <div className='flex justify-between w-full items-center flex-wrap gap-[10px]'>
      {footerLinks.map((link) => (
         <ul 
         key={link.id}
         className='flex flex-col justify-between h-full mt-[50px] font-montserrat text-[20px] font-normal text-white gap-[10px]'>
         <li className='text-[#A658B3]'>
           {link.title}
         </li>
           <li>
             <a href={`#${link.to_one}`}>
             {link.link_one}
             </a>
           </li>
           <li>
             <a href={`#${link.to_two}`}>
             {link.link_two}
             </a>
           </li>
           <li>
             <a href={`#${link.to_three}`}>
             {link.link_three}
             </a>
           </li>
           <li>
             <a href={`#${link.to_four}`}>
             {link.link_four}
             </a>
           </li>
         </ul>
      ))}
      </div>
    </footer>
  )
}

export default Footer
