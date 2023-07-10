import { useState, useEffect } from 'react'
import Header from './components/Header'
import Button from './components/Button'
import { moneyFormat, calculateTotal } from './helpers'

function App() {
    const [amount, setAmount] = useState(25000);
    const [months, setMonths] = useState(6);
    const [total, setTotal] = useState(0);
    const [payment, setPayment] = useState(0);

    useEffect(() => {
        const resultTotal = calculateTotal(amount, months);
        setTotal(resultTotal);
    }, [amount, months]);

    useEffect(() => {
        setPayment(total / months);
    }, [total]);

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
    <><div>
          <h1 className='mt-20 text-6xl text-center text-black'>Préstamos rápidos</h1>
      </div>
        <div className="max-w-2xl p-10 mx-auto my-20 bg-white rounded-lg shadow-lg shadow-slate-50">
            <Header />
            <div className='flex justify-between my-6'>
                <Button
                    operator='-'
                    fn={handleClickDecrement} />
                <Button
                    operator='+'
                    fn={handleClickIncrement} />
            </div>
            <input
                type="range"
                className="w-full h-6 bg-gray-200 accent-purple-500 hover:accent-purple-600"
                onChange={handleChange}
                min={MIN}
                max={MAX}
                step={STEP}
                value={amount} />
            <p className='my-10 text-5xl font-extrabold text-center text-fuchsia-700'>
                {moneyFormat(amount)}
            </p>
            <h2 className='text-2xl font-extrabold text-center text-gray-500'>
                <span className='text-fuchsia-600'>Plazo</span> a pagar
            </h2>
            <select
                className='w-full p-2 mt-5 text-xl font-bold text-center text-gray-500 border rounded-lg border-slate-200 bg-slate-100'
                value={months}
                onChange={e => setMonths(+e.target.value)}
            >
                <option value="6">6 meses</option>
                <option value="12">12 meses</option>
                <option value="24">24 meses</option>
            </select>

            <div className='p-5 my-5 space-y-3 bg-slate-100 rounded-xl'>
                <h2 className='text-2xl font-extrabold text-center text-gray-500'>
                    Resumen <span className='text-fuchsia-600'>de pagos</span>
                </h2>
                <p className='text-xl font-bold text-center text-gray-500'>{months} Meses</p>
                <p className='text-xl font-bold text-center text-gray-500'>{moneyFormat(total)} Total a pagar</p>
                <p className='text-xl font-bold text-center text-gray-500'>{moneyFormat(payment)} Mensuales</p>
            </div>
        </div></>
  )
}

export default App
