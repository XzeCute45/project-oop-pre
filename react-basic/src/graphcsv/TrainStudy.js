import React from "react";
import 'antd/dist/antd.css';
import { Table } from 'antd';
import { Bar } from 'react-chartjs-2';
import data from "./Convert-3.json";
import count3 from "./Countnumbercsv/DataCount-3.json";

// import Id1 from "./Id1";
// import Chart1 from "./Chart1";
// import Chart2 from "./Chart2";
// import Chart3 from "./Chart3";
// import Chart4 from "./Chart4";
// import "./AllTable.css";

function IdStudy() {
    return (
        <div className="idtext">
            <h3 style={{"color":"rgba(53, 152, 254, 0.8)"}}><b>{count3[8]}</b></h3>
            <br/>
            <h4>unique values</h4>
        </div>
    );
}

const data1 = {
    labels: [0,1],
    datasets: [
        {
            label: "Negative for Pneumonia",
            data: [count3[0], count3[1]],
            fill: true,
            backgroundColor: "rgba(53, 152, 254, 0.8)",
            barPercentage: 1,
            categoryPercentage: 1,
        }
    ],
};

const options = { 
    scales: { 
        y: { 
            display: false,
        },
    },
    plugins:{
        legend: {
          display: false
        }
    }
}



function Chart1() {
    return (
        <div className="container-mini">
            <Bar data={data1}
            options={options}/>
        </div>
    );
}


const data2 = {
    labels: [0, 1],
    datasets: [
        {
            label: "Typical Appearance",
            data: [count3[2], count3[3]],
            fill: true,
            barPercentage: 1,
            categoryPercentage: 1,
            backgroundColor: "rgba(53, 152, 254, 0.8)",
        }
    ]
 };


function Chart2() {
    return (
        <div className="container-mini">
            <Bar data={data2}
            options={options} />
        </div>
    );
}


const data3 = {
    labels: [0, 1],
    datasets: [
        {
            label: "Indeterminate Appearance",
            data: [count3[4], count3[5]],
            fill: true,
            barPercentage: 1,
            categoryPercentage: 1,
            backgroundColor: "rgba(53, 152, 254, 0.8)",
        }
    ]
 };



function Chart3() {
    return (
        <div className="container-mini">
            <Bar data={data3}
            options={options} />
        </div>
    );
}


const data4 = {
    labels: [0, 1],
    datasets: [
        {
            label: "Atypical Appearance",
            data: [count3[6], count3[7]],
            fill: true,
            barPercentage: 1,
            categoryPercentage: 1,
            backgroundColor: "rgba(53, 152, 254, 0.8)",
        }
    ]
 };


function Chart4() {
    return (
        <div className="container-mini">
            <Bar data={data4}
            options={options} />
        </div>
    );
}

const columns1 = [
	{
	  title: 'id',
	  dataIndex: 'id',
	  children: [
		{
		  title: IdStudy(),
		  dataIndex: 'id',
		},
	  ],
	  sorter: (a, b) => a.id.localeCompare(b.id)
	},
	{
	  title: "Negative for Pneumonia",
	  dataIndex: "Negative for Pneumonia",
	  children: [
		{
		  title: Chart1(),
		  dataIndex: "Negative for Pneumonia",
		},
	  ],
	  sorter: {
		compare: (a, b) => a[`Negative for Pneumonia`] - b[`Negative for Pneumonia`],
	  },
	},
	{
		title: "Typical Appearance",
		dataIndex: "Typical Appearance",
		children: [
			{
			  title: Chart2(),
			  dataIndex: "Typical Appearance",
			},
		  ],
		sorter: {
		  compare: (a, b) => a[`Typical Appearance`] - b[`Typical Appearance`],
		},
	  },
	  {
		title: "Indeterminate Appearance",
		dataIndex: "Indeterminate Appearance",
		children: [
			{
			  title: Chart3(),
			  dataIndex: "Indeterminate Appearance",
			},
		  ],
		sorter: {
		  compare: (a, b) => a[`Indeterminate Appearance`] - b[`Indeterminate Appearance`],
		},
	  },
	  {
		title: "Atypical Appearance",
		dataIndex: "Atypical Appearance",
		children: [
			{
			  title: Chart4(),
			  dataIndex: "Atypical Appearance",
			},
		  ],
		sorter: {
		  compare: (a, b) => a[`Atypical Appearance`] - b[`Atypical Appearance`],
		},
	  },
];



export default function TrainStudy() {
	return (
		<div className="container-chart">
			<div className="table">
				<Table 
					columns={columns1}
					dataSource={data}
					sticky={true}
					tableLayout="fixed"
					// onChange={(sorter) => {
					// 	console.log('params', sorter);
					// }}
				/>
			</div>
		</div>
	);
}   
// งงชิบหายทำไมมันแก้ไม่ได้ เพื่อนกูบอกว่ามันเอาไฟล์ json มาต่อท้ายแล้วก็ขึ้น... ที่ให้เลือก 3 ปุ่ม