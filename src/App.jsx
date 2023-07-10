import { useState } from 'react'
import Header from './components/Header'
import Button from './components/Button'
import { moneyFormat } from './helpers'

function App() {
    const [amount, setAmount] = useState(25000);

    const MIN = 0;
    const MAX = 50000;
    const STEP = 100;

    function handleChange(e) {
        setAmount(+e.target.value)
    }

    function handleClickDecrement() {
        const newValue = amount - STEP;
        if (newValue < MIN) return;
        setAmount(newValue);
    }

    function handleClickIncrement() {
        const newValue = amount + STEP;
        if (newValue > MAX) return;
        setAmount(newValue);
    }

  return (
    <div className="max-w-2xl p-10 mx-auto my-20 bg-white rounded-lg shadow-lg shadow-slate-50"> 
	  	<Header /> 

        <div className='flex justify-between my-6'>
            <Button
                operator='-' 
                fn={ handleClickDecrement }
            />
            <Button
                operator='+' 
                fn={ handleClickIncrement }
            />
        </div>

        <input 
            type="range"
            className="w-full h-6 bg-gray-200 accent-purple-500 hover:accent-purple-600"
            onChange={ handleChange } 
            min={ MIN }
            max={ MAX }
            step={ STEP }
            value={ amount }
        /> 

        <p className='my-10 text-5xl font-extrabold text-center text-fuchsia-700'> 
           {moneyFormat(amount)}
        </p>

        <h2 className='text-2xl font-extrabold text-center text-gray-500'>
            <span className='text-fuchsia-600'>Plazo</span> a pagar
        </h2>

        <select 
            className='w-full p-2 mt-5 text-xl font-bold text-center text-gray-500 bg-white border border-gray-300 rounded-lg'
        >
            <option value="">6 meses</option>
            <option value="">12 meses</option>
            <option value="">24 meses</option>
        </select>
    </div>
  )
}

export default App
