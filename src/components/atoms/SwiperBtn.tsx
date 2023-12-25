import { IoIosArrowBack, IoIosArrowForward} from 'react-icons/io'
import { forwardRef } from "react"

interface ISwiperBtn {
    type: "left" | "right"
    disabled?: boolean
    className:string
}

export const SwiperBtn = forwardRef<HTMLButtonElement, ISwiperBtn>(
    ({ type, disabled, className }, ref) => {
        return (
            <button
                ref={ref}
                className={
                    ` md:flex disabled:bg-transparent transition-all flex items-center justify-center ${className}`
                }>
                <div>
                    {type === "left" && <IoIosArrowBack size={20}/>}
                    {type === "right" && <IoIosArrowForward size={20}/>}
                </div>
            </button>
        )
    }
)

export default SwiperBtn
