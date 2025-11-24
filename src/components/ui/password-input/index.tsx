import { InputHTMLAttributes } from "react";
import { LuEye } from 'react-icons/lu'
import style from './index.module.css'

export function PasswordInput({...props}:InputHTMLAttributes<HTMLInputElement>){
    return (
        <div className={style.passwordDiv}>
            <input className={style.passwordInput}  {...props} type="password" />
            <LuEye className={style.passwordIcon}/>
        </div>
    )

}