
import './App.css';
import { Routes,Route } from 'react-router-dom';
import { useState } from 'react';
import Navbar from './components/Navbar';
import CountriesList from './components/CountriesList';
import CountryDetails from './components/CountryDetails';
import paises from './countries.json'
import axios from 'axios';
import { useEffect } from 'react';



function App() {

  const[territorios, setTerritorios]=useState(paises)
  useEffect(()=>{
    axios.get('https://ih-countries-api.herokuapp.com/countries')
    .then((response)=>{
      setTerritorios(response.data)
    })
    .catch(err=>console.log('Lo siento hay un error',err))
  },[])

  
    

  return (
    <div>
       <Navbar />
       <Routes>
         <Route exact path='/:alpha3Code' element={<CountryDetails/>}/>
       </Routes>
       <CountriesList paises={territorios} />

    </div>
  );
}

export default App;
