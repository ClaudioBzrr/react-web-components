import { InputHTMLAttributes, useState } from "react";
import { LuEye, LuEyeClosed, LuLock } from 'react-icons/lu'
import style from './index.module.css'

export default function ({...props}:InputHTMLAttributes<HTMLInputElement>){
    const [showPassword, setShowPassword] = useState<boolean>(false);
    return (
        <div className={style.passwordDiv}>
            <LuLock className={style.passwordIcon}/>
            <input className={style.passwordInput}  {...props} type={showPassword ? 'text' : 'password'} />
            {
                showPassword ?
                <LuEye className={style.passwordIcon} onClick={() => setShowPassword(false)}/> :
                <LuEyeClosed className={style.passwordIcon} onClick={() => setShowPassword(true)}/>
            }
        </div>
    )

}