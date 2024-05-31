import React from 'react'
import { IconType } from 'react-icons/lib'
import "./../../src/styles/_button.scss"
import classNames from 'classnames'
interface buttonProps {
    text: string,
    type?: "button" | "submit" | "reset",
    Icon?: IconType | undefined,
    bgColor?: string | undefined,
    textColor?: string,
    width?: string,
    position?: "left" | "right" | "center",
    classname?:string
}

const Button = ({
    text,
    Icon,
    type = "button",
    width = undefined,
    bgColor = undefined,
    textColor = undefined,
    position = "center",
    classname=''


}: buttonProps) => {

    const style: React.CSSProperties = {
        ...(bgColor && { backgroundColor: bgColor }),
        ...(textColor && { color: bgColor }),
        ...(width && { width }),
        ...(position === "center" ? { margin:"auto"} : { float: position })
    }


    return (
        
            <div className='btnContainer'>
                <button
                className={classNames('customButton',classname)}
                type={type}
                style={style}>
                {text}
                {Icon && <Icon />} 
            </button>
            </div>
    )
}

export default Button
