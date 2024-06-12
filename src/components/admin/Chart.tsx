import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
  ChartData,
  ChartOptions,
  ArcElement,
  LineElement,
  PointElement,
  Filler,
} from "chart.js";
import { Bar, Doughnut, Line, Pie } from "react-chartjs-2";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
  ArcElement,
  LineElement,
  PointElement,
  Filler
);

const months = ["January", "February", "March", "April", "May", "June", "July","Aug","sep","oct",'Nov',"Dec"];

interface chartProps {
  data_1: number[];
  data_2: number[];
  title_1: string;
  title_2: string;
  color_1?: string;
  color_2?: string;
  horizontal?: boolean;
  labels?: string[];
}
const Chart = ({
  data_1,
  data_2,
  title_1,
  title_2,
  color_1 = "pink",
  color_2 = "purple",
  horizontal = false,
  labels = months,
}: chartProps) => {
  const options: ChartOptions<"bar"> = {
    responsive: true,
    indexAxis: horizontal ? "y" : "x",

    plugins: {
      legend: {
        // display:true,
        position: "top" as const,
      },
      title: {
        display: true,
        text: "Chart.js Bar Chart",
      },
    },
  };

  const data: ChartData<"bar", number[], string> = {
    labels,
    datasets: [
      {
        label: title_1,
        data: data_1,
        backgroundColor: color_1,
        barThickness: "flex",
        barPercentage: 1,
        categoryPercentage: 0.4,
      },
      {
        label: title_2,
        data: data_2,
        backgroundColor: color_2,
        barThickness: "flex",
        barPercentage: 1,
        categoryPercentage: 0.4,
      },
    ],
  };

  return <Bar width={horizontal ?"150%":""} options={options} data={data} />;
};

export default Chart;

interface DoughuntChartProps {
  labels: string[];
  data: number[];
  backgroundColor: string[];
  cutout?: number | string;
  legends?: boolean;
  offset?: number[];
}

export const DoughuntChart = ({
  labels,
  data = [],
  backgroundColor,
  cutout,
  legends = true,
  offset,
}: DoughuntChartProps) => {
  const doughuntData: ChartData<"doughnut", number[], string> = {
    labels,
    datasets: [
      {
        data,
        backgroundColor,
        borderWidth: 0,
        offset,
        borderRadius:3,
        hoverBorderWidth:1,
        borderColor:"#03d7fc",
      },
    ],
  };
  const doughuntOptions: ChartOptions<"doughnut"> = {
    responsive: true,
    plugins: {
      legend: {
        display: legends,
        position: "bottom",
        labels: {
          padding:40,
        },
      },
    },
    cutout,
  };

  return <Doughnut
   data={doughuntData} 
   options={doughuntOptions} />;
};



interface PieChartProps {
  labels: string[];
  data: number[];
  backgroundColor: string[];  offset?: number[];
}
export const CustomPieChart = ({
  labels,
  data,
  backgroundColor,
  offset,
}:PieChartProps)=>{

  const PieData:ChartData<"pie",number[],string>={
    labels,
    datasets:[
      {
        data,
        backgroundColor,
        offset,
        borderWidth:0
      }
    ]
  };
  const PieOptions:ChartOptions<'pie'>={
    responsive:true,
    plugins:{
      legend:{
        display:false
      }
    }
  }

  return <Pie data={PieData} options={PieOptions} />;
}


interface LineChartProps{
  label: string,
  data:number[],
  backgroundColor:string,
  borderColor:string,
  labels?:string[],
  title?:string
}

export const CustomLineChart =({label,data,backgroundColor,borderColor,labels=months,title="Line Chart"}:LineChartProps)=>{
  

  const lineData:ChartData<'line',number[],string>={
    labels,
    datasets:[{
      label,
      data,
      borderColor,
      backgroundColor,
      fill:true,
      borderWidth:1,
    }],

  }

  const LineOptions:ChartOptions<'line'>={
    responsive:true,

    plugins:{
      legend:{
        position:'top' as const,
      },
      title:{
        display:true,
        text:title,

        color:borderColor,
        font:{
          size:30,
          
        }
      }
    }
  }

  return  <Line   options={LineOptions} data={lineData}/>
}