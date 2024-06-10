import Box from "../../../components/Box"
import { CustomPieChart, DoughuntChart } from "../../../components/admin/Chart"
import "../../../styles/_pieChart.scss"
import { categories } from "../../../assets/data.json"
const PieChart = () => {
  return (
    <div className="PieChartContainer">
      

      <Box classname="container" title={"Order Fullfillment Ratio"}>
        <CustomPieChart
          labels={["processing", 'shipped', "deliverd"]}
          backgroundColor={["#32a852", '#51db3b', '#9ee62c']}
          data={[12, 23, 21]}
          offset={[0, 0, 30]}
        />
      </Box>
      <Box classname="container" title={"Product Categories Ratio"}>
        <DoughuntChart
          labels={categories.map(i => i.heading)}
          data={categories.map(i => i.value)}
          backgroundColor={categories.map(i => `hsl(${i.value * 3},${i.value}%,50%)`)}
          offset={categories.map(i => (i.value % 8) * 4)}
        />
      </Box>
      <Box classname="container" title={"Stock Availiablity"}>
        <DoughuntChart
          labels={["In stock","Out of Stock"]}
          data={[20,14]}
          backgroundColor={[20,14].map(i => `hsl(${i * 14},${i*20}%,50%)`)}
          offset={[20,14].map(i => (i % 8) * 4)}
          cutout={"70%"}
        />
      </Box>
      <Box classname="container" title={"Revenue Distribution"}>
        <DoughuntChart
          labels={[
            'Marketing Cost',
            'Discount',
            'Burnt',
            'production Cost',
            'Net margin'
          ]}
          data={[20,14,52,41,12]}
          backgroundColor={[20,14,52,41,12].map(i => `hsl(${i * 14},${i*20}%,50%)`)}
          offset={[20,14,52,41,12].map(i => (i % 8) * 4)}
          cutout={"70%"}
          legends={false}
        />
      </Box>


      <Box classname="container" title={"Users Age Group"}>
        <CustomPieChart
          labels={["TeenAger(below 20)","Adult(20-40)", 'older(Above 40)']}
          backgroundColor={[12, 23, 21].map(i => `hsl(${i * 14},${i*20}%,50%)`)}
          data={[12, 23, 21]}
          offset={[0, 0, 30]}
        />
      </Box>


      <Box classname="container" >
        <DoughuntChart
          labels={["Admin","Customer"]}
          data={[40,250]}
          backgroundColor={[40,250].map(i => `hsl(${i * 21},${i*2}%,50%)`)}
          offset={[40,250].map(i => (i % 18) * 4)}
         
        />
      </Box>
    </div>
  )
}

export default PieChart
