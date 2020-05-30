import React, { Component } from 'react';
import { fetchDataIndia } from './api';
import { Line, Bar ,Pie} from 'react-chartjs-2';
import { Select,FormControl, MenuItem } from '@material-ui/core';
import 'chartjs-plugin-datalabels';
import styles from './indiaStateWise.module.css'
import * as  zoom from 'chartjs-plugin-zoom';
class IndiaStateWise extends Component {

    state = {
        data: [],
        isBar: false
    }
    async componentDidMount() {
        const fetchedData = await fetchDataIndia(); // awaits the data to be retured from fetchDataIndia fn
        this.setState({ data: fetchedData });
    }

    handleTypeChange = (e) => {
        switch (e) {
            case 'line': this.setState({ isBar: false });
                break;
            case 'bar': this.setState({ isBar: true });
                break;
            default: this.setState({ isBar: false });
                break;
        }
    }


    render() {
        const activeChartLine = (
            // The type of chart we want to create
            <Line
                data={{
                    labels: this.state.data.slice(1).map((data) => { return data.state }),
                    // dataset is an array of objects 
                    datasets: [{
                        // The data for our dataset
                        data: this.state.data.slice(1).map((data) => { return data.active }),
            
                        label: 'Active',
                        borderColor: 'blue',
                        fill: true,
                        backgroundColor: 'rgba(0, 0,255,1)'

                    }]
                }}
                   // Configuration options go here
                options={{
                    plugins: {
                        datalabels: {
                            display: true
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
        );
        const activeChartBar = (
            <Bar
                data={{
                    labels: this.state.data.slice(1).map((data) => { return data.state }),
                    
                    // dataset is an array of objects 
                    datasets: [{
                        data: this.state.data.slice(1).map((data) => { return data.active }),
                       
                        label: 'Active',
                        borderColor: 'blue',
                        fill: true,
                        backgroundColor: 'rgba(0, 0,255,1)'

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
        );
        const confirmedChartLine = (
            <Line
                data={{
                    labels: this.state.data.slice(1).map((data) => { return data.state }),
                   
                    // dataset is an array of objects 
                    datasets: [{
                        data: this.state.data.slice(1).map((data) => { return data.confirmed }),
                      
                        label: 'Total Confirmed',
                        borderColor: 'green',
                        fill: true,
                        backgroundColor: 'green'

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
        );
        const confirmedChartBar = (
            <Bar
                data={{
                    labels: this.state.data.slice(1).map((data) => { return data.state }),
                  
                    // dataset is an array of objects 
                    datasets: [{
                        data: this.state.data.slice(1).map((data) => { return data.confirmed }),
                       
                        label: 'Total Confirmed',
                        borderColor: 'green',
                        fill: true,
                        backgroundColor: 'green'

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
        );
        const deathChartLine = (
            <Line
                data={{
                    labels: this.state.data.slice(1).map((data) => { return data.state }),
                   
                    // dataset is an array of objects 
                    datasets: [{
                        data: this.state.data.slice(1).map((data) => { return data.deaths }),
                       
                        label: 'Deaths',
                        borderColor: 'Red',
                        fill: true,
                        backgroundColor: 'red'

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
        );
        const deathChartBar = (
            <Bar
                data={{
                    labels: this.state.data.slice(1).map((data) => { return data.state }),
                    
                    // dataset is an array of objects 
                    datasets: [{
                        data: this.state.data.slice(1).map((data) => { return data.deaths }),
                        
                        label: 'Deaths',
                        borderColor: 'Red',
                        fill: true,
                        backgroundColor: 'red'

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
        );


        const recoveredChartLine = (
            <Line
                data={{
                    labels: this.state.data.slice(1).map((data) => { return data.state }),
                    
                    // dataset is an array of objects 
                    datasets: [{
                        data: this.state.data.slice(1).map((data) => { return data.recovered }),
                    
                        label: 'Recovered',
                        borderColor: 'teal',
                        fill: true,
                        backgroundColor: 'teal'

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
        );
        const recoveredChartBar = (
            <Bar
                data={{
                    labels: this.state.data.slice(1).map((data) => { return data.state }),
                    
                    // dataset is an array of objects 
                    datasets: [{
                        data: this.state.data.slice(1).map((data) => { return data.recovered }),
                    
                        label: 'Recovered',
                        borderColor: 'teal',
                        fill: true,
                        backgroundColor: 'teal'

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
        );
        return (
            // options for bar chart or line chart
            <React.Fragment>
                <FormControl className={styles.formControl} > 
                <Select defaultValue='line' onChange={(e) => this.handleTypeChange(e.target.value)} >
                    <MenuItem value='line'>Line Chart</MenuItem>
                    <MenuItem value='bar'>Bar Chart</MenuItem>
                </Select>
                </FormControl>
                <br/>
                {/*represnting all the four scenarios */}
                <div className={styles.container}>
                    {this.state.isBar ? confirmedChartBar : confirmedChartLine} 
                    {this.state.isBar ? activeChartBar : activeChartLine}
                    {this.state.isBar ? recoveredChartBar : recoveredChartLine} 
                    {this.state.isBar ? deathChartBar : deathChartLine}
                </div>
            </React.Fragment>

        )
    }
}

export default IndiaStateWise;