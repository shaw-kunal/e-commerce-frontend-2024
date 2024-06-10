import React from 'react'
import classNames from 'classnames'
import "./css/_avatar.scss"

interface avatarProps{
    img:string,
    alt?:string,
    classname?:string
}

const Avatar = ({img,classname=''}:avatarProps) => {
    console.log(classname)
    
  return (
    <div className={classNames('imgContainer',classname)}>
      <img src={img} alt="" />
    </div>
  )
}

export default Avatar
