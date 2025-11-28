import type { ButtonHTMLAttributes } from "react";
import { LuLoaderCircle } from "react-icons/lu";
import style from './index.module.css'


interface IButtonProps extends  ButtonHTMLAttributes<HTMLButtonElement> {
    isLoading?: boolean
}
export default function Button({isLoading,...props}:IButtonProps){
    return (
        <button disabled={isLoading} className={isLoading ? style.buttonLoading : style.button} {...props}>
            { isLoading ? <><LuLoaderCircle size={15} className={style.buttonSpinner}/> Carregando...</> : props.children}
        </button>
    )
}