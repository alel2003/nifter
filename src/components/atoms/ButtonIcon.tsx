import { FC, useState } from "react"

interface IButtonIcon  {
    img:string
    alt:string
    link: string
}

const ButtonIcon:FC<IButtonIcon> = ({img, alt, link}) => {
    const [ active, setActive ] = useState(false)
  return (
      <a href={link} target="_blank" className={`${active ? 'bg-white': 'bg-transparent'} button-icon hover:bg-white`}
      onClick={() => setActive(!active)}
      >
            <img src={img} alt={alt} />
      </a>
  )
}

export default ButtonIcon
