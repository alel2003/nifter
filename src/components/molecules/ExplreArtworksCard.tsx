import { FC } from "react";

interface IExplreArtworksCard {
  img: string;
  title: string;
  text: string;
  price: number;
  available:string
}


const ExplreArtworksCard: FC<IExplreArtworksCard> = ({
  img,
  title,
  price,
  text,
  available,
}) => {
  return (
    <div className="rounded-[27px] bg-[#2E0833] p-[13px]">
      <img
        src={img}
        alt="card"
        className="md:h-[271px] h-[200px] md:object-contain object-cover rounded-t-lg w-full"
      />
      <div className="p-[10px] flex flex-col justify-between">
        <div className="flex justify-between items-center">
          <h4 className="md:text-[24px] text-[20px] text-white font-normal font-montserrat">
            {title}
          </h4>
          <p className="md:p-[10px] p-[8px] border-[1px] border-[#A658B3] rounded-[10px] text-white">
            {price} <span>ETH</span>
          </p>
        </div>
        <p className="mt-[5px] md:text-[20px] text-[18px] font-montserrat font-extralight text-white">
          {text}
        </p>
        <p className="text-[#FF35D3] text-[15px] font-extralight font-montserrat md:mt-[25px] mt-[15px]">
          {available}
        </p>
      </div>
    </div>
  );
};

export default ExplreArtworksCard
