import { FC } from 'react'

interface IButton {
    text:string
    bg:string
}

const Button:FC<IButton> = ({text, bg}) => {
  return (
    <div className='md:w-fit w-full'>
      <button 
      className={`${bg} btn-section md:w-fit w-full`}>
        {text}
      </button>
    </div>
  )
}

export default Button;
