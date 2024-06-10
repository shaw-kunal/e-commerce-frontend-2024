import classNames from 'classnames'
import React, { ReactNode } from 'react'
import "./css/_keyValue.scss"

interface KeyValueProps<keyType,valueType>{
    k:keyType,
    value:valueType,
    icon?:React.ReactNode | string | number,
    classname?:string,
    seperator?:string
}

const KeyValueList=<keyType extends ReactNode,valueType extends ReactNode,>({icon,k,value,classname,seperator}:KeyValueProps<keyType,valueType>) => {
  return (
       <div className={classNames("keyValueContainer",classname)}>
        <span className='keyWrapper'>
          <span className={"iconStyle keyStyle"}> { icon && typeof icon ==='string' ? icon: icon}</span>
         {
            k &&<span className='keyStyle'>{k}</span>
        }
        </span>
         {
             seperator && <span>{seperator}</span>
         } 
         <span className='valueStyle'>{value}</span>
        
       </div>
  )
}

export default KeyValueList
