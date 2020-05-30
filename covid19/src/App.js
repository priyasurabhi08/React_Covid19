import React, { Component } from 'react';
import { Cards } from './components';
import styles from './App.module.css';
import { fetchData } from './api';
import coronaImage from './images/image1.png';
import indiacoronaImage from './images/india_covid.PNG'
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import {CountryPicker } from './components'
import Graph from './components/graph';
import India from './indiaStateWise';
class App extends Component {

  state = {
    data: {},
    country: ''
    
  }
// To fetch the data inside the component
  async componentDidMount() {
    const fetchedData = await fetchData(); // awaits the data to be retured from fetchData fn
    this.setState({ data: fetchedData });
  }
  handleCountryChange= async (country)=>{
    //fetch the data
    const fetchedData= await fetchData(country);
    //set the state
    this.setState({data:fetchedData,country:country})
  }
 
 render() {
    const { data ,country} = this.state;
    return (

      <div > 

        <Tabs>
          <TabList className = {styles.tab}>
            <Tab>Global Data</Tab>
            <Tab>Graph</Tab>
            <Tab>India</Tab>
          </TabList>

          <TabPanel>
            <div className={styles.container}>
              <img src={coronaImage} alt='COVID-19' className={styles.image} />
              <Cards data={data} />
            </div>
          </TabPanel>
          <TabPanel>
            <div className={styles.container}>
              <img src={coronaImage} alt='COVID-19' className={styles.image} />
               <Graph data= {data} handleCountryChange={this.handleCountryChange} country={country} />
            </div>
          </TabPanel>
          <TabPanel  >
            <div className={styles.container} >
              <img src={indiacoronaImage} alt='COVID-19' className={styles.image} />

               <India></India>
            </div>
          </TabPanel>
        </Tabs>
      </div>
    );
  }
}
export default App;
