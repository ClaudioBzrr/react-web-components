import type { ButtonHTMLAttributes } from "react";
import style from './index.module.css'

export default function Button({...props}:ButtonHTMLAttributes<HTMLButtonElement>){
    return (
        <button className={style.button} {...props}>
            {props.children}
        </button>
    )
}