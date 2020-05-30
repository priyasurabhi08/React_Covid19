import React,{useState,useEffect} from 'react';
import {fetchDailyData} from '../../api';
import {Bar,HorizontalBar, Pie}  from 'react-chartjs-2';
import styles from './Chart.module.css';
import 'chartjs-plugin-datalabels';

import * as  zoom from 'chartjs-plugin-zoom';
const Chart =({data:{confirmed,deaths,recovered},country})=>{

    const [dailyData, setDailyData]= useState([]);

    useEffect(()=>{
        const fetchAPI= async ()=>{
            setDailyData(await fetchDailyData());
            
        }
        fetchAPI();

    },[]);

    const lineChart=(
        dailyData.length ?(
        
            <Bar 
            data={{
                labels:dailyData.slice(Math.max(dailyData.length - 30, 0)).map(({date})=>date),
                // dataset is an array of objects 
                datasets:[{
                    data:dailyData.slice(Math.max(dailyData.length - 30, 0)).map(({confirmed})=>confirmed),
                    label:'Infected',
                    borderColor:'blue',
                    fill:true,
                    backgroundColor:'rgba(0, 0,255,1)'

                },{
                    data:dailyData.slice(Math.max(dailyData.length - 30, 0)).map(({deaths})=>deaths),
                    label:'Deaths',
                    borderColor:'red',
                    backgroundColor:'red'
                }]
            }}
            options={{
                plugins: {
                    datalabels: {
                       display: false
                    }
                 },
                 zoom:{
                    enabled:true,
                    drag:false,
                    mode:'xy',
                    rangeMin:{
                        x:0,
                        y:0
                    },
                    rangeMax:{
                        y:6000000
                       
                    }

                    
                },pan:{
                    enabled:true,
                    mode:'xy',
                    rangeMin:{
                        x:0,
                        y:0
                    },
                   
                }
            }}
            />
        ):null
    );         
    const barChart=(
        confirmed?(
            <Bar
            data={{
                labels:['Infected','Recovered','Deaths'],
                datasets:[{
                    label:'People',
                    backgroundColor:['rgba(0, 0, 255, 0.5)',
                        'rgba(0, 255, 0, 0.5)',
                        'rgba(255, 0, 0, 0.5)'],
                        data:[confirmed.value,recovered.value,deaths.value]
                }],  
            }}
            options={{
                legend:{display:false},
                title:{display:true,text:`Current status in ${country}`},
                plugins: {
                    datalabels: {
                       display: true,
                       color: 'black'
                    }
                 },
                 zoom:{
                    enabled:true,
                    drag:false,
                    mode:'xy',
                    rangeMin:{
                        x:0,
                        y:0
                    },
                    rangeMax:{
                        y:600000
                       
                    }
                    ,pan:{
                        enabled:true,
                        mode:'xy',
                        rangeMin:{
                            x:0,
                            y:0
                        },
                        rangeMax:{
                            y:600000
                           
                        }
                       
                    }

                    
                }
            }}
            />
            
        ):null
    );
    const pie=(
        confirmed?(
            <Pie
            data={{
                labels:['Infected','Recovered','Deaths'],
                datasets:[{
                    label:'People',
                    
                    backgroundColor:['rgba(0, 0, 255, 0.5)',
                        'rgba(0, 255, 0, 0.5)',
                        'rgba(255, 0, 0, 0.5)'],
                        data:[confirmed.value,recovered.value,deaths.value]
                }],  
            }}
            options={{
                legend:{display:false},
                title:{display:true,text:`Current status in ${country}`},
                plugins: {
                    datalabels: {
                       display: true,
                       color: 'black'
                    }
                 }
            }}
            />
            
        ):null
    );

    return(
        <div className={styles.container} >
            {country ? barChart  :lineChart}
            {country ? pie  :null}
        </div>
    )
}

export default Chart;
