import { ReactNode } from "react"
import "../styles/_cardLayout.scss"
import classNames from "classnames"


interface props{
  children:ReactNode,
  classname?:string
}

const CardLayout = ({children,classname=''}:props) => {
  return (
    <div className={classNames('cardLayoutContainers',classname)}>
        {children}
    </div>
  )
}

export default CardLayout
