import React from 'react'
import Chart from '../components/Chart/Chart';
import CountrPicker from '../components/CountryPicker/CountryPicker'

const graph = (props) => {
    return (
        <React.Fragment>
            <CountrPicker handleCountryChange={props.handleCountryChange} />
            <Chart data={props.data} country={props.country} />
        </React.Fragment>
    )
}
export default graph;