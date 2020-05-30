import React, { useState, useEffect } from 'react';
import { Select, FormControl,InputLabel,MenuItem, NativeSelect } from '@material-ui/core';
import styles from './CountryPicker.module.css';
import {countries} from '../../api';
const CountryPicker = ({handleCountryChange}) => {

    const [fetchedCountries, setFetchedCountries]= useState([]);
    useEffect(()=>{
        const fetchAPI= async()=>{
            setFetchedCountries(await countries());
        }
        fetchAPI();
    },[setFetchedCountries])


    return (
        <FormControl className={styles.formControl} > 

            <InputLabel  >Countries</InputLabel>
            <Select defaultValue=''  onChange={(e)=>handleCountryChange(e.target.value)} >
                <MenuItem value=''>Global</MenuItem>
                {fetchedCountries.map((country,i)=>
                    <MenuItem key={i}
                       value={country} >
                           {country}
                    </MenuItem>
                )}
            </Select>
        </FormControl>
    )
}

export default CountryPicker;