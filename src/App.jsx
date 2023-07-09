import Header from './components/Header'

function App() {

  return (
    <div className="my-20 max-w-2xl mx-auto bg-white rounded-lg shadow-lg shadow-slate-400 p-10"> 
	  	<Header /> 

        <input 
            type="range"
            className="w-full h-6 bg-gray-200 accent-pink-500 hover:accent-pink-600" 
        /> 
    </div>
  )
}

export default App
