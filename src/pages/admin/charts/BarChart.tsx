import React from 'react'
import CardLayout from '../../../layout/CardLayout'
import Box from '../../../components/Box'
import "../../../styles/__barChart.scss"
import Chart from '../../../components/admin/Chart'


const months = [
  "January", "February", "March", "April", "May", "June",
  "July", "August", "September", "October", "November", "December"
];

const BarChart = () => {
  return (
    <div className='barChartContainer'>
    <CardLayout classname='cardContainer'>
      <Box title={"Bar Chart"}>
      <Chart 
          data_1={[122,433,200,233,122,380,200]}
          data_2={[300,222,234,443,500,230,232]}
          title_1={"Products"}
          title_2={"Users"}
          color_1="lightGreen"
          color_2="#cd9cf2"
          />
      </Box>
     <p>TOP  SELLING  PRODUCTS & TOP CUSTOMERS </p>
    </CardLayout>
     
    <CardLayout classname='cardContainer'>
      <Chart 
          data_1={[ 250, 315, 233, 378, 299, 285, 350, 266, 395, 220, 307, 340]}
          data_2={[]}
          title_1={"Products"}
          title_2={""}
          color_1="#f093fb"
          color_2="trasparent"
          horizontal={true}
          labels={months}
          />
     <p>Order thorughout the year </p>
    </CardLayout>
     

    </div>
  )
}

export default BarChart
