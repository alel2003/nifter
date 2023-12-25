import { FC } from "react"

interface IHotCollectionSwiper {
  left:string
  center:string
  right:string
  bottom:string
  text:string
  item:string
}

const HotCollectionSwiper: FC<IHotCollectionSwiper> = ({left, right, center, bottom, text,item}) => {
  return (
    <a className="rounded-[27px] card-four_bg pt-[10px] pl-[10px] pr-[10px] pb-[21px] flex flex-col cursor-pointer">
      {/* top block */}
      <div className="mb-[21px] flex flex-col">
        <div className="grid grid-cols-3 gap-[7px] mb-[6px]">
          <img
            className="rounded-l-t-[27px] object-cover bg-center"
            src={left}
            alt="left"
          />
          <img
            className="object-cover bg-center"
            src={center}
            alt="center"
          />
          <img
            className="rounded-r-t-[27px] object-cover bg-center"
            src={right}
            alt="right"
          />
        </div>
        <img
          className="w-full object-cover"
          src={bottom}
          alt="bottom"
        />
      </div>
      {/* bottom block */}
      <div className="flex justify-between items-center px-[10px]">
        <h5 className="text-[#A658B3] font-montserrat text-[24px] font-medium">
          {text}
        </h5>
        <p
          className="px-[9px] py-[5px] text-[#A658B3] text-[15px] font-light font-montserrat 
        rounded-[6px] border-[1px] border-[#A658B3]"
        >
          {item}
        </p>
      </div>
    </a>
  );
};

export default HotCollectionSwiper
