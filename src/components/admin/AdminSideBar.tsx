import { IconType } from "react-icons"
import { Link, Location, useLocation } from "react-router-dom"
import { MdDashboard } from "react-icons/md";
import { FaShoppingBag,FaChartBar,FaChartPie,FaChartLine, FaStopwatch, FaGamepad } from "react-icons/fa";
import { FaUserAlt } from "react-icons/fa";
import { GrTransaction } from "react-icons/gr";
import "../../styles/adminSideBar.scss"
import { RiCoupon3Fill } from "react-icons/ri";
import { Tooltip  } from "react-tooltip";







const sidebarLink = [
    {
        url:"/admin/dashboard",
        Icon:MdDashboard,
        text:"Dashboard"
    },
    {
        url:"/admin/product",
        Icon:FaShoppingBag,
        text:"Product"
    },
    {
        url:"/admin/customer",
        Icon:FaUserAlt,
        text:"Customer"
    },
    {
        url:"/admin/transaction",
        Icon:GrTransaction,
        text:"Transaction"
    },
]


const adminChartLink = [
    {
        url:"/admin/chart/bar",
        Icon:FaChartBar,
        text:"Chart"
    },
    
    {
        url:"/admin/chart/pie",
        Icon:FaChartPie,
        text:"Pie"
    },
    
    {
        url:"/admin/chart/line",
        Icon:FaChartLine,
        text:"Line"
    },
    
]

const adminApps = [
    {
        url:"/admin/app/stopwatch",
        Icon:FaStopwatch,
        text:"Stop watch"
    },
    
    {
        url:"/admin/app/coupon",
        Icon:RiCoupon3Fill,
        text:"Coupon"
    },
    
    {
        url:"/admin/app/toss",
        Icon:FaGamepad,
        text:"Toss"
    },
    
]



 
type linkProps = {
    url:string,
    Icon:IconType,
    location:Location,
    text?:string
}

const LI = ({url,Icon,location,text}:linkProps)=>(
<li className={location.pathname === url ? "activeLink" : ""}>
         <Link to={url}>
              <span> <Icon data-tooltip-id={text}  fontSize={22}/></span> <span className="sidebar-link-text">{text}</span>
               <Tooltip   id={text} content={text} className="react-tooltip"/>
         </Link>
    </li>
)


const AdminSideBar = () => {
    const location = useLocation();
    console.log(location.pathname)
  return (
    <aside className="sideBarContainer">
        <h2 className=" sidebarLogo whisper-regular">Logo</h2>
        <div className="sidebarWrapper">
            <p className="sidbar-heading">DASHBOARD</p>
            <ul>
               {
                sidebarLink.map((item)=>(
                    <LI
                    key={item.text}
                    url={item.url}
                    Icon={item.Icon}
                    location={location}
                    text={item.text}
                    />
                ))
                
               }

            </ul>
        </div>


        <div className="sidebarWrapper">
            <p className="sidbar-heading">CHARTS</p>
            <ul>
               {
                adminChartLink.map((item)=>(
                    <LI
                    key={item.text}
                    url={item.url}
                    Icon={item.Icon}
                    location={location}
                    text={item.text}
                    />
                ))
                
               }

            </ul>
        </div>

        <div className="sidebarWrapper">
            <p className="sidbar-heading"> APPS</p>
            <ul>
               {
                adminApps.map((item)=>(
                    <LI
                    key={item.text}
                    url={item.url}
                    Icon={item.Icon}
                    location={location}
                    text={item.text}
                    />
                ))
                
               }

            </ul>
        </div>
    </aside>
  )
}

export default AdminSideBar
