import React, { useState } from 'react';
import countries from '../countries.json'
import { useParams} from 'react-router-dom' 


function borderCountries(borderLetters){
    return countries.find((country)=>country.alpha3Code===borderLetters).name
}

function CountryDetails(props) {

    const[countryDetails , setCountryDetails]=useState(countries)

    const {alpha3Code}=useParams();

    const filteredCountry = countryDetails.filter((country)=>
        country.alpha3Code.includes(alpha3Code)
    )
    
    
    return (
        <div className='box-card'>
            <h2>{filteredCountry[0].name}</h2>
            <img src={`https://flagpedia.net/data/flags/w580/${filteredCountry[0].alpha2Code.toLowerCase()}.png`}
             alt="" width="100px" height="auto" />
            <p className='bold'>Capital:</p><p> {filteredCountry[0].capital}</p>
            <p className='bold'>Area: </p><p>{filteredCountry[0].area} Km</p>
            <p className='bold'>Borders: </p><p>{filteredCountry[0].borders.map(ele=><p>{borderCountries(ele)}</p>)}</p>
        </div>
    );
}

export default CountryDetails;