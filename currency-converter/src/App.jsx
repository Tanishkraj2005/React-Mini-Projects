import React, { useEffect, useState } from 'react'
import axios from 'axios';
import './App.css'
export const App = () => {

  const [exchangeRates, setExchangeRates] = useState({});
  const [amount, setAmount] = useState(1);
  const [fromCurrency, setFromCurrency] = useState('USD');
  const [toCurrency, setToCurrency] = useState('INR');
  const [convertedAmount, setConvertedAmount] = useState(null);

  // Fetch exchange rates
  useEffect(() => {
    const apiUrl = `https://v6.exchangerate-api.com/v6/36841256043efcdbb8566ad8/latest/${fromCurrency}`;

    axios.get(apiUrl)
      .then(response => {
        setExchangeRates(response.data.conversion_rates);
      })
      .catch(error => {
        console.error('Error fetching exchange rates:', error);
      });

  }, [fromCurrency]);

  // Convert amount
  useEffect(() => {
    const conversionRate = exchangeRates[toCurrency];

    if (conversionRate) {
      const converted = amount * conversionRate;
      setConvertedAmount(converted.toFixed(2));
    }
  }, [amount, fromCurrency, toCurrency, exchangeRates]);

  // Handle input change
  const handleChange = (e) => {
    const { name, value } = e.target;

    switch (name) {
      case 'amount':
        setAmount(value);
        break;

      case 'fromCurrency':
        setFromCurrency(value);
        break;

      case 'toCurrency':
        setToCurrency(value);
        break;

      default:
        break;
    }
  }

  return (
    <div className='card'>
      <h1 className='text-6xl'>Currency Converter</h1>

      <div className='currency_exchange'>

        {/* Amount */}
        <div className='input_container'>
          <label className='input_label'>Amount:</label>
          <input
            type='number'
            name='amount'
            value={amount}
            className='input_field'
            onChange={handleChange}
          />
        </div>

        {/* From Currency */}
        <div className='input_container'>
          <label className='input_label'>From:</label>
          <select
            name="fromCurrency"
            value={fromCurrency}
            onChange={handleChange}
            className='input_field'
          >
            {Object.keys(exchangeRates).map(currency => (
              <option key={currency} value={currency}>
                {currency}
              </option>
            ))}
          </select>
        </div>

        {/* To Currency */}
        <div className='input_container'>
          <label className='input_label'>To:</label>
          <select
            name="toCurrency"
            value={toCurrency}
            onChange={handleChange}
            className='input_field'
          >
            {Object.keys(exchangeRates).map(currency => (
              <option key={currency} value={currency}>
                {currency}
              </option>
            ))}
          </select>
        </div>

      </div>

      {/* Output */}
      <div className='output'>
        <h2>Converted Amount: <b>{convertedAmount}</b></h2>
      </div>

    </div>
  );
}

export default App;