import { BiMaleFemale, BiSearch } from "react-icons/bi";
import  "../../styles/_dashboard.scss";
import { IoIosNotifications } from "react-icons/io";
import { PiTrendDown, PiTrendUp } from "react-icons/pi";
import Chart, { DoughuntChart } from "../../components/admin/Chart";
import data from "./../../assets/data.json"
import DashboardTable from "../../components/admin/DashboardTable";

const Dashboard = () => {
  return (
    <div className="dashBoardContainer">
     <section className="searchBarContainer">
        <div className="searchItems">
          <div className="searchIcon">
            <BiSearch />
          </div>
          <input type="text" placeholder="search for data , users and docs" />
        </div>
        <IoIosNotifications size={"1.5rem"} />
        <img
          src="https://img.freepik.com/premium-photo/bearded-man-illustration_665280-67047.jpg"
          alt=""
        />
      </section>
      {/*
      <section className="dashBoardStaticsWidget">
        <WidgetItem
          text={"revenue"}
          amount={true}
          percent={80}
          value={300}
          gradientFirstColor={"#f093fb"}
          gradientSecondColor="#f5576c"
        />
        <WidgetItem
          text={"revenue"}
          amount={true}
          percent={-30}
          value={300}
          gradientFirstColor={"#43e97b"}
          gradientSecondColor="#38f9d7"
        />
        <WidgetItem
          text={"Transaction"}
          amount={true}
          percent={-20}
          value={300}
          gradientFirstColor={"#cd9cf2"}
          gradientSecondColor="#38f9d7"
        />
        <WidgetItem text={"Customer"} amount={false} percent={20} value={300} />
  </section>*/}
       <section className="graphContainer">
        <div className="revenueChart">
          <h2>Revenue & Transaction</h2>
          
          <Chart 
          data_1={[122,433,200,233,122]}
          data_2={[300,222,234,443,500]}
          title_1={"Title_1"}
          title_2={"Title_2"}
          color_1="#43e97b"
          color_2="aqua"
          />
        
        </div>
        <div className="dashboardCategories">
          <h2>Inventory</h2>
          <CategoriesItem  name="Laptops" percent={50}  color="#ffdb70"/>
          <CategoriesItem  name="Mobile" percent={30}  color="#0cecf0"/>
          <CategoriesItem  name="Bags" percent={55}  color="#d4fc79"/>
          <CategoriesItem  name="Beauty" percent={95}  color="#0cf049"/>
        </div>
      </section>
 <section className="transactionContainer">
      <div className="genderChart">
          <h2>Gender Ratio</h2>
          <DoughuntChart
          labels={["Female","Male"]}
          data={[12,20]}
          backgroundColor={["#66fc03","#ca03fc"]}
          offset={[10]}
          cutout={90}
          />
          <p><BiMaleFemale fontSize={30}/></p>

        </div>
        <div className="transactionTable">
        <div className="transactionTable-container">
        <div className="transactionTableWrapper">
          <DashboardTable data={data.transaction}/>
          </div>
        </div>
        </div>
      </section> 

    </div>
  );
};

export default Dashboard;

interface widgetProp {
  text: string;
  amount?: boolean;
  percent: number;
  value: number;
  gradientFirstColor?: string;
  gradientSecondColor?: string;
}

const WidgetItem = ({
  text,
  amount,
  percent,
  value,
  gradientFirstColor = "#f6d365",
  gradientSecondColor = "#fda085",
}: widgetProp) => {
  return (
    <div
      className="widgetItemContainer"
      style={{
        backgroundImage: `linear-gradient(120deg, ${gradientFirstColor} 0%, ${gradientSecondColor} 100%)`,
      }}
    >
      <div className="widgetInfo">
        <span>{text}</span>
        {amount ? <h3>${value}</h3> : <h4>{value}</h4>}
        {percent > 0 ? (
          <span>
            <PiTrendUp size={"1.2rem"} color="#4ade80" />
            {percent}%
          </span>
        ) : (
          <span style={{ color: "#ec4545" }}>
            <PiTrendDown size={"1.2rem"} color="#ec4545" />
            {percent}%
          </span>
        )}
      </div>

      <div
        className="widgetCircle"
        style={{
          background: `conic-gradient( white  ${
            ((100 - Math.abs(percent)) * 360) / 100
          }deg,transparent ${((100 - Math.abs(percent)) * 360) / 100}deg)`,
        }}
      >
        <span>{Math.abs(percent)}%</span>
      </div>
    </div>
  );
};

interface categoriesItemProps {
  percent: number;
  name: string;
  color?:string;

}

const CategoriesItem = ({ percent=80, name="Laptop" }: categoriesItemProps) => {
  return <section className="categoriesItemContainer">
    <span>{name}</span>
    <div className="stockBar">
      <div style={{
        width:`${percent}%`,
        backgroundColor:`hsl(${percent *8},${percent}%,60%)`
      }}></div>
    </div>
    <span>{percent}%</span>
  </section>;
};
