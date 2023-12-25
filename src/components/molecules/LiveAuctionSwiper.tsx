import { FC, useState } from 'react'
import { heart, heartBg, settings } from '../../assets/icons/index'
import Button from '../atoms/Button'
import ButtonIcon from '../atoms/ButtonIcon'

interface ILiveAuctionSwiper {
    img:string
    photo:string
    title:string
    text:string
    price:string
    stock:string
    highest:string
    button_one:string
    button_two:string
}

const LiveAuctionSwiper:FC<ILiveAuctionSwiper> = ({img,photo,title,text,price,stock,highest,button_one,button_two}) => {
    const [ active, setActive ] = useState(false)
  return (
    <div className='swiper-auction pt-[10px] pl-[10px] pr-[10px] pb-[28px] flex flex-col'>
      <div style={{backgroundImage:`url(${img})`}}
      className={`img md:h-[292px] h-[180px] bg-center transition-all bg-no-repeat object-cover w-full rounded-[47px] mb-[10px] mx-auto relative`}>
        <button
        className='w-[28px] h-[23px] absolute top-[16px] right-[29px]'
        onClick={() => setActive(!active)}
        >
        <img className='w-[28px] h-[23px] object-cover' src={active ? heartBg : heart} alt={title} />
        </button>
        <img className='w-[64px] h-[54px] object-cover rounded-[20px] border-[1px] 
        border-[#000] absolute bottom-[-10px] left-[33px]' 
        src={photo} alt={title} />
      </div>
      <div className='flex md:flex-row md:justify-between flex-col'>
        {/* left */}
        <div className='flex flex-col'>
            <h3 className='text-[#FFF] md:text-[32px] text-[20px] font-montserrat font-medium mb-[6px]'>
                {title}
            </h3>
            <p className='text-[#FFF] text-[12px] font-montserrat font-extralight mb-[12px]'>
                {text}
            </p>
            <div className='flex items-center gap-[5px] md:mb-0 mb-[10px]'>
                <ButtonIcon img={settings} alt={title} link='https://tailwindcss.com/docs/font-weight'/>
                <p className='text-[#FFF] md:text-start text-center text-[15px] font-montserrat font-light'>{highest}</p>
            </div>
        </div>
        {/* right */}
        <div className='flex flex-col gap-[17px]'>
            <p className='rounded-[10px] border-[1px] border-[#784580] py-[6px] px-[22px] font-montserrat 
            text-[14px] font-medium text-[#B85FC6] text-center'>
                {price}
            </p>
            <p className=' text-[#B85FC6] font-extralight text-[15px] font-montserrat text-center'>{stock}</p>
        </div>
      </div>
      <div className='flex md:flex-row flex-col mt-[28px] justify-around md:gap-0 gap-[20px]'>
            <Button bg='bg-gradient' text={button_one}/>
            <Button bg='bg-border' text={button_two}/>
      </div>
    </div>
  )
}

export default LiveAuctionSwiper
