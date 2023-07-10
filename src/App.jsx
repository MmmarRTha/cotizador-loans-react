import { useState } from 'react'
import Header from './components/Header'
import Button from './components/Button'

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

        <p className='my-10 text-5xl font-extrabold text-center text-fuchsia-700'> $ {amount}</p>
    </div>
  )
}

export default App
