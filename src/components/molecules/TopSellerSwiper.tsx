import { FC } from 'react'
import { contact, telegram } from "../../assets/icons/index";
import ButtonIcon from '../atoms/ButtonIcon';


interface ITopSellerSwiper {
  photo:string
  name:string
  price:number
  currency:string
}

const TopSellerSwiper:FC<ITopSellerSwiper> = ({photo, name, price,currency}) => {
  const BtnIcon = [
    {
      img:contact,
      label:"settings",
      to:'https://vc.ru/yandex/176676-chto-umeyut-yandeks-kartinki-desyat-funkciy-kotorye-stali-vozmozhny-blagodarya-mashinnomu-obucheniyu'
    },
    {
      img:telegram,
      label:"telegram",
      to:'https://t.me/ChatGPT_General_Bot'
    }
  ]
  return (
    <div className="bg-[#2E272E] border-[1px] border-[#5C1765] rounded-[10px] p-[20px] flex gap-[20px] ">
      <img className='w-[100px] h-[100px] object-contain rounded-[10px] bg-center-top' src={photo} alt={name} />
      <div className='flex flex-col'>
        <h3 className='text-[#FFF] text-[20px] font-normal font-montserrat mb-[10px]'>
          {name}
        </h3>
        <p className='text-[#FFF] text-[16px] font-montserrat font-extralight mb-[21px] flex gap-[4px]'>
          {price}
          <span className='font-normal text-[#CB66DB]'>{currency}</span>
        </p>
        <div className='flex gap-[14px]'>
         {BtnIcon.map((btn, idx) => (
           <ButtonIcon key={idx} img={btn.img} alt={btn.label} link={btn.to}/>
         ))}
        </div>
      </div>
    </div>
  )
}

export default TopSellerSwiper;
