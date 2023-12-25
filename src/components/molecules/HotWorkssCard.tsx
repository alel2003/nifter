import { FC } from 'react'

interface IHotWorkssCard {
    icon:string 
    title:string
    text:string
}

const HotWorkssCard: FC<IHotWorkssCard> = ({text, title,icon}) => {
  return (
    <div className="rounded-[27px] border-[1px] border-[#E12DFF] flex flex-col gap-[11px] p-5 md:w-[270px] w-full">
      <img
        className='w-[54px] h-[44px] object-contain'
        src={icon}
        alt={icon}
      />
      <h5 className="text-[#FFF] font-montserrat font-medium text-[16px]">
        {title}
      </h5>
      <p className="text-[#FFF] font-montserrat font-extralight text-[15px]">
        {text}
      </p>
    </div>
  );
};

export default HotWorkssCard;
