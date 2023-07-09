import { useState } from 'react'
import Header from './components/Header'

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
    <div className="my-20 max-w-2xl mx-auto bg-white rounded-lg shadow-lg shadow-slate-50 p-10"> 
	  	<Header /> 

        <div className='flex justify-between my-6'>
            <button
                type='button'
                className='bg-purple-500 hover:bg-purple-600 text-white font-bold py-2 px-4 rounded-full'
                onClick={ handleClickDecrement}
            >-</button>

            <button
                type='button'
                className='bg-purple-500 hover:bg-purple-600 text-white font-bold py-2 px-4 rounded-full'
                onClick={ handleClickIncrement}
            >+</button>
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

        <p className='text-center my-10 text-5xl font-extrabold text-fuchsia-700'> $ {amount}</p>
    </div>
  )
}

export default App
