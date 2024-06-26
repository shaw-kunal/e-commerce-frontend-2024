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
         backgroundColor= 'rgba(255, 99, 132, 0.5)'
         title='Active Users'
         />
      </Box>
      
      <Box  classname="elementContainer">
        <CustomLineChart 
         label='Users'
         data={[315,232,303,314,205,312,223,43,232,303,213,433]}
         borderColor= 'rgb(49, 156, 238)'
         backgroundColor= 'rgba(49, 156,238, 0.5)'
         title='Total Production'
         />
      </Box>
      
      <Box  classname="elementContainer">
        <CustomLineChart 
         label='Users'
         data={[12,23,43,303,314,205,232,303,213,433,315,232]}
         borderColor= 'rgb(31, 238, 211)'
         backgroundColor= 'rgba(31, 238,211, 0.5)'
         title='Discount Allocated'
         />
      </Box>
      
    </div>
  )
}

export default LineChart
