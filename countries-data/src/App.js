import { useState } from 'react'

function App() {

  const [ find, setFind] = useState('')
  const [ countries, setCountries] = useState([{name: {common: 'No given data'}, capital: 'none'}])

  const callCountriesAPI = () => {
    fetch('https://restcountries.com/v3.1/all')
      .then(response => response.json())
      .then(data => setCountries(data))
      console.log(countries)
  }

  const handleFindChange = (event) => {
    setFind(event.target.value)
    callCountriesAPI()
  }


  const countriesToBoolean = countries.map(country => (country.name.common.includes(find)))
  const countriesInTrue = countriesToBoolean.filter(country => country.valueOf() === true)

  return (
    <>
      <div>find countries: <input type='text' onChange={handleFindChange} value={find}/></div>
      <div> {find !== '' 
              ? countriesInTrue.length < 10 
                ? countriesInTrue.length !== 0
                  ? countriesInTrue.length === 1
                    ?  countries.map(country => (country.name.common.includes(find) 
                      ? <div key={country.name.common}>
                          <h1>{country.name.common}</h1>
                          <strong>Capital: </strong>{country.capital}
                          <br />
                          <strong>Population: </strong>{country.population}
                          <h2>Languages</h2>
                          <ul>
                            {Object.values(country.languages).map(language => <li key={language}>{language}</li>)}
                          </ul>
                          <img src={country.flags.png} alt='Country flag'/>
                        </div> : ''))   
                  : countries.map(country => (country.name.common.includes(find) 
                    ? <p key={country.name.common}>{country.name.common} </p> : ''))
                  : 'No records found' 
                : 'Too many matches, please specify'
              : 'No given data'
            }
      </div>
    </>
  );
}

export default App;

