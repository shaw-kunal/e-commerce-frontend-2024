import classNames from 'classnames'
import { ReactNode } from 'react'


interface boxProps {
    title?:string|null,
   children?:ReactNode,
   classname?:string
}

const Box = ({ title=null, children,classname}:boxProps) => {
  return (
    <div className={classNames('box-container',classname)}>
      {
        title && <h2>{title}</h2>
      }
      {children}
    </div>
  )
}

export default Box
