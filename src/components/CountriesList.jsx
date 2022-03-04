import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function CountriesList(props) {
    const[countries,setCountries]=useState(props.paises)
    return (
        <div className='flex'>
            {countries.map((country)=>
                <div className='box'>
                <Link key={country.alpha3Code} exact to={`/${country.alpha3Code}`}>
                    <h2>{country.name}</h2>
                    <h4>{country.capital}</h4>
                    <img src={`https://flagpedia.net/data/flags/w580/${country.alpha2Code.toLowerCase()}.png`}
                    alt="" width="100px" height="auto" />
                </Link>
                
                </div>
            )}
        </div>
    );

}

export default CountriesList;