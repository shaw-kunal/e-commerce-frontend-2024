import { CustomLineChart } from '../../../components/admin/Chart'
import Box from '../../../components/Box'
import "../../../styles/_lineChart.scss"

const LineChart = () => {
  return (
    <div className='lineChartContainer'>
      <Box  classname="elementContainer">
        <CustomLineChart 
         label='Users'
         data={[12,23,43,232,303,213,433,315,232,303,314,205]}
         borderColor= 'rgb(255, 99, 132)'
         backgroundColor= 'rgba(255, 99, 132, 0.5)'/>
      </Box>
      
    </div>
  )
}

export default LineChart
