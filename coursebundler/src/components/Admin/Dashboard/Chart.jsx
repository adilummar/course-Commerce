import React from 'react';
import {
  Chart as ChartJs,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  ArcElement,
  Legend,
} from 'chart.js';
import {Line,Doughnut} from 'react-chartjs-2'
import { background, border, color } from '@chakra-ui/react';

ChartJs.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  ArcElement,
  Legend)


export const LineChart = () => {
  const labels=getLastYearMonth()
  const options={
    response:true,
    plugins:{
      legend:{
        position:"bottom"
      },
      title:{
        display:true,
        text:'yearly views'
      }
    }
  }
  const data={
    labels,
    datasets:[
      {
        label:"views",
        data:[1,8,3,5,15,30,40,80,10,100,150],
        borderColor:"rgba(107,70,193,0.5)",
        backgroundColor:"#6b46c1"
      }
    ]
};
  return <Line options={options} data={data} />;
};

export const DoughnutChart = () =>{

  const data={
    labels:['subscribed','Not Subscribed'],
    datasets:[
      {
        label:"views",
        data:[3,20],
        borderColor:["rgb(62,12,171)","rgb(214,43,129)"],
        backgroundColor:["rgba(62,12,171,0.3)","rgba(214,43,129,0.3)"],
        borderWidth:1
      }
    ]
};
return <Doughnut data={data}/>
}

function getLastYearMonth(){
  const labels=[]
  const months= [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December"
  ]
  let currentMonth = new Date().getMonth()
  // for (let i = currentMonth; i < months.length; i--) {
  //   const element = months[i];
  //   labels.unshift(element)
  //   if(i === 0 ) break;
  // }
  for (let i = 0; i < months.length; i++) {
    if(currentMonth === 0){
      currentMonth = 11
    }else{
      currentMonth--
    }
    const element = months[currentMonth]
    labels.unshift(element)
  }
  return labels
}




