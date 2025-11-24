import { InputHTMLAttributes } from "react";
import style from './index.module.css'

export function PasswordInput({...props}:InputHTMLAttributes<HTMLInputElement>){
    return (
        <div>
            <input className={style.passwordInput} {...props} type="password" />
        </div>
    )

}